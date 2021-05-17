import {Redirect, Route} from 'react-router'
//spread operator
export default function PrivateRoute({isAuthorized, redirectPath, ...routerProps}) {
  if(isAuthorized) {
    return <Route {...routerProps} />
  }
  
  return <Redirect to={{pathname: redirectPath}} />
}