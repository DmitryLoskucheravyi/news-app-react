import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './itemAnim.css'

export class RandomNewsSkeleton extends Component {
    render() {
        return (
            <div className="col-md-6">
                <div className="card shadow h-100">
                    <div className="row g-0 h-100">

                        <div className="col-5">
                            <div
                                className="bg-secondary-subtle w-100 h-100 rounded-start"
                                style={{ minHeight: "200px" }}
                            ></div>
                        </div>

                        <div className="col-7">
                            <div className="card-body d-flex flex-column h-100">

                                <div
                                    className="bg-secondary-subtle rounded mb-3"
                                    style={{ height: "18px", width: "70%" }}
                                ></div>

                                <div
                                    className="bg-secondary-subtle rounded mb-2"
                                    style={{ height: "14px", width: "100%" }}
                                ></div>
                                <div
                                    className="bg-secondary-subtle rounded mb-2"
                                    style={{ height: "14px", width: "95%" }}
                                ></div>
                                <div
                                    className="bg-secondary-subtle rounded mb-2"
                                    style={{ height: "14px", width: "90%" }}
                                ></div>
                                <div
                                    className="bg-secondary-subtle rounded mb-2"
                                    style={{ height: "14px", width: "85%" }}
                                ></div>

                                <div className="d-flex gap-2 mt-auto">
                                    <div
                                        className="bg-secondary-subtle rounded"
                                        style={{ height: "38px", width: "80px" }}
                                    ></div>

                                    <div
                                        className="bg-secondary-subtle rounded"
                                        style={{ height: "38px", width: "80px" }}
                                    ></div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}