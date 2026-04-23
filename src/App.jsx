
import { ErrorBounder } from "./components/errorBounder/ErrorBounder"
import { MainPage } from "./components/pages/MainPage"
import { About } from "./components/pages/About";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './components/skeletons/itemAnim.css'

export const App = () => {

  return (
    <Router>
      <Switch>
        <Route exact path='/about'>
          <About />
        </Route>
        <Route exact path='/'>
          <MainPage />
        </Route>
      </Switch>
    </Router>
  )

}

