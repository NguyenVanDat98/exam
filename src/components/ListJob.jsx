import React, { useEffect } from 'react';

import Job from './Job';
import { useSelector, useDispatch } from 'react-redux';
import { addToJob, saveJob } from './../redux/jobAction';
const ListJob = props => {

 const dataJob =  useSelector(state=>state.job.ListJob)
 const dispatch = useDispatch()
useEffect(()=>{ 
    const dataLocal= JSON.parse(localStorage.getItem("listJob"))||[]
    dispatch(saveJob(dataLocal))
},[dispatch])



    return (
        <div className='listJob'>
           {dataJob.map(a=><Job data={a}/>)}
        </div>
    );
};

ListJob.propTypes = {
    
};

export default ListJob;