import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getUserInfo, getMyPosts } from "./userInfoSlice";

export const useUserInfo = () => {

    const myPosts = useAppSelector(state => state.userInfo.myPosts)
    const userInfo = useAppSelector(state => state.userInfo.user)
    const dispatch = useAppDispatch();
    
    return {
        myPosts,
        userInfo
    }
}