import React from 'react';
import AppBar from "@material-ui/core/AppBar/AppBar";
import Constants from "../utils/Constants";

/**
 * Component rendering Header of the application.
 */
function Header(){
    return (<AppBar className={'chatBus-header'}>{Constants.TITLE}</AppBar>);
}

export default Header;
