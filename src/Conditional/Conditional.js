import React from 'react';

export default function Conditional ({display, children}) {
  if(!display) {
    return <></>
  }
  //react artifact
  return (<>{children}</>);
}