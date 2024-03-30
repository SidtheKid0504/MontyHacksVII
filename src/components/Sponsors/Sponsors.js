import {React, Component} from "react";
import google from "./assets/google.svg";
import microsoft from "./assets/microsoft.png";
import mongodb from "./assets/mongodb.png";
import princeton from "./assets/princeton.png";
import mpd from "./assets/mpd.png";
import tigerstale from "./assets/tigerstale.png";
import princetonshop from "./assets/princetonshop.png";
import coderschool from "./assets/coderschool.png";
import codeninja from "./assets/codeninjas2.png";
import singerfedum from "./assets/singer-removebg-preview.png";
import elm from "./assets/elm.png";
import ziplyne from "./assets/ziplyne.png";
import tks from "./assets/tks.png";
import brightsight from "./assets/brightsight.png";
import meetme from "./assets/meetme.png";
import pwc from "./assets/pwc.png"
import vilynx from "./assets/vilynx.png";
import infosys from "./assets/infosys.png";
import jei from "./assets/jei.png";
import rotary from "./assets/rotary.png";
import amazon from "./assets/amazon.png";
import mhs from "./assets/montgomeryhs.png";
import meetgroup from "./assets/meetgroup.png";
import vmware from "./assets/vmware.png";
import genteels from "./assets/genteels.png";
import friendsy from "./assets/friendsy.png";
import montyfoundation from "./assets/montyfoundation.png";
import mba from "./assets/mba.png";
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
                    <img id="sponsor-image" src={amazon} alt="Amazon"/>
                    <img id="sponsor-image" src={princeton} alt="Princeton University"/>
                    <img id="sponsor-image" src={mhs} alt="Montgomery High School"/>
                    <img id="sponsor-image" src={montyfoundation} alt="Montgomery Township Education Foundation"/>
                    <img id="sponsor-image" src={mba} alt="Montgomery Business Association"/>
                    <img id="sponsor-image" src={mpd} alt="Montgomery Pediatric Dentistry"/>
                    <img id="sponsor-image" src={tigerstale} alt="Tiger's Tale"/>
                    <img id="sponsor-image" src={princetonshop} alt="Princeton North Shopping Center"/>
                    <img id="sponsor-image" src={coderschool} alt="Coder School"/>
                    <img id="sponsor-image" src={codeninja} alt="Code Ninjas"/>
                    <img id="sponsor-image" src={singerfedum} alt="Singer & Fedum LLC"/>
                    <img id="sponsor-image" src={elm} alt="The Elm Group"/>
                    <img id="sponsor-image" src={ziplyne} alt="Ziplyne"/>
                    <img id="sponsor-image" src={tks} alt="TKS"/>
                    <img id="sponsor-image" src={brightsight} alt="Brightsight Speakers"/>
                    <img id="sponsor-image" src={meetme} alt="Meet Me"/>
                    <img id="sponsor-image" src={pwc} alt="PWC"/>
                    <img id="sponsor-image" src={vilynx} alt="vilynx"/>
                    <img id="sponsor-image" src={infosys} alt="Infosys"/>
                    <img id="sponsor-image" src={jei} style={{width:"110%", height: "110%"}} alt="JEI"/>
                    <img id="sponsor-image" src={rotary} alt="Montgomery / Rocky Hill Rotary Club"/>
                    <img id="sponsor-image" src={meetgroup} alt="The Meet Group"/>
                    <img id="sponsor-image" src={vmware} alt="VMWARE"/>
                    <img id="sponsor-image" src={genteels} alt="Genteel's"/>
                    <img id="sponsor-image" src={montyfoundation} style={{visibility: "hidden"}} alt="no img"/>
                    <img id="sponsor-image" src={friendsy} alt="Friendsy"/>
                </div>
            </div>
        );
    }
}