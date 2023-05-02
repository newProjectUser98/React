import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import {httpinstance} from "../../axios/api"

export const userlogin = createAsyncThunk('userlogin', async (values)=>{
    try{
        const url = 'api/'
        const response = await httpinstance.post(url,values)
        if(response.data?.Data?.token && response.data?.Data?.user){
            localStorage.setItem("accessToken", response.data?.Data?.token);
            localStorage.setItem("user", JSON.stringify(response.data?.Data?.user));
        }
        return response
    }catch (err){
        console.error(err);
    }
})
export const userotplogin = createAsyncThunk('userotplogin', async (values)=>{
    try{
        const {id, ...data} = values
        const url = `api/otp_login/${id}/`
        const response = await httpinstance.post(url,data)
        console.log(response);
        if(response.data?.Data?.token && response.data?.Data?.user){
            localStorage.setItem("accessToken", response.data?.Data?.token);
            localStorage.setItem("user", JSON.stringify(response.data?.Data?.user));
        }
        return response
    }catch (err){
        console.error(err);
    }
})
export const userinvitation = createAsyncThunk('userinvitation', async (values)=>{
    try{
        const {id, token, ...data} = values
        const url = `api/user_invite/${id}/${token}/`
        const response = await httpinstance.post(url,data)
        return response
    }catch (err){
        console.error(err);
    }
})
export const userotpverify = createAsyncThunk('userotpverify', async (values)=>{
    try{
        const {id, token, ...data} = values
        const url = `api/verify_user_otp/${id}/${token}/`
        const response = await httpinstance.post(url,data)
        return response
    }catch (err){
        console.error(err);
    }
})

export const signup = createAsyncThunk('signup', async (values)=>{
    try{
        const url = 'api/signup/'
        const response = await httpinstance.post(url,values)
        return response
    }catch (err){
        console.error(err);
    }
})
export const signupupdate = createAsyncThunk('signupupdate', async (values)=>{
    try{
        const {id, ...data} = values 
        const url = `api/update_signup/${id}`
        const response = await httpinstance.put(url,data)
        return response
    }catch (err){
        console.error(err);
    }
})

export const getuser = createAsyncThunk('getuser', async (paramsdata)=>{
    const {id, token} = paramsdata
    try{
        const url = `api/get_user_to_verify/${id}/${token}/`
        const response = await httpinstance.get(url)
        return response
    }catch (err){
        console.error(err);
    }
})
export const changepassword = createAsyncThunk('changepassword', async (paramsdata)=>{
    const {id, token, ...data} = paramsdata
    try{
        const url = `api/change_password/${id}/${token}/`
        const response = await httpinstance.post(url,data)
        return response
    }catch (err){
        console.error(err);
    }
})

export const forgotpassword = createAsyncThunk('forgotpassword', async (values)=>{
    try{
        const url = 'api/forgot_password/'
        const response = await httpinstance.post(url,values)
        return response
    }catch (err){
        console.error(err);
    }
})
export const logout = createAsyncThunk('logout', async ()=>{
    try{
        const url = 'api/logout/'
        const response = await httpinstance.post(url)
        localStorage.removeItem("accessToken")
        localStorage.removeItem("user")
        return response
    }catch (err){
        console.error(err);
    }
})
const initialState = {
    logedUser : {},
    authToken: '',
}

const loginSlice = createSlice({
    name : 'loginslice',
    initialState,
    extraReducers:{
        [userlogin.fulfilled]:(state,{payload})=>{
            return {...state, logedUser:payload?.data?.Data?.user, authToken:payload?.data?.Data?.token}
        }
    }
})

export const authuser = (state)=> state.userlogin.logedUser
export const authtoken = (state)=> state.userlogin.authToken

export default loginSlice.reducer