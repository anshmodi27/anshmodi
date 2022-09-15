import React from "react";

const Education = (props) => {
  return (
    <>
          <div className="timeline-item">
            <span className="date">{props.date}</span>
            <h4>
              {props.course} - <span>{props.institute}</span>
            </h4>
            <p>{props.description}</p>
          </div>
    </>
  );
};

export default Education;
