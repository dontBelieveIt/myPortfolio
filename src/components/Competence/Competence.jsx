import "./Competence.scss"; 

export function Competence() {
    return(
        <div className="section" id="competence-section">
            <h2>mes compétences</h2>
            <div className="competence">
                <table id="front-end">
                    <tr>
                        <th>Front-end</th>
                    </tr>
                    <tr>
                        <td>Implémenter une interface responsive avec HTML et CSS.</td>
                    </tr>
                    <tr>
                        <td>Intégrer du contenu conformément à une maquette Figma.</td>
                    </tr>
                    <tr>
                        <td>Mettre en oeuvre des animations CSS.</td>
                    </tr>
                    <tr>
                        <td>Gérer les événements utilisateurs avec JavaScript.</td>
                    </tr>
                    <tr>
                        <td>Manipuler les événements du DOM avec JavaScript.</td>
                    </tr>
                </table>

                <table id="opti-debug">
                    <tr>
                        <th>Optimisation & Débugg</th>
                    </tr>
                    <tr>
                        <td>Optimiser les performances d'un site web.</td>
                    </tr>
                    <tr>
                        <td>Optimiser l'accessibilité et le SEO.</td>
                    </tr>
                    <tr>
                        <td>Débugger un site.</td>
                    </tr>
                    <tr>
                        <td>Rédaction d'un cahier de recette.</td>
                    </tr>
                </table>

                <table id="react">
                    <tr>
                        <th>React/Sass</th>
                    </tr>
                    <tr>
                        <td>Développer et gestion des composants React.</td>
                    </tr>
                    <tr>
                        <td>Développer une interface web avec Sass.</td>
                    </tr>
                </table>

                <table id="back-end">
                    <tr>
                        <th>Back-end</th>
                    </tr>
                    <tr>
                        <td>Implémenter un modèle logique de données conformément à la réglementation.</td>
                    </tr>
                    <tr>
                        <td>Mettre en oeuvre des opérations CRUD sécurisée.</td>
                    </tr>
                    <tr>
                        <td>Stocker les données de manière sécurisée.</td>
                    </tr>
                </table>

                <table id="gestion-planif">
                    <tr>
                        <th>Gestion et planification de projet</th>
                    </tr>
                    <tr>
                        <td>Elaboration d'un KANBAN collaboratif.</td>
                    </tr>
                    <tr>
                        <td>Présentation d'une solution techniques à partir de besoin fonctionnel.</td>
                    </tr>
                    <tr>
                        <td>Rédaction des spécifications techniques.</td>
                    </tr>
                    <tr>
                        <td>Mise en place d'un système de veille informatique.</td>
                    </tr>
                </table>
           </div>
        </div>
    )
}   