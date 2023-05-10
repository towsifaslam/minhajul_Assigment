 
const {createSlice} = require('@reduxjs/toolkit');

const initialBooks = {
  todos:[
    {
      id:1,
      title:'Towsif',
      details:'anisul islam',
      complete:false,
    },
    {
      id:2,
      title:'pradiSkill',
      details:'jani nah',
      complete:true,
    }
  ]
}

export const todossSlice = createSlice({
  name:'books',
  initialState:initialBooks,
  reducers:{
    showTodos:(state)=>state,
    addTodos:(state,action)=>{
       
      const todo = action.payload
      if(todo.title.length !==0 && todo.details.length !==0){
      state.todos.push(todo)


      }
      
    },
    deleteTodos:(state,action)=>{
      const id = action.payload;
       
         state.todos = state.todos.filter((todo)=>todo.id !== id)
    },
    todoToggle:(state,action)=>{
      const id = action.payload;
       state.todos.map((todo)=>{
        console.log(todo.complete)
        if(todo.id===id){
           todo.complete = !todo.complete
          
        }
        console.log(todo.complete)
       });


    },

    todoUptade:(state,action)=>{
      const {id,title,details} = action.payload;
      const isTodos = state.todos.filter((todo)=>todo.id ===id);
      if(isTodos){
        isTodos[0].title = title;
        isTodos[0].details = details;
      }
    },
    todoClear:(sate)=>{
     sate.todos = []
    }
     
  }
})

export const{showTodos,addTodos,deleteTodos,todoToggle,todoClear,todoUptade}=todossSlice.actions;
export default todossSlice.reducer;