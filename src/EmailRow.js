import React from "react";
import "./EmailRow.css";
import { Checkbox, IconButton } from "@material-ui/core";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import LabelImportantOutlinedIcon from "@material-ui/icons/LabelImportantOutlined";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectMail } from "./features/mailSlice";

function EmailRow({ id, subject, title, description, time }) {
const history = useHistory();
const dispatch = useDispatch();


const openMail = () => {
    dispatch(selectMail({id, subject, title, description, time }));
    history.push("/mail");
} ;

  return (
    <div onClick={openMail} className="emailrow">
      <div className="emailrow_option">
        <Checkbox />
        <IconButton>
          <StarBorderOutlinedIcon  />
        </IconButton>
        <IconButton>
          <LabelImportantOutlinedIcon  />
        </IconButton>
      </div>
      <h3 className="emailrow_title">{title}</h3>
      <div className="emailrow_subject">
        <h4>{subject}</h4> 
        &nbsp; - &nbsp; 
        <span className="emailrow_description">{description}</span>
      </div>
      <div className="emailrow_time">{time}</div>
    </div>
  );
}

export default EmailRow;
