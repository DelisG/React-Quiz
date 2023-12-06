import React, { useContext } from "react";
import DataContext from "../context/dataContext";
import bg from "../bg.png";
import bgmd from "../bg-md.png";

const Start = () => {
  const { startQuiz, showStart } = useContext(DataContext);
  return (
    <section
      className="text-white text-center bg-dark"
      style={{ display: `${showStart ? "block" : "none"}` }}
    >
      <div className="container">
        <div className="row vh-100 align-items-center justify-content-center">
          <div className="col-lg-10 h-100">
            {/* <h1 className="display-5 text-warning">
              Inclusion for Blind People
            </h1>
            <small className="text-secondary">Inclusão para Cegos</small> */}

            <div className="position-relative text-center px-5 pt-3">
              <img
                src={bgmd}
                alt="bg de mulher cega com um cachorro"
                className="img-fluid d-block d-md-none"
              />
              <img
                src={bg}
                alt="bg de mulher cega com um cachorro"
                className="img-fluid d-none d-md-block w-100"
              />
              <button
                onClick={startQuiz}
                className="btn btn-primary py-3 px-4 rounded-circle border border-primary shadow fw-bold position-absolute"
                style={{
                  top: "68%",
                  left: "60%",
                  // transform: "translate(-50%, -50%)",
                }}
              >
                Start <br/> Quiz
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Start;
