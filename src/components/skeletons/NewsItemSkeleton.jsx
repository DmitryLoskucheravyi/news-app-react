import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './itemAnim.css'

export class NewsItemSkeleton extends Component {
    render() {
        return (
            <li className="list-unstyled mb-4">

                <div className="card shadow-sm h-100">
                    <div className="row g-0">

                        <div className="col-md-4">
                            <div
                                className="bg-secondary-subtle w-100 h-100 rounded-start"
                                style={{ minHeight: "200px" }}
                            ></div>
                        </div>

                        <div className="col-md-8">
                            <div className="card-body d-flex flex-column h-100">

                                <div
                                    className="bg-secondary-subtle rounded mb-4"
                                    style={{ height: "16px", width: "30%" }}
                                ></div>

                                <div
                                    className="bg-secondary-subtle rounded mb-2"
                                    style={{ height: "16px", width: "100%" }}
                                ></div>

                                <div
                                    className="bg-secondary-subtle rounded mb-2"
                                    style={{ height: "16px", width: "100%" }}
                                ></div>

                                <div
                                    className="bg-secondary-subtle rounded mb-2"
                                    style={{ height: "16px", width: "100%" }}
                                ></div>
                                <div
                                    className="bg-secondary-subtle rounded mb-2"
                                    style={{ height: "16px", width: "100%" }}
                                ></div>
                                <div
                                    className="bg-secondary-subtle rounded mb-2"
                                    style={{ height: "16px", width: "100%" }}
                                ></div>
                                <div
                                    className="bg-secondary-subtle rounded mb-2"
                                    style={{ height: "16px", width: "100%" }}
                                ></div>
                                <div
                                    className="bg-secondary-subtle rounded mb-2"
                                    style={{ height: "16px", width: "100%" }}
                                ></div>

                                <div
                                    className="bg-secondary-subtle rounded mt-5"
                                    style={{ height: "14px", width: "15%" }}
                                ></div>

                            </div>
                        </div>

                    </div>
                </div>

            </li>
        );
    }
}


