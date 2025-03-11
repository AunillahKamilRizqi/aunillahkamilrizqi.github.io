import React from "react";
import ParticlesBg from "particles-bg";
import { Fade } from "react-awesome-reveal";
import "../assets/css/layout.css";
import { FaBook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
// import { FaArrowCircleDown } from "react-icons/fa";
import { FaCircleChevronDown } from "react-icons/fa6";


class Header extends React.Component {
    render() {
        if(!this.props.data) return null;
        const project = this.props.data.project;
        const github = this.props.data.github;
        const name = this.props.data.name;
        const description = this.props.data.description;

        return (
            <header id="home">
                <ParticlesBg type="circle" bg={true} />
                <nav id="nav-wrap">
                    <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
                        Show navigation
                    </a>
                    <a className="mobile-btn" href="#home" title="Hide navigation">
                        Hide navigation
                    </a>

                    <ul id="nav" className="nav">
                        <li className="current">
                            <a className="smoothscroll" href="#home">
                                Home
                            </a>
                        </li>
                        <li>
                            <a className="smoothscroll" href="#about">
                                About
                            </a>
                        </li>
                        <li>
                            <a className="smoothscroll" href="#resume">
                                Resume
                            </a>
                        </li>
                        <li>
                            <a className="smoothscroll" href="#portfoilo">
                                Works
                            </a>
                        </li>
                        <li>
                            <a className="smoothscroll" href="#contact">
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className="row banner">
                    <div className="banner-text">
                        <Fade botton>
                            <h1 className="responsive-headline">{name}</h1>
                        </Fade>
                        <Fade botton duration={1200}>
                            <h3>{description}</h3>
                        </Fade>
                        <Fade bottom duration={2000}>
                            <ul className="social">
                                <a href={project} className="button btn project-btn">
                                <FaBook />Project
                                </a>
                                <a href={github} className="button btn github-btn">
                                    <FaGithub />Github
                                </a>
                            </ul>
                        </Fade>
                    </div>
                </div>
                <p className="scrolldown">
                    <a className="smoothscroll" href="#about">
                        <FaCircleChevronDown />
                    </a>
                </p>
            </header>
        );
    }
}

export default Header