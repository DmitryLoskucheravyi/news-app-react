import { useEffect, useState } from "react"
import { Header } from "./components/header_temp/Header.jsx";
import { RandomNewsContainer } from "./components/randomNews/randomNewsContainer"
import { NewsList } from "./components/newsList/NewsList"
import { ErrorBounder } from "./components/errorBounder/ErrorBounder"
// import { Filters } from "./components/filters/Filters"
import { NewsServices } from './components/services/NewsServices.js'
import './components/skeletons/itemAnim.css'

const newsServicesKit = new NewsServices()
export const App = () => {
  const [pagin, setPagin] = useState([])
  const [page, setPage] = useState(2)
  const [loading, setLoading] = useState(false)

  const onAll = () => {
    setLoading(true)
    
    const currPage = page

    newsServicesKit.getAllNews(3, currPage).then((data) => {
      setTimeout(() => {
        setPagin((prev) => [...prev, ...data.articles])
        setPage((prev) => prev + 1)
        setLoading(false)
      }, 100);
    })
      .catch(error => {
        setLoading(false)
        throw new Error(error);
      });
  };


  useEffect(() => {
    onAll()
  }, [])

  return (
    <>
      <Header onAll={onAll} />
      {/* < Filters/> */}
      <RandomNewsContainer/>
      <NewsList data={pagin} onAll={onAll} loading={loading} />
    </>
  )

}

