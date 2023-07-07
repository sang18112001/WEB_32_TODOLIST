import Context from "./Context";
import { useReducer } from "react";
import reducer, {initialState} from './reducer';
const Provider = ({children}) => {
   const [state, dispatch] = useReducer(reducer, initialState)
   return (
      <Context.Provider value={[state, dispatch]}>
         {children}
      </Context.Provider>
   )
}

export default Provider