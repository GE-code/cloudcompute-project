import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Signup from './pages/Signup';

function App () {
    return (
        <div className='Background'>
            <BrowserRouter>
                <Header></Header>
                <Switch>
                    <Route path="/" exact>
                        <welcome>
                            Welcome!
                        </welcome>
                    </Route>
                    <Route path="/signup" exact><Signup></Signup></Route>
                </Switch>
            </BrowserRouter>
        </div>
        
    );
}

export default App;