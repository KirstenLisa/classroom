import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div>
      <h1 className='landingpage-headline'>
        <span className='blue'>W</span>
        <span className='red'>e</span>
        <span className='yellow'>l</span>
        <span className='green'>c</span>
        <span className='red'>o</span>
        <span className='blue'>m</span>
        <span className='yellow'>e </span>
        <span className='green'>t</span>
        <span className='red'>o </span>

        <span className='blue'>M</span>
        <span className='red'>y</span>
        <span className='yellow'>C</span>
        <span className='green'>l</span>
        <span className='red'>a</span>
        <span className='blue'>ss</span>
        <span className='yellow'>r</span>
        <span className='green'>oo</span>
        <span className='red'>m</span>
      </h1>
      <div className='app-explanation'>
        <p>The app features three user types:</p>
        <ul>
          <li>Teacher</li>
          <li>Parent</li>
          <li>Student</li>
        </ul>

        <h3>Test Users</h3>
        <ul className='testUserList'>
          <li className='testUsers'>
            <p>Username: E_Krabappel</p>
            <p>Password: Password!123</p>
            <p>User Type: Teacher</p>
          </li>
          <li className='testUsers'>
            <p>Username: GuyI</p>
            <p>Password: GuyInkognito!123</p>
            <p>User Type: Parent</p>
          </li>
          <li className='testUsers'>
            <p>Username: Susi</p>
            <p>Password: SusiSonne!123</p>
            <p>User Type: Student</p>
          </li>
        </ul>
        <p>
          Teachers can add, edit and delete updates as well as homework. They
          can also write comments.
        </p>

        <p>Parents and students are only able to add comments.</p>
      </div>
    </div>
  );
};

export default LandingPage;
