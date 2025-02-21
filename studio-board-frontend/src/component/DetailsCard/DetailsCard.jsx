import "./DetailsCard.scss";

import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import arrowBack from "../../assets/icons/arrow_back-24px.svg";
import saveIcon from "../../assets/icons/sort-24px.svg";
import applyIcon from "../../assets/icons/sort-24px.svg";
import appyModal from "../ApplyModal/ApplyModal";

export default function Details() {
  const baseURL = "http://localhost:3000";

  const { id: itemId } = useParams();
  const [warehouse, setWarehouse] = useState([]);
  const [inventory, setInventory] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedInventory, setSelectedInventory] = useState(null);

  useEffect(() => {
    const getWarehouseDetails = async () => {
      try {
        const response = await axios.get(`${baseURL}/api/warehouses/${itemId}`);
        setWarehouse(response.data);
      } catch (error) {
        console.log("Error fetching warehouse details:", error);
      }
    };

    const getWarehouseInventory = async () => {
      try {
        const response = await axios.get(
          `${baseURL}/api/warehouses/${itemId}/inventories`
        );
        setInventory(response.data);
      } catch (error) {
        console.log("Error fetching warehouse inventory:", error);
      }
    };
    getWarehouseDetails();
    getWarehouseInventory();
  }, [itemId]);

  const handleOpenModal = (inventory) => {
    setSelectedInventory(inventory);
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedInventory(null);
    setModalIsOpen(false);
  };

  const handleDeleteInventory = async (inventoryId) => {
    try {
      await axios.delete(`${baseURL}/api/inventories/${inventoryId}`);
      setInventory((prev) => prev.filter((i) => i.id !== inventoryId)); //
      handleCloseModal();
    } catch (error) {
      console.error("Error deleting inventory:", error);
      alert("Failed to delete inventory.");
    }
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <Link to="/">
          <img
            className="page-header__icon-arrow-back"
            src={arrowBack}
            alt="Back arrow icon"
          />
        </Link>

        <h2 className="page-header__title">{warehouse.warehouse_name}</h2>
        <Link to={`/warehouses/${warehouse.id}/edit`}>
          <img
            src={editIcon}
            alt="Edit Icon"
            className="item-details__edit-mobile"
          />
          <div className="item-details__edit-tablet">
            <img
              src={editIcon}
              alt="Edit Icon"
              className="item-details__edit-icon"
            />
            <p className="item-details__edit-text">Edit</p>
          </div>
        </Link>
      </div>

      <div className="detailContainer">
        <div className="warehouseAddress">
          <span className="warehouseAddress__title">ADDRESS</span>
          <p className="warehouseAddress__address">
            {`${warehouse.address}, ${warehouse.city}, ${warehouse.country}`}
          </p>
        </div>

        <div className="contactContainer">
          <div className="contactName">
            <span className="contactName__title">CONTACT NAME:</span>
            <p className="contactName__name">{warehouse.contact_name}</p>
            <p className="contactName__position">
              {warehouse.contact_position}
            </p>
          </div>

          <div className="contactInfo">
            <span className="contactInfo__title">CONTACT INFORMATION:</span>
            <p className="contactInfo__phone">{warehouse.contact_phone}</p>
            <p className="contactInfo__email">{warehouse.contact_email}</p>
          </div>
        </div>
      </div>

      <div className="item-by-warehouse__label">
        <div className="item-by-warehouse__label-item item-by-warehouse__label--item">
          <p className="item-by-warehouse__label-name">INVENTORY ITEM</p>
          <img
            src={sortIcon}
            alt="Sort Icon"
            className="item-by-warehouse__label-image"
          />
        </div>
        <div className="item-by-warehouse__label-item item-by-warehouse__label-item--category">
          <p className="item-by-warehouse__label-name">CATEGORY</p>
          <img
            src={sortIcon}
            alt="Sort Icon"
            className="item-by-warehouse__label-image"
          />
        </div>
        <div className="item-by-warehouse__label-item item-by-warehouse__label-item--status">
          <p className="item-by-warehouse__label-name">STATUS</p>
          <img
            src={sortIcon}
            alt="Sort Icon"
            className="item-by-warehouse__label-image"
          />
        </div>
        <div className="item-by-warehouse__label-item item-by-warehouse__label-item--qty">
          <p className="item-by-warehouse__label-name">QUANTITY</p>
          <img
            src={sortIcon}
            alt="Sort Icon"
            className="item-by-warehouse__label-image"
          />
        </div>
        <div className="item-by-warehouse__label-item item-by-warehouse__label-item--actions">
          <p className="item-by-warehouse__label-name ">ACTIONS</p>
        </div>
      </div>
      <ul>
        {inventory.map((item) => (
          <DetailsCard
            key={item.id}
            inventoryItem={item}
            onDelete={() => handleOpenModal(item)}
          />
        ))}
      </ul>

      <InventoryDeleteModal
        isOpen={modalIsOpen}
        inventory={selectedInventory}
        onCancel={handleCloseModal}
        onDelete={handleDeleteInventory}
      />
    </div>
  );
}
