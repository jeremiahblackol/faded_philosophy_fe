import React, {Component}from "react";
import Header from "../Header";
import DropdownContainer from "../DropdownContainer"

class Home extends Component {
    render() {
        return (
            <>
                <Header />
                <DropdownContainer />
            </>
        )
    }
}

export default Home; 