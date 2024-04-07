import { Link } from "react-router-dom";
import "./Home.css";
import logo_white from "../images/Opinion8_Logo-White_NS.svg";
import rocket_footer from "../images/rocket-footer.png";

function Home() {
  return (
    <div className="homepage-body">
      <div className="homepage-headline-and-buttons">
        <img src={logo_white} alt="Opinion8" className="home-logo"/>
        <h1>Voice your views, shape tomorrow.</h1>
        <p>You’re about to join a community of Opinioneighters, who have their say on current affairs to influence future policy.</p>
        <div className="home-button-container">
          <Link to="/sign-in"><button className="btn_orange_white_text">Sign in</button></Link>
          <Link to="/sign-up"><button className="btn_white_orange_text">Create an account</button></Link>
        </div>
          </div>
      <img src={rocket_footer} className="homepage-footer-rocket" alt="" />
    </div>
  )
}

export default Home;