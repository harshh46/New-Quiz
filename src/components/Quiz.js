//use state hook has 2 params first is the current state and second is the function to update the current state
//anything script variables or functions created can be used inside curly braces

//   const [state, setState] = useState({
//     currentQuestionIndex: 0,
//     questions: [],
//   });
// setCurrenQuestionIndex(currentQuestionIndex + 1);
// setState({
//   ...state,
//   currentQuestionIndex: state.currentQuestionIndex + 1,
// });
// import { useContext, useEffect } from "react";
// import { QuizContext } from "../context/quiz";

// const Quiz = ({ apiUrl, onBack }) => {
//   const [quizState, dispatch] = useContext(QuizContext);

//   // Debugging console log to check component rendering
//   console.log("Quiz component rendered with API URL:", apiUrl);

//   useEffect(() => {
//     if (quizState.questions.length > 0 || quizState.error) {
//       return; // Avoid re-fetching if questions are already loaded or an error occurred
//     }

//     console.log("Fetching questions from:", apiUrl);
//     fetch(apiUrl)
//       .then((res) => res.json())
//       .then((data) => {
//         console.log("Fetched data", data);
//         dispatch({ type: "LOADED_QUESTIONS", payload: data.results });
//       })
//       .catch((err) => {
//         console.log("Error fetching data:", err.message);
//         dispatch({ type: "SERVER_ERROR", payload: err.message });
//       });
//   }, [apiUrl, quizState.questions.length, quizState.error, dispatch]);

//   return (
//     <div className="quiz">
//       {/* Back Button to return to the quiz selection menu */}
//       <button className="back-button" onClick={onBack}>
//         Back to Menu
//       </button>
//       {/* Render quiz content... */}
//       <h1>Quiz Loaded</h1> {/* Add this to check rendering */}
//       {quizState.error && <p>Error: {quizState.error}</p>}
//       {quizState.questions.length > 0 && (
//         <div>
//           <h2>Questions Loaded</h2>
//           {/* Render the first question as a placeholder */}
//           <p>{quizState.questions[0].question}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Quiz;
import { useContext, useEffect } from "react";
import Question from "./Question";
import { QuizContext } from "../context/quiz";

const Quiz = ({ apiUrl, onRestart }) => {
  // Accept onRestart as a prop
  const [quizState, dispatch] = useContext(QuizContext);

  useEffect(() => {
    if (quizState.questions.length > 0 || quizState.error) {
      return;
    }
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "LOADED_QUESTIONS", payload: data.results });
      })
      .catch((err) => {
        dispatch({ type: "SERVER_ERROR", payload: err.message });
      });
  }, [apiUrl, quizState.questions.length, quizState.error, dispatch]);

  return (
    <div className="quiz">
      {quizState.error && (
        <div className="results">
          <div className="congratulations">SERVER ERROR</div>
          <div className="results-info">
            <div>{quizState.error}</div>
          </div>
        </div>
      )}
      {quizState.showResults ? (
        <div className="results">
          <div className="congratulations"> Congratulations </div>
          <div className="results-info">
            <div>You have completed the test</div>
            <div>
              You've got {quizState.correctAnswersCount} out of{" "}
              {quizState.questions.length}
            </div>
          </div>
          <div className="next-button" onClick={onRestart}>
            Restart
          </div>
        </div>
      ) : quizState.questions.length > 0 ? (
        <div>
          <div className="score">
            Question {quizState.currentQuestionIndex + 1}/
            {quizState.questions.length}
          </div>
          <Question />
          <div
            className="next-button"
            onClick={() => dispatch({ type: "NEXT_QUESTION" })}
          >
            Next Question
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Quiz;
