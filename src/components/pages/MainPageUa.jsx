import { Header } from "../header_temp/Header.jsx";
import { RandomNewsContainer } from "../randomNews/randomNewsContainer"
import { NewsListUa } from "../newsList/NewsListUa"
import { ErrorBounder } from "../errorBounder/ErrorBounder"
// import { Filters } from "./filters/Filters"

// import { ErrorBounder } from "../errorBounder/ErrorBounder"
const MainPageUa = () => {
    return (
        <>
            <ErrorBounder>
                <Header />
                {/* < Filters/> */}
                {/* <RandomNewsContainer /> */}
                <NewsListUa />
            </ErrorBounder>
        </>
    )
}
export default MainPageUa
