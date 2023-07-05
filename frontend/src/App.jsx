
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
      {mapSchema && (
        <MapTable
          size={32}
          classNameTable={"mapTable"}
          classNameTableBox={"mapBox"}
          mapArray={mapSchema.representation}
        />
      )}
      {/* <button onClick={generateMapButtonEvent} className="generateMapBtn">
        {" "}
        Generate Map{" "}
      </button> */}
      <button onClick={generateMapButtonEvent} className="generateMapBtn">
        {" "}
        Generate Map{" "}
        <svg
          viewBox="0 0 24 24"
          width="24"
          height="24"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="css-i6dzq1"
        >
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
        </svg>{" "}
       
      </button>
    </>
  );
}

export default App
