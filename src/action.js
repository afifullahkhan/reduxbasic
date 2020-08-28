export const Changename=(name)=>{
    return{
        type:'CHANGE_NAME',
        payload:name
    }
}

export const changeapi=()=>{
    return async (dispatch)=>{
        const data=await fetch('https://jsonplaceholder.typicode.com/users');
        const res=await data.json();
        dispatch({type:'CHANGE_API',payload:res[1].name})
    }
}