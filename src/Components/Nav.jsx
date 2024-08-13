import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setSearchQuery } from "../actions/actions";

import WidgetSelector from "./WidgetSelector";

const Nav = () => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const handleSearch = (e) => {
    dispatch(setSearchQuery(e.target.value));
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          height: "30px",
          alignItems: "center",
          justifyContent: "space-around",
          gap: "20%",
          padding: "20px 40px",
          borderBottom: "1px solid #ddd",
        }}
      >
        <h1>CNAPP Dashboard</h1>
        <input
          type="text"
          placeholder="Search widgets..."
          onChange={handleSearch}
          style={{
            padding: "10px",
            width: "200px",
            marginRight: "10px",
            borderRadius: "4px",
            border: "1px solid #ddd",
            fontSize: "1rem",
          }}
        />
        <button
          style={{
            background: "white",
            border: "1px solid #ddd",
            borderRadius: "4px",
            padding: "10px",
            fontSize: "1rem",
            cursor: "pointer",
          }}
          onClick={openModal}
        >
          Edit Category +
        </button>
      </div>
      <WidgetSelector isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default Nav;
