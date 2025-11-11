import '../index.css'

import { FaInstagram, FaTwitter, FaFacebookF, FaGoogle } from "react-icons/fa";

import irene from "../assets/images/staff-irene.jpg"
import brian from "../assets/images/staff-brian.jpg"
import babra from "../assets/images/staff-babra.jpg"
import george from "../assets/images/staff-george.jpg"
import linnet from "../assets/images/staff-linnet.jpg"
import joshua from "../assets/images/staff-joshua.jpg"


function Team() {
  return (
        <section className="team-section" id="team">
      <div className="title">
        <p className="title-sub">team</p>
        <h2 className="title-main">our team</h2>
      </div>
      <div className="team-members-container">
        
        <div className="team-member-card">
          <div className="team-member-image-wrapper">
            <img
              src={irene}
              alt="A head-shot of irene"
              className="team-member-image"
            />
          </div>
          <div className="team-member-information">
            <h3 className="team-member-name">Irene Mutuku</h3>
            <p className="team-member-position">CEO, Founder</p>
            <div className="team-member-socials">
              <a
                href="https://www.youtube.com/djenox"
                target="_blank"
                className="team-member-social-url"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.youtube.com/djenox"
                target="_blank"
                className="team-member-social-url"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.youtube.com/djenox"
                target="_blank"
                className="team-member-social-url"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.youtube.com/djenox"
                target="_blank"
                className="team-member-social-url"
              >
                <FaGoogle />
              </a>
            </div>
          </div>
        </div>
        
        <div className="team-member-card">
          <div className="team-member-image-wrapper">
            <img
              src={brian}
              alt="A head-shot of irene"
              className="team-member-image"
            />
          </div>
          <div className="team-member-information">
            <h3 className="team-member-name">Brian Nzioka</h3>
            <p className="team-member-position">horse groomer</p>
            <div className="team-member-socials">
              <a
                href="https://www.youtube.com/djenox"
                target="_blank"
                className="team-member-social-url"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.youtube.com/djenox"
                target="_blank"
                className="team-member-social-url"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.youtube.com/djenox"
                target="_blank"
                className="team-member-social-url"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.youtube.com/djenox"
                target="_blank"
                className="team-member-social-url"
              >
                <FaGoogle />
              </a>
            </div>
          </div>
        </div>
        
        <div className="team-member-card">
          <div className="team-member-image-wrapper">
            <img
              src={babra}
              alt="A head-shot of Babra"
              className="team-member-image"
            />
          </div>
          <div className="team-member-information">
            <h3 className="team-member-name">Babra obare</h3>
            <p className="team-member-position">IT Support</p>
            <div className="team-member-socials">
              <a
                href="https://www.youtube.com/djenox"
                target="_blank"
                className="team-member-social-url"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.youtube.com/djenox"
                target="_blank"
                className="team-member-social-url"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.youtube.com/djenox"
                target="_blank"
                className="team-member-social-url"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.youtube.com/djenox"
                target="_blank"
                className="team-member-social-url"
              >
                <FaGoogle />
              </a>
            </div>
          </div>
        </div>
        
        <div className="team-member-card">
          <div className="team-member-image-wrapper">
            <img
              src={george}
              alt="A head-shot of Fleeky"
              className="team-member-image"
            />
          </div>
          <div className="team-member-information">
            <h3 className="team-member-name">Fleeky George</h3>
            <p className="team-member-position">horse trainer</p>
            <div className="team-member-socials">
              <a
                href="https://www.youtube.com/djenox"
                target="_blank"
                className="team-member-social-url"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.youtube.com/djenox"
                target="_blank"
                className="team-member-social-url"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.youtube.com/djenox"
                target="_blank"
                className="team-member-social-url"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.youtube.com/djenox"
                target="_blank"
                className="team-member-social-url"
              >
                <FaGoogle />
              </a>
            </div>
          </div>
        </div>
        
        <div className="team-member-card">
          <div className="team-member-image-wrapper">
            <img
              src={linnet}
              alt="A head-shot of Linet"
              className="team-member-image"
            />
          </div>
          <div className="team-member-information">
            <h3 className="team-member-name">Linnet Wanjiku</h3>
            <p className="team-member-position">Human Resource</p>
            <div className="team-member-socials">
              <a
                href="https://www.youtube.com/djenox"
                target="_blank"
                className="team-member-social-url"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.youtube.com/djenox"
                target="_blank"
                className="team-member-social-url"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.youtube.com/djenox"
                target="_blank"
                className="team-member-social-url"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.youtube.com/djenox"
                target="_blank"
                className="team-member-social-url"
              >
                <FaGoogle />
              </a>
            </div>
          </div>
        </div>
        
        <div className="team-member-card">
          <div className="team-member-image-wrapper">
            <img
              src={joshua}
              alt="A head-shot of joshua"
              className="team-member-image"
            />
          </div>
          <div className="team-member-information">
            <h3 className="team-member-name">Joshua kimani</h3>
            <p className="team-member-position">horse sanctuary</p>
            <div className="team-member-socials">
              <a
                href="https://www.youtube.com/djenox"
                target="_blank"
                className="team-member-social-url"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.youtube.com/djenox"
                target="_blank"
                className="team-member-social-url"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.youtube.com/djenox"
                target="_blank"
                className="team-member-social-url"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.youtube.com/djenox"
                target="_blank"
                className="team-member-social-url"
              >
                <FaGoogle />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Team;
