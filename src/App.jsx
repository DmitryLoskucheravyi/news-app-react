
import { ErrorBounder } from "./components/errorBounder/ErrorBounder"
import { MainPage } from "./components/pages/MainPage"
import { MainPageUa } from "./components/pages/MainPageUa"
import { About } from "./components/pages/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './components/skeletons/itemAnim.css'
import { NewsPage } from "./components/pages/NewsPage";
import { NotFound } from "./components/pages/NotFound";

export const App = () => {

  return (
    <Router>  
      <Routes>
        <Route path='/' element={<MainPage />}></Route>

        <Route path='/about' element={<About />}></Route>
        <Route path='/ua' element={<MainPageUa />}></Route>
        <Route path='/news/:id' element={<NewsPage />}></Route>
        <Route path='*' element={< NotFound/>}></Route>
      </Routes>
    </Router>
  )

}

