import React from "react";

class Sidebar extends React.Component {
    render() {
        return (
            <div className="sidenav">
                <a href="#about">About</a>
                <a href="#services">Services</a>
                <a href="#clients">Clients</a>
                <a href="#contact">Contact</a>
            </div>
        );
    }
}

export default Sidebar;
