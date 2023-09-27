export default function TodoList({todos}){
    return(
        //<div className="ToDoList">
           // this is the todolist function
        //</div>

        <ul>
            {
                todos.map(todo =>(
                    <li key={todo.id}>{todo.text}</li>
                ))
            }
        </ul>
    );
}