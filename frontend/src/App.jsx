
import './App.css'
import MapTable from './Components/MapTable'
import {useState, useEffect} from "react"

function App() {
  const[mapSchema, setMapSchema] = useState(0);
  const[reRender, setReRender] = useState(0);


  useEffect(() => {
    fetch("http://localhost:8080/api/maps")
      .then(res => {
        if (res.ok) {
          return res.json(); 
        } else {
          throw new Error('Request failed with status: ' + res.status);
        }
      })
      .then(data => {
        setMapSchema(data);
      })
      .catch(error => console.error(error));
  }, [reRender]);

  const generateMapButtonEvent = () =>{
    setReRender( reRender + 1);
  }


  return (
    <>
    {!mapSchema && <div>SEEMS LIKE THERES NO MAP, START THE ENGINE!</div>}
   { mapSchema &&  <MapTable size={32} classNameTable={"mapTable"} classNameTableBox={"mapBox"} mapArray={mapSchema.representation}/>}
   <button onClick={generateMapButtonEvent} className='generateMapBtn'> Generate Map </button>
    </>
  )
}

export default App
