import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import WarehouseContext from '../context/warehouse/warehouseContext';

const List = () => {
  const warehouseContext = useContext(WarehouseContext);
  const { deleteItem, list, showItem, saveItem, editLoad } = warehouseContext;

  const helloWorld = (id, active, values) => {
    const item = values;
    active ? (item.active = false) : (item.active = true);

    // eslint-disable-next-line
    return deleteItem(id), saveItem(item), editLoad();
  };

  return (
    <div>
      <h1 className='text-center'>
        <i className='fas fa-fighter-jet'></i>
      </h1>

      {list.map((x) => {
        return (
          <ul id='hmmz' className='collection' key={x.id}>
            <p id='lol'>{x.name}</p>
            {x.active ? (
              <li className='collection-item' id='hmmz'>
                <button className='waves-effect blue-grey lighten-2 btn-small '>
                  View
                </button>

                <button className='waves-effect blue-grey lighten-2 btn-small '>
                  Edit
                </button>

                <button className='waves-effect blue-grey lighten-2 btn-small '>
                  Delete
                </button>

                <label>
                  <input
                    type='checkbox'
                    className='filled-in'
                    onClick={() => helloWorld(x.id, x.active, x)}
                  />
                  <span id='new2'></span>
                </label>
              </li>
            ) : (
              <li className='collection-item' id='hmmz'>
                <Link to={`/products/${x.id}`}>
                  <button
                    className='waves-effect teal darken-1 btn-small '
                    onClick={() => showItem(x.id)}
                  >
                    View
                  </button>
                </Link>

                <Link to={`/products/${x.id}/edit`}>
                  <button
                    className='waves-effect light-blue darken-3 btn-small '
                    onClick={() => showItem(x.id)}
                  >
                    Edit
                  </button>
                </Link>
                <button
                  className='waves-effect pink accent-3 btn-small '
                  onClick={() => (x.active ? null : deleteItem(x.id))}
                >
                  Delete
                </button>

                <label>
                  <input
                    type='checkbox'
                    className='filled-in'
                    defaultChecked='checked'
                    onClick={() => helloWorld(x.id, x.active, x)}
                  />
                  <span id='new2'></span>
                </label>
              </li>
            )}
          </ul>
        );
      })}
    </div>
  );
};

export default List;
