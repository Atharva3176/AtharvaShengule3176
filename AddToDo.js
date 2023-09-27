export default function AddToDo(){
    function handleAddTodo(event){
        console.log('invoked')
    }
    return(
        //<div className="ToDoList">
           // this is the todolist function
        //</div>
        <form onSubmit={handleAddTodo}>
            <input type="text" placeholder="AddToDo"></input>
            <button type="submit">Submit</button>
        </form>
        
    );
}