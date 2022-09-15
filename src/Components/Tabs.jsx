import React, { useState } from "react";
import Education from "./Education";
import EduDetails from "../Data/Edu_Details";
import Experience from "./Experience";
import ExpDetails from "../Data/Exp_Details";

const edu_detail = (val) => {
  return (
    <Education
      date={val.date}
      course={val.course}
      institute={val.institute}
      description={val.description}
    />
  );
};
const exp_detail = (val) => {
  return (
    <Experience
      date={val.date}
      post={val.post}
      company={val.company}
      description={val.description}
    />
  );
};

const Tabs = () => {
  const [toogleState, setToogleState] = useState(1);
  const toogleTab = (index) => {
    setToogleState(index);
  };
  return (
    <>
      <div className="about-tabs">
        <button
          className={toogleState === 1 ? "tab-item active" : "tab-item "}
          onClick={() => toogleTab(1)}
          type="button"
        >
          Education
        </button>
        <button
          className={toogleState === 2 ? "tab-item active" : "tab-item "}
          onClick={() => toogleTab(2)}
          type="button"
        >
          Experience
        </button>
      </div>

      {/* Edu Section */}

      <div className={toogleState === 1 ? "tab-content active" : "tab-content"}>
        <div className="timeline">{EduDetails.map(edu_detail)}</div>
      </div>

      {/* Exp Section */}

      <div className={toogleState === 2 ? "tab-content active" : "tab-content"}>
        <div className="timeline">{ExpDetails.map(exp_detail)}</div>
      </div>
    </>
  );
};

export default Tabs;
