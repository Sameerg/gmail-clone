import React from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import {Avatar, IconButton} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AppsIcon from '@material-ui/icons/Apps';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser, userSlice } from "./features/userSlice";
import { auth } from "./firebase";
import { useHistory } from "react-router-dom";

function Header() {
const user = useSelector(selectUser);
const dispatch = useDispatch(userSlice);
const history = useHistory();

const signOut = () => {
  auth.signOut().then(() =>{
    dispatch(logout);
    alert('Loged Out!');
    window.location.reload();
  })
}

  return (
    <div className="header">
      <div className="header_left">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img
          src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png"
          alt="gmail"
        />
      </div>
      <div className="header_middle">
        <SearchIcon />
        <input placeholder="Search mail" type="text"></input>
        <ArrowDropDownIcon className="header_inputCaret" />
      </div>
      
      <div className="header_right"> 
      <IconButton>
          <HelpOutlineOutlinedIcon />
        </IconButton>
      <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
      <IconButton>
          <AppsIcon />
        </IconButton>
        <Avatar onClick={signOut} src={user?.photoUrl}/>
      </div>
    </div>
  );
}

export default Header;
