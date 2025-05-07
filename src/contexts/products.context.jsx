import { createContext, useEffect, useState } from "react";

import {shopdata} from '../Data.js'
import {SHOP_DATA} from '../Data.js'
import {addCollectionAndDocuments,getCategoriesAnddocuments} from  '../utils/firebase/firebase.utils.js'

export const CategoriesContext=createContext({
    categories:[]
});


export const CategoriesProvider=({children})=>{
    useEffect(()=>{
    // addCollectionAndDocuments('categories',SHOP_DATA)
const getCategoriesMap=async ()=>{
    const data=await getCategoriesAnddocuments('categories');
    setCategories(data);
}
getCategoriesMap()

    },[])
    const [categories,setCategories]=useState([]);
    const value={categories}
    return (<CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>)
}