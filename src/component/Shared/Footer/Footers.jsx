import { Link } from "react-router-dom";
// import logo from "../../../assets/002-lightbulb.png";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const Footers = () => {
  return (
    <div>
      <footer className="footer p-10 bg-base-200 text-base-content rounded-t-xl">
        <div>
          <Link to="/" className="normal-case text-xl flex items-center gap-1">
            <span className="text-4xl text-slate-700 font-mono font-bold">
              House Hubter
            </span>
          </Link>
          <p>
            House Hunter is a platform reant home
            <br />
            Providing reliable tech since 1992
          </p>
          <div className="flex gap-4">
            <div className="p-2 rounded-full border border-black">
              <FaFacebookF />
            </div>
            <div className="p-2 rounded-full border border-black">
              <FaInstagram />
            </div>
            <div className="p-2 rounded-full border border-black">
              <FaYoutube />
            </div>
            <div className="p-2 rounded-full border border-black">
              <FaLinkedinIn />
            </div>
          </div>
        </div>
        <div>
          <span className="footer-title">RESOURCES</span>
          <a className="link link-hover">Blog</a>
          <a className="link link-hover">How To</a>
          <a className="link link-hover">Help</a>
        </div>
        <div>
          <span className="footer-title">MARKETPLACES</span>
          <a className="link link-hover">Apartments.com</a>
          <a className="link link-hover">ApartmentFinder.com</a>
          <a className="link link-hover">ApartmentHomeLiving.com</a>
          <a className="link link-hover">LoopNet.com</a>
        </div>
        <div>
          <span className="footer-title">LEGAL</span>
          <a className="link link-hover">Terms of Use</a>
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover">Accessibility</a>
          <a className="link link-hover">California Privacy Notice</a>
        </div>
        <div>
          <span className="footer-title">Newsletter</span>
          <div className="form-control w-80">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered w-full pr-16"
              />
              <button className="btn bg-rose-600 absolute top-0 right-0 rounded-l-none">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </footer>
      <footer className="footer footer-center p-4 bg-base-300 text-base-content rounded-b-xl">
        <div>
          <p>
            Copyright © 2023 - All right reserved by Learn IQ Industries Ltd.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footers;
