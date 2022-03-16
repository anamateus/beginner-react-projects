import React from "react"
import profilePic from "../images/profile-pic.jpg"
import emailIcon from "../images/email-icon.png"
import linkedinIcon from "../images/linkedin-icon.png"

export default function Info() {
    return (
        <info>
            <img src={profilePic} className="info--profile-pic"></img>
            <h1 className="info--main-title">Ana Mateus</h1>
            <h5 className="info--second-title">Junior Developer</h5>
            <a className="info--website-text" href="https://reactjs.org" target="_blank">
                anamateus.website
            </a>
            <contacts className="info--contact-buttons-section">
                <a class="button" className="info--email-button" href="mailto:ana.lucia.mateus6@gmail.com">
                    <img src={emailIcon} className="info--button-icon"></img>
                    Email
                </a>
                <a class="button" className="info--linkedin-button" href="https://linkedin.com/in/ana--mateus" target="_blank">
                    <img src={linkedinIcon} className="info--button-icon"></img>
                    LinkedIn
                </a>
            </contacts>
        </info>
    )
}