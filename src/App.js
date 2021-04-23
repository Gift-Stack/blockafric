import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/home/Home';
import Activity from './components/activity/Activity';
import Market from './components/market/Market';
import Wallet from './components/wallet/Wallet';
import Earn from './components/earn/Earn';

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/activity' component={Activity} />
                <Route path='/wallet' component={Wallet} />
                <Route path='/market' component={Market} />
                <Route path='/earn' component={Earn} />
            </Switch>
        </Router>
    );
}

export default App;
