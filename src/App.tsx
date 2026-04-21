import "./App.css";
import { Score } from "./Sore";
import { teams } from "./assets/data/teams";

function App() {
  return (
    <div className="App">
      <h1 className="score-keeper-title">Score Keeper</h1>
      <div className="score-container">
        <div className="team-score-container">
          {teams.map((team) => {
            return <Score key={team.id} team={team} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
