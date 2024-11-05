import { Helmet } from "react-helmet-async";
import LekhStructure from "../components/Lekh/LekhStructure";

export default function LekhPage (){
    return(
        <div>
          <Helmet>
          <title>Marathi lekhan </title>
          <meta name="description" content="writer,poet,marathi writer,Lekhak, kavi mahadeo irkar,Kavita , sahitya,smaj sudhark, lok sanskruti, mendhpal dhnagar jivan shaili lekhan" />
          <link rel="canonical" href='https://mahadeoirkar.com/lekh'/>
          </Helmet>
          <LekhStructure/>  
        </div>
    )
}