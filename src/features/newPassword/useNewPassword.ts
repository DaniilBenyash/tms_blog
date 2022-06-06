import { useAppDispatch } from "../../redux/hooks";
import { type actionNewPassword, newPassword } from "./newPasswordSlice";

export const useNewPassword = () => {
    const dispatch = useAppDispatch();

    const newPass = (confirmData: actionNewPassword) => {
        dispatch(newPassword(confirmData))
    }

    return {
        newPass
    }
}