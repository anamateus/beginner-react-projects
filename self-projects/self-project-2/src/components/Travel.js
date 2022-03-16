import React from "react"
import locationIcon from "../images/location-icon.png"

export default function Travel(props) {
    return (
        <>
            <div className="travel">
                <img className="travel--img" src={require(`../images/${props.item.image}`)}></img>
                <section>
                    <div className="travel--location">
                        <img className="travel--location-icon" src={locationIcon}></img>
                        <p className="travel--location-name">{`${props.item.location}`.toUpperCase()}</p>
                        <a className="gray" href={props.item.googleMapsUrl} target="_blank">View on Google Maps</a>
                    </div>
                    <h1 className="travel--title">{props.item.title}</h1>
                    <p className="travel--date">{props.item.startDate} - {props.item.endDate}</p>
                    <p className="travel--description">{props.item.description}</p>
                </section>
            </div>
            <hr/>
        </>
    );
}