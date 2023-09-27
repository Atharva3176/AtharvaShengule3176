import logo from './logo.svg';
import './App.css';
import TodoList from './todolist';
import AddToDo from './AddToDo';


function App() {
  const todos=[
    {id:1,text:"Atharva",done:false},
    {id:2,text:"Akash",done:false},
    {id:3,text:"Disha",done:false}
  ];
  return (
    <div className="App">
      <h1>TO DO LIST</h1>
      <TodoList todos={todos}></TodoList>
      <AddToDo></AddToDo>
    </div>
  );
}

export default App;
