import {React, useEffect, useState} from "react"
import {Link} from "react-router-dom";

const Welcome = () => {
    return (
        <div className="jumbotron">
            <h1 className="display-4">Välkommen tillbaka!</h1>
        <Link className="btn btn-primary btn-lg" to="/diary" role="button">Skriv i dagens dagbok</Link>
        <Link className="btn btn-outline-primary btn-lg ml-4" to="/history" role="button">Kolla tillbaka</Link>
        </div>
    )
}

export default Welcome

