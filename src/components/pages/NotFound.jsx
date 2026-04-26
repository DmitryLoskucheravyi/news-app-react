import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
      <div className="text-center">
        <h1 className="display-1 fw-bold text-danger">404</h1>
        <p className="fs-3">
          <span className="text-danger">Oops!</span> Сторінку не знайдено.
        </p>
        <p className="lead">
          Сторінка, яку ти шукаєш, не існує або була переміщена.
        </p>
        <Link to="/" className="btn btn-primary">
          На головну
        </Link>
      </div>
    </div>
  );
};
export default NotFound