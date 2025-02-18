import "./JobEventCard.scss";
import "./InventoryListCard.scss";
import { Link } from "react-router-dom";

import chevronRight from "../../assets/icons/chevron_right-24px.svg";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";

export default function InventoryListCard({ inventory, onDelete }) {
  return (
    <>
      <li className="inventory-list">
        <div className="inventory-list__wrapper">
          <div className="inventory-list__item-container">
            <div className="inventory-list__top-container">
              <div className="inventory-list__column1">
                <div className="inventory-list__container--label">
                  <p className="inventory-list__label">Inventory item</p>
                  <div className="inventory-list__header">
                    <Link
                      to={`/inventory/${inventory.id}`}
                      className="inventory-list__link"
                    >
                      <h4 className="inventory-list__name">
                        {inventory.item_name}
                      </h4>
                      <img
                        className="inventory-list__icon"
                        src={chevronRight}
                        alt="chevron right"
                      />
                    </Link>
                  </div>
                </div>
                <div className="inventory-list__container--category">
                  <p className="inventory-list__label">Category</p>
                  <p className="inventory-list__category">
                    {inventory.category}
                  </p>
                </div>
              </div>
              <div className="inventory-list__column2">
                <div className="inventory-list__container--status">
                  <p className="inventory-list__label">Status</p>
                  <div
                    className={`inventory-list__status ${
                      inventory.status.toLowerCase().trim() === "out of stock"
                        ? "inventory-list__status--red"
                        : ""
                    }`}
                  >
                    {inventory.status}
                  </div>
                </div>
                <div className="inventory-list__container--qty">
                  <p className="inventory-list__label">Qty</p>
                  <p className="inventory-list__quantity">
                    {inventory.quantity}
                  </p>
                </div>
                <div className="inventory-list__container--warehouse">
                  <p className="inventory-list__label">Warehouse</p>
                  <p className="inventory-list__warehouse-name">
                    {inventory.warehouse_name}
                  </p>
                </div>
              </div>
            </div>
            <div className="inventory-list__actions">
              <img
                className="inventory-list__icon"
                src={deleteIcon}
                alt="delete icon"
                onClick={onDelete}
              />
              <Link to={`/inventory/${inventory.id}/edit`}>
                <img
                  className="inventory-list__icon"
                  src={editIcon}
                  alt="edit icon"
                />
              </Link>
            </div>
          </div>
        </div>
      </li>
    </>
  );
}
