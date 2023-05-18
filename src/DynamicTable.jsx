import { useEffect, useState } from "react";
function DynamicTable(){

  const [TableData,setTableData] = useState([{
    Id: "" , Description:"", Amount:"" ,Action:""
  }])
  const [description,setDescription] = useState('')
  const [amount, setAmount] = useState(0)


  console.log("TableData is ...",TableData)

  let dayId = TableData != undefined && TableData.length - 1

  const realDelete = (e,inx) =>{
    console.log("test for inx of Delete Obj...",e)

    let clonforDel = [...TableData]
    clonforDel.filter((item)=> inx !== item.Id  )
    // clonforDel.splice(inx,0)
    setTableData(clonforDel)

  }

  const trashIconButton = (inx)=>{


    console.log("test for inx of Delete Obj...",inx)
    return(
      <button onClick={(e)=>realDelete(e,inx)}>🗑️</button>
    )

  }

  // if (TableData != undefined && TableData[0].Id == 0 && TableData.length == 2){
  //   TableData[1].Id = 1
  //   //  dayId = 1
  // } 

  // let dayId = TableData != undefined && TableData.length - 1 


  const addExp = ()=>{
    // e.preventDefault()

    let mainObj = {Id: dayId , Description:`${description}`, Amount:amount ,Action:trashIconButton(dayId)}
    let cloneTableData = TableData != undefined && [...TableData]
     cloneTableData = TableData != undefined && [...cloneTableData,mainObj]
     
    //  cloneTableData[0].Id === "null" && cloneTableData.shift() 
     setTableData(cloneTableData)


    // setTimeout(()=>console.log(TableData),0)
    console.log(TableData)
  }

//   const TableData=[
//     {Id:1, Description:"Noor Khan", Amount:25,Action:"male"},
//     {Id:2, Description:"k", Amount:2,Action:"edit"},

// useEffect(() => {
//   let coloneTable = [...TableData]

//   coloneTable[0].Id === "null" && coloneTable.shift() 

//   setTableData(coloneTable)
// },[]);

// get table column
 const column = TableData != undefined && Object.keys(TableData[0]);

 // get table heading data
 const ThData =()=>{
    
     return TableData != undefined && column.map((data)=>{
         return <th key={data}>{data}</th>
     })
 }

// get table row data
const tdData =() =>{
   
     return TableData != undefined && TableData.map((data)=>{
       return(

           <tr key={data.Id}>
                {
                   column.map((v)=>{
                       return <td key={v}>{data[v]}</td>
                   })
                }
           </tr>

       )
     })
}


  return (
<>

    <div className="budget">
        Description <span>
          <input
          className="budgetTxt"
          placeholder='Enter description'
         type='text'
         onChange={(e)=>setDescription(e.target.value)}
         value={description}
         ></input>
         </span>
         Amount <span>
          <input
          className="budgetTxt"
          placeholder='Enter description'
          type='number'
          onChange={(e)=>setAmount(e.target.value)}
          value={amount}
         ></input>
         </span>
         <button onClick={()=>addExp()}>Add Expense</button>
        </div>


      <table className="table">
        <thead>
         <tr>{ThData()}</tr>
        </thead>
        <tbody>
        {tdData()}
        </tbody>
       </table>
       </>
  )

}
export default DynamicTable;