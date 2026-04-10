import { Component } from "react"
import { Header } from "./components/header_temp/Header.jsx";
import { RandomNewsContainer } from "./components/randomNews/randomNewsContainer"
import { NewsList } from "./components/newsList/NewsList"
import { ErrorBounder } from "./components/errorBounder/ErrorBounder"
// import { Filters } from "./components/filters/Filters"
import { NewsServices } from './components/services/NewsServices.js'
import './components/skeletons/itemAnim.css'
export class App extends Component {
  constructor(props) {
    super(props)
    this.newsServices = new NewsServices()
    this.state = {
      allNews: [],
      pageAll: 2,
      pageTop: 1,
      loading: false,
      newsCount: 0
    }
  }

  onAll = () => {
    this.setState({ loading: true });

    this.newsServices.getAllNews(7, this.state.pageAll).then((data) => {
      setTimeout(() => {
        this.setState(({ allNews, pageAll }) => {
          const merged = [...allNews, ...data.articles];
          return {
            allNews: merged,
            pageAll: pageAll + 1,
            loading: false
          };
        });
      }, 100);
    })
      .catch(error => {
        this.setState({ loading: false });
        throw new Error(error);
      });
  };



  componentDidMount() {
    this.onAll()

  }

  render() {

    const { allNews, loading } = this.state
    return (
      <>
        <Header onAll={this.onAll} onTop={this.onTop} />
        {/* < Filters/> */}
        <RandomNewsContainer />
        <NewsList data={allNews} onAll={this.onAll} loading={loading} />
      </>
    )
  }

}

