//import { send } from 'q';
import React, {Component} from 'react';
import SockJsClient from 'react-stomp';
import axios from "axios";
import { backendUrl } from "../utils/config";
//import { useKeycloak } from "@react-keycloak/web";
//import 'App.scss';
//import Button from '@material-ui/core/Button';
//import TextField from '@material-ui/core/TextField';
//import './css/MessageStyle.css';
//import NameComponent from "./components/NameComponent";

class Chat extends Component {
    token = null;
    name = null;

    constructor(props) {
        super(props);
        this.state = {
            messages: [],
            typedMessage: ""
        }
        this.token = props.token;
        this.name = props.name;
    }

    setName = (name) => {
        //console.log(name);
        this.setState({name: name});
    };

    sendMessage = () => {
        this.clientRef.sendMessage('/app/user-all', JSON.stringify({
            name: this.name,
            message: this.state.typedMessage
        }));

        const logMessage = async () => 
        {
            console.log(this.state.typedMessage);
            const config = {
                headers: {
                   Authorization: `Bearer ${this.token}`
                }
            }
            await axios.post(`${backendUrl}/message/create`, { description: this.state.typedMessage }, config);
        }
        logMessage();
    };

    displayMessages = () => {
        return (
            <div>
                {this.state.messages.map(msg => {
                    return (
                        <div>
                            <div>
                                <p className="title1">{msg.name} : </p>
                                <p>{msg.message}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        );
    };

    render() {
        return (
            <div>
                <div className="align-center">
                    <h1>Welcome to Web Sockets</h1>
                    <br/><br/>
                </div>
                <div className="align-center">
                    User : <p className="title1"> {this.name}</p>
                </div>
                <div className="align-center">
                    <br/><br/>
                    <table>
                        <tr>
                            <td>
                                <div id="outlined-basic" label="Enter Message to Send">
                                  <input type="text" 
                                    onChange={(event) => {
                                      this.setState({typedMessage: event.target.value});
                                    }}></input>
                                </div>
                            </td>
                            <td>
                            <button onClick={this.sendMessage}>Send</button>
                            </td>
                        </tr>
                    </table>
                </div>
                <br/><br/>
                <div className="align-center">
                    {this.displayMessages()}
                </div>
                <SockJsClient url='http://localhost:9012/websocket-chat/'
                  topics={['/topic/user']}
                  onConnect={() => {
                      console.log("connected");
                  }}
                  onDisconnect={() => {
                      console.log("Disconnected");
                  }}
                  onMessage={(msg) => {
                      var jobs = this.state.messages;
                      jobs.push(msg);
                      this.setState({messages: jobs});
                      //console.log(this.state);
                  }}
                  ref={(client) => {
                      this.clientRef = client
                  }}
                />
            </div>
        )
    }
}

export default Chat;

/*export function GetKeycloakId(){
    const {initialized, keycloak} = useKeycloak();
    console.log(keycloak.token);
    //return keycloak.idToken
    
}*/