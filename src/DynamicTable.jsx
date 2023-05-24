import { useEffect, useState } from "react";
function DynamicTable(){

  const [TableData,setTableData] = useState([{
    Id: "" , Description:"", Amount:0 ,Action:""
  }])
  const [description,setDescription] = useState('')
  const [amount, setAmount] = useState(0)
  const [realDelete,setRealDelete] = useState(0)
  const [dayId,setDayId] = useState(0)
  const [totalExp , setTotalExp] = useState(0)
  const [budgetRem,setBudgetRem] = useState(0)

  const [budget,setBudget] = useState("")

  const d = new Date();
let month = d.getMonth() + 1 ;

const currMonth = (m) =>{
  if(m === 1){
    return "Jan"
  } else if (m === 2){
    return "Feb"
  } else if (m === 3){
    return "Mar"
  } else if (m === 4){
    return "Apr"
  } else if (m === 5){
    return "May"
  } else if (m === 6){
    return "Jun"
  } else if (m === 7){
    return "Jul"
  } else if (m === 8){
    return "Aug"
  } else if (m === 9){
    return "Sep"
  } else if (m === 10){
    return "Oct"
  } else if (m === 11){
    return "Nov"
  } else if (m === 12){
    return "Dec"
  }
   
} 



  console.log("TableData is ...",TableData)

  // let dayId = TableData != undefined && TableData.length - 1

// useEffect(()=>{

//   const sumObj = TableData.reduce(
//     (a, o) => (
//       Object.entries(o).forEach(
//         ([k, v]) => (

//           (a["Amount"] += v)
//           // (a[k] = { ...(a[k] ?? { sum: 0, total: 0 }) }),
//           // (a[k]['sum'] += v),
//           // (a[k]['total'] += 1)
//         )
//       ),
//       a
//     ),
//   );
  
//   console.log("sumObj",sumObj);

// })





let clonforDel = [...TableData]
useEffect(()=>{
  console.log("clonforDel",clonforDel)

  const newList = clonforDel.filter((item) => item.Id !== realDelete);
  setTableData(newList)
let totalArr = []
  let total = 0
  for(let x = 0 ; x < newList.length ; x++){
     total = total + TableData != undefined && newList[x]["Amount"]
     console.log("totalTest", TableData != undefined && newList[x]["Amount"])
     console.log("testX",x)
    //  setTotalExp(total)
    totalArr.push(parseInt(newList[x]["Amount"]))

  }
  // console.log("totalArrTest",totalArr)
  const sum = totalArr.reduce((partialSum, a) => partialSum + a, 0);
console.log("totalArrTest",sum); // 6

  setTotalExp(sum)

  setBudgetRem(budget - sum)
},[realDelete])




  const trashIconButton = (inx)=>{

    // console.log("testCloneDelIn",clonforDel)

    const onclickTrash = (inx) =>{

      setRealDelete(inx)
      // console.log("testCloneDelIn",clonforDel)
    
    
    }

    console.log("test for inx of Delete Obj...",inx)
    return(
      <button onClick={(e)=>{onclickTrash(inx)}
    }>🗑️</button>
    )

  }

  // if (TableData != undefined && TableData[0].Id == 0 && TableData.length == 2){
  //   TableData[1].Id = 1
  //   //  dayId = 1
  // } 

  // let dayId = TableData != undefined && TableData.length - 1 


  const addExp = ()=>{
    // e.preventDefault()
    // dayId = TableData != undefined && dayId + 1

    setDayId(TableData != undefined && dayId + 1)

    let mainObj = {Id: dayId , Description:`${description}`, Amount:amount ,Action:trashIconButton(dayId)}
    let cloneTableData = TableData != undefined && [...TableData]
     cloneTableData = TableData != undefined && [...cloneTableData,mainObj]
     
    //  cloneTableData[0].Id === "null" && cloneTableData.shift() 
     setTableData(cloneTableData)


    // setTimeout(()=>console.log(TableData),0)
    console.log(TableData)

    // const newList = clonforDel.filter((item) => item.Id !== realDelete);
    // setTableData(newList)
  let totalArr = []
    let total = 0
    setTimeout(()=>{

      for(let x = 0 ; x < cloneTableData.length ; x++){
        total = total + cloneTableData != undefined && cloneTableData[x]["Amount"]
        console.log("totalTest", cloneTableData[x]["Amount"])
        console.log("testX",x)
       //  setTotalExp(total)
       totalArr.push(parseInt(cloneTableData[x]["Amount"]))
      //  totalArr.push(parseInt(amount))
      console.log("totalArr..",totalArr)
       
   //     const sum = totalArr.reduce((partialSum, a) => partialSum + a, 0);
   // console.log("totalArrTest",sum); // 6
     }
     // console.log("totalArrTest",totalArr)
     const sum = totalArr.reduce((partialSum, a) => partialSum + a, 0);
   console.log("totalArrTest",sum); // 6
   
    setTotalExp(sum)

    setBudgetRem(budget - sum)
    },0)
   


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
         <span>{currMonth(month)}</span>  Budget <span>
          <input
          className="budgetTxt"
          placeholder='Monthly budget'
         type='text'
         onChange={(e)=>setBudget(e.target.value)}
         value={budget}
         ></input>
         </span>
        </div>

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

        <div>
          <span className="budgetTxt"> Total Expenses : </span> <span className="budgetTxt"> {totalExp}</span>
          <span className="budgetTxt"> Remain Budget :  </span> <span className="budgetTxt">{budgetRem}</span>
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