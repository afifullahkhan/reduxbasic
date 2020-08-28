const apireducer = (state='',action) =>
{
    if(action.type==='CHANGE_API')
    {
       return action.payload
    }
    return state;
}

export default apireducer;