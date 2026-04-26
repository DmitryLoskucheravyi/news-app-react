
import { ErrorBounder } from "../errorBounder/ErrorBounder"
import { Header } from "../header_temp/Header"

const About = () => {
    return (
        <ErrorBounder>
            <Header />
            <h2>Hello it's me</h2>
        </ErrorBounder>
    )
}

export default About
