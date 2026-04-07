import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
    data: [],
    status: "idle"
}

export const productSlice = createSlice({
 name : "products",
 initialState,
  reducers: {
    //  fetchProducts(state, action){
    //   state.data= action.payload
    //  }
  },
  extraReducers:(builder)=> {
    builder
    .addCase(getProducts.pending, (state,action)=>{
        state.status= "loading"
    })
    .addCase(getProducts.fulfilled, (state,action)=>{
         state.data= action.payload;
         state.status= "idle"
    })
    .addCase(getProducts.rejected, (state,action)=>{
        state.status= "error"
    })
  }
})

// Action creators are generated for each case reducer function
export const {fetchProducts} = productSlice.actions

export default productSlice.reducer

export const getProducts= createAsyncThunk('products/get',async ()=>{
      const data= await fetch('https://fakestoreapi.com/products')
      const res= await data.json()
      return res
})

// export function getProducts(){
//     return async function getProductsThunk(dispatch,getState) {
//         try{
//      const data= await fetch('https://fakestoreapi.com/products')
//    const res= await data.json()
//      dispatch(fetchProducts(res))
//     } catch (error) {
//       console.error("Error fetching products:", error)
//     }
// }
// }