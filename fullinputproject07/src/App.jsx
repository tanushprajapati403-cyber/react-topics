import React, { useLayoutEffect, useState } from 'react'

function App() {

 let [formValues , setFormValues] = useState({});

 let [products , setProducts] = useState([]);

 let [isEdited , setIsEdited] = useState(false);

//  console.log(products);
//  console.log(formValues);

  let handelChange = (e)=>{
  let {name,value}=e.target;
  setFormValues({...formValues , [name] : value});
  };
  
  let handleSubmit = (e)=>{
  e.preventDefault();
 
  setProducts((prev)=>{
   return prev.map((elem)=>{
    return  elem.price == formValues.price ? { ...elem , ...formValues } : elem ;
    });
  });

  if(isEdited){
   setIsEdited(false);
  }else{
    setProducts([...products , formValues]);
  }

  setFormValues({ 
    product_name:"",
    category:"",
    price:"",
    description:"",
  });
  
  };


  return (
    <div>

      <form onSubmit={handleSubmit} action="">

        <input required value={formValues.product_name} name='product_name' onChange={handelChange} type="text" placeholder='Product name'/><br /><br />

        <input required value={formValues.category} name='category' onChange={handelChange} type="text" placeholder='Category'/><br /><br />

        <input required value={formValues.price} name='price' onChange={handelChange} type="text" placeholder='Price'/><br /><br />

        <input required value={formValues.description} name='description' onChange={handelChange} type="text" placeholder='Description'/><br /><br />

        <button>Create</button>

      </form>

      <div style={{display: "flex" , gap: "10px" , flexWrap: "wrap" , marginTop: "20px"}}>
        {products.map((elem)=>(
          <div style={{ border: "1px solid #ccc", padding: "10px" }}>
            <h1>{elem.product_name}</h1>
            <h2>{elem.category}</h2>
            <h3>{elem.price}</h3>
            <h4>{elem.description}</h4>
            <button onClick={()=>{ setFormValues(elem); setIsEdited(true); }}>Update</button>
          </div>
          ))}
      </div>

    </div>
  )
}

export default App;