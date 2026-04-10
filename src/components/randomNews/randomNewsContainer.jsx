import { Component } from "react";
import { NewsServices } from "../services/NewsServices";
import { RandomNewsItem } from "./RandomNewsItem";
import { RandomNewsSkeleton } from "../skeletons/RandomNewsSkeleton";
import { ErrorBounder } from "../errorBounder/ErrorBounder";
import './index.css'
export class RandomNewsContainer extends Component {
    constructor(props) {
        super(props)
        this.service = new NewsServices()
        this.state = {
            title: null,
            desc: null,
            url: null,
            image: null,
            content: null,
            isOpen: false,
            loaded: null
        }

    }

    toggleVisiable = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    getRand = () => {
        this.laoded(false)
        this.service.getRandomNews().then(data => {
            const randomNews = data.articles[Math.floor(Math.random() * 48)]
            this.setState({
                title: randomNews.title,
                desc: randomNews.description,
                url: randomNews.url,
                image: randomNews.image,
                content: randomNews.content,
            })


        })
        setTimeout(() => { this.laoded(true) }, 1800)

    }
    laoded = (state) => {
        this.setState({
            loaded: state
        })
    }

    componentDidMount() {
        this.laoded(false)
        this.getRand()
        setTimeout(() => { this.laoded(true) }, 1200)

    }
    render() {
        const { title, desc, url, image, content, isOpen, loaded } = this.state
        const style = { opacity: isOpen ? 0.4 : 1 };
        return (
            <div className="container my-5 ">

                <div className="row g-4">

                    <ErrorBounder >
                        {loaded ? <RandomNewsItem data={{ title, desc, url, image, content }} isOpen={isOpen} style={style} toggleVisiable={this.toggleVisiable} /> : <RandomNewsSkeleton />}
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
                                disabled={!loaded}
                                onClick={() => { this.getRand() }} >
                                Try it out
                            </button>

                        </div>
                    </div>

                </div>

            </div>
        );
    }
}