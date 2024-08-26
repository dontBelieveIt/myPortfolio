import "./Competence.scss"; 

import { SkillBar } from "../SkillBar/SkillBar";

export function Competence() {
    return(
        <div className="section">
            <h2>mes compétences</h2>
            <div className="competence">
                <SkillBar 
                percentage={50}
                progress={50}
                category={"Social Skills"} />

                <SkillBar 
                percentage={80}
                progress={80}
                category={"Team Work"} />

                <SkillBar 
                percentage={10}
                progress={10}
                category={"Test"} />
           </div>
        </div>
    )
}   