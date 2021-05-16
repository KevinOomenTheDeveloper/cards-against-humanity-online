import { Route, Switch } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { useKeycloak } from "@react-keycloak/web";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

function App() {

    const {initialized, keycloak} = useKeycloak();

    return (
        <div className="App">
            {initialized ? 
            (
                <Switch>
                    <PrivateRoute isAuthorized={keycloak.hasRealmRole('admin')} redirectPath='/accessdenied' exact path='/admin'>
                        <Layout title='admin'>
                            <b>Ben je nu stoer ofzo!?</b>
                        </Layout>
                    </PrivateRoute>
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
                    {/*these are system routes 404 needs to go last*/}
                    <Route exact path='/accessdenied'>
                        <Layout title='access denied'>
                            jouw privileges houden hier op!
                        </Layout>
                    </Route>
                    <Route path='/'>
                        <Layout title='not found'>
                            error 404 wat doede gij hier dan????
                        </Layout> 
                    </Route>
                </Switch>
            ):
            (
                
                <h1>Loading...</h1>
                
            )}
        </div>
    );
}

export default App;
