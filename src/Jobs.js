import { useEffect, useState } from "react";
import ButtonContainer from "./ButtonContainer";
import JobItem from "./JobItem";

const Jobs = (props) => {
  const firstJob = props.job[0];
  const [activeJob, setActiveJob] = useState(firstJob);
  useEffect(() => {
    setActiveJob(firstJob);
  }, [firstJob]);
  const jobHandle = (job) => {
    setActiveJob(job);
  };
  console.log(activeJob);
  return (
    <div className="jobs-center">
      <ButtonContainer job={props.job} jobHandler={jobHandle} />
      <JobItem job={activeJob} />
    </div>
  );
};

export default Jobs;

/*
id: "recAGJfiU4CeaV0HL", order: 3, title: "Full Stack Web Developer", … }
​​
company: "TOMMY"
​​
dates: "December 2015 - Present"
​​
duties: Array(3) [ "Tote bag sartorial mlkshk air plant vinyl banjo lumbersexual poke leggings offal cold-pressed brunch neutra. Hammock photo booth live-edge disrupt.", "Post-ironic selvage chambray sartorial freegan meditation. Chambray chartreuse kombucha meditation, man bun four dollar toast street art cloud bread live-edge heirloom.", "Butcher drinking vinegar franzen authentic messenger bag copper mug food truck taxidermy. Mumblecore lomo echo park readymade iPhone migas single-origin coffee franzen cloud bread tilde vegan flexitarian." ]
​​
id: "recAGJfiU4CeaV0HL"
​​
order: 3
​​
title: "Full Stack Web Developer"
*/
