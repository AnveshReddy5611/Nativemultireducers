const initialState={
    count2:0,
}
const Fivereducer=(state= initialState, action)=>{
    switch(action.type){
        case 'MULTIPLY_FIVE':
            return{
                ...state,
                count2: state.count2-1,
            }
      
            default:
                return state;
    }
}
export default Fivereducer