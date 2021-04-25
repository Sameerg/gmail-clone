import { Checkbox } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./EmailList.css";
import { IconButton } from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import RefreshOutlinedIcon from "@material-ui/icons/RefreshOutlined";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import KeyboardHideIcon from "@material-ui/icons/KeyboardHide";
import InboxIcon from "@material-ui/icons/Inbox";
import Section from "./Section";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import PeopleIcon from "@material-ui/icons/People";
import ForumIcon from "@material-ui/icons/Forum";
import EmailRow from "./EmailRow";
import { db } from "./firebase";

function EmailList() {
  const [emails, setEmails] = useState([]);
  useEffect(() => {
    db.collection("emails")
    .orderBy("timestamp", "desc")
    .onSnapshot((snapshot) => {
      setEmails(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
      });

  }, []);

  return (
    <div className="emailList">
      <div className="settings">
        <div className="settings_left">
          <Checkbox />
          <IconButton style={{ marginLeft: "-25px" }}>
            <ArrowDropDownIcon />
          </IconButton>
          <IconButton>
            <RefreshOutlinedIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className="settings_right">
          <IconButton>
            <ChevronLeftIcon />
          </IconButton>
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
          <IconButton>
            <KeyboardHideIcon />
          </IconButton>
        </div>
      </div>
      <div className="sections">
        <Section Icon={InboxIcon} title="Primary" color="#D93025" selected />
        <Section Icon={PeopleIcon} title="Social" color="blue" />
        <Section Icon={LocalOfferIcon} title="Promotion" color="green" />
        <Section Icon={ForumIcon} title="Forums" color="purple" />
      </div>
      <div className="list_emailrow">
        {
          emails.map(({ id, data }) =>
            <EmailRow
          id={id}
          key={id}
          subject={data.subject}
          title={data.to}
          description={data.message}
          time={new Date(data.timestamp?.seconds *1000).toUTCString() }
        />
          )
          
        }
        
        <EmailRow
          id="1"
          subject="this is a subject"
          title="test title"
          description="test description"
          time="10 PM"
        />
      </div>
    </div>
  );
}

export default EmailList;
