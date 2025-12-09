import './App.css'
import Counter from './components/Counter.jsx';
import PasswordField from './components/PasswordField.jsx';
import SubscribeButton from './components/SubscribeButton.jsx';
import TodoApp from './components/TodoApp.jsx';
import UserNameForm from './components/UserNameForm.jsx';

const App = () => { return (
        <div>
            <Counter/>
            <PasswordField/>
            <SubscribeButton/>
            <UserNameForm/>
            <TodoApp/>
        </div>)}

export default App