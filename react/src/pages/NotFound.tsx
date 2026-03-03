import { Link } from "react-router";

import "../css/NotFound.css"

export default function NotFound()
{
    return(
        <div className="not-found-wrapper">
            <h1>404</h1>
            <h2>Page not found</h2>
            <Link className="not-found-btn" to="/">Return to main page</Link>
        </div>
    )
}