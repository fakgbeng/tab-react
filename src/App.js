import React, { useState, useEffect } from "react";

import Jobs from "./Jobs";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tabs-project";
function App() {
  const [jobs, setJobs] = useState([]);
  const fetchJobs = async () => {
    const reponse = await fetch(url);
    const newJobs = await reponse.json();
    setJobs(newJobs);
  };
  useEffect(() => {
    fetchJobs();
  }, []);
  console.log(jobs, "Data fetching");
  return (
    // <div></div>
    <main className="section">
      <Jobs job={jobs} />
    </main>
  );
}
export default App;
