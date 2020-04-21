import React, { useContext } from 'react';
import WarehouseContext from '../context/warehouse/warehouseContext';

const ProductId = () => {
  const warehouseContext = useContext(WarehouseContext);

  const { name, ean, type, weight, color } = warehouseContext.item;

  return (
    <div>
      <h1 className='text-center'>
        <i className='fas fa-fighter-jet'></i>
      </h1>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>EAN</th>
            <th>Type</th>
            <th>Weight</th>
            <th>Color</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>{name}</td>
            <td>{ean}</td>
            <td>{type}</td>
            <td>{weight}</td>
            <td>{color}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProductId;
