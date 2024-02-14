import { useState } from "react";
import NewTodo from "./components/NewTodo";
import Todos from './components/Todos';
import Todo from "./models/todo";
import TodosContextProvider from "./store/todos-context";

function App() {
    // const todos = [
    //     new Todo('Learn React'),
    //     new Todo('Learn TypeScript')
    // ]

    // const [todos, setTodos] = useState<Todo[]>([]);

    // const addTodoHandler = (todoText: string) => {
    //     const newTodo = new Todo(todoText);

    //     setTodos((prevTodos) => {
    //         return prevTodos.concat(newTodo);
    //     });
    // }

    // const removeTodoHandler = (todoId: string) => {
    //     setTodos((prevTodos) => {
    //         return prevTodos.filter(todo => todo.id !== todoId);
    //     });
    // }

    return (
        <TodosContextProvider>
            <NewTodo />
            <Todos />
        </TodosContextProvider>
        // <div>
        //     <NewTodo onAddTodo={addTodoHandler} />
        //     <Todos items={todos} onRemoveTodo={removeTodoHandler} /> 

        //     {/* <Todos /> */}  {/* possible because of items?: string[] */}
        // </div>
    );
}

export default App;
