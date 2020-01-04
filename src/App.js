  
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
import AddComment from './routes/AddComment/AddComment'
import AddUpdate from './routes/AddUpdate/AddUpdate'
import AddHomework from './routes/AddHomework/AddHomework'
import EditHomework from './routes/EditHomework/EditHomework'
import EditUpdate from './routes/EditUpdate/EditUpdate'
import './App.css'

class App extends Component {
  state = { hasError: false }

  static getDerivedStateFromError(error) {
    console.error(error)
    return { hasError: true }
  }

  render() {
  
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
              path={'/homework/:userType/:class/:homework/:subject'}
              component={HomeworkItem}
              />
            
            <Route
              exact
              path={'/add-comment/homework/:userType/:pageToCommentOn'}
              component={AddComment}
              />

            <Route
              exact
              path={'/latest/:userType/:class/:updates'}
              component={UpdatesItem}
              />

            <Route
              exact
              path={'/latest/add-update/:class'}
              component={AddUpdate}
              />

            <Route
              exact
              path={'/add-homework/:class/:homework/:subject'}
              component={AddHomework}
              />

            <Route
              exact
              path={'/edit-homework/:class/:homework/:id'}
              component={EditHomework}
              />

              <Route
                exact
                path={'/edit-update/:class/:updates'}
                component={EditUpdate}
                />
            
            <Route
              exact
              path={'/add-comment/latest/:userType/:pageToCommentOn'}
              component={AddComment}
              />
        
        </main>
      </div>
      </>
    )
  }
}

export default App