import Header from './components/Header.jsx';
import Login from './components/Login.jsx';
import Signup from "./components/Signup.jsx";

function App() {
    return (
        <>
            <Header />
            <main>
                {/* <Login /> */}
                <Signup />
            </main>
        </>
    );
}

export default App;
