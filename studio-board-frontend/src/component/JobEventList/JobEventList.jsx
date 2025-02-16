import "./JobEventList.scss";
import JobEventCard from "../JobEventList/JobEventList";
import Modal from "../Modal/Modal";
import sortIcon from "../../assets/icons/sort-24px.svg";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; //remove

const baseURL = "http://localhost:8080";

function InventoryList() {
  const [inventories, setInventories] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedInventory, setSelectedInventory] = useState(null);
  const [searchInventory, setSearchInventory] = useState("");

  const getInventoryList = async () => {
    try {
      const response = await axios.get(`${baseURL}/api/inventories`);
      setInventories(response.data);
    } catch (error) {
      console.log("no inventory items were found");
    }
  };

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
      setInventories((prev) => prev.filter((i) => i.id !== inventoryId)); //
      handleCloseModal();
    } catch (error) {
      console.error("Error deleting inventory:", error);
      alert("Failed to delete inventory.");
    }
  };

  useEffect(() => {
    getInventoryList();
  }, []);

  const filteredInventories = inventories.filter((inventory) =>
    inventory.item_name.toLowerCase().includes(searchInventory.toLowerCase())
  );

  import React from 'react';

const jobData = {
  organization_name: "Studio Board",
  category: "job",
  type: "full-time",
  title: "Film Editor",
  location: "Toronto, Canada",
  remote: false,
  timestamp: new Date().toISOString(),
  description: "Seeking an experienced film editor to work on an upcoming independent feature film. Must have proficiency in Adobe Premiere Pro and DaVinci Resolve."
};

export default function JobBoardCard() {
  return (
    <div className="job-board-card">
      <div className="job-board-header">
        <h3 className="job-title">{jobData.title}</h3>
        <span className="job-type">{jobData.type}</span>
      </div>
      <div className="job-board-details">
        <p className="job-org">{jobData.organization_name}</p>
        <p className="job-location">{jobData.location}</p>
        <p className="job-remote">{jobData.remote ? "Remote" : "On-site"}</p>
      </div>
      <div className="job-board-description">
        <p>{jobData.description}</p>
      </div>
      <div className="job-board-footer">
        <p className="job-posted">
          Posted on: {new Date(jobData.timestamp).toLocaleDateString()}
        </p>
        <button className="apply-button">Apply Now</button>
      </div>
    </div>
  );
}

  return (
    <>
      <section className="inventory">
        <div className="inventory__header">
          <h1 className="inventory__page--header">Inventory</h1>
          <div className="inventory__input-wrapper">
            <form className="inventory__form">
              <input
                className="inventory__input"
                type="text"
                id="search"
                name="query"
                placeholder="Search..."
                value={searchInventory}
                onChange={(event) => setSearchInventory(event.target.value)}
              />
              <Link to="/inventory/add">
                <button className="inventory__button" type="button">
                  + Add New Item
                </button>
              </Link>
            </form>
          </div>
        </div>
        <div className="inventory__wrapper">
          <div className="inventory__labels-panel">
            <div className="inventory__label--inventory">
              <p className="inventory__label--tablet">inventory item</p>
              <img
                className="inventory__icon--tablet"
                src={sortIcon}
                alt="sort icon"
              />
            </div>
            <div className="inventory__label--category">
              <p className="inventory__label--tablet">Category</p>
              <img
                className="inventory__icon--tablet"
                src={sortIcon}
                alt="sort icon"
              />
            </div>
            <div className="inventory__label--status">
              <p className="inventory__label--tablet">Status</p>
              <img
                className="inventory__icon--tablet"
                src={sortIcon}
                alt="sort icon"
              />
            </div>
            <div className="inventory__label--quantity">
              <p className="inventory__label--tablet">QTY</p>
              <img
                className="inventory__icon--tablet"
                src={sortIcon}
                alt="sort icon"
              />
            </div>
            <div className="inventory__label--warehouse">
              <p className="inventory__label--tablet">warehouse</p>
              <img
                className="inventory__icon--tablet"
                src={sortIcon}
                alt="sort icon"
              />
            </div>
            <div className="inventory__label--action">
              <p className="inventory__label--tablet">actions</p>
            </div>
          </div>
          <ul className="inventory__list">
            {filteredInventories.map((inventory) => {
              return (
                <InventoryListCard
                  key={inventory.id}
                  inventory={inventory}
                  onDelete={() => handleOpenModal(inventory)}
                />
              );
            })}
          </ul>
          <InventoryDeleteModal
            isOpen={modalIsOpen}
            inventory={selectedInventory}
            onCancel={handleCloseModal}
            onDelete={handleDeleteInventory}
          />
        </div>
      </section>
    </>
  );
}

export default InventoryList;
