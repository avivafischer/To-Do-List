function App(){
  const [todos, setTodos] = React.useState([
    {
      text: 'complete week 14 modules',
      isCompleted: false,
    },
    {
      text: 'work on bullet journal',
      isCompleted: false,
    },
    {
      text: 'go to sleep early',
      isCompleted: false,
    }        
  ]);

  const addTodo = text => {
    const newTodos = [...todos, {text, isCompleted:false}];
    setTodos(newTodos);
  }

  const crossedOutTodo = e => {
    e.target.classList.toggle("crossed-line");
  }

  return (
      <div className="app">
        <div className="todo-list">
          {todos.map((todo, i) => 
            <div className="todo" key={i} id={i} onClick={crossedOutTodo}>{todo.text}</div>)}
          <TodoForm addTodo={addTodo} />
        </div>
      </div>
  );
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
