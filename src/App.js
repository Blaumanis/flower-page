import Header from "./components/header/Header";
import Main from "./components/main/Main";
import {useState,useEffect} from 'react'
import axios from "axios";

function App() {

  // const [data, setData] = useState([])

  // useEffect(()=>{
  //   axios.get('/api/smallbouquet/')
  //   .then(res=>{
  //     const data = res.data
  //     setData(data)
  //   })
  // },[])

  // useEffect(() => {
  //   const res = fetch('http://localhost:3002/api')
  //   .then(res => res.json())
  //   .then(data => console.log(data))

  //   setData(res)
  // }, [])

  return (
    <div className="wrapper">
      {/* {
        data.map(d=> (
          <h1>{d.type}</h1>
        ))
      } */}
      <Header/>
      <Main />
    </div>
  );
}

export default App;
