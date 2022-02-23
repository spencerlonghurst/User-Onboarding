import React from 'react';

export default function Form(props) {

  // const values = props.values;
  // const toChange = props.toChange;

  const change = event => {
    const name = event.target.name;
    const type = event.target.type;
    const value = event.target.value;
    const checked = event.target.checked;
    const valueToUse = type === 'checkbox' ? checked : value;
    props.toChange(name, valueToUse);
  }






  return (
    <form>
      <div>
        <h3>Required Info</h3>
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
            type='text'
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
          />
        </label>

        <button>Submit</button>
      </div>
    </form>
  )
}