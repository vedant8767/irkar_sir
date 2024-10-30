// import { useLocation } from 'react-router-dom';
// import '../css/DetailedCard.css'
// import { useState, useEffect, useRef } from "react";
// import {getlekh} from '../firebase/firebase'

// export default function CardDetail() {

//     const iframeRef = useRef(null);
//      // Destructure the title from the location state
//     const location = useLocation();
//     const { title } = location.state || {};

//     const [pdfs, setPdfs] = useState([]);
//     const [selectedPdf, setSelectedPdf] = useState(null); // To track selected PDF for reading
//     const [isModalOpen, setIsModalOpen] = useState(false); // To handle modal visibility
//     const [lekhtitle,setTitle]=useState("")


//     useEffect(() => {
//         const fetchPDFs = async () => {
//           try {
//             if(title){
//                 setTitle(title)
//                 const pdfList = await getlekh(title)
//                 if(pdfList){
//                     setPdfs(pdfList);
//                 }
//                 else{
//                     console.log("no pdf available")
//                 }
//             }else{
//                 console.log("no lekh title")
//             }
//           } catch (error) {
//             console.error('Error fetching PDF data:', error);
//           }
//         };
    
//         fetchPDFs();
//     }, []);

//     // Open the modal to read PDF
//     const handleReadPdf = (pdf) => {
//         setSelectedPdf(pdf);
//         setIsModalOpen(true);
//     };

//     // Close the modal
//     const handleCloseModal = () => {
//         setIsModalOpen(false);
//         setSelectedPdf(null);
//     };
    
//     return (
//         <div className='DetailedCard_Container'>
//             <h1>Details for: {title}</h1>
//             <div>
//                 <ul className="allcards">
//                 {pdfs.map((pdf) => (
//                     <li key={pdf.id} className="pdf-card">
//                     <h3>{pdf.title}</h3>
//                     <p>{pdf.description}</p>
//                     <button onClick={() => handleReadPdf(pdf)}>Read Lekh</button>
//                     </li>
//                 ))}
//                 </ul>
//             </div>

//             {/* PDF Modal */}
//             {isModalOpen && selectedPdf && (
//                 <div className="pdf">
//                     <div className="modal">
//                         <div className="modal-content">
//                             <span className="close" onClick={handleCloseModal}>&times;</span>
//                             <h2>{selectedPdf.title}</h2>
                            
//                             <iframe
//                             ref={iframeRef}
//                             src={`https://docs.google.com/gview?embedded=true&url=${encodeURIComponent(selectedPdf.fileUrl)}`} // Using Google Docs viewer
//                             width="100%"
//                             height="600px"
//                             style={{ border: 'none', overflowY: 'auto', scrollBehavior: 'smooth' }}

//                             />
//                             {/* <iframe
//                             ref={iframeRef}
//                             src={`https://docs.google.com/gview?embedded=true&url=${selectedPdf.fileUrl}`} // Using Google Docs viewer
//                             width="100%"
//                             height="600px"
//                             style={{ border: 'none', overflowY: 'auto', scrollBehavior: 'smooth' }}

//                             /> */}

                           
//                             {/* <iframe
//   ref={iframeRef}
//   src={`https://docs.google.com/gview?embedded=true&url=https://firebasestorage.googleapis.com/v0/b/reactpdf-9e7a0.appspot.com/o/%E0%A4%95%E0%A5%83%E0%A4%A4%E0%A5%8D%E0%A4%B0%E0%A4%BF%E0%A4%AE%20%E0%A4%AC%E0%A5%81%E0%A4%A6%E0%A5%8D%E0%A4%A6%E0%A4%BF%E0%A4%AE%E0%A4%A4%E0%A5%8D%E0%A4%A4%E0%A4%BE%20%E0%A4%B6%E0%A4%BE%E0%A4%AA%20%E0%A4%95%E0%A5%80%20%E0%A4%B5%E0%A4%B0%E0%A4%A6%E0%A4%BE%E0%A4%A8.pdf?alt=media&token=92c20ae3-f9e2-473e-a424-413b5ac256ca`}
//   width="100%"
//   height="600px"
//   style={{ border: 'none', overflowY: 'auto', scrollBehavior: 'smooth' }}
//   onLoad={() => iframeRef.current?.contentWindow?.scrollTo(0, 0)} // Ensures top of the document loads
// /> */}


//                             {/* <iframe
//                             ref={iframeRef}
//                             src={`${selectedPdf.fileUrl}#toolbar=0`}
//                             width="100%"
//                             height="600px"
//                             style={{ border: 'none', overflowY: 'auto', scrollBehavior: 'smooth' }}
//                             /> */}
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// }
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
            <link rel="canonical" href='https://irkar-sir.vercel.app/card-detail'/>
            </Helmet>
            <h1>{displaytitle}</h1>
            <div>
                <ul className="allcards">
                    {pdfs.map((pdf) => (
                        <li key={pdf.id} className="pdf-card">
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
                            {/* {let ved = `${selectedPdf.fileUrl}?t=${new Date().getTime()}`;} */}
                            {/* <div style={{ position: 'relative', width: '100%', height: '600px' }}> */}
                            {console.log(`https://docs.google.com/gview?embedded=true&url=${encodeURIComponent(selectedPdf.fileUrl)}`)}
                            {console.log(`${encodeURIComponent(selectedPdf.fileUrl)}`)}
    <iframe
        ref={iframeRef}
        src={`https://docs.google.com/gview?embedded=true&url=${encodeURIComponent(selectedPdf.fileUrl)}`} // Using Google Docs viewer
        width="100%"
        height="600px"
        style={{ border: 'none', overflowY: 'auto', scrollBehavior: 'smooth' }}
    />
    {/* Overlay just over the pop-out button */}
    <div
        style={{
            position: 'absolute',
            top: '70px', // Adjust this value to position it correctly
            right: '20px', // Adjust this value to position it correctly
            width: '50px', // Adjust to match the width of the pop-out button
            height: '50px', // Adjust to match the height of the pop-out button
            background: 'rgba(255, 255, 255, 0)',
             // Fully transparent
            //  backgroundColor:'white',
            zIndex: 1, // Overlay on top of the iframe
        }}
    />
</div>

                        </div>
                    </div>
                // </div>
            )}
        </div>
    );
}
