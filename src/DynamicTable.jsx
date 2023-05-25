/* eslint-disable */


import { useEffect, useState } from "react";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function DynamicTable(){

  const [TableData,setTableData] = useState([{
    Id: "" , Description:"", Amount:0 ,Action:""
  }])
  const [description,setDescription] = useState('')
  const [amount, setAmount] = useState(0)
  const [realDelete,setRealDelete] = useState(0)
  const [dayId,setDayId] = useState(1)
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




const regex = /^[0-9\b]+$/;


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
      <button className="btn btn-danger" onClick={(e)=>{onclickTrash(inx)}
    }>🗑️</button>
    )

  }

  // if (TableData != undefined && TableData[0].Id == 0 && TableData.length == 2){
  //   TableData[1].Id = 1
  //   //  dayId = 1
  // } 

  // let dayId = TableData != undefined && TableData.length - 1 

  const addvalidate = ()=>{
    if(budget != "" && description != "" && amount != 0){
      addExp()
    } else {
      
      toast("Please complete all entries!!!"
      // ,
      // {
      //   position: "top-right",
      //   autoClose: 5000,
      //   hideProgressBar: false,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      //   progress: undefined,
      //   theme: "light",
      //   }
        )
      console.log("Please complete all entries!!!")
    }
  }


  const addExp = ()=>{
    // e.preventDefault()
    // dayId = TableData != undefined && dayId + 1

    setDayId(dayId + 1)

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
   
     return TableData != undefined && TableData.map((data,inx)=>{
      if(TableData[inx].Id != ''){
       return(

           <tr key={data.Id} className="bg-success" >
                {

                   column.map((v)=>{
                       return <td key={v} className= { amount === 0  ? "bg-info text-info " : "bg-info" }  style={{fontSize:"20pt"}}>{data[v]}</td>
                   })
                }
           </tr>

       )
     }
    }
    )
}


  return (
<>
<ToastContainer />
<div className="budget">
         <span >{currMonth(month)}</span>  Budget <span>
          <input
          required
           className="form-control w-50 p-2 text-center col-md-8 offset-md-3 mt-2"
          //  className="budgetTxt"
          placeholder='Monthly budget'
         type="number"
         onChange={(e)=>{

            setBudget(e.target.value.replace(/\D/g, ''))

        }}
        value={budget}
         ></input>
         </span>
        </div>

    <div className="budget">
        Description <span>
          <input
          required
          // className="budgetTxt"
          className="form-control w-50 p-2 text-center col-md-8 offset-md-3 mt-2"
          placeholder='Enter description'
         type='text'
         onChange={(e)=>setDescription(e.target.value)}
         value={description}
         ></input>
         </span>
         Amount <span>
          <input
          required
          // className="budgetTxt"
          className="form-control w-50 p-2 text-center col-md-8 offset-md-3 mt-2"
          placeholder='Enter Amount'
          type='number'
          onChange={(e)=>setAmount(e.target.value)}
          value={amount}
         ></input>
         </span>
         <button  
         className="btn btn-primary mt-4 mb-2"
         style={{fontSize:"20pt"}} onClick={()=>addvalidate()}>Add Expense</button>
        </div>

        <div>
          <span className=" display-6 text-light"> Total Expenses : </span> <span className=" display-6 text-light px-2 mx-4"> {totalExp}</span>
          <span className=" display-6 text-light"> Remain Budget :  </span> <span className=" display-6 text-light px-2">{budgetRem}</span>
        </div>


      <table className="table">
        <thead>
         <tr className="display-6 text-info"  style={{fontSize:"20pt" , marginTop:"20px"}}>{ThData()}</tr>
        </thead>
        <tbody>
        {tdData()}
        </tbody>
       </table>
       </>
  )

}
export default DynamicTable;