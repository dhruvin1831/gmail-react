import { Checkbox, IconButton } from "@material-ui/core";
import {
  ArrowDropDown,
  ChevronLeft,
  ChevronRight,
  KeyboardHide,
  MoreVert,
  Redo,
  Settings,
  People,
  LocalOffer,
} from "@material-ui/icons";
import InboxIcon from "@material-ui/icons/Inbox";
import EmailRow from "./EmailRow";
import React from "react";
import "./EmailList.css";
import Section from "./Section";

function EmailList() {
  return (
    <div className="emailList">
      <div className="emailList__settings">
        <div className="emailList__settingsLeft">
          <Checkbox />
          <IconButton>
            <ArrowDropDown />
          </IconButton>
          <IconButton>
            <Redo />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
        <div className="emailList__settingsRight">
          <IconButton>
            <ChevronLeft />
          </IconButton>
          <IconButton>
            <ChevronRight />
          </IconButton>
          <IconButton>
            <KeyboardHide />
          </IconButton>
          <IconButton>
            <Settings />
          </IconButton>
        </div>
      </div>
      <div className="emailList__sections">
        <Section Icon={InboxIcon} title="Primary" color="red" selected />
        <Section Icon={People} title="Social" color="#1A73EB" />
        <Section Icon={LocalOffer} title="Promotions" color="green" />
      </div>
      <div className="emailList__list">
        <EmailRow
          title="Hello"
          subject="hey there"
          description="today is holidar"
          time="12am"
        />
        <EmailRow
          title="HelloemailRow__timeemailRow__timeemailRow__timeemailRow__timeemailRow__time"
          subject="hey there"
          description="today is holidaremailRow__titleemailRow__titleemailRow__titleemailRow__titleemailRow__titleemailRow__titleemailRow__title"
          time="12am"
        />
        <EmailRow
          title="Hello"
          subject="hey there"
          description="today is holidar"
          time="12am"
        />
      </div>
    </div>
  );
}

export default EmailList;
