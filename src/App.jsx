
import { ErrorBounder } from "./components/errorBounder/ErrorBounder"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import './components/skeletons/itemAnim.css'
import PageSkeleton from "./components/skeletons/PageSkeleton";

// import { MainPage } from "./components/pages/MainPage"
// import { MainPageUa } from "./components/pages/MainPageUa"
// import { About } from "./components/pages/About";

// import { NewsPage } from "./components/pages/NewsPage";
// import { NotFound } from "./components/pages/NotFound";


const MainPage = lazy(() => import("./components/pages/MainPage"));
const About = lazy(() => import("./components/pages/About"));
const MainPageUa = lazy(() => import("./components/pages/MainPageUa"));
const NewsPage = lazy(() => import("./components/pages/NewsPage"));
const NotFound = lazy(() => import("./components/pages/NotFound"));
export const App = () => {

  return (
    <Router>
      <Suspense fallback={<PageSkeleton/>}>
        <Routes>
          <Route path='/' element={<MainPage />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/ua' element={<MainPageUa />}></Route>
          <Route path='/news/:id' element={<NewsPage />}></Route>
          <Route path='*' element={< NotFound />}></Route>
        </Routes>
      </Suspense>
    </Router>
  )

}

