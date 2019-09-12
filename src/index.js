import React,{Component} from 'react';
import ReactDom from 'react-dom';
import {Switch, Link, Route, BrowserRouter} from 'react-router-dom';


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
                <div>
                    <Link to="/about">点击跳转到列表</Link>

                    <BrowserRouter>
                        <Switch>
                            <Route  path="/" component={Home}/> 
                            <Route  path="/about" component={About}/> 
                        </Switch>
                    </BrowserRouter>
                </div>
               <Foot/>
            
           </div>
       )
   }
}

export default App;

ReactDom.render(<App />,document.getElementById('root'));