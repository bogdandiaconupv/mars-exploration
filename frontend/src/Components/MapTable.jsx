let grass = ["../public/grass2.png","../public/grass3.png", "../public/Group_1.png"];
let mountain = ["../public/mountain.png"];
let mineral = ["../public/minereu1.png", "../public/minereu2.png"];
let water = ["../public/Water.png"];
let pit = ["../public/pit.png"];

export default function MapTable({ size, classNameTable, classNameTableBox, mapArray }) {
    let rows = [];

    for (let i = 0; i < size; i++) {
        rows.push(<tr key={`tableRow - ${i}`}>{createRow(size, classNameTableBox, i, mapArray)}</tr>)
    }

   
    return (
        < div className="tableHoldingDiv">
        <table className={classNameTable}><tbody>{rows}</tbody></table >
        </div>
    )
        
}



const createRow = (size, classNameTableBox, rowNumber, mapArray) => {
    let cels = [];

   

    for(let i = 0; i < size; i++){
      
        let imageForThisCell = getCorrectImage(mapArray, rowNumber, i)

       cels.push(<td className={classNameTableBox}
                     style={{backgroundImage : imageForThisCell}}
                      key={`cell-${i}`}></td>)
    }

    return cels;
   
}

const getCorrectImage = (mapArray, rowNumber, cellNumber) => {
        if(mapArray[rowNumber][cellNumber] == "-"){
            return `url(${grass[Math.floor(Math.random() * grass.length)]})`;
        }else if(mapArray[rowNumber][cellNumber] == "#"){
            console.log("mountain")
            return`url(${mountain[Math.floor(Math.random() * mountain.length)]})`;
        }else if(mapArray[rowNumber][cellNumber] == "&"){
            return `url(${pit[Math.floor(Math.random() * pit.length)]})`;
        }else if(mapArray[rowNumber][cellNumber] == "*"){
            return `url(${water[Math.floor(Math.random() * water.length)]})`;
        }else if(mapArray[rowNumber][cellNumber] == "%"){
            return `url(${mineral[Math.floor(Math.random() * mineral.length)]})`;
        }
}