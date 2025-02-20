import React from "react";
import ReactModal from "react-modal";
import "./ApplyModal.scss";
import CloseIcon from "../../assets/icons/close-24px.svg";

ReactModal.setAppElement("#root");

export default function ApplyModal({ isOpen, jobOrEvent, onCancel, onApply }) {
  if (!jobOrEvent) return null;

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onCancel}
      className="modal"
      overlayClassName="modal-overlay"
      shouldFocusAfterRender={true}
      shouldCloseOnEsc={true}
    >
      <button
        className="modal__close-button"
        onClick={onCancel}
        aria-label="Close modal"
      >
        <img src={CloseIcon} alt="Close" />
      </button>

      <h2 className="modal__title">Apply for {jobOrEvent.title}</h2>
      <p className="modal__message">
        Please confirm that you'd like to apply for the {jobOrEvent.title} at
        {jobOrEvent.organization}. This application may include submitting a
        resume or other details depending on the event or job requirements.
      </p>
      <div className="modal__actions">
        <button
          className="modal__button modal__button--cancel"
          onClick={onCancel}
        >
          Cancel
        </button>
        <button
          className="modal__button modal__button--apply"
          onClick={() => onApply(jobOrEvent.id)}
        >
          Apply
        </button>
      </div>
    </ReactModal>
  );
}
