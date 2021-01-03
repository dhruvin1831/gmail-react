import { Button } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import React from "react";
import "./SendMail.css";
import { useForm } from "react-hook-form";

function SendMail() {
  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h3>New Message</h3>
        <Close className="sendMail__close" />
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="to"
          placeholder="To"
          type="text"
          ref={register({ required: true })}
        />

        {errors.to && <p className="sendMail__error">To is required!</p>}
        <input
          name="subject"
          placeholder="Subject"
          type="text"
          ref={register({ required: true })}
        />
        {errors.subject && (
          <p className="sendMail__error">Subject is required!</p>
        )}
        <input
          name="message"
          className="sendMail__message"
          placeholder="Message..."
          type="text"
          ref={register({ required: true })}
        />
        {errors.message && (
          <p className="sendMail__error">Message is required!</p>
        )}

        <div className="sendMail__options">
          <Button
            className="sendMail__send"
            type="submit"
            color="primary"
            variant="contained"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SendMail;
