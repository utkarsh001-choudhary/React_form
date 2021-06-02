import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: "",
    selected: 'volvo',
    feedback: '',
    gender: '',
    vehicle:'None'
  });
  const [showContact, setShowContact] = useState({
    fName: "",
    lName: "",
    email: "",
    selected: '',
    feedback: '',
    gender: '',
    vehicle:'None'
  });
  const[clicked,setClicked]=useState(true);
  function handleChange(event) {
    let { name, value } = event.target;
    if(name==='vehicle')
    {
      if(clicked===false)
      {
          value='None';
      }
      setClicked(!clicked);

    }
    setContact(prevValue => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }
  function handleSubmit(e) {
    setShowContact(contact);
    // console.log(showContact);
    e.preventDefault();
  }
  return (
    <div className="container">

      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          name="fName"
          value={contact.fName}
          placeholder="First Name"
        />
        <input
          onChange={handleChange}
          name="lName"
          value={contact.lName}
          placeholder="Last Name"
        />
        <input
          onChange={handleChange}
          name="email"
          value={contact.email}
          placeholder="Email"
        />

        <p>Please select your gender:</p>
        <div className="radio-div">
          <input className="radio" type="radio" id="male" name="gender" value='Male' onChange={handleChange} />
          <label className="radio-label" htmlFor="male">Male</label><br />
          <input className="radio" type="radio" id="female" name="gender" value="Female" onChange={handleChange} />
          <label className="radio-label" htmlFor="female">Female</label><br />
          <input className="radio" type="radio" id="other" name="gender" value="Other" onChange={handleChange} />
          <label className="radio-label" htmlFor="other">Other</label><br />
        </div>
        <br />
        <br />
        <div className="checkbox-div">
          <input className="radio" type="checkbox" id="vehicle1" name="vehicle" value="Bike"  onChange={handleChange} />
          <label className="radio-label" htmlFor="vehicle"> I have a bike</label><br />
        </div>
        <br />
        <br />
        <label htmlFor="cars">Choose a car:</label>
        <select name="selected" id="cars" onChange={handleChange} value={contact.selected}>
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="opel">Opel</option>
          <option value="audi">Audi</option>
        </select>
        <br />
        <br />


        <p>Feedback:</p>
        <textarea name='feedback' value={contact.feedback} onChange={handleChange}></textarea>
        <br />
        <br />
        <button>Submit</button>
      </form>
        <br />
        <br />
       <h1>Your Details</h1>
        <p>Name : {showContact.fName} {showContact.lName}</p>
        <br />
        <p>Email : {showContact.email}</p>
        <br />
        <p>Gender : {showContact.gender}</p>
        <br />
        <p>Personal Vehicle : {showContact.vehicle}</p>
        <br />
        <p>Prefered Bus : {showContact.selected}</p>
        <br />
        <p>Feedback : {showContact.feedback}</p>
       
    </div>
  );
}

export default App;
