const initialState={
    count:0,
}
const Tworeducer=(state= initialState, action)=>{
    switch(action.type){
        case 'MULTIPLY_TWO':
            return{
                ...state,
                count: state.count+1,
            }  
        // case 'MULTIPLY_FIVE':
        //     return{
        //         ...state,
        //         count:state.count+2,
        //     }    
            default:
                return state;
    }
}
export default Tworeducer