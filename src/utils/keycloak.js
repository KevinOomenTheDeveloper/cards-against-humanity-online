import Keycloak from 'keycloak-js'

const config = {
  "realm": "cards-against-humanity-online",
  "clientId": "front-end",
  "url": "http://localhost:8180/auth"
};
const init = {
    onLoad: 'login-required'
}
const keycloak = Keycloak(config);

export default keycloak;
export {config, init};