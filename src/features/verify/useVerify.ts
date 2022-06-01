import { useAppDispatch } from "../../redux/hooks";
import { verifing, type TokenPayload } from "./verifySlice";

export const useVerify = () => {

    const dispatch = useAppDispatch();

    const verifyToken = (token: TokenPayload) => {
        dispatch(verifing(token))
    }
    
    return {
        verifyToken,
    }
}