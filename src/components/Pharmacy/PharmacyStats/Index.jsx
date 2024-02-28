import { Link } from "react-router-dom";
import "./pharmacyStats.css";

const PharmacyStats = () => {
  return (
    <div className="wrapper">
      <div className="modal">
        <div className="stats-container">
          <iframe
            style={{
              background: "#FFFFFF",
              border: "none",
              borderRadius: "2px",
              boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2)",
            }}
            width="640"
            height="480"
            src="https://charts.mongodb.com/charts-medtrack-kdrtb/embed/charts?id=65d4a499-91f9-4bf7-8598-c3c9a490e663&maxDataAge=60&theme=light&autoRefresh=true"
          ></iframe>

          <iframe
            style={{
              background: "#FFFFFF",
              border: "none",
              borderRadius: "2px",
              boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2)",
            }}
            width="640"
            height="480"
            src="https://charts.mongodb.com/charts-medtrack-kdrtb/embed/charts?id=65d4a71f-db6b-4d90-8bbd-8b10c8146dd2&maxDataAge=300&theme=light&autoRefresh=true"
          ></iframe>

          <iframe
            style={{
              background: "#FFFFFF",
              border: "none",
              borderRadius: "2px",
              boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2)",
            }}
            width="640"
            height="480"
            src="https://charts.mongodb.com/charts-medtrack-kdrtb/embed/charts?id=65d4b5e6-c61b-490d-852a-796a89785a65&maxDataAge=60&theme=light&autoRefresh=true"
          ></iframe>
        </div>

        <Link to="/pharmacy" className="modal__close">
          &times;
        </Link>
      </div>
    </div>
  );
};

export default PharmacyStats;
