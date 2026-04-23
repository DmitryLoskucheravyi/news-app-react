import { Component, useEffect, useState } from "react";
import { useNewsServices } from "../services/NewsServices";
import { RandomNewsItem } from "./RandomNewsItem";
import { RandomNewsSkeleton } from "../skeletons/RandomNewsSkeleton";
import { ErrorBounder } from "../errorBounder/ErrorBounder";
import './index.css'

export const RandomNewsContainer = (props) => {

    const [data, setData] = useState({})
    const [opened, setOpened] = useState(false)
    const { loading, error, getRandomNews } = useNewsServices()
    const toggleVisiable = () => {
        setOpened(prev => !prev)
    }

    const getRand = () => {
        getRandomNews().then(data => {
            const randomNews = data.articles[Math.floor(Math.random() * 48)]
            setData({
                title: randomNews.title,
                desc: randomNews.description,
                url: randomNews.url,
                image: randomNews.image,
                content: randomNews.content,
            })
        })
    }

    useEffect(() => {
        getRand()
    }, [])

    const { title, desc, url, image, content } = data
    const style = { opacity: opened ? 0.4 : 1 };
    return (
        <div className="container my-5 ">
            <div className="row g-4">

                <ErrorBounder >
                    {!loading ? <RandomNewsItem data={{ title, desc, url, image, content }} error={error} isOpen={opened} style={style} toggleVisiable={toggleVisiable} /> : <RandomNewsSkeleton />}
                </ErrorBounder>

                <div className="col-md-6">
                    <div className="text-center p-4 bg-light rounded shadow-sm h-100 d-flex flex-column justify-content-center">
                        <h3 className="mb-2 fw-bold">
                            Random news of the day!
                        </h3>
                        <h4 className="mt-2">
                            Want to give it a try?
                        </h4>
                        <h5 className="mt-3 text-muted">
                            Search for news you like or just pick something at random!
                        </h5>
                        <button className="btn mt-3 btn-warning"
                            disabled={loading}
                            onClick={() => { getRand() }} >
                            Try it out
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}