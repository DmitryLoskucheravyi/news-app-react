import { Component } from "react"
import './index.css'

export const RandomNewsItem = (props) => {
    // throw new Error("Test error");
    const { image, title, desc, content, url } = props.data
    const { isOpen, style, toggleVisiable } = props
    return (
        <div className="col-md-6">
            <div className="card shadow h-100">
                <div className="row g-0 h-100">

                    <div className="col-5">
                        <img
                            src={image}
                            className="img-fluid h-100 object-fit-cover rounded-start random-image"
                            alt="news"
                        />
                    </div>

                    <div className="col-7">
                        <div className="card-body d-flex flex-column h-100 overflow-random">

                            <h5 className="card-title">
                                {title}
                            </h5>

                            <p className="card-text flex-grow-1 pb-4" >
                                {!isOpen ? desc : desc + ' ' + content}
                            </p>

                            <div className="d-flex gap-2 mt-auto absolute-btns" style={style}>
                                <button className="btn btn-outline-secondary " onClick={() => {toggleVisiable() }}>
                                    {isOpen ? 'Hide' : 'Show'}
                                </button>

                                <a href={url} className="btn btn-primary " target="__blank">
                                    More
                                </a>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}