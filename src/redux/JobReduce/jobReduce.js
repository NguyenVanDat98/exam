import { INITVAL } from './../initVal';

export const jobReduce=(state=INITVAL,action)=>{
switch (action.type) {
    case "ADD_TO_JOBS":
        const add = [...state.ListJob , action.payload]
    localStorage.setItem("listJob",JSON.stringify(add))

        return {
            ...state,ListJob : add,
        }
    case "DELETE_JOB":
    const Jobs = state.ListJob.filter(a=>a.id!==action.payload.id)
    localStorage.setItem("listJob",JSON.stringify(Jobs))
        return {
            ...state,ListJob : Jobs,
        }
    case "SAVE_JOBS":
        return {
            ...state,ListJob : action.payload,
        }    

    default:
      return {
        ...state
      }
}
}