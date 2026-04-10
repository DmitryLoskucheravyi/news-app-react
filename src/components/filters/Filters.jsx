import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export class Filters extends Component {
    render() {
        return (
            <div className="container my-4">

                <div className="mb-4">
                    <input
                        type="text"
                        id="search"
                        className="form-control form-control-lg"
                        placeholder="Пошук новин..."
                    />
                </div>

                <div className="card shadow-sm p-3">

                    <h5 className="mb-3 fw-semibold">
                        Категорії
                    </h5>

                    <div className="d-flex flex-wrap gap-2">

                        <button className="btn btn-outline-primary">
                            Категорія 1
                        </button>

                        <button className="btn btn-outline-primary">
                            Категорія 2
                        </button>

                        <button className="btn btn-outline-primary">
                            Категорія 3
                        </button>

                        <button className="btn btn-outline-primary">
                            Категорія 4
                        </button>

                        <button className="btn btn-outline-primary">
                            Категорія 5
                        </button>

                    </div>

                </div>

            </div>
        );
    }
}