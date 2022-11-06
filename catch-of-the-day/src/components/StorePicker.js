import React from 'react';
import {render} from 'react-dom';

class StorePicker extends React.Component {
 render(){
  return (
  <form className='tore-selector'>
   <h2>Please enter a Store name</h2>
   <input type="text" required placeholder='Store Name'></input>
   <button type="submit">Visit Store →</button>
  </form>
  )
 }
}

export default StorePicker;