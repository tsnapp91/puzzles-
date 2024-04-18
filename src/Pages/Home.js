import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h2>Welcome to Snappy Puzzles!</h2>
      <p>Choose a game to play:</p>
      <p>
        {"X    "}
        <Link to="/play-tic-tac-toe">
          <button>Play Tic Tac Toe</button>
        </Link>
        {"  O"}
      </p>
    </div>
  );
}

export default Home;
