import React from "react";

import logoFooter from "../design/one_piece_logo.png"

function Footer() {
    const date = new Date().getFullYear()

    return (
        <footer className="footer">
            <img src={logoFooter} alt="Logo du Footer" className="footer__logo" />
            <p className="footer__text">&copy; {date} Web site made by HUT</p>
        </footer>
    )
}

export default Footer