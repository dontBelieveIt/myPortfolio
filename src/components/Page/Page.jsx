import "./Page.scss";

import { ContactMe } from "../ContactMe/ContactMe";

export function Page() {
    return(
    <>
    <div className="page">
        <h1>This is my Portfolio</h1>
        <ContactMe />
    </div>
    </>
    )
}