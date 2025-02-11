import {create} from 'zustand';
const store = (set)=>({
    open : false,
    updateOpen : (state)=>{
        set({open : state})
    }
})

export const useStore = create(store);