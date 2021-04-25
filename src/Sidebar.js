import { Button } from "@material-ui/core";
import React from "react";
import "./Sidebar.css";
import InboxIcon from "@material-ui/icons/Inbox";
import SidebarOptions from "./SidebarOptions";
import StarIcon from "@material-ui/icons/Star";
import SnoozeIcon from "@material-ui/icons/Snooze";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/Send";
import ErrorIcon from "@material-ui/icons/Error";
import { useDispatch } from "react-redux";
import { openSendMEssage } from "./features/mailSlice";


function Sidebar() {
  const dispatch = useDispatch();

  return (
    <div className="sidebar">
      <Button
        className="compose_button"
        onClick={ () => dispatch(openSendMEssage()) }
      >
        <img src="https://www.gstatic.com/images/icons/material/colored_icons/1x/create_32dp.png" />
        &nbsp;&nbsp;Compose
      </Button>
      <SidebarOptions
        Icon={InboxIcon}
        title="Inbox"
        number={21}
        selected={true}
      />
      <SidebarOptions
        Icon={StarIcon}
        title="Starred"
        number={21}
        selected={false}
      />
      <SidebarOptions
        Icon={SnoozeIcon}
        title="Snoozed"
        number={21}
        selected={false}
      />
      <SidebarOptions
        Icon={LabelImportantIcon}
        title="Important"
        number={21}
        selected={false}
      />
      <SidebarOptions
        Icon={DraftsIcon}
        title="Draft"
        number={21}
        selected={false}
      />
      <SidebarOptions
        Icon={SendIcon}
        title="Sent"
        number={21}
        selected={false}
      />
      <SidebarOptions
        Icon={ErrorIcon}
        title="Spam"
        number={21}
        selected={false}
      />
    </div>
  );
}

export default Sidebar;
