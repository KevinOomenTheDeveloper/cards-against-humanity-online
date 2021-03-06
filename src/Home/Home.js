import React, {useEffect, useState} from "react";
import "./Home.scss"
import Container from "react-bootstrap/Container";
import { useKeycloak } from "@react-keycloak/web";
import axios from "axios";
import { backendUrl } from "../utils/config";

const Home = () => {
    const {keycloak} = useKeycloak();
    const [content, updateContent] = useState("");
    useEffect( () => {
        const fetch = async () => 
        {
            const config = {
                headers: {
                   Authorization: `Bearer ${keycloak.token}`
                }
             }
            const result = await axios(`${backendUrl}/message/logs`, config);
            return result.data;
        }
        fetch().then(d => updateContent(JSON.stringify(d))).catch(e => console.log(e));
    }, [keycloak.token]);

    return (
        <Container>
            {content}
        </Container>
    );
};

export default Home;