import React from 'react';
import { Link } from 'react-router-dom'


function App() {
    return (
        <div className="App">
            <Link to='/sign-up'>SignUp</Link>
            <Link to='/sign-in'>SegnIn</Link>
            <Link to='/verify'>Verify</Link>
            <Link to='/reset-password'>Reset Password</Link>
        </div>
    );
}

export default App;