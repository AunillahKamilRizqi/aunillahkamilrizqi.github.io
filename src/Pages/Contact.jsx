import { Component } from "react";
import { Fade, Slide } from "react-awesome-reveal";

class Contact extends Component {
    render() {
        if (!this.props.data) return null;

        const message = this.props.data.contactmessage;

        return (
            <section id="contact">
                <Fade bottom duration={1000}>
                    <div className="row section-head">
                        <div className="two columns header-col">
                            <h1>
                                <span>Get In Touch.</span>
                            </h1>
                        </div>

                        <div className="ten columns">
                            <p className="lead">{message}</p>
                        </div>
                    </div>
                </Fade>

                <div className="row box">
                    <Slide left duration={1000}>
                    <div className="eight columns">
                        <form action="" method="post" id="contactForm" name="contactForm">
                            
                            <div>
                                <label htmlFor="contactName">
                                Name <span className="required">*</span>
                                </label>
                                <input
                                type="text"
                                defaultValue=""
                                size="35"
                                id="contactName"
                                name="contactName"
                                onChange={this.handleChange}
                                />
                            </div>

                            <div>
                                <label htmlFor="contactEmail">
                                Email <span className="required">*</span>
                                </label>
                                <input
                                type="text"
                                defaultValue=""
                                size="35"
                                id="contactEmail"
                                name="contactEmail"
                                onChange={this.handleChange}
                                />
                            </div>

                            <div>
                                <label htmlFor="contactSubject">Subject</label>
                                <input
                                type="text"
                                defaultValue=""
                                size="35"
                                id="contactSubject"
                                name="contactSubject"
                                onChange={this.handleChange}
                                />
                            </div>

                            <div>
                                <label className="contactMessage" htmlFor="contactMessage">
                                Message <span className="required">*</span>
                                </label>
                                <textarea
                                cols="50"
                                rows="15"
                                id="contactMessage"
                                name="contactMessage"
                                ></textarea>
                            </div>

                            <div>
                                <button className="submit">Submit</button>
                                <span id="image-loader">
                                <img alt="" src="images/loader.gif" />
                                </span>
                            </div>
                        </form>

                        <div id="message-warning"> Error boy</div>
                        <div id="message-success">
                            <i className="fa fa-check"></i>Your message was sent, thank you!
                            <br />
                        </div>
                        </div>
                    </Slide>
                </div>
            </section>
        );
    }
}

export default Contact;