import{configureStore}from'@reduxjs/toolkit';
import todosSlice from'../trk/todosSlice';
const store = configureStore({
 reducer:{
  todosSlice: todosSlice,
 }
})
export default store;