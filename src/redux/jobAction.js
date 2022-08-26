export const addToJob =(data)=>{
    return{
        type : "ADD_TO_JOBS",
        payload : data,
    }
}
export const DeleteJob=(data)=>{
    
    return{
        type : "DELETE_JOB",
        payload : data,
    }
}
export const saveJob=(data)=>{

    return{
        type : "SAVE_JOBS",
        payload : data,
    }
}