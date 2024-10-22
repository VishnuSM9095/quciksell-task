import React from 'react';
import Card from './card';
import '../../src/App.css';
import '../../src/card.css';

import plus from '../components/icons_FEtask/add.svg'
import dots from '../components/icons_FEtask/3 dot menu.svg'


const Column = ({ group, tickets }) => {
  return (
    <div className="column">
        <div className="subcolumn">
            <h2>{group}</h2>
            
            <div className='subsubcol'>
                
                <img src={plus} alt='add'></img>
                <img src={dots} alt='more'></img>
            </div>  
        </div>
      {tickets.map(ticket => (
        <Card key={ticket.id} ticket={ticket} />
      ))}
    </div>
  );
};

export default Column;
