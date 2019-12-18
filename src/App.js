  
import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import GoogleFontLoader from 'react-google-font-loader';
//import PrivateRoute from '../Utils/PrivateRoute'
//import PublicOnlyRoute from '../Utils/PublicOnlyRoute'
import Header from './components/Header/Header'
import LandingPage from './routes/LandingPage/LandingPage'
import LoginPage from './routes/LoginPage/LoginPage'
import RegistrationPage from './routes/RegistrationPage/RegistrationPage'
import StartPage from './routes/StartPage/StartPage'
import HomeworkItem from './components/HomeworkItem/HomeworkItem'
import UpdatesItem from './components/UpdatesItem/UpdatesItem'
import './App.css'

class App extends Component {
  state = { hasError: false }

  static getDerivedStateFromError(error) {
    console.error(error)
    return { hasError: true }
  }

  render() {
    console.log(this.props)
    return (
      <>
      <GoogleFontLoader
      fonts={[
        {
          font: 'Beth+Ellen',
          weights: [400, '400i'],
        },
        {
          font: 'Schoolbell',
          weights: [400, 700],
        },
      ]}
    />
      <div className='App'>
        <header className='App__header'>
          <Header />
        </header>
        <main className='App__main'>
          {this.state.hasError && <p className='red'>There was an error! Oh no!</p>}
            <Route
              exact
              path={'/'}
              component={LandingPage}
            />
            <Route
              exact
              path={'/login'}
              component={LoginPage}
            />
            <Route
              exact
              path={'/register'}
              component={RegistrationPage}
            />
            <Route
              exact
              path={'/welcome/:userType/:class'}
              component={StartPage}
            />
            <Route
              exact
              path={'/homework/:userType/:class/:homework'}
              component={HomeworkItem}
              />

            <Route
              exact
              path={'/latest/:userType/:class/:updates'}
              component={UpdatesItem}
              />
            
            <Route
              exact
              path={'/add-comment/:pageToCommentOn'}
              />
        
        </main>
      </div>
      </>
    )
  }
}

export default App