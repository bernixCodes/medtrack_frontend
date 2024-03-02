import "./offer.css";

const Offer = () => {
  return (
    <div className="offer" data-aos="fade-up">
      <div className="offer-1">
        <i className="fa fa-user-md icon" aria-hidden="true"></i>
        <div className="info">
          <h3>Reporting Service</h3>
          <div className="rule"></div>
          <p>
            Generate various reports such as drug usage statistics, lab test
            results, etc.
          </p>
        </div>
      </div>

      <div className="offer-2">
        <i className="fa fa-ambulance icon" aria-hidden="true"></i>

        <div className="info">
          <h3>Integration Service</h3>
          <div className="rule"></div>
          <p>
            Exchange data securely between the application and external systems.
          </p>
        </div>
      </div>

      <div className="offer-3">
        <i className="fa fa-user-md icon" aria-hidden="true"></i>
        <div className="info">
          <h3>Drug Management</h3>
          <div className="rule"></div>
          <p>
            Track drug inventory levels in various locations or labs and update
            inventory levels.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Offer;
