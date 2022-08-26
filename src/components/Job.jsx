import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { DeleteJob } from '../redux/jobAction';

const Job = ({data}) => {
   const  dispatch= useDispatch()
    const handelDeletejob=()=>{
        dispatch(DeleteJob(data))
    }
    return (
        <div className='job'>
            <div>
            <h3>{data.time}</h3>
            <p>{data.title}</p>
            </div>
            <button onClick={handelDeletejob} >X</button>

        </div>
    );
};



export default Job;