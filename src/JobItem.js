import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const JobItem = (props) => {
  const { title, company: name, dates, duties } = props.job;
  return (
    <div className="job-info">
      <h3>{title}</h3>
      <h4>{name}</h4>
      <div className="job-date">{dates}</div>
      <div className="job-desc">
        {duties.map((desc) => {
          return (
            <React.Fragment>
              <FaAngleDoubleRight />
              <p>{desc}</p>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default JobItem;
