import Todos from './components/Todos';
import Todo from "./models/todo";

function App() {
    const todos = [
        new Todo('Learn React'),
        new Todo('Learn TypeScript')
    ]

    return (
        <div>
            <Todos items={todos} /> {/* <Todos /> */}  {/* possible because of items?: string[] */}

        </div>
    );
}

export default App;
