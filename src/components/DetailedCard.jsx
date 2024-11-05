import { useLocation } from 'react-router-dom';
import '../css/DetailedCard.css';
import { useState, useEffect, useRef } from "react";
import { getlekh } from '../firebase/firebase';
import {Helmet} from 'react-helmet-async'

export default function CardDetail() {
    const iframeRef = useRef(null);
    const location = useLocation();
    const { title } = location.state || {};

    const [pdfs, setPdfs] = useState([]);
    const [selectedPdf, setSelectedPdf] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [lekhtitle, setTitle] = useState("");
    const [displaytitle,setDisplaytitle] = useState(null)
    useEffect(() => {
        var navbar = document.querySelector('.navbar');
        navbar.style.position = 'relative';
    }, []);

    useEffect(() => {
        const fetchPDFs = async () => {
            try {
                if (title) {
                    setTitle(title)
                    if(title=="saihitiklekh"){
                        setDisplaytitle('साहित्य लेख');
                    }
                    if(title=="loksaithyalekh"){
                        setDisplaytitle('लोकसाहित्य व लोकसंस्कृती लेख');
                    }
                    if(title=="samajsudhrakhlekh"){
                        setDisplaytitle('समाज सुधारक लेख');
                    }
                    if(title=="newspaperlekh"){
                        setDisplaytitle('वृत्तपत्रातील लेख');
                    }
                    if(title=="researchlekh"){
                        setDisplaytitle('संशोधन लेख');
                    }
                    const pdfList = await getlekh(title);
                    if (pdfList) {
                        setPdfs(pdfList);
                    } else {
                        console.log("no pdf available");
                    }
                } else {
                    console.log("no lekh title");
                }
            } catch (error) {
                console.error('Error fetching PDF data:', error);
            }
        };

        fetchPDFs();
    }, [title]);

    const handleReadPdf = (pdf) => {
        setSelectedPdf(pdf);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedPdf(null);
    };

    return (
        <div className='DetailedCard_Container'>
            <Helmet>
            <title>Marathi Lekh</title>
            <meta name="description" content="writer,poet,marathi writer,Lekhak, kavi mahadeo irkar,Kavita , sahitya,smaj sudhark, lok sanskruti, mendhpal dhnagar jivan shaili lekhan" />
            <link rel="canonical" href='https://mahadeoirkar.com/card-detail'/>
            </Helmet>
            <h1>{displaytitle}</h1>
            <div>
                <ul className="allcards">
                    {pdfs.map((pdf) => (
                        <li key={pdf.id} className="pdf-card" data-aos="fade-up">
                            <h3>{pdf.title}</h3>
                            <p>{pdf.description}</p>
                            {pdf.fileUrl && ( 
                                <button onClick={() => handleReadPdf(pdf)}>Read Lekh</button>
                            )}
                            {pdf.lekhUrl && ( 
                                <a href={pdf.lekhUrl}>Read Lekh</a>
                            )}
                        </li>
                    ))}
                </ul>
            </div>

            {/* PDF Modal */}
            {isModalOpen && selectedPdf && (
                <div className="pdf">
                    <div className="modal">
                        <div className="modal-content">
                            <span className="close" onClick={handleCloseModal}>&times;</span>
                            <h2>{selectedPdf.title}</h2>
                            <iframe
                                ref={iframeRef}
                                src={`https://docs.google.com/gview?embedded=true&url=${encodeURIComponent(selectedPdf.fileUrl)}`} // Using Google Docs viewer
                                width="100%"
                                height="600px"
                                style={{ border: 'none', overflowY: 'auto', scrollBehavior: 'smooth' }}
                            />

                        <div
                            style={{
                                position: 'absolute',
                                top: '70px', // Adjust this value to position it correctly
                                right: '20px', // Adjust this value to position it correctly
                                width: '50px', // Adjust to match the width of the pop-out button
                                height: '50px', // Adjust to match the height of the pop-out button
                                background: 'rgba(255, 255, 255, 0)',
                                zIndex: 1, // Overlay on top of the iframe
                            }}
                            />
                        </div>

                    </div>
        </div>
        )}
    </div>
    );
}
