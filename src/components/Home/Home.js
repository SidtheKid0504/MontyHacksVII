import {React, Component} from "react";
import ReactTyped from "react-typed";
import { Navigate } from 'react-router-dom'
import "./Home.scss";


export class Home extends Component {

    render() {
        return (
            <div class="container">
                <div class="content">
                    <div class="content__container">
                        <p class="content__container__text">
                            MontyHacks
                        </p>
                        <ul class="content__container__list">
                            <li class="content__container__list__item">VII</li>
                            <li class="content__container__list__item">7</li>
                            <li class="content__container__list__item">0111</li>
                            <li class="content__container__list__item">BEL</li>
                        </ul>
                    </div>
                    <div class="date_container">
                        <ReactTyped 
                            style={{
                                textAlign: "center",
                                color: "#FFDB58",
                                fontSize: "5cqw"
                            }} 
                            strings={["Date: May 18th, 2024"]} 
                            typeSpeed={70} 
                            cursorChar="_" 
                            showCursor={true}
                        />
                    </div>
                    <div class="button_container">
                        <div class="signup_button_container">
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdx79zpxBTc8yGdqct9Wm6rwajvbAg00Dm4DZ4W5F66MDo_Og/closedform">
                            <button class="signup_button">SIGN UP</button>
                            </a>
                            
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}