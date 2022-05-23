import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { singUp, singUpFailure, singUpSuccess } from "./authSlice";


export const useAuth = () => {
    const user = useAppSelector( state => state.auth.user)
    
    const dispatch = useAppDispatch()
    
    return {
        user,
    }
}
