// import { Component } from "react";
// import axios from "axios"

// class App extends Component{
//   constructor(){
//     super();
    
//     this.state={
//       data:[],
//       searchText:''
//     }
   
//   }
//   textChange=(ev)=>{
//     let searchString=ev.target.value;
//     this.setState({searchText:searchString.toLowerCase()})
//   }
//   componentDidMount(){
//     axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>{
//     this.setState({data:res.data})
//     })
//   }
  
//   render(){
//     let filteredData=this.state.data.filter(d=>d.name.toLowerCase().includes(this.state.searchText))
//     return (
//       <div>
//         <input onChange={this.textChange} type="text"  placeholder="Search Monsters" value={this.state.searchText}/>
//         <div>
//         {filteredData.length>0?filteredData.map(d=>{
//         return (<div class="ui card" key={d.id}>
//         <div class="image">
//           <img src={`https://robohash.org/${d.id+100}`}/>
//         </div>
//         <div class="content">
//           <a class="header">{d.name}</a>
//           <div class="meta">
//             <span class="date">Joined in 2013</span>
//           </div>
//         </div>
//         <div class="extra content">
//           <a>
//             <i class="user icon"></i>
//             22 Friends
//           </a>
//         </div>
//       </div>)
//         }
//         ):'Loading...'}
//         </div>
//       </div>
//     )
//   }
// }

// export default App;




import React, {useEffect, useState } from 'react'
import axios from 'axios';
function App() {
  let [searchText,setSearchText]=useState("");
  let [data,setData]=useState([]);
  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>{
      setData(res.data)
    })
    
  },[]);
  let filteredData=data.filter(d=>d.name.toLowerCase().includes(searchText))
  let textChange=(ev)=>{
    let searchString=ev.target.value;
    setSearchText(searchString.toLowerCase())
  }
  return (
          <div>
            <input onChange={textChange} type="text"  placeholder="Search Monsters" value={searchText}/>
            <div>
            {filteredData.length>0?filteredData.map(d=>{
            return (<div class="ui card" key={d.id}>
            <div class="image">
              <img src={`https://robohash.org/${d.id+100}`}/>
            </div>
            <div class="content">
              <a class="header">{d.name}</a>
              <div class="meta">
                <span class="date">Joined in 2013</span>
              </div>
            </div>
            <div class="extra content">
              <a>
                <i class="user icon"></i>
                22 Friends
              </a>
            </div>
          </div>)
            }
            ):'Loading...'}
            </div>
          </div>
        )
}

export default App