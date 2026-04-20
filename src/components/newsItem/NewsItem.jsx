import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./newsItem.css";
import PropTypes from "prop-types";




export const NewsItem = (props) => {

    const [visible, setVisible] = useState(false)


    // throw new Error("Test error");
    const alt = 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png'
    const { title, description, image, url, content, date, source } = props
    return (
        <li tabIndex='0' className="list-unstyled mb-4" >
            <div className="card shadow-sm h-100 border-0">
                <div className="row g-0 h-100">

                    <div className="col-md-4">
                        <img
                            src={image ? image : alt}
                            className="img-fluid w-100 h-100 object-fit-cover rounded-start"
                            alt="news"
                        />
                    </div>

                    <div className="col-md-8" >
                        <div className="card-body d-flex flex-column h-100 news-card-container">

                            <h4 className="card-title fw-semibold mb-3">
                                {title}
                            </h4>

                            <p
                                className="card-text flex-grow-1 mb-4"
                                style={{ textAlign: "justify" }}
                            >
                                {description}
                                <br />
                                <br />
                                {visible ? content : ' '}
                            </p>

                            <div className="d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-end gap-3 mt-auto">

                                <div>
                                    <h6 className="text-muted mb-2">
                                        Source: {source.name}
                                    </h6>

                                    <h6 className="text-secondary mb-0">
                                        Published at: {date}
                                    </h6>
                                </div>

                                <div className="d-flex gap-3">
                                    <button className="btn border px-4 hover-btn" onClick={() => {
                                        setVisible(prev => !prev)
                                    }} onBlur={() => {
                                        setVisible(prev => !prev)
                                    }
                                    } onFocus={() => setVisible(true)}>{visible ? "Hide" : "Read"} </button>
                                    <a className="btn btn-primary px-4 hover-btn" href={url} target="_blank" >More</a>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </li>
    );
}

// NewsItem.defaultProps = {
//     title: 'GREETING NEWS'
// }