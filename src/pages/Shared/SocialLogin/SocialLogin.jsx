import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../provider/AuthProvider';
import { useNavigate, useLocation } from 'react-router-dom';

const SocialLogin = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const { googleSignIn } = useContext(AuthContext);

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                const savedUser = { name: loggedInUser.displayName, email: loggedInUser.email };
                // console.log('hello 1');
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(savedUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            console.log('user profile info updated');
                            alert('profile updated');
                            navigate(from, { replace: true })
                        }
                    })
            })
    }

    return (
        <div>
            <div className='divider'></div>
            <div className='w-full text-center my-4'>
                <button onClick={handleGoogleSignIn} className='btn btn-circle btn-outline btn-lg'>Google Login</button>
            </div>
        </div>
    );
};

export default SocialLogin;