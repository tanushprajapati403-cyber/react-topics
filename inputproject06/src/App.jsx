import React, { useState } from 'react'
import ProductCard from '../../inputproject05/src/component/ProductCard';

function App() {
  let [data,setData]= useState({});
 let [newdata,setNewdata]= useState([]);
 let [updates,setUpdates] = useState(null);

  let fnc = (e)=>{
  setData({ ...data , [e.target.name] : e.target.value })
  }
  let Submit = (e)=>{
    e.preventDefault();
    if(updates){
      let upd = newdata.map( (item)=>{return item.mobile === updates ? {...data} : item } );
      setNewdata(upd);
      setUpdates(null);
    }else{
      setNewdata([ ...newdata , data ]);
    }
   
    e.target.reset();
    setData({
      name:"",
      email:"",
      mobile:"",
    })

    console.log(data);
  }
console.log(newdata);

let Update = (user)=>{
setData(user);
setUpdates(user.mobile);
}


  return (
    <div>
      <form onSubmit={Submit} action="">
        <input value={data.name} name='name' onChange={fnc} type="text" placeholder='name'/>
        <input value={data.email} name='email' onChange={fnc} type="text" placeholder='email'/>
        <input value={data.mobile} name='mobile' onChange={fnc} type="text" placeholder='mobile'/>
        <button>create</button>
      </form>
      
      {
        newdata.map((elem)=>{
        return <ProductCard user={elem} key={elem.mobile} handleUpdate={Update}/>
        })
      }
    </div>
  )
}

export default App