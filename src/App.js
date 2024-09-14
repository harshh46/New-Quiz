import React, { useState } from "react";
import "./App.css";
import Quiz from "./components/Quiz"; // Import the Quiz component

function App() {
  const [quizUrl, setQuizUrl] = useState(""); // State for quiz URL

  const handleComputerQuiz = () => {
    setQuizUrl(
      "https://opentdb.com/api.php?amount=10&category=18&type=multiple&encode=url3986"
    ); // Set URL for Computer Quiz
  };

  const handleGeneralKnowledgeQuiz = () => {
    setQuizUrl(
      "https://opentdb.com/api.php?amount=10&category=18&type=multiple&encode=url3986"
    ); // Set URL for General Knowledge Quiz
  };

  const handleMathematicsQuiz = () => {
    setQuizUrl(
      "https://opentdb.com/api.php?amount=10&category=19&type=multiple&encode=url3986"
    ); // Set URL for General Knowledge Quiz
  };

  const handleMusicQuiz = () => {
    setQuizUrl(
      "https://opentdb.com/api.php?amount=10&category=12&type=multiple&encode=url3986"
    ); // Set URL for General Knowledge Quiz
  };

  const handleJapaneseAnimeQuiz = () => {
    setQuizUrl(
      "https://opentdb.com/api.php?amount=10&category=31&type=multiple&encode=url3986"
    ); // Set URL for General Knowledge Quiz
  };

  const handleCartoonsAndAnimeQuiz = () => {
    setQuizUrl(
      "https://opentdb.com/api.php?amount=10&category=32&type=multiple&encode=url3986"
    ); // Set URL for General Knowledge Quiz
  };

  const handleVehiclesQuiz = () => {
    setQuizUrl(
      "https://opentdb.com/api.php?amount=10&category=28&type=multiple&encode=url3986"
    ); // Set URL for General Knowledge Quiz
  };

  const handleFilmsQuiz = () => {
    setQuizUrl(
      "https://opentdb.com/api.php?amount=10&category=11&type=multiple&encode=url3986"
    ); // Set URL for General Knowledge Quiz
  };

  const handleVideoGamesQuiz = () => {
    setQuizUrl(
      "https://opentdb.com/api.php?amount=10&category=15&type=multiple&encode=url3986"
    ); // Set URL for General Knowledge Quiz
  };

  const handleSportsQuiz = () => {
    setQuizUrl(
      "https://opentdb.com/api.php?amount=10&category=21&type=multiple&encode=url3986"
    ); // Set URL for General Knowledge Quiz
  };

  const handleAnimalsQuiz = () => {
    setQuizUrl(
      "https://opentdb.com/api.php?amount=10&category=27&type=multiple&encode=url3986"
    ); // Set URL for General Knowledge Quiz
  };

  const handleHistoryQuiz = () => {
    setQuizUrl(
      "https://opentdb.com/api.php?amount=10&category=23&type=multiple&encode=url3986"
    ); // Set URL for General Knowledge Quiz
  };

  const handleGeographyQuiz = () => {
    setQuizUrl(
      "https://opentdb.com/api.php?amount=10&category=22&type=multiple&encode=url3986"
    ); // Set URL for General Knowledge Quiz
  };
  const handleRestart = () => {
    setQuizUrl(""); // Reset the quiz URL to show the buttons again
  };

  return (
    <div className="App">
      {!quizUrl && (
        <>
          <div>
            <button className="button-27">
              Choose your type. Click on the button to start the quiz
            </button>
          </div>

          <div>
            <button className="button-18" onClick={handleComputerQuiz}>
              Computer Quiz
            </button>
          </div>

          <div>
            <button className="button-18" onClick={handleGeneralKnowledgeQuiz}>
              General Knowledge Quiz
            </button>
          </div>

          <div>
            <button className="button-18" onClick={handleMathematicsQuiz}>
              Mathematics Quiz
            </button>
          </div>

          <div>
            <button className="button-18" onClick={handleMusicQuiz}>
              Music Quiz
            </button>
          </div>

          <div>
            <button className="button-18" onClick={handleJapaneseAnimeQuiz}>
              Japanese Anime Quiz
            </button>
          </div>

          <div>
            <button className="button-18" onClick={handleCartoonsAndAnimeQuiz}>
              Cartoons And Anime Quiz
            </button>
          </div>

          <div>
            <button className="button-18" onClick={handleVehiclesQuiz}>
              Vehicles Quiz
            </button>
          </div>

          <div>
            <button className="button-18" onClick={handleFilmsQuiz}>
              Films Quiz
            </button>
          </div>

          <div>
            <button className="button-18" onClick={handleVideoGamesQuiz}>
              Video Games Quiz
            </button>
          </div>

          <div>
            <button className="button-18" onClick={handleSportsQuiz}>
              Sports Quiz
            </button>
          </div>

          <div>
            <button className="button-18" onClick={handleAnimalsQuiz}>
              Animals Quiz
            </button>
          </div>

          <div>
            <button className="button-18" onClick={handleHistoryQuiz}>
              History Quiz
            </button>
          </div>

          <div>
            <button className="button-18" onClick={handleGeographyQuiz}>
              Geography Quiz
            </button>
          </div>
        </>
      )}
      {quizUrl && <Quiz apiUrl={quizUrl} onRestart={handleRestart} />}
    </div>
  );
}

export default App;
