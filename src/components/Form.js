import React from 'react';

export default function Form(props) {

  
  const clickSubmit = event => {
    event.preventDefault()
    props.submit()
  }

  const change = event => {
    const name = event.target.name;
    const type = event.target.type;
    const value = event.target.value;
    const checked = event.target.checked;
    const valueToUse = type === 'checkbox' ? checked : value;
    props.toChange(name, valueToUse);
  }

  return (
    <form onSubmit={clickSubmit}>
      <div>
        <h3>Required Info</h3>
        <div>
          <div>{props.errors.firstname}</div>
          <div>{props.errors.lastname}</div>
          <div>{props.errors.password}</div>
          <div>{props.errors.email}</div>
          <div>{props.errors.gender}</div>
          <div>{props.errors.occupation}</div>
          <div>{props.errors.relationship}</div>
          <div>{props.errors.terms}</div>
        </div>
        <label>First Name
          <input 
            name='firstname'
            type='text'
            onChange={change}
            value={props.values.firstname}
          />
        </label>

        <label>Last Name
          <input 
            name='lastname'
            type='text'
            onChange={change}
            value={props.values.lastname}
          />
        </label>        

        <label>Password
        <input 
            name='password'
            type='password'
            onChange={change}
            value={props.values.password}
          />
        </label>

        <label>Email
        <input 
            name='email'
            type='text'
            onChange={change}
            value={props.values.email}
          />
        </label>

        <label>Gender
          <select
            name='gender'
            onChange={change}
            value={props.values.gender}
            id='selectGender'
          >
            <option> -- Select your Gender-- </option>
            <option>Male</option>
            <option>Female</option>
            <option>Prefer not to say</option>
          </select>
        </label>

        <label>Occupation
          <select
            name='occupation'
            onChange={change}
            value={props.values.occupation}
            id='selectOccupation'
          >
            <option>-- Select your occupation --</option>
            <option>Student</option>
            <option>Teacher/Instructor</option>
            <option>Full Time Web Engineer</option>
            <option>Retired Engineer</option>
          </select>
        </label>

        <label>Single
          <input
            name='relationship'
            type='radio'
            onChange={change}
            value='single'
            checked={props.values.relationship === 'single'}
          />
        </label>

        <label>In a relationship
          <input
            name='relationship'
            type='radio'
            onChange={change}
            value='inRelationship'
            checked={props.values.relationship === 'inRelationship'}
          />
        </label>

        <label>It's complicated
          <input
            name='relationship'
            type='radio'
            onChange={change}
            value='complicated'
            checked={props.values.relationship === 'complicated'}
          />
        </label>

        <label>Married
          <input
            name='relationship'
            type='radio'
            onChange={change}
            value='married'
            checked={props.values.relationship === 'married'}
          />
        </label>
      </div>

      <div>
        <h3>Reasons to join this site</h3>
        <label>Learn more about programming
          <input
            name='learnMore'
            type='checkbox'
            onChange={change}
            checked={props.values.learnMore}
          />
        </label>

        <label>Learn more about React.js
          <input
            name='learnMoreReact'
            type='checkbox'
            onChange={change}
            checked={props.values.learnMoreReact}
          />
        </label>

        <label>Network with other Programmers
          <input
            name='network'
            type='checkbox'
            onChange={change}
            checked={props.values.network}
          />
        </label>

        <label>Find a programming job
          <input
            name='findJob'
            type='checkbox'
            onChange={change}
            checked={props.values.findJob}
          />
        </label>

        <label>Find my programming significant other
          <input
            name='findSpouse'
            type='checkbox'
            onChange={change}
            checked={props.values.findSpouse}
          />
        </label>

        <label>Laugh at programming memes
          <input
            name='laugh'
            type='checkbox'
            onChange={change}
            checked={props.values.laugh}
          />
        </label>
      </div>


      <div>
        <h3>Terms and Conditions</h3>
        <label>Terms of Service
        <input 
            name='terms'
            type='radio'
            onChange={change}
            value='theTerms'
            checked={props.values.terms === 'theTerms'}
            class='termsRadio'
          />
        </label>

        <button id='submitButton'>Submit</button>
      </div>
    </form>
  )
}