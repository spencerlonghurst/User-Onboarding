import React from 'react';

export default function Profile(props) {
  return (
    <div>
      <h3>{props.info.firstname}{props.info.lastname}</h3>
      <p>Email:{props.info.email}</p>
      <p>Gender: {props.info.gender}</p>
      <p>Occupation: {props.info.occupation}</p>
      <p>Relationship Status: {props.info.relationship}</p>
      {
        !!props.info.reasons && !!props.info.reasons.length &&
      <div>
        Here for:
        <ul>
        {props.info.reasons.map((like, idx) => <li key={idx}>{like}</li>)}
        </ul>
      </div>
      }
    </div>
  )
}