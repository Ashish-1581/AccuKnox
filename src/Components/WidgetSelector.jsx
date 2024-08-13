import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleWidgetVisibility } from "../actions/actions";

const WidgetSelector = ({ isOpen, onClose }) => {
  const categories = useSelector((state) => state.dashboard.categories);
  const dispatch = useDispatch();

  const handleToggleVisibility = (categoryId, widgetId) => {
    dispatch(toggleWidgetVisibility(categoryId, widgetId));
  };
  if (!isOpen) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            background: "#18181B",
            padding: "10px 20px",
            position: "fixed",
            width: "47%",
          }}
        >
          <h3>Select Widgets</h3>
          <button
            style={{
              background: "none",
              outline: "none",
              border: "none",
              fontSize: "30px",
              cursor: "pointer",
            }}
            onClick={onClose}
          >
            ❌
          </button>
        </div>

        <p
          style={{
            color: "black",
            textAlign: "center",
            paddingTop: "80px",
            fontSize: "1.2rem",
          }}
        >
          Personalise your dashboard by adding the following widgets.
        </p>

        {categories.map((category) => (
          <div style={{ color: "black", padding: "20px" }} key={category.id}>
            <h3>{category.name}</h3>
            <ul>
              {category.widgets.map((widget) => (
                <li key={widget.id}>
                  <input
                    type="checkbox"
                    checked={widget.visible}
                    onChange={() =>
                      handleToggleVisibility(category.id, widget.id)
                    }
                  />
                  {widget.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
        <button
          style={{
            position: "fixed",
            bottom: "30px",
            right: "30px",
            background: "#18181B",
            color: "white",
            padding: "20px",
            outline: "none",
            border: "none",
            fontSize: "1.2rem",
            cursor: "pointer",
            borderRadius: "10px",
            zIndex: 1002,
          }}
          onClick={onClose}
        >
          Confirm
        </button>
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
    justifyContent: "flex-end",
    zIndex: 1000,
  },
  modal: {
    background: "white",

    width: "50%",
    height: "auto",
    color: "white",
    overflow: "auto",

    zIndex: 1001,
  },
};

export default WidgetSelector;
