import React from 'react'
import ComponentProduct from './Product/ComponentProduct'

function App() {
  let details = [{
    img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRdArQ1wDYDPm5ab3hDrQdOGg7mtzn461XWg&s',
    name:'shoes1',
    price:'100$'
  },
  {
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSOnDtRluBZnzsNgAbgdg9DEd6WgLfKsD76Q&s',
    name:'shoes2',
    price:'200$'
  },
  {
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyZS3MkrDpUMb5uAHewSMt4rhD9HiBNSsRlA&s',
    name:'shoes3',
    price:'300$'
  },
  {
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH3UA2EpO3ml8kDzjB7gaz9-JRQy22HDR1rg&s',
    name:'shoes4',
    price:'400$'
  },
]
  return (
    <div style={{height:"100%", display:"flex",alignItems:"center",justifyContent:"center" , gap:"20px"}}>
    <ComponentProduct data={details[0]}/>
    <ComponentProduct data={details[1]}/>
    <ComponentProduct data={details[2]}/>
    <ComponentProduct data={details[3]}/>
    </div>
  )
}

export default App