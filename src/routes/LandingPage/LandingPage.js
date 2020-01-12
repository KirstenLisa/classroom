import React from 'react'

class LandingPage extends React.Component{

    render() {

        return (
            <div>
                <h2>LANDING PAGE</h2>
                <div className="app-explanation">
                    EXPLANATION
                    <p>There are three user types: teacher, student and parents. Parents and students cannot add or edit updates or add or edit homework. </p>
                    <h3>Test Users</h3>
                    <ul>
                        <li>
                            <p>Username: GuyI</p>
                            <p>Password: GuyInkognito!123</p>
                            <p>User Type: Parent</p>
                        </li>
                        <li>
                            <p>Username: Susi</p>
                            <p>Password: SusiSonne!123</p>
                            <p>User Type: Student</p>
                        </li>
                        <li>
                            <p>Username: E_Krabappel</p>
                            <p>Password: Password!123</p>
                            <p>User Type: Teacher</p>
                        </li>
                    </ul>
                </div>

            </div>
            
        )
    }
}

export default LandingPage;