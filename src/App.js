  
import React, { Component } from 'react';
import GoogleFontLoader from 'react-google-font-loader';
import PrivateRoute from './utils/PrivateRoute';
import PublicOnlyRoute from './utils/PublicOnlyRoute';
import Header from './components/Header/Header';
import LandingPage from './routes/LandingPage/LandingPage';
import LoginPage from './routes/LoginPage/LoginPage';
import RegistrationPage from './routes/RegistrationPage/RegistrationPage';
import StartPage from './routes/StartPage/StartPage';
import HomeworkItem from './components/HomeworkItem/HomeworkItem';
import UpdatesItem from './components/UpdatesItem/UpdatesItem';
import AddComment from './routes/AddComment/AddComment';
import Email from './routes/Email/Email';
import AddUpdate from './routes/AddUpdate/AddUpdate';
import AddHomework from './routes/AddHomework/AddHomework';
import EditHomework from './routes/EditHomework/EditHomework';
import EditUpdate from './routes/EditUpdate/EditUpdate';
import './App.css'


class App extends Component {
  state = { hasError: false }

  static getDerivedStateFromError(error) {
    console.error(error);
    return { hasError: true };
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
          <PublicOnlyRoute
              exact
              path={'/'}
              component={LandingPage}
            />
            <PublicOnlyRoute
              exact
              path={'/login'}
              component={LoginPage}
            />
            <PublicOnlyRoute
              exact
              path={'/register'}
              component={RegistrationPage}
            />
            <PrivateRoute
              exact
              path={'/welcome/:class'}
              component={StartPage}
              />

            <PrivateRoute
              exact
              path={'/email'}
              component={Email}
              />

            <PrivateRoute
              exact
              path={'/homework/:userType/:class/:homework/:subject'}
              component={HomeworkItem}
              />
            
            <PrivateRoute
              exact
              path={'/add-comment/homework/:userType/:pageToCommentOn'}
              component={AddComment}
              />

            <PrivateRoute
              exact
              path={'/latest/:userType/:class/:updates'}
              component={UpdatesItem}
              />

            <PrivateRoute
              exact
              path={'/latest/add-update/:class'}
              component={AddUpdate}
              />

            <PrivateRoute
              exact
              path={'/add-homework/:class/:homework/:subject'}
              component={AddHomework}
              />

            <PrivateRoute
              exact
              path={'/edit-homework/:class/:homework/:id'}
              component={EditHomework}
              />

            <PrivateRoute
                exact
                path={'/edit-update/:class/:updates'}
                component={EditUpdate}
                />
            
            <PrivateRoute
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