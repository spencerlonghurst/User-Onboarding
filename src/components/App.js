import '../App.css';
import Form from './Form';
import React, { useState } from 'react';

const initialFormValues = {
  firstname: '',
  lastname: '',
  password: '',
  email: '',
  gender: '',
  occupation: '',
  relationship: '',
  learnMore: false,
  learnMoreReact: false,
  network: false,
  findJob: false,
  findSpouse: false,
  laugh: false
}









export default function App() {
  const [profile, setProfile] = useState([])






  return (
    <div className="App">
      <Form 
        values
        toChange
      />
    </div>
  );
}