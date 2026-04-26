import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './itemAnim.css';

class PageSkeleton extends Component {
    render() {
        return (
            <div className="container py-4">

                {/* TOP SECTION */}
                <div className="row mb-4 g-4">

                    {/* LEFT BIG CARD (main news style like NewsItemSkeleton) */}
                    <div className="col-md-6">
                        <div className="card shadow-sm h-100">
                            <div className="row g-0">

                                <div className="col-md-5">
                                    <div
                                        className="bg-secondary-subtle w-100 h-100"
                                        style={{ minHeight: "220px" }}
                                    ></div>
                                </div>

                                <div className="col-md-7">
                                    <div className="card-body d-flex flex-column h-100">

                                        <div
                                            className="bg-secondary-subtle rounded mb-3"
                                            style={{ height: "18px", width: "80%" }}
                                        ></div>

                                        {[...Array(5)].map((_, i) => (
                                            <div
                                                key={i}
                                                className="bg-secondary-subtle rounded mb-2"
                                                style={{ height: "14px", width: "100%" }}
                                            ></div>
                                        ))}

                                        <div
                                            className="bg-secondary-subtle rounded mt-auto"
                                            style={{ height: "14px", width: "40%" }}
                                        ></div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE (simplified but same style system) */}
                    <div className="col-md-6">
                        <div className="card shadow-sm h-100">
                            <div className="card-body d-flex flex-column justify-content-center">

                                <div
                                    className="bg-secondary-subtle rounded mb-3 mx-auto"
                                    style={{ height: "20px", width: "60%" }}
                                ></div>

                                <div
                                    className="bg-secondary-subtle rounded mb-2 mx-auto"
                                    style={{ height: "14px", width: "40%" }}
                                ></div>

                                <div
                                    className="bg-secondary-subtle rounded mb-4 mx-auto"
                                    style={{ height: "14px", width: "75%" }}
                                ></div>

                                <div
                                    className="bg-secondary-subtle rounded mx-auto"
                                    style={{ height: "36px", width: "50%" }}
                                ></div>

                            </div>
                        </div>
                    </div>

                </div>

                {/* LIST SECTION (NOW MATCHES NewsItemSkeleton EXACT STYLE) */}
                {[...Array(3)].map((_, i) => (
                    <li key={i} className="list-unstyled mb-4">
                        <div className="card shadow-sm h-100">
                            <div className="row g-0">

                                <div className="col-md-4">
                                    <div
                                        className="bg-secondary-subtle w-100 h-100"
                                        style={{ minHeight: "200px" }}
                                    ></div>
                                </div>

                                <div className="col-md-8">
                                    <div className="card-body d-flex flex-column h-100">

                                        <div
                                            className="bg-secondary-subtle rounded mb-4"
                                            style={{ height: "16px", width: "30%" }}
                                        ></div>

                                        {[...Array(6)].map((_, j) => (
                                            <div
                                                key={j}
                                                className="bg-secondary-subtle rounded mb-2"
                                                style={{ height: "16px", width: "100%" }}
                                            ></div>
                                        ))}

                                        <div
                                            className="bg-secondary-subtle rounded mt-4"
                                            style={{ height: "14px", width: "15%" }}
                                        ></div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </li>
                ))}

            </div>
        );
    }
}

export default PageSkeleton;