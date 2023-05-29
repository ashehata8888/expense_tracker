/* eslint-disable */


import { useEffect, useState } from "react";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function DynamicTable(){

  const [TableData,setTableData] = useState([{
    // Id: "" , Description:"", Amount:0 ,Action:""
    Checked:"", Title:"", Description:"", Create_AT:"",Finished_At:"",Archive_At:"",Actions:""
  }])

  const [title,settitle] = useState("")
  const [description,setDescription] = useState('')
  const [createdAt, setcreatedAt] = useState('')
  const [finishedAt, setfinishedAt] = useState('')
  const [archiveAt, setarchiveAt] = useState('')
  const [checked,setChecked]=useState(false)

  const [realDelete,setRealDelete] = useState(0)
  const [realEdit,setRealEdit] = useState(0)
  const [realArchive,setRealArchive] = useState(0)

  const [dayId,setDayId] = useState(1)
  const [checkboxInx,setCheckboxInx]=useState(0)


  const [totalExp , setTotalExp] = useState(0)
  const [titleRem,settitleRem] = useState(0)
  const [amount,setAmount]=useState(0)

  const [actions,setAction]=useState('Ahmed')

  

 

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

},[realDelete])


// test


console.log("test")
useEffect(()=>{

  const date = new Date().toLocaleString()

    const archiveTodo = (inx)=>{
      let cloneTable = [...TableData]
      cloneTable[inx].Archive_At=date
      setTableData(cloneTable)
      }
      realArchive > 0 && realArchive !=  undefined && archiveTodo(realArchive)


},[realArchive])




  const trashIconButton = (inx)=>{

    console.log("testCloneDelIn",inx)

    const onclickTrash = (inx) =>{

      setRealDelete(inx)
      // console.log("testCloneDelIn",clonforDel)
    
    
    }

    const onclickArchive = (inx) => {
      setRealArchive(inx)
     }


    const onclickEdit = (inx) => {
     setRealEdit(inx)
    }

    console.log("test for inx of Delete Obj...",inx)
   
    return (
  <>
     <button className="mr-2" style={{marginRight:"8px",background:"none"}} onClick={(e)=>{onclickTrash(inx)}}>🗑️</button>
     <button className="mr-2" style={{marginRight:"8px",background:"none"}} onClick={(e)=>{onclickEdit(inx)}}>🖊</button>
     <button className="mr-2" style={{marginRight:"8px",background:"none"}} onClick={(e)=>{onclickArchive(inx)}}>💾</button>
  </>
    
    )
    

  }


  useEffect(()=>{

    const date = new Date().toLocaleString()

    const finishedTodo = (checkboxInx)=>{
      console.log("testtableData",TableData)
      console.log("testtableData",checkboxInx)
      let cloneTable = [...TableData]
      cloneTable[checkboxInx].Finished_At=date
      setTableData(cloneTable)
      }
      checkboxInx > 0 && checkboxInx !=  undefined && finishedTodo(checkboxInx)
// trashIconButton(checkboxInx)

  },[checkboxInx])
  // dayId,


  let cloneTable = [...TableData]
  // console.log("cloneTable",TableData)


  const checkBox = (inx)=>{

   

    const date = new Date().toLocaleString()
    console.log("cloneTable",cloneTable)
    const handleChange = (e) => {


      setChecked(e.target.checked)

  console.log("testonChange",e.target.checked)
      if(e.target.checked == true){
        console.log("the check box checked successfully")
        // setfinishedAt("finished")
        setCheckboxInx(inx)
        // finishedTodo(inx)
     
  
  // cloneTable[inx].Finished_At="finished"
  console.log("cloneTable",inx)
  setTimeout(()=>console.log("cloneTable",TableData),100)

  // setTableData(cloneTable)

      }
     
     
      setTimeout(()=>console.log("testCheckBoxdate",finishedAt),200)
    };
    return (
      <div>
      <input type="checkbox" onChange={(e)=>handleChange(e)} />
    </div>
      // <input type="checkbox" id={inx}  />
    )
  }

  // if (TableData != undefined && TableData[0].Id == 0 && TableData.length == 2){
  //   TableData[1].Id = 1
  //   //  dayId = 1
  // } 

  // let dayId = TableData != undefined && TableData.length - 1 

  const addvalidate = ()=>{
    if(title != "" && description != ""){
      addTodo()
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

 
  const addTodo = ()=>{
    const date = new Date().toLocaleString()


    // e.preventDefault()
    // dayId = TableData != undefined && dayId + 1

    setDayId(dayId + 1)

console.log("testDate",date)
    setcreatedAt(date)


    let mainObj = {
      Id: dayId ,
      Checked:checkBox(dayId),Title:`${title}`, Description:`${description}`, Create_AT:`${date}` , Finished_At:`${finishedAt}`,Archive_At:`${archiveAt}`,Actions:trashIconButton(dayId)}
    let cloneTableData = TableData != undefined && [...TableData]
     cloneTableData = TableData != undefined && [...cloneTableData,mainObj]
     
    //  cloneTableData[0].Id === "null" && cloneTableData.shift() 
     setTableData(cloneTableData)


    // setTimeout(()=>console.log(TableData),0)
    console.log(TableData)

    // const newList = clonforDel.filter((item) => item.Id !== realDelete);
    // setTableData(newList)
 
  


   


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
                       return <td key={v} className="bg-info"  style={{fontSize:"20pt"}}>{data[v]}</td>
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
<div className="title">
         {/* <span >{currMonth(month)}</span>  */}
          Title <span>
          <input
          required
           className="form-control w-50 p-2 text-center col-md-8 offset-md-3 mt-2"
          //  className="titleTxt"
          placeholder="please Enter title"
         type="text"
         onChange={(e)=>{
            settitle(e.target.value)
        }}
        value={title}
         ></input>
         </span>
        </div>

    <div className="title">
        Description <span>
          <input
          required
          // className="titleTxt"
          className="form-control w-50 p-2 text-center col-md-8 offset-md-3 mt-2"
          placeholder='please enter description'
         type='text'
         onChange={(e)=>setDescription(e.target.value)}
         value={description}
         ></input>
         </span>

         {/* Amount <span>
          <input
          required
          // className="titleTxt"
          className="form-control w-50 p-2 text-center col-md-8 offset-md-3 mt-2"
          placeholder='Enter Amount'
          type='number'
          onChange={(e)=>setAmount(e.target.value)}
          value={amount}
         ></input>
         </span> */}

         <button  
         className="btn btn-primary mt-4 mb-2"
         style={{fontSize:"20pt"}} onClick={()=>addvalidate()}>Creat new to-do</button>
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