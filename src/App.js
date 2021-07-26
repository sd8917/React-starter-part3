import logo from './logo.svg';
import './App.css';
import Topbar from "./Component/Topbar";
import Footer from "./Component/Footer"
import { BrowserRouter,Route ,Router,Switch} from 'react-router-dom';

import About from "./Component/About"
import Contact from "./Component/Contact"
import Home from "./Component/Home"


function App() {
  return (
   <div>
     <BrowserRouter>

     <Topbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/contact'  component={() => (
          <div>
            <About name="sudhanshu" />
            <Contact />
          </div>
        )
        } />

        <Route component = {() => <h1>404 Page not Found !!</h1>} />
      </Switch>

     <Footer />

     </ BrowserRouter>
   </div>
  );
}

export default App;
