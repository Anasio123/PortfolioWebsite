import Foto from "../../pictures/314472729_778188146614466_2569173996259762878_n.jpg";

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

              <h4 className="mb-5 mt-3">Student Applied Computer Science</h4>
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
        {/* Ik wil een mooie golvende lijn */}
      </div>

      {/* DIT IS TIJDELIJKE CENTRALE PARAGRAAF VOOR WHO AM I? */}
      {/* <div>
        <p
          //zorg dat het mooi in het midden komt en dat de tekst van lang naar kort gaat
          style={{
            paddingTop: "50px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",

            paddingLeft: "90px",
            paddingRight: "90px",
            textAlign: "center",
          }}
        >
          Welcome to my online portfolio! My name is Anasio Claeys, and I am currently a student at
          HoGent, pursuing my Bachelor's degree in Applied Computer Science. As a developer, I am
          passionate about exploring the vast world of technology and constantly improving my skills
          to create innovative and efficient solutions. Through my projects and experiences, I have
          gained expertise in various programming languages, frameworks, and tools, including Java,
          HTML, CSS, Javascript, React. I am excited to share my work with you and demonstrate how I
          have applied my knowledge to real-world projects. Thank you for taking the time to visit
          my portfolio
        </p>
      </div> */}
      {/* ---------------------------------------------------------------------------------------------- */}
    </div>
  );
};
