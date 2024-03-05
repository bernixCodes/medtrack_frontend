import { Link } from "react-router-dom";

const LabStats = () => {
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
            src="https://charts.mongodb.com/charts-medtrack-kdrtb/embed/charts?id=65e72496-d8a8-4d6d-8d3a-253706630fba&maxDataAge=60&theme=light&autoRefresh=true"
          ></iframe>
        </div>

        <Link to="/labs" className="modal__close">
          &times;
        </Link>
      </div>
    </div>
  );
};

export default LabStats;
