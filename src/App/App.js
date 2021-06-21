import { Route, Switch } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Home/Home";
import Logs from "../Logs/Logs";
import WebSocketTest from "../WebSocketTest/WebSocketTest";
import "bootstrap/dist/css/bootstrap.min.css";
import { useKeycloak } from "@react-keycloak/web";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Chat from "../Chat/Chat";

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
                        <Layout title="Chat">
                            <Chat token={keycloak.token} name={keycloak.idTokenParsed.preferred_username}/>
                        </Layout>
                    </Route>
                    <Route exact path='/home'>
                        <Layout title="chat">
                            <Chat token={keycloak.token} name={keycloak.idTokenParsed.preferred_username}/>
                        </Layout>
                    </Route>
                    <Route exact path='/logs'>
                        <Layout title="logs">
                            <Logs />
                        </Layout>
                    </Route>
                    <Route exact path='/test'>
                        <Layout title="Test">
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
