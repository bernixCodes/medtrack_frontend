import "./about.css";
import doc from "../../../assets/info.jpg";

const About = () => {
  return (
    <div className="about-main">
      <div className="about-info">
        <p className="about-us">About Us</p>
        <h2 className="title" data-aos="fade-right" data-aos-duration="2000">
          MedCare <span style={{ color: "#00BCD1" }}>innovative</span> approach
          to inventory management
        </h2>
        <p className="sub-title">
          We are committed to providing efficient services tailored to meet the
          needs of all.
        </p>

        <div className="list-group">
          <p>
            <i className="fa fa-check" aria-hidden="true"></i> &nbsp; Effortless
            Drug Management
          </p>
          <p>
            <i className="fa fa-check" aria-hidden="true"></i>&nbsp;Seamless Lab
            Services
          </p>

          <p>
            <i className="fa fa-check" aria-hidden="true"></i> &nbsp; Reliable
            Inventory Tracking
          </p>

          <p>
            <i className="fa fa-check" aria-hidden="true"></i> &nbsp;
            Prescription Management
          </p>

          <p>
            <i className="fa fa-check" aria-hidden="true"></i>
            &nbsp;Insightful Custom Reporting
          </p>

          <p>
            <i className="fa fa-check" aria-hidden="true"></i>&nbsp; Efficient
            Integration
          </p>

          <p>
            <i className="fa fa-check" aria-hidden="true"></i> &nbsp;
            Exceptional Customer Support
          </p>

          <button className="btn">Read More</button>
        </div>
      </div>

      <div className="img">
        <img src={doc} alt="" />
      </div>
    </div>
  );
};

export default About;
