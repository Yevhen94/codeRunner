const SET_REPO = "SET_REPO";
const SET_LOADING = "SER_LOADING";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_SEARCHING = "SER_SEARCHING";
const SET_FAVOUR_LIST = "SET_FAVOUR_LIST";
const SET_VIEW_MORE = "SET_VIEW_MORE";
const CHANGE_FAVOUR = "CHANGE_FAVOUR";
const SET_ITEMS = "SET_ITEMS";

const defaultState = {
  items: [],
  loading: false,
  currPage: 1,
  perPage: 10,
  totalItems: 0,
  searching: "",
  // Add to favourits repo
  favourList: [],
  singlePageContent: {},
};

export const reposReduser = (state = defaultState, action) => {
  switch (action.type) {
    case SET_REPO:
      return {
        ...state,
        items: action.payload.items,
        totalItems: action.payload.total_count,
        loading: false,
      };
    case SET_ITEMS:
      return {
        ...state,
        items: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currPage: action.payload,
      };
    case SET_SEARCHING:
      return {
        ...state,
        searching: action.payload,
      };

    case SET_FAVOUR_LIST:
      return {
        ...state,
        favourList: [...state.favourList, action.payload],
      };
    case CHANGE_FAVOUR:
      return {
        ...state,
        favourList: action.payload,
      };
    case SET_VIEW_MORE:
      return {
        ...state,
        singlePageContent: action.payload,
      };
    default:
      return state;
  }
};

export const setRepo = (repos) => ({ type: SET_REPO, payload: repos });
export const setItems = (items) => ({ type: SET_ITEMS, payload: items });
export const setLoading = (bool) => ({ type: SET_LOADING, payload: bool });
export const setCurrentPage = (page) => ({
  type: SET_CURRENT_PAGE,
  payload: page,
});
export const setSearching = (value) => ({
  type: SET_SEARCHING,
  payload: value,
});

export const setFavourList = (item) => ({
  type: SET_FAVOUR_LIST,
  payload: item,
});

export const changeFavourList = (item) => ({
  type: CHANGE_FAVOUR,
  payload: item,
});
export const setSinglePageContent = (item) => ({
  type: SET_VIEW_MORE,
  payload: item,
});
