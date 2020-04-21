import React, { useState, useContext } from 'react';
import WarehouseContext from '../context/warehouse/warehouseContext';

const New = () => {
  const warehouseContext = useContext(WarehouseContext);

  const [values, setValues] = useState({
    name: '',
    ean: '',
    type: '',
    weight: '',
    color: '',
    active: false,
  });

  const { saveItem, showAlert } = warehouseContext;

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const addItem = (e) => {
    const newId = {
      id: (1 + Math.random()).toFixed(6) * 1000000,
    };

    const merged = { ...values, ...newId };

    const { name, ean, type, weight, color } = values;

    if (name && ean && type && weight && color) {
      return saveItem(merged);
    } else {
      return showAlert();
    }
  };

  return (
    <div>
      <h1 className='text-center'>
        <i className='fas fa-fighter-jet'></i>
      </h1>

      <form onSubmit={addItem}>
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

        <input type='submit' value='Save' className='btn btn-dark' />
      </form>
    </div>
  );
};

export default New;
