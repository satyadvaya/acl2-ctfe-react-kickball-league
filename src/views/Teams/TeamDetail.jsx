import { Link, useParams } from "react-router-dom";

function TeamDetail() {
  const { teamId } = useParams();

  return (
    <>
      <p>
        <Link to="/teams" className="App-link">
          Back to Teams
        </Link>
      </p>
      <p>Team Detail: {teamId}</p>
    </>
  );
}

export default TeamDetail;
