import { createSlice } from "@reduxjs/toolkit"

import routes from '../../routes/routes'
const initialState = {
    headertitle:routes[0].name
}

const headerTitleSlice = createSlice({
    name: "headertitle",
    initialState,
    reducers: {
        updateheadertitle: (state, {payload})=>{
            state.headertitle = payload
        }
    }
})

export const { updateheadertitle } = headerTitleSlice.actions
export const getheadertitle = (state)=> state.headertitle.headertitle
export default headerTitleSlice.reducer