import { DarkmodeProvider } from './contex/usecontext';
import {DataContextProvider} from './contex/DataArray';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';
import Header from './components/header';
import Form from './components/form';
import User from './components/User';
import Followers from './components/Followers';
import Following from './components/following';
import Repositories from './components/Repositories';
function App() {
  return (
    <DataContextProvider>
    <DarkmodeProvider>
    <BrowserRouter>
    <Switch>
   
    <Route path="/" exact>
        <Header/>   
        <Form/>
      </Route>


<Route path="/followers">
  <Header/>
  <Followers/>
</Route>


<Route path="/following">
  <Header/>
  <Following/>
</Route>


<Route path="/repositories">

  <Header/>
  <Repositories/>
  </Route>



      <Route path="/detail">
        <Header/><User/>
      </Route>

      


   
    </Switch>
    </BrowserRouter>
    </DarkmodeProvider>
    </DataContextProvider>
    
  );
}

export default App;
