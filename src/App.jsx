import ReactGA from "react-ga4";
import $ from "jquery";
import './App.css'
import { Component } from "react";
import Header from "./Pages/Header";
import About from "./Pages/About";
// import Contact from "./Pages/Contact";
import Resume from "./Pages/Resume";
import Portfolio from "./Pages/Portfolio";
import Footer from "./Pages/Footer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: "bar",
      resumeData: {}
    };
    ReactGA.initialize('UA-110570651-1');
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }
  getResumeData() {
    $.ajax({
      url: "./resumeData.json",
      dataType: "json",
      cache: false,
      success: function(data) {
        // Debugging
        // console.log("Resume Data Fetched:", data); 
        this.setState({
          resumeData : data
        });
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
        alert(err);
      }
    })
  }
  componentDidMount() {
    this.getResumeData();
    // Periksa data nya ada atau ga
    // console.log("Resume Data:", this.state.resumeData);
  }
  
  render() {
    return (
      <div className="App">
        <Header data={this.state.resumeData.main} />
        <About data={this.state.resumeData.main} />
        <Resume data={this.state.resumeData.resume}/>
        <Portfolio data={this.state.resumeData.portfolio}/>
        {/* <Contact data={this.state.resumeData.main} /> */}
        <Footer data={this.state.resumeData.main} />
      </div>
    );
  }
}

export default App
