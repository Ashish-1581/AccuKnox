import { ADD_WIDGET, DELETE_WIDGET, TOGGLE_WIDGET_VISIBILITY,SET_SEARCH_QUERY } from '../actions/actions';

const initialState = {
  categories: [
    {
      id: 'id1',
      name: 'CSPM Executive Dashboard',
      widgets: [
        {
          id: 'widget1',
          name: 'Cloud Accounts',
          text: 'Displays cloud accounts',
          visible: true
        },
        {
          id: 'widget2',
          name: 'Cloud Accounts Risk Assessment',
          text: 'Risks associated with your cloud accounts',
          visible: true
        }
      ]
    },
    {
      id: 'id2',
      name: 'CWPP Dashboard',
      widgets: [
        {
          id: 'widget3',
          name: 'Top 5 Namespaces Specific Alerts',
          text: 'Displays lead data',
          visible: true
        },
        {
          id: 'widget4',
          name: 'Workload Alerts',
          text: 'workload alerts to be displayed',
          visible: true
        }
      ]
    },
    {
      id: 'id3',
      name: 'Registry Scan',
      widgets: [
        {
          id: 'widget5',
          name: 'Image risk assessment',
          text: 'Displays risk assessment of images',
          visible: true
        },
        {
          id: 'widget6',
          name: 'Image security issues',
          text: 'Displays security issues of images',
          visible: true
        }
      ]
    }
  ],
   searchQuery: ''
};

const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_WIDGET:
      return {
        ...state,
        categories: state.categories.map(category =>
          category.id === action.payload.categoryId
            ? { ...category, widgets: [...category.widgets, action.payload.newWidget] }
            : category
        )
      };
    case DELETE_WIDGET:
      return {
        ...state,
        categories: state.categories.map(category =>
          category.id === action.payload.categoryId
            ? { ...category, widgets: category.widgets.filter(widget => widget.id !== action.payload.widgetId) }
            : category
        )
      };
    case TOGGLE_WIDGET_VISIBILITY:
      return {
        ...state,
        categories: state.categories.map(category =>
          category.id === action.payload.categoryId
            ? {
              ...category,
              widgets: category.widgets.map(widget =>
                widget.id === action.payload.widgetId
                  ? { ...widget, visible: !widget.visible }
                  : widget
              )
            }
            : category
        )
      };
      case SET_SEARCH_QUERY:
        return {
          ...state,
          searchQuery: action.payload
        };

    default:
      return state;
  }
};

export default dashboardReducer;