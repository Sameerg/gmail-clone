import { IconButton } from "@material-ui/core";
import React from "react";
import "./Mail.css";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArchiveIcon from "@material-ui/icons/Archive";
import DeleteIcon from "@material-ui/icons/Delete";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import ErrorIcon from "@material-ui/icons/Error";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import FolderSpecialIcon from "@material-ui/icons/FolderSpecial";
import PrintIcon from "@material-ui/icons/Print";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { selectOpenMail } from './features/mailSlice';
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

function Mail() {
  const history = useHistory();
  const selectedMail = useSelector(selectOpenMail);


  return (
    <div className="mail">
      <div className="mail_tools">
        <div className="mail_toolsLeft">
          <IconButton  onClick={() => history.push("/")}>
            <ArrowBackIcon />
          </IconButton>
          <IconButton>
            <ArchiveIcon />
          </IconButton>
          <IconButton>
            <ErrorIcon />
          </IconButton>
          <IconButton>
            <DeleteIcon />
          </IconButton>
          <span>|</span>
          <IconButton>
            <MailOutlineIcon />
          </IconButton>
          <IconButton>
            <WatchLaterIcon />
          </IconButton>
          <IconButton>
            <CheckCircleIcon />
          </IconButton>
          <span>|</span>
          <IconButton>
            <FolderSpecialIcon />
          </IconButton>
          <IconButton>
            <LabelImportantIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className="mail_toolsRight">
          <IconButton>
            <PrintIcon />
          </IconButton>
          <IconButton>
            <ExitToAppIcon />
          </IconButton>
        </div>
      </div>
      <div className="mail_body">
          <div className="mail_header">
              <h2>{selectedMail?.subject}</h2>
              <LabelImportantIcon className="mail_important" />
              <p>{selectedMail?.title}</p>
              <p className="mail_time">{selectedMail?.time}</p>
          </div>
          <div className="mail_message">
              {selectedMail?.description}
          </div>
      </div>
    </div>
  );
}

export default Mail;
