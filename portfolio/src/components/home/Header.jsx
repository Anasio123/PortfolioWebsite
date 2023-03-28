import Foto from "../../pictures/314472729_778188146614466_2569173996259762878_n.jpg";
import { TypeAnimation } from "react-type-animation";

const kopTitel = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same String at the start will only be typed once, initially
        "Student Applied Computer Science",
        2000,
        "Mobile/Web & Enterprise Developer",
        2000,
        "Tech Enthusiast",
        2000,
        "Analytical thinking",
        2000,
      ]}
      speed={15}
      style={{ fontSize: "1.5em" }}
      repeat={Infinity}
    />
  );
};

export const Header = () => {
  return (
    <div className="header-content">
      {/* DIT IS DE HEADER VOOR DE HOME PAGE */}
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div
              className="d-flex flex-column justify-content-center align-items-center"
              style={{ marginTop: "60px", marginBottom: "90px" }}
              id="greeting"
            >
              <h1>
                Hi there<span className="wave">👋</span>
              </h1>
              <h1>I'm Anasio Claeys</h1>

              {/* <h4 className="mb-5 mt-3">Student Applied Computer Science</h4> */}
              <div
                // plaats dit in het midden ook als het verspringt
                style={{
                  textAlign: "center",
                }}
              >
                {kopTitel()}
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="d-flex justify-content-center align-items-center">
              <img
                src={Foto}
                alt="Foto"
                className="img-fluid rounded-circle"
                style={{ maxHeight: "300px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
