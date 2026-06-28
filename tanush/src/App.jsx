import React from 'react'
import Navbar1 from './Navbar/Navbar1'
import Fullpage from './page/Fullpage'
import Components from './Navbar/Components'

function App() {

  let details =[{
  id:1,
  video:'1.mp4',
  img:'https://cdn.dribbble.com/users/6848313/avatars/normal/0fc82952cfd3b6d1e496259ff75acadf.png?1611172914',
  h1:'Emote',
  btn:'Pro',
  h2:'5.1k',
  h3:'100k',
  },
  {
    id:2,
  video:'2.mp4',
  img:'https://cdn.dribbble.com/users/2959364/avatars/small/9afda620bf04b40ab310d16dbce65a2f.png?1696939287',
  h1:'UI/UX',
  btn:'Pro+',
  h2:'10k',
  h3:'1M',
  },
  {
    id:3,
  video:'3.mp4',
  img:'https://cdn.dribbble.com/users/2954749/avatars/normal/75c46a36aa3d88f168ceb513dbd0ffc6.png?1763045752',
  h1:'Outcrowd',
  btn:'Pro',
  h2:'1M',
  h3:'500k',
  },
   {
    id:4,
  video:'4.mp4',
  img:'https://cdn.dribbble.com/users/1617600/avatars/normal/64dd87cbee0b4c113707222b645d3ff3.png?1770136497',
  h1:'IT/UI/UX',
  btn:'Pro+',
  h2:'50k',
  h3:'1M',
  },
   {
    id:5,
  video:'5.mp4',
  img:'https://cdn.dribbble.com/users/10429876/avatars/normal/366d4276fd03be91107865a894700d04.png?1642355761',
  h1:'studio',
  btn:'Pro',
  h2:'1.5k',
  h3:'5k',
  },
   {
    id:6,
  video:'6.mp4',
  img:'https://cdn.dribbble.com/users/2339830/avatars/normal/32c2b428bed013c1a9881f07ad1231b8.png?1668152671',
  h1:'MUTI',
  btn:'Pro+',
  h2:'6.9k',
  h3:'10k',
  },
   {
    id:7,
  video:'7.mp4',
  img:'https://cdn.dribbble.com/users/16100846/avatars/normal/4f9478f9f99048a2f9ac3e9f61a90775.png?1683374189',
  h1:'jowel ah...',
  btn:'Pro',
  h2:'335k',
  h3:'5M',
  },
   {
    id:8,
  video:'8.mp4',
  img:'https://cdn.dribbble.com/users/2203197/avatars/normal/41c750ab032e2eca91ef43c6fb2d648b.png?1715411380',
  h1:'Knacky',
  btn:'Pro+',
  h2:'566k',
  h3:'30M',
  },
   {
    id:9,
  video:'9.mp4',
  img:'https://cdn.dribbble.com/users/4053754/avatars/normal/55dd34a2285fa77014068c00427eee21.png?1729855991',
  h1:'Musemind',
  btn:'Pro',
  h2:'123k',
  h3:'2M',
  },
   {
    id:10,
  video:'10.mp4',
  img:'https://cdn.dribbble.com/users/5049071/avatars/normal/58237f63651e4bccd84f2036d95e0c3e.png?1759932211',
  h1:'RonDes..',
  btn:'Pro+',
  h2:'100k',
  h3:'1M',
  },
   {
    id:11,
  video:'11.mp4',
  img:'https://cdn.dribbble.com/users/4675593/avatars/normal/0ccd17207b5275eae86397d5db38f3f5.png?1677170175',
  h1:'Fahim',
  btn:'Pro',
  h2:'999k',
  h3:'30M',
  },
   {
    id:12,
  video:'12.mp4',
  img:'https://cdn.dribbble.com/users/481951/avatars/normal/4fc38bd50cdee9b1bbe1f9e1d1f22683.jpg?1643341651',
  h1:'Nixtio',
  btn:'Pro+',
  h2:'10k',
  h3:'1M',
  },
]

  let nav =[{
    btn:'Dribbble',
    p1:'Explore',
    p2:'Hire Talent',
    p3:'Get Hierd',
    p4:'Communit',
    btn1:'Sign up',
    btn2:'Login',
  },
  {
  btn:'Popular',
  p1:'Animation',
  p2:'Branding',
  p3:'Web Design',
  p4:'Product',
  btn1:'Pro',
  btn2:'Filter',
  },
]

let fnc = (details) => {
 console.log(details)
}
  return (
    <div className='flex flex-col p-3 px-15 gap-4 justify-around'>

      <Navbar1 values={nav[0]}/>

      <Fullpage/>

      <Navbar1 values={nav[1]}/>

      <div className='flex flex-wrap justify-around gap-5'>
      {details.map((t)=>{
       return(
        <Components key={t.id} del={t} fnc={fnc}/>
       );
      })}
      </div>

    </div>
  )
}

export default App