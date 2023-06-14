const ButtonContainer = (props) => {
  return (
    <div className="btn-container">
      {props.job.map((job) => {
        const jobHandler = () => {
          props.jobHandler(job);
        };
        return (
          <button key={job.id} className="job-btn" onClick={jobHandler}>
            {job.company}
          </button>
        );
      })}
    </div>
  );
};

export default ButtonContainer;
