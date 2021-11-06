import React from 'react';
import '../styles/modal.css'

const Modal = ({ handleClose, show, session }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  console.log(session)

  return (
    <>
      {
        session &&
        <div className={showHideClassName}>
         
            <div className="modal-main" key={session._id}>
              <h2 className="modal-title">{session.title}</h2>
              <h2 className="modal-body">{session.body}</h2>
              <h2 className="modal-date">{session.date}</h2>
              <h2 className="modal-time">{session.time}</h2>
              <button class="modal-button" type="button" onClick={handleClose}>
              Close
            </button>
            </div>        
        </div>
      }
    </>
  );
};

export default Modal
