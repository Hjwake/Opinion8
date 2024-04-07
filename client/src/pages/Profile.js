import React from 'react';
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import logo_blue_white_fill from "../images/Opinion8_Logo-BlueOutline-WhiteFill_NS.svg";
import daily_opinion8_image from "../images/daily-opinion8-image.png";
import "./Profile.css";

function Profile(props) {
    const user = useSelector((state) => state.auth.user);
    let location = useLocation();
    let eightCompleted = false;
    if (location.state && location.state.eightCompleted != null){
        eightCompleted = true;
    }
    return (
        <div className="profile-body">
            <img src={logo_blue_white_fill} alt="Opinion8" className="logo profile-logo"/>
            {user ? <h2>Hello, {user}.</h2> : null}
            {eightCompleted ? ( // Conditionally render content if survey is completed
                <div className="profile-section-todays-eight-completed">
                    <h4>You've done today's eight. Check back again tomorrow!</h4>
                </div>
            ) : (
                <div>
                    <Link style={{ textDecoration: 'none' }} to="/daily-eight">
                    <div className="profile-section-daily-opinion8">
                        <div className="text-left">
                            <h4>Start today’s eight to share your views on <span className="blue-text">compulsory maths lessons</span>, the upcoming <span className="blue-text">general elections</span> and <span className="blue-text">scones!</span></h4>
                            <h5>Start {'>'}</h5>
                        </div>
                        <img src={daily_opinion8_image} className="daily-opinion8-image" alt="A scone next to a calculator"/>
                    </div>
                    </Link>
                </div>
            )}
            <Link style={{ textDecoration: 'none' }} to="/results">
                    <div className="profile-section-results">
                        <h4>The results from yesterday’s eight are in!</h4>
                        <h5>View results {'>'}</h5>
                    </div>
            </Link>
        </div>
    )
}

export default Profile;
