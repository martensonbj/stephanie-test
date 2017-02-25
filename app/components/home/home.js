import React from 'react';
import { Link } from 'react-router'

import Header from '../../components/header/header.js'
import SeniorForm from '../../components/senior-form/senior-form.js'

import './home.scss'

const Home = () => {
  return (
    <div>
    <Header />
    <Link to="/sign-up">Create An Account</Link>
    {/* <SeniorForm /> */}
    {/* BM - Removed this so that the home page can be autonomous  and insead you are linked to the form.  */}
    </div>
  );
}

export default Home;
