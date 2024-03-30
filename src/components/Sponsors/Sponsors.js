import {React, Component} from "react";
import google from "./assets/google.svg";
import microsoft from "./assets/microsoft.png";
import mongodb from "./assets/mongodb.png";
import princeton from "./assets/princeton.png";
import mpd from "./assets/mpd.png";
import tigerstale from "./assets/tigerstale.png";
import "./Sponsors.scss";

export class Sponsors extends Component {
    render() {
        return (
            <div class="container">
                <div class="sponsors-header">
                    <h1>Past Sponsors</h1>
                </div>
                <div class="sponsor-content">
                    <img id="sponsor-image" src={google} alt="Google"/>
                    <img id="sponsor-image" src={microsoft} alt="Microsoft"/>
                    <img id="sponsor-image" src={mongodb} alt="MongoDB"/>
                    <img id="sponsor-image" src={princeton} alt="Princeton University"/>
                    <img id="sponsor-image" src={mpd} alt="Montgomery Pediatric Dentistry"/>
                    <img id="sponsor-image" src={tigerstale} alt="Tiger's Tale"/>
                </div>
            </div>
        );
    }
}