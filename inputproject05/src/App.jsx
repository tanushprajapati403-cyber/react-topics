import React , { useState } from 'react'
import ProductCard from './component/ProductCard';

function App() {
 let [data, setData] = useState({});
 let [newdata, setNewdata] = useState([]);
 let [editId, setEditId] = useState(null);

 let fnc = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  let submit = (e)=>{
    e.preventDefault();
    if (editId) {
    // Agar hum edit kar rahe hain
    let updatedData = newdata.map((item) => (item.id === editId ? data : item));
    setNewdata(updatedData);
    setEditId(null); // Reset edit state
  } else {
    // let userWithId = { ...data , id: Date.now() };
    // setNewdata([...newdata, userWithId]);

    // Agar naya card bana rahe hain(same mean hai upper balle jesa)
    setNewdata([...newdata, { ...data, id: Date.now() }]);
  }
    e.target.reset();
    setData({
      name:"",
      email:"",
      mobile:"",
    });
  }

  let removeCard = (id)=>{
  let updateCard = newdata.filter((item)=>{
   return item.id !== id
  })
  setNewdata(updateCard);
  }

  let handleUpdates = (user) => {
    setData(user); 
    setEditId(user.id);
  };
  

// console.log(data)
  return (
    <div>

      <form onSubmit={submit} action="">
        <input value={data.name}  name='name' onChange={fnc} type="text" placeholder='name'/> <br /> <br />
        <input value={data.email} name='email' onChange={fnc} type="text" placeholder='email'/> <br /> <br />
        <input value={data.mobile} name='mobile' onChange={fnc} type="text" placeholder='mobile'/> <br /> <br />
        <button>Submit</button>
      </form>
    
    {newdata.map((elem)=>(
     <ProductCard key={elem.id} user={elem} handleDelete={removeCard} handleUpdate={handleUpdates}/>
      ))}
    

    </div>
  )
}

export default App