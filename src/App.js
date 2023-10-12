import React, { useState } from 'react';
import List from './list';
import Alert from './alert';

const App = () => {
  const [name, setName] = useState('');
  const [list, setList] = useState([]);
  const [alert, setAlert] = useState({show: false, msg:''});

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name === '') {
      showAlert(true, 'Please enter details');
    } 
    
    else {
      showAlert(true, 'Successfully added');
        const newTask = {
            id: Math.random(),
            title: name
      };
    
      setList([...list, newTask]);
        setName('');
    }; 
  }


  const showAlert = (show=false, msg='')=>{
    setAlert({show, msg})
    }

  const removeTodo = (id) => {
    const newList = list.filter((item) => 
        item.id !== id
  );

    setList(newList); 
};
  return (
    <main>
      <form className='form-container' onSubmit={handleSubmit}>

          {alert.show && <Alert {...alert} removeAlert={showAlert} />}

        <h2>TO DO LIST</h2>
        <div className='input-field'>
        
        <input type='text' value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter detail' className='input'/>
        
        <button type='submit' className='btn-add' onClick={handleSubmit}>ADD</button> 

        </div>

        {list.length > 0 && (
        <div className="grocery-container">

          <List items={list} removeTodo={removeTodo}/>
          
          <button type='submit' className='btn-clear' onClick={()=>setList([])}>Clear All</button>
          
        </div>
      )}
        
      </form>
      
    </main>
  )
}

export default App;


