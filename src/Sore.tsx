import { useState } from "react";

type Team = {
  id: number;
  name: string;
};

export function Score({ team }: { team: Team }) {
  const [teamScore, setTeamScore] = useState(0);

  const addTeamScore = () => {
    setTeamScore(teamScore + 1);
  };

  return (
    <div className="team-score-container">
      <p className="team-score-text">
        {team.name}: {teamScore}
      </p>
      <button className="add-team-score-button" onClick={addTeamScore}>
        +1 {team.name}
      </button>
    </div>
  );
}
