import React, { useContext } from "react";
import DataContext from "../context/dataContext";

const Quiz = () => {
  const {
    showQuiz,
    question,
    translation,
    quizs,
    checkAnswer,
    correctAnswer,
    selectedAnswer,
    questionIndex,
    nextQuestion,
    showTheResult,
  } = useContext(DataContext);

  return (
    <section
      className="bg-dark text-white"
      style={{ display: `${showQuiz ? "block" : "none"}` }}
    >
      <div className="container">
        <div className="row vh-100 align-items-center justify-content-center">
          <div className="col-lg-8">
            <div
              className="card p-4"
              style={{ background: "#3d3d3d", borderColor: "#646464" }}
            >
              <div className="d-flex justify-content-between gap-md-3">
                <div>
                  <h4 className="mb-2 fs-normal lh-base text-warning">
                    {question?.question}
                  </h4>
                  <small className="mb-2 fs-normal lh-base">
                    {translation?.translation}
                  </small>
                </div>

                <small
                  className="text-warning"
                  style={{ width: "100px", textAlign: "right" }}
                >
                  {quizs.indexOf(question) + 1} / {quizs?.length}
                </small>
              </div>
              <div>
                {question?.options?.map((item, index) => (
                  <button
                    key={index}
                    className={`option w-100 text-start btn text-white py-2 px-3 mt-3 rounded btn-dark ${
                      correctAnswer === item && "bg-info"
                    }`}
                    onClick={(event) => checkAnswer(event, item)}
                  >
                    {item}
                  </button>
                ))}
              </div>

              {questionIndex + 1 !== quizs.length ? (
                <button
                  className="btn py-2 w-100 mt-3 bg-light fw-bold"
                  onClick={nextQuestion}
                  disabled={!selectedAnswer}
                >
                  Next Question
                </button>
              ) : (
                <button
                  className="btn py-2 w-100 mt-3 bg-light display-6"
                  onClick={showTheResult}
                  disabled={!selectedAnswer}
                >
                  Show Result
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quiz;
