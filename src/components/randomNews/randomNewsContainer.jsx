import { Component, useEffect, useState } from "react";
import { NewsServices } from "../services/NewsServices";
import { RandomNewsItem } from "./RandomNewsItem";
import { RandomNewsSkeleton } from "../skeletons/RandomNewsSkeleton";
import { ErrorBounder } from "../errorBounder/ErrorBounder";
import './index.css'

const newsServicesKit = new NewsServices()


export const RandomNewsContainer = (props) => {

    const [data, setData] = useState({})
    const [opened, setOpened] = useState(false)
    const [load, setLoad] = useState(null)

    const toggleVisiable = () => {
        setOpened(prev => !prev)
    }

    const getRand = () => {
        setLoad(false)
        newsServicesKit.getRandomNews().then(data => {
            const randomNews = data.articles[Math.floor(Math.random() * 48)]
            setData({
                title: randomNews.title,
                desc: randomNews.description,
                url: randomNews.url,
                image: randomNews.image,
                content: randomNews.content,
            })


        })
        setTimeout(() => { setLoad(true) }, 1800)
    }

    const laoded = (state) => {
        setLoad(state)
    }

    useEffect(() => {
        laoded(false)
        getRand()
        setTimeout(() => { laoded(true) }, 1200)
    }, [])

    const { title, desc, url, image, content } = data
    const style = { opacity: opened ? 0.4 : 1 };
    return (
        <div className="container my-5 ">

            <div className="row g-4">

                <ErrorBounder >
                    {load ? <RandomNewsItem data={{ title, desc, url, image, content }} isOpen={opened} style={style} toggleVisiable={toggleVisiable} /> : <RandomNewsSkeleton />}
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
                            disabled={!load}
                            onClick={() => { getRand() }} >
                            Try it out
                        </button>

                    </div>
                </div>

            </div>

        </div>
    );
}