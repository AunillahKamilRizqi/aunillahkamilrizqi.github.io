import React, {Component} from "react";
import { Fade } from "react-awesome-reveal";
import { FaCircleChevronUp } from "react-icons/fa6";
import "font-awesome/css/font-awesome.min.css";
import { FaFacebook } from "react-icons/fa";

class Footer extends Component {
    render() {
        if (!this.props.data) return null;

        const networks = this.props.data.social.map(function (network) {
            return (
                <li key={network.name}>
                    <a href={network.url}>
                        <i className={network.className}></i>
                    </a>

                </li>
            );
        });

        return (
            <footer>
                <div className="row">
                    <Fade bottom>
                        <div className="twelve columns footer">
                            <ul className="social-links">{networks}</ul>
                            <ul className="copyright">
                                <li>&copy; Copyright 2022 Mutia Rahmatun Husna</li>
                                <li>
                                    Design by {" "}
                                    <a title="Styleshout" href="http://www.styleshout.com/">
                                        Styleshout
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </Fade>

                    <div id="go-top">
                        <a className="smoothscroll" title="Back to Top" href="#home">
                            <FaCircleChevronUp />
                        </a>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer