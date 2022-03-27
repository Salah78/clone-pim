import React, { useState } from 'react';

import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';

const Log = () => {
  const [signUpModal] = useState(true);
  const [signInModal] = useState(false);

  return (
    <div className="connection-form">
      <div className="form-container">
        <ul>
          <li>Se connecter</li>
          <li>S'inscrire</li>
        </ul>

        {signUpModal && <SignUpForm />}
        {signInModal && <SignInForm />}
      </div>
    </div>
  );
};

export default Log;
