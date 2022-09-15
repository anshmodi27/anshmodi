import React from "react";

const Experience = (props) => {
  return (
    <>
      <div className="timeline-item">
        <span className="date">{props.date}</span>
        <h4>
          {props.post} - <span>{props.company}</span>
        </h4>
        <p>{props.description}</p>
      </div>
    </>
  );
};

export default Experience;
