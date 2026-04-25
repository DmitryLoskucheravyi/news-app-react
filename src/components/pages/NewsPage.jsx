import { useLocation, useNavigate, useParams } from "react-router-dom";

export const NewsPage = () => {
    const alt =
        "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png";

    const { id } = useParams();
    const { state } = useLocation();
    const navigate = useNavigate();

    const { title, image, url, content, date, source } = state;

    return (
        <div className="container-fluid bg-light min-vh-100 py-4 px-3 px-md-5">
            <div className="row justify-content-center">
                <div className="col-12 col-xl-10">

                    <div className="card border-0 shadow-lg rounded-4 overflow-hidden">

                        {/* HERO IMAGE */}
                        <div
                            className="position-relative overflow-hidden"
                            style={{
                                height: "55vh",
                                minHeight: "350px",
                            }}
                        >
                            <img
                                src={image || alt}
                                alt={title}
                                className="w-100 h-100"
                                style={{
                                    objectFit: "cover",
                                    objectPosition: "center",
                                    transition: "transform 8s ease",
                                }}
                            />

                            {/* Overlay */}
                            <div
                                className="position-absolute top-0 start-0 w-100 h-100"
                                style={{
                                    background:
                                        "linear-gradient(to top, rgba(0,0,0,0.65), rgba(0,0,0,0.15))",
                                }}
                            ></div>

                            {/* Title on image */}
                            <div className="position-absolute bottom-0 start-0 p-4 text-white w-100">
                                <span className="badge bg-primary mb-3 px-3 py-2">
                                    {source.name}
                                </span>

                                <h1 className="fw-bold display-5 mb-2">
                                    {title}
                                </h1>

                                <p className="mb-0 opacity-75">{date}</p>
                            </div>
                        </div>

                        {/* CONTENT */}
                        <div className="card-body p-4 p-md-5">

                            {/* TEXT */}
                            <div
                                className="fs-5 text-secondary lh-lg mb-5"
                                style={{
                                    maxHeight: "420px",
                                    overflowY: "auto",
                                    paddingRight: "10px",
                                }}
                            >
                                {content}
                            </div>

                            <div className="d-flex flex-wrap gap-3">
                                <a
                                    href={url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="btn btn-primary px-4 py-2 rounded-pill"
                                >
                                    Read original
                                </a>

                                <button
                                    onClick={() => navigate(-1)}
                                    className="btn btn-outline-dark px-4 py-2 rounded-pill"
                                >
                                    Back
                                </button>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};