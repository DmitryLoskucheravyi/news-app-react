
import { ErrorBounder } from "../errorBounder/ErrorBounder"
import { Header } from "../header_temp/Header"

export const About = () => {
    return (
        <ErrorBounder>
            <Header/>
            <h2>Hello it's me</h2>
        </ErrorBounder>
    )
}