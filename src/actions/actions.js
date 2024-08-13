export const ADD_WIDGET = 'ADD_WIDGET';
export const DELETE_WIDGET = 'DELETE_WIDGET';
export const TOGGLE_WIDGET_VISIBILITY = 'TOGGLE_WIDGET_VISIBILITY';
export const SET_SEARCH_QUERY = 'SET_SEARCH_QUERY';
export const GET_WIDGETS = 'GET_WIDGETS';

export const addWidget = (categoryId, name, text) => ({
  type: ADD_WIDGET,
  payload: {
    categoryId,
    newWidget: {
      id: `widget${Date.now()}`,
      name,
      text,
      visible: true
    }
  }
});

export const deleteWidget = (categoryId, widgetId) => ({
  type: DELETE_WIDGET,
  payload: { categoryId, widgetId }
});

export const toggleWidgetVisibility = (categoryId, widgetId) => ({
  type: TOGGLE_WIDGET_VISIBILITY,
  payload: { categoryId, widgetId }
});

export const setSearchQuery = (query) => ({
  type: SET_SEARCH_QUERY,
  payload: query
});

