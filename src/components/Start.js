import React, { useContext } from "react";
import DataContext from "../context/dataContext";
import bg from "../bg.png";
import bgmd from "../bg-md.png";

const Start = () => {
  const { startQuiz, showStart } = useContext(DataContext);
  return (
    <section
      className="text-white text-center bg-dark vh-100"
      style={{ display: `${showStart ? "block" : "none"}` }}
    >
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-lg-10 px-5 pt-3 d-flex justify-content-center flex-column">
            <img
              src={bgmd}
              alt="bg de mulher cega com um cachorro"
              className="img-fluid d-block d-md-none"
            />
            <img
              src={bg}
              alt="bg de mulher cega com um cachorro"
              className="img-fluid d-none d-md-block"
            />
            <button onClick={startQuiz} className="btn">
              <span
                className="d-none d-md-block position-absolute btn btn-primary py-3 px-4 rounded-circle border border-primary shadow fw-bold "
                style={{
                  top: "68%",
                  left: "60%",
                  // transform: "translate(-50%, -50%)",
                }}
              >
                Start <br /> Quiz
              </span>
              <span className="d-block d-md-none btn btn-primary py-3 px-4 shadow fw-bold ">
                Start Quiz
              </span>
            </button>       
          </div>
        </div>
      </div>
    </section>
  );
};

export default Start;
