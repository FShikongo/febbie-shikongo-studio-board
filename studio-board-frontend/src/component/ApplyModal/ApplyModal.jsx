import React from "react";
import ReactModal from "react-modal";
import "./Modal.scss";
import CloseIcon from "../../assets/icons/close-24px.svg";

ReactModal.setAppElement("#root");

export default function InventoryDeleteModal({
  isOpen,
  inventory,
  onCancel,
  onDelete,
}) {
  if (!inventory) return null;

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

      <h2 className="modal__title">Delete {inventory.item_name} item?</h2>
      <p className="modal__message">
        Please confirm that you’d like to delete the {inventory.item_name} from
        the list of inventory. You won’t be able to undo this action.
      </p>
      <div className="modal__actions">
        <button
          className="modal__button modal__button--cancel"
          onClick={onCancel}
        >
          Cancel
        </button>
        <button
          className="modal__button modal__button--delete"
          onClick={() => onDelete(inventory.id)}
        >
          Delete
        </button>
      </div>
    </ReactModal>
  );
}
