import { FaLinkedin } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { FiInstagram } from "react-icons/fi";

export const Footer = () => {
  return (
    <footer className="py-3">
      <div className="container">
        <div className="d-flex justify-content-between">
          <div>Made by Anasio</div>
          <div>
            <span className="ms-3">
              <FaLinkedin />
            </span>
            <span className="ms-3">
              <AiOutlineMail />
            </span>
            <span className="ms-3">
              <FiInstagram />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
