import React from 'react'
import MenuData from '../data/fooddata.jsx';
import MenuItem from '../components/menuitems';
import './menu.css';

const Menu = () => {
  return (
    <div className='menu-section container my-5'>
      <h2 className="text-center mb-5 text-light">Our Menu</h2>
      {MenuData.map((section, index) => (
        <div key={index} className="category mb-5">
          <h3 className="mb-4 border-bottom pb-2">{section.category}</h3>
          <div className="row">
            {section.items.map(item => (
              <MenuItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Menu;
