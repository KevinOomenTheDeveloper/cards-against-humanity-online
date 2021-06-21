import Keycloak from 'keycloak-js';
import {keyCloakUrl, keyCloakRealm, keyCloakClientId} from './config';

console.log(keyCloakClientId, keyCloakUrl , keyCloakRealm);
const config = {
  "realm": keyCloakRealm,
  "clientId": keyCloakClientId,
  "url": keyCloakUrl
};

const init = {
    onLoad: 'login-required'
}
const keycloak = Keycloak(config);

export default keycloak;
export {config, init};