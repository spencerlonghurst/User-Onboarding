import '../App.css';
import Form from './Form';
import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import axios from 'axios';
import Profile from './Profile';
import formSchema from './formSchema';

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
  laugh: false,
  terms: ''
}

const initialFormErrors = {
  firstname: '',
  lastname: '',
  password: '',
  email: '',
  gender: '',
  occupation: '',
  relationship: '',
  terms: ''
}

const initialDisabled = true



export default function App() {
  const [profile, setProfile] = useState([])
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  const getProfiles = () => {
    axios.get('https://reqres.in/api/users')
    .then(response => {
      console.log(response.data);
      setProfile(response.data);
    }).catch(err => console.error(err))
  }

  const postNewProfile = newProfile => {
    axios.post('https://reqres.in/api/users', newProfile)
    .then(response => {
      console.log(response);
      setProfile([response.data, profile]);
      setFormValues(initialFormValues);
    }).catch(err => console.error(err))
    
  }

  const validate = (name, value) => {
    yup.reach(formSchema, name)
    .validate(value)
    .then(() => setFormErrors({...formErrors, [name]: ''}))
    .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }
      ))
  }

  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const formSubmit = () => {
    const newProfile = {
      firstname: formValues.firstname.trim(),
      lastname: formValues.lastname.trim(),
      password: formValues.password.trim(),
      email: formValues.email.trim(),
      gender: formValues.gender.trim(),
      occupation: formValues.occupation.trim(),
      relationship: formValues.relationship.trim(),
      reasons: ['learnMore', 'learnMoreReact', 'network', 'findJob', 'findSpouse', 'laugh'].filter(reason => formValues[reason]),
      terms: formValues.terms
    }
    postNewProfile(newProfile);
  }

  useEffect(() => {
    getProfiles()
  }, [])

  useEffect(() => {
    formSchema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

 


  return (
    <div className="App">
      <Form 
        values={formValues}
        toChange={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />

      {/* {
        profile.map((pro, index) => {
          return (
            <Profile key={index} info={pro} />
          )
        })
      } */}
    </div>
  )
}