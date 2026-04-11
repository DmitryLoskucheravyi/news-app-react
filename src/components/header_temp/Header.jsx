import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export class Header extends Component {
    render() {
        const { onAll, onTop } = this.props
        return (
            <header className="bg-dark shadow-sm">
                <div className="container">

                    <div className="d-flex flex-column flex-md-row justify-content-between align-items-center py-3 gap-3">

                        {/* 🔹 Лого / заголовок */}
                        <h4 className="text-white mb-0 fw-semibold">
                            News
                        </h4>

                        {/* 🔹 Навігація */}
                        <div className="d-flex gap-2">

                            <button className="btn btn-outline-light" onClick={onAll}>
                                Home
                            </button>

                            <button className="btn btn-outline-light" onClick={onTop}>

                                Blank
                            </button>

                            <button className="btn btn-outline-warning">
                                Liked
                            </button>

                        </div>

                    </div>

                </div>
            </header>
        );
    }
}