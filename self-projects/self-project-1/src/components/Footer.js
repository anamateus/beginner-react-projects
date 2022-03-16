import React from "react"
import twitterIcon from "../images/twitter-icon.png"
import facebookIcon from "../images/facebook-icon.png"
import instagramIcon from "../images/instagram-icon.png"
import githubIcon from "../images/github-icon.png"

export default function Footer() {
    return (
        <footer>
            <a className="footer--icon" href="https://twitter.com" target="_blank">
                <img src={twitterIcon}></img>
            </a>
            <a className="footer--icon" href="https://facebook.com" target="_blank">
                <img src={facebookIcon}></img>
            </a>
            <a className="footer--icon" href="https://instagram.com" target="_blank">
                <img src={instagramIcon}></img>
            </a>
            <a className="footer--icon" href="https://github.com/anamateus" target="_blank">
                <img src={githubIcon}></img>
            </a>
        </footer>
    )
}