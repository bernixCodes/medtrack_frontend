import "./banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <div
        className="banner-info"
        data-aos="fade-up-right"
        data-aos-duration="3000"
      >
        <p>Welcome to MedCare </p>
        <h2>The best specialists for your pharmacy and labs inventory!</h2>
        <button className="btn">Make an appointment</button>
        <button className="btn outlined">Departments</button>
      </div>
    </div>
  );
};

export default Banner;
