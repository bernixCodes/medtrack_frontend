import CountUp from "react-countup";
import "./homestats.css";

const HomeStats = () => {
  return (
    <div className="homestats">
      <div className="homestat-main">
        <div className="homestat-info">
          <h3>
            <CountUp start={0} end={39} duration={20} useEasing={true} />
          </h3>
          <h4>Years in operation</h4>
        </div>

        <div className="homestat-info">
          <h3>
            <CountUp start={2000} end={4099} duration={50} useEasing={true} />
          </h3>
          <h4>Satisfied Patients</h4>
        </div>

        <div className="homestat-info">
          <h3>
            {" "}
            <CountUp start={20} end={89} duration={40} useEasing={true} />
          </h3>
          <h4> Proud Partners</h4>
        </div>

        <div className="homestat-info">
          <h3>
            {" "}
            <CountUp start={100} end={301} duration={40} useEasing={true} />
          </h3>
          <h4>100% Rating</h4>
        </div>
      </div>
    </div>
  );
};

export default HomeStats;
