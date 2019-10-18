import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import Header from '../Header/Header'
import PrivateRoute from '../Utils/PrivateRoute'
import PublicOnlyRoute from '../Utils/PublicOnlyRoute'
import NotFoundPage from '../NotFoundPage/NotFoundPage'
import LandingPage from '../../routes/LandingPage/LandingPage'
import LoginPage from '../../routes/LoginPage/LoginPage'
import ReflectionListPage from '../../routes/ReflectionListPage/ReflectionListPage'
import ReflectionPage from '../../routes/ReflectionPage/ReflectionPage'
import FormPage from '../../routes/FormPage/FormPage'
import HomePage from '../HomePage/HomePage'

class App extends Component {
 
  render() {
    return (
    
      <div className='App'>
        <header className='App__header'>
          <Header />
        </header>
        <main className='App__main'>
          <Switch>
            <PublicOnlyRoute
              exact
              path={'/'}
              component={LandingPage}
            />
            <PublicOnlyRoute
              path={'/login'}
              component={LoginPage}
            />
            <PrivateRoute
              path={'/home'}
              component={HomePage}
            />
            <PrivateRoute
              path={'/form'}
              component={FormPage}
            />
            <PrivateRoute
              path={'/reflections'}
              component={ReflectionListPage}
            />
            <PrivateRoute
              path={'/reflection/:reflectionId'}
              component={ReflectionPage}
            />
            <Route
              component={NotFoundPage}
            />
          </Switch>
        </main>
      </div>
    )
  }
  
}
export default App;
