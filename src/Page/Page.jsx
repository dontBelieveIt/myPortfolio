import "./Page.scss";

import { AboutMe } from "../components/AboutMe/AboutMe";
import { Passions } from "../components/Passions/Passions";

import { Competence } from "../components/Competence/Competence";
import { Langages } from "../components/Langages/Langages";
import { Experiences } from "../components/Experiences/Experiences";

import { Formations } from "../components/Formations/Formations";
import { Projets } from "../components/Projets/Projets";
import { SocialLink } from "../components/SocialLink/SocialLink";
import { ContactMe } from "../components/ContactMe/ContactMe";

import { Footer } from "../components/Footer/Footer";

export function Page() {
    return(
    <>
    <div className="page">
        <AboutMe />
        <Passions />
        <Competence />
        <Experiences />
        <Formations />
        <Langages />
        <Projets />
        <SocialLink />
        <ContactMe />
        
        <Footer />
    </div>
    </>
    )
}