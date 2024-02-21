import CountUp, { useCountUp } from "react-countup";
import "./homestats.css";
import { useRef } from "react";

const HomeStats = () => {
  const counterRef = useRef(null);
  useCountUp({
    ref: counterRef,
    end: 1234567,
    enableScrollSpy: true,
    scrollSpyDelay: 1500,
  });

  return (
    <div className="homestats">
      <div className="homestat-main">
        <div className="homestat-info">
          <h3>
            <CountUp end={39} enableScrollSpy ref={counterRef} />
          </h3>
          <h4>Years of experience</h4>
        </div>

        <div className="homestat-info">
          <h3>
            <CountUp end={4099} enableScrollSpy ref={counterRef} />
          </h3>
          <h4>Satisfied Patients</h4>
        </div>

        <div className="homestat-info">
          <h3>
            {" "}
            <CountUp end={89} enableScrollSpy ref={counterRef} />
          </h3>
          <h4> Hospital rooms</h4>
        </div>

        <div className="homestat-info">
          <h3>
            {" "}
            <CountUp end={301} enableScrollSpy ref={counterRef} />
          </h3>
          <h4>Qualified doctors</h4>
        </div>
      </div>
    </div>
  );
};

export default HomeStats;
