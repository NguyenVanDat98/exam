import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToJob } from './../redux/jobAction';
import { v4 as uuidv4 } from 'uuid';
import "../layout/CreateForm/style.scss"

const CreateForm = props => {
   const [time,setTime] = useState("")
   const [title,setTitle] = useState("")
    const date = new Date().toISOString().split("T")[0];
    const dispatch = useDispatch() 

const addJob=(e)=>{
    e.preventDefault()
    if(title.length>=5&& title.length<=50){
        dispatch(addToJob({time,title,id: uuidv4()}))
        setTime("")
        setTitle("")
        alert("thêm job thành công")
    }else{
        alert("Nhập chưa đủ kí tự cần thiết")
    }
}
    return (
        <form onSubmit={addJob} className='CreateForm'>
            <div className='itemInput'> <label> Nội dung:  </label> <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} required  /> </div>
            <div className='itemInput'> <label>Ngày nhắc :  </label> <input type="date" value={time} onChange={(e)=>setTime(e.target.value)} min={date} required /> </div>
            <button type='submit'>Lưu ngày</button>
        </form>
    );
};

CreateForm.propTypes = {
    
};

export default CreateForm;