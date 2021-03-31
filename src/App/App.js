import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {

    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path='/'>
                        <Layout title="Home">
                            <Home />
                        </Layout>
                    </Route>
                    <Route exact path='/home'>
                        <Layout title="Shopping Cart">
                            <Home />
                        </Layout>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
