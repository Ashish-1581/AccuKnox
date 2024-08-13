import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addWidget } from "../actions/actions";

const AddWidgetForm = ({ categoryId, onClose }) => {
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleAddWidget = () => {
    if (name && text) {
      dispatch(addWidget(categoryId, name, text));
      onClose();
    }
  };

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <h3>Add New Widget</h3>
        <input
          style={styles.input}
          type="text"
          placeholder="Widget Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          style={styles.input}
          type="text"
          placeholder="Widget Text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div style={{display:"flex",justifyContent:"space-between",marginTop:"5px"}}>
        <button style={styles.button} onClick={handleAddWidget}>
          Add Widget
        </button>
        <button style={styles.button} onClick={onClose}>
          Cancel
        </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(0, 0, 0, 0.5)",
    display: "flex",

    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
  },
  modal: {
    background: "#18181B",
    width: "300px",
    height: "200px",
    color: "white",
    padding: "20px",
    borderRadius: "8px",

    zIndex: 1001,
  },
  input: {
    margin: "10px 0",
    padding: "10px",
    width: "90%",
    outline: "none",
    background: "#2e2e34",
    borderRadius: "5px",
    color: "white",
    border: "none",
  },
  button: {
    padding: "8px",
    borderRadius: "5px",
    border: "none",
    background: "none",
    color: "white",
    fontSize: "1rem",
    cursor: "pointer",
    border: "1px solid white",
  },
};

export default AddWidgetForm;
