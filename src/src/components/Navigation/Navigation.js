import {React, Component} from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import "./Navigation.scss";
import logo from "./assets/logo.png";

export class Navigation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            "isSmall": window.innerWidth < 992
        }
    }
    
    componentDidMount() {
        window.addEventListener("resize", () => {
            this.setState({
                "isSmall": window.innerWidth < 992
            });
        });

        this.resize();
    }

    componentDidUpdate() {
        this.resize();
    }

    resize() {
        if(this.state.isSmall) {
            document.getElementsByClassName("modelOne")[0].style.display = "none";
            document.getElementsByClassName("modelTwo")[0].style.display = "block";
        }
        else {
            document.getElementsByClassName("modelOne")[0].style.display = "block";
            document.getElementsByClassName("modelTwo")[0].style.display = "none";
        }
    }

    render() {
        return (
            <div>
                <div class="modelOne">
                    <Navbar variant="custom" expand="lg" className="nav-bar">
                        <Container fluid>
                            <Navbar.Brand href="/" className="nav-title">
                                <img src={logo} alt="logo" class="nav-logo"/>
                            </Navbar.Brand>
                            <CustomLink href="/about" className="header-link">About</CustomLink>
                            <CustomLink href="/schedule" className="header-link">Schedule</CustomLink>
                            <CustomLink href="/sponsor" className="header-link">Sponsors</CustomLink>
                        </Container>
                    </Navbar>
                </div>
                <div class="modelTwo">
                    <Navbar variant="custom" expand="lg" className="nav-bar">
                        <Container fluid>
                            <Navbar.Brand href="/" className="nav-title">
                                <img src={logo} alt="logo" class="nav-logo"/>
                            </Navbar.Brand>
                                <Navbar.Toggle className="nav-toggle">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="6cqw" height="4cqw" fill="rgba(255, 255, 255, 0.8)" class="bi bi-list" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                                    </svg>
                                </Navbar.Toggle>
                                <Navbar.Collapse className="model-two-navbar-collapse">
                                    <CustomLink href="/about" className="header-link">About</CustomLink>
                                    <CustomLink href="/schedule" className="header-link">Schedule</CustomLink>
                                    <CustomLink href="/sponsor" className="header-link">Sponsors</CustomLink>
                                </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>
            </div>
        );
    }
}

function CustomLink({ href, children, ...props }) {
    const path = window.location.pathname;

    return (
        <li className={path === href ? "active" : ""}>
            <a href={href} {...props}>
                {children}
            </a>
        </li>
    )
}