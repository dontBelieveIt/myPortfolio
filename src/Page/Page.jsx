import "./Page.scss";
import "./Section.scss";

import { First } from "../components/First/First";
import { AboutMe } from "../components/AboutMe/AboutMe";

import { Competence } from "../components/Competence/Competence";
import { Langages } from "../components/Langages/Langages";
// import { Experiences } from "../components/Experiences/Experiences";

import { Formations } from "../components/Formations/Formations";
import { Projets } from "../components/Projets/Projets";
import { ContactMe } from "../components/ContactMe/ContactMe";

import { Footer } from "../components/Footer/Footer";

export function Page() {
    
    return(
    <>
    <div className="page">
        <First />
        <AboutMe />

        <Langages />
        <Competence />
        {/* <Experiences /> */}
        <Formations />
        
        <Projets />
        <ContactMe />
        
        <Footer />
    </div>
    </>
    )
}