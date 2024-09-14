import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { QuizProvider } from "./context/quiz"; // Keep the QuizProvider for state management
import reportWebVitals from "./reportWebVitals";
import App from "./App"; // Import the updated App component

ReactDOM.render(
  <React.StrictMode>
    <QuizProvider>
      <App /> {/* App will now handle showing the quiz */}
    </QuizProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// For measuring performance (optional)
reportWebVitals();
