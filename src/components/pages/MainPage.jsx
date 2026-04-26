import { Header } from "../header_temp/Header.jsx";
import { RandomNewsContainer } from "../randomNews/randomNewsContainer"
import { NewsList } from "../newsList/NewsList"
import { ErrorBounder } from "../errorBounder/ErrorBounder"
// import { Filters } from "./filters/Filters"

// import { ErrorBounder } from "../errorBounder/ErrorBounder"
const MainPage = () => {
    return (
        <>
            <ErrorBounder>
                <Header />
                {/* < Filters/> */}
                <RandomNewsContainer />
                <NewsList />
            </ErrorBounder>
        </>
    )
}
export default MainPage