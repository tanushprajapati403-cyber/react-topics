import React, { useState } from "react";

function App() {
  let [data, setData] = useState({});
  let [newdata, setNewdata] = useState([]);

  let fnc = (e) => {
    let { name, value } = e.target;
    setData({ ...data, [name]: value });
    // setData({ ...data, [e.target.name]: e.target.value });
    // console.log(data);
  };
  let submit = (e) => {
    e.preventDefault();
    setNewdata([...newdata, data]);
    setData({name: "", email: ""});
    console.log("Array (newdata):", newdata);
  };




  return (
    <div>
      <form onSubmit={submit} action="">
        <input value={data.name} name="name" onChange={fnc} type="text" placeholder="name" />
        <input  value={data.email} name="email" onChange={fnc} type="text" placeholder="email" />
        <button>Submit</button>
      </form>
     
     <div>
     { newdata.map((e)=>{return (
        <h1 key={e}>Name: {e.name} <br /> Email: {e.email}</h1>
    );})}
     </div>


    </div>
  );
}

export default App;








