import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import styles from "./MessageModal.module.css";
import Form from "react-bootstrap/Form";

const MessageModal = (props) => {

  const [msg, updateMsg] = useState({ subject: "", body: "" });

  return (
    <Modal {...props} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>Send message</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <div className="form-group">
            <label for="message-subject">
              Subject
            </label>
            <input
             className="form-control"
              type="text"
              id="message-subject"
              value={msg.subject}
              onChange={(e) => updateMsg({ subject: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label for="message-area">
              Message
            </label>
            <textarea
              className={[styles.message, "form-control"].join(" ")}
              id="message-area"
              value={msg.body}
              onChange={(e) => updateMsg({ body: e.target.value })}
            />
          </div>
          <Button type="submit" variant="success">Send</Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={props.onHide}>Cancel</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MessageModal;
