import React, { useState, useContext } from 'react';

import WarehouseContext from '../context/warehouse/warehouseContext';

const ProductEdit = () => {
  const warehouseContext = useContext(WarehouseContext);

  const [values, setValues] = useState(warehouseContext.item);

  const { deleteItem, saveItem, editLoad, showAlert } = warehouseContext;

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const toggleItem = (e) => {
    e.preventDefault(e);

    const { name, ean, type, weight, color, id } = values;

    if (name && ean && type && weight && color) {
      // eslint-disable-next-line
      return deleteItem(id), saveItem(values), editLoad();
    } else {
      return showAlert();
    }
  };

  return (
    <div>
      <h1 className='text-center'>
        <i className='fas fa-fighter-jet'></i>
      </h1>
      <form onSubmit={toggleItem}>
        <div>
          <label>
            Name
            <input
              type='text'
              name='name'
              placeholder='Name'
              value={values.name}
              onChange={onChange}
            ></input>
          </label>
        </div>
        <div>
          <label>
            EAN
            <input
              type='text'
              name='ean'
              placeholder='EAN'
              value={values.ean}
              onChange={onChange}
            ></input>
          </label>
        </div>
        <div>
          <label>
            Type
            <input
              type='text'
              name='type'
              placeholder='Type'
              value={values.type}
              onChange={onChange}
            ></input>
          </label>
        </div>
        <div>
          <label>
            Weight
            <input
              type='text'
              name='weight'
              placeholder='Weight'
              value={values.weight}
              onChange={onChange}
            ></input>
          </label>
        </div>
        <div>
          <label>
            Color
            <input
              type='text'
              name='color'
              placeholder='Color'
              value={values.color}
              onChange={onChange}
            ></input>
          </label>
        </div>
        <input type='submit' value='Save' className=' btn btn-dark' />
      </form>
    </div>
  );
};

export default ProductEdit;
