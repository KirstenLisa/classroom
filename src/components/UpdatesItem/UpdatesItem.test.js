import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import UpdatesItem from './UpdatesItem';

it('renders without crashing', () => {

  const div = document.createElement('div');
  const appContext = {date: "2020-01-26T05:59:19.704Z"}


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