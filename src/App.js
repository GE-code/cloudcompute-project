import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Signin from './pages/Signin';

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
                    <Route path="/signin" exact><Signin></Signin></Route>
                </Switch>
            </BrowserRouter>
        </div>
        
    );
}

export default App;