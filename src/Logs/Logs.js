import React, {useEffect, useState} from "react";
import Container from "react-bootstrap/Container";
import { useKeycloak } from "@react-keycloak/web";
import axios from "axios";
import { backendUrl } from "../utils/config";

const Logs = () => {
    const {keycloak} = useKeycloak();
    const [logs, setLogs] = useState([]);
    useEffect( () => {
        const fetch = async () => {
            const config = {
                headers: {
                   Authorization: `Bearer ${keycloak.token}`
                }
             }
            const result = await axios(`${backendUrl}/message/logs`, config);
            return result.data;
        }
        fetch().then(m => setLogs(m));
    }, [keycloak.token]);

    return (
        <Container>
            Logs:
            <hr/>
            {logs.map((log) => (
                <p>{log.description}</p>
                //<LogItem nessage={log}/>
            ))}
        </Container>
    );
};

export default Logs;