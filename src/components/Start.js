import React, { useContext } from "react";
import DataContext from "../context/dataContext";

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
            <h1 className="display-5 text-warning">Digital Inclusion</h1>
            <small className="text-secondary">Inclusão Digital</small>

            <img
              src="https://rmjm.com/wp-content/uploads/2021/05/Artboard-619.png"
              alt="Descrição da imagem"
              className="img-fluid"
            />
            <div>
              <button
                onClick={startQuiz}
                className="btn px-4 py-2 btn-outline-primary border fw-bold"
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
