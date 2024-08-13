import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteWidget } from "../actions/actions";
import AddWidgetForm from "./AddWidgetForm";

const Dashboard = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const categories = useSelector((state) => {
    const searchQuery = state.dashboard.searchQuery.toLowerCase();

    return state.dashboard.categories.map((category) => ({
      ...category,
      widgets: category.widgets.filter((widget) =>
        widget.name.toLowerCase().includes(searchQuery)
      ),
    }));
  });

  const dispatch = useDispatch();
  const [activeCategory, setActiveCategory] = useState(null);

  const handleAddWidgetClick = (categoryId) => {
    setActiveCategory(categoryId);
  };

  const handleCloseForm = () => {
    setActiveCategory(null);
  };

  const handleDeleteWidget = (categoryId, widgetId) => {
    dispatch(deleteWidget(categoryId, widgetId));
  };

  return (
    <div style={{ padding: "20px 60px" ,overflow:"auto"}}>
      {categories.map((category) => (
        <div key={category.id} style={{ marginBottom: "20px" }}>
          <h2>{category.name}</h2>
          <div  style={{ display: "flex", gap: "20px",flexWrap:"wrap" }}>
            {category.widgets
              .filter((widget) => widget.visible)
              .map((widget) => (
                <div
                key={widget.id}
                  style={{
                    
                    position: "relative",
                    padding: "15px",
                    width: "300px",
                    height:"100px",
                    background: "white",
                    borderRadius: "15px",
                    border: "1px solid #ddd",

                  }}
                >
                  <h3>{widget.name}</h3>
                  <p> {widget.text}</p>
                  <button
                    onClick={() => handleDeleteWidget(category.id, widget.id)}
                    style={{
                      position: "absolute",
                      right: "0",
                      top: "0",
                      border: "none",
                      background: "none",
                      fontSize: "20px",
                      cursor: "pointer",
                    }}
                  >
                    ❌
                  </button>
                </div>
              ))}

            {activeCategory === category.id ? (
              <AddWidgetForm
                categoryId={category.id}
                onClose={handleCloseForm}
              />
            ) : (
              <div
                style={{
                  padding: "15px",
                  width: "300px",
                  height:"100px",
                  background: "white",
                  borderRadius: "15px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent:"center",
                  fontSize: "20px",
                  border: "1px solid #ddd",
                 
                }}
                onClick={() => handleAddWidgetClick(category.id)}
              >
                + Add Widget
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
