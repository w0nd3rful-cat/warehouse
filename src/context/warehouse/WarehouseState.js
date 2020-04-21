import React, { useReducer, useEffect } from 'react';
import WarehouseContext from './warehouseContext';
import WarehouseReducer from './warehouseReducer';
import {
  GET_ITEMS,
  DELETE_ITEM,
  SHOW_ITEM,
  EDIT_LOAD,
  SHOW_ALERT,
  REMOVE_ALERT,
} from '../types';

const WarehouseState = (props) => {
  const initialState = {
    list: [],
    item: {},
    alert: null,
  };

  const [state, dispatch] = useReducer(WarehouseReducer, initialState);

  // Load items to state
  useEffect(() => {
    var data = Object.keys(localStorage).map((k) =>
      JSON.parse(localStorage.getItem(k))
    );

    dispatch({
      type: GET_ITEMS,
      payload: data,
    });
  }, []);

  // Load items to state after Editing
  const editLoad = () => {
    var data = Object.keys(localStorage).map((k) =>
      JSON.parse(localStorage.getItem(k))
    );

    dispatch({
      type: EDIT_LOAD,
      payload: data,
    });
  };

  // Save Items
  const saveItem = (merged) => {
    localStorage.setItem(merged.id, JSON.stringify(merged));
  };

  // Delete Item

  const deleteItem = (id) => {
    localStorage.removeItem(id);

    const updatedList = state.list.filter((x) => x.id !== id);

    dispatch({
      type: DELETE_ITEM,
      payload: updatedList,
    });
  };

  // Show Item

  const showItem = (id) => {
    const item = state.list.filter((x) => x.id === id);

    dispatch({
      type: SHOW_ITEM,
      payload: item[0],
    });
  };

  const showAlert = () => {
    const alert = 'triggered';

    console.log(alert);
    dispatch({
      type: SHOW_ALERT,
      payload: alert,
    });
    setTimeout(() => dispatch({ type: REMOVE_ALERT }), 3000);
  };

  return (
    <WarehouseContext.Provider
      value={{
        list: state.list,
        item: state.item,
        alert: state.alert,
        saveItem,
        deleteItem,
        showItem,
        editLoad,
        showAlert,
      }}
    >
      {props.children}
    </WarehouseContext.Provider>
  );
};

export default WarehouseState;
