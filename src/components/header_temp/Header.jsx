import { Component } from "react";
import { NavLink, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

export class Header extends Component {
    render() {
        return (
            <header className="bg-dark shadow-sm">
                <div className="container">

                    <div className="d-flex flex-column flex-md-row justify-content-between align-items-center py-3 gap-3">

                        <Link to='/' className="text-white mb-0 fw-semibold">
                            News
                        </Link>

                        <div className="d-flex gap-2">

                            <NavLink to='/' className="btn btn-outline-light" >
                                Home
                            </NavLink>

                            <NavLink to='/about' className="btn btn-outline-light" >
                                About
                            </NavLink>

                            <NavLink to='/' className="btn btn-outline-warning">
                                Liked
                            </NavLink>

                        </div>

                    </div>

                </div>
            </header>
        );
    }
}