import "./Page.scss";

import { AboutMe } from "../components/AboutMe/AboutMe";
import { Competence } from "../components/Competence/Competence";
import { Experiences } from "../components/Experiences/Experiences";
import { Formations } from "../components/Formations/Formations";
import { ContactMe } from "../components/ContactMe/ContactMe";

import { Footer } from "../components/Footer/Footer";

export function Page() {
    return(
    <>
    <div className="page">
        <h1>This is my Portfolio</h1>
        <AboutMe />
        <Competence />
        <Experiences />
        <Formations />
        <ContactMe />
        <Footer />
    </div>
    </>
    )
}