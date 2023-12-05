import React, { useContext } from "react";
import DataContext from "../context/dataContext";
import bg from "../bg.png";

const Start = () => {
  const { startQuiz, showStart } = useContext(DataContext);
  return (
    <section
      className="text-white text-center bg-dark"
      style={{ display: `${showStart ? "block" : "none"}` }}
    >
      <div className="container">
        <div className="row vh-100 align-items-center justify-content-center">
          <div className="col-lg-8">
            {/* <h1 className="display-5 text-warning">
              Inclusion for Blind People
            </h1>
            <small className="text-secondary">Inclusão para Cegos</small> */}

            <div className="position-relative text-center">
              <img
                src={bg}
                alt="bg de mulher cega com um cachorro"
                className="img-fluid"
              />
              <button
                onClick={startQuiz}
                className="btn btn-outline-primary border border-primary shadow fw-bold position-absolute"
                style={{
                  top: "68%",
                  left: "60%",
                  // transform: "translate(-50%, -50%)",
                }}
              >
                Start Quiz
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Start;
