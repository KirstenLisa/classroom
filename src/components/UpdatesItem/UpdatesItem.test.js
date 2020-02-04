import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import UpdatesItem from './UpdatesItem';

it('renders without crashing', () => {

  const div = document.createElement('div');


  ReactDOM.render(
    <BrowserRouter>
      <UpdatesItem match= {
                  {params: {class: 1,
                  userType: 'student',
updates: 111 }}}/>
    </BrowserRouter>, 
  div);
  ReactDOM.unmountComponentAtNode(div);
});