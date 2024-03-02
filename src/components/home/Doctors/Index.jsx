import doc1 from "../../../assets/ceo.jpg";
import doc2 from "../../../assets/od-2.jpg";
import doc3 from "../../../assets/researcher.jpg";
import doc4 from "../../../assets/businessdev.jpg";
import "./doctors.css";

const Doctors = () => {
  return (
    <div className="docs-main">
      <p
        className="our-doctors"
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        MedCare Pioneers
      </p>
      <h3
        className="doc-title"
        data-aos="fade-right"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
      >
        Introducing the{" "}
        <span style={{ color: "#00BCD1" }}>brilliant minds</span> driving
        MedCare&apos;s excellence.
      </h3>

      <div className="docs-div">
        <div className="doc-info">
          <img src={doc1} className="blog-img" alt="" />
          <div className="doc-details">
            <h4>Theody Moore</h4>
            <p> CEO</p>
          </div>
        </div>
        <div className="doc-info">
          <img src={doc4} className="blog-img" alt="" />
          <div className="doc-details">
            <h4>Eva Moore</h4>
            <p> Business Lead</p>
          </div>
        </div>
        <div className="doc-info">
          <img src={doc3} className="blog-img" alt="" />
          <div className="doc-details">
            <h4>Ike Kingsley</h4>
            <p> Researcher </p>
          </div>
        </div>
        <div className="doc-info">
          <img src={doc2} className="blog-img" alt="" />
          <div className="doc-details">
            <h4>Dr.Anne Freeman</h4>
            <p> Doctor</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctors;
