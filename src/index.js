import React,{Component} from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
//BrowserRouter, HashRouter,MemoryRouter,NavLink,StaticRouter

import Header from './component/header';
import Foot from './component/foot';
import Home from './pages/home'
import About from './pages/about'

import './assets/css/style.scss'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
   render(){
       return (
           <div>
                <Header/>
                <Router>
                    <div>
                        <ul>
                            <li><Link to="/">首页</Link></li>
                            <li><Link to="/about/suntao">关于</Link></li>
                        
                        </ul>

                        <hr/>

                        <Route exact path="/" component={Home}/>
                        <Route exact path="/about/:name" component={About}/>
                        
                    </div>
                </Router>
                <Foot/>
            
           </div>
       )
   }
}

export default App;

ReactDom.render(<App />,document.getElementById('root'));