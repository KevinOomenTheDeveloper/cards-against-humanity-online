import React from 'react';
import "./Layout.scss"
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = (props) => {
    return (
        <div>
            <Header headerTitle={props.title}/>
            { props.children}
            <Footer />
        </div>
    );
};

export default Layout;