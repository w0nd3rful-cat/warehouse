import React, { useContext } from 'react';
import WarehouseContext from '../context/warehouse/warehouseContext';

const Alert = () => {
  const warehouseContext = useContext(WarehouseContext);

  const { alert } = warehouseContext;
  return (
    alert !== null && (
      <div className={`alert alert-${alert.type}`}>
        <i className='fas fa-info-circle'></i> Please fill all forms
      </div>
    )
  );
};

export default Alert;
