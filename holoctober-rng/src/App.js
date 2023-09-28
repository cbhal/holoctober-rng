import './App.css';
import React from 'react';

const members = require('./members.json'); 
const imgs = require('./members-img.json');

function App() {
  const [alumni, allowAlumni] = React.useState(false);
  const [stars, allowStars] = React.useState(false);
  const [select, setSelect] = React.useState({});

  const randomProperty = (obj1, obj2) => {
    let keys = Object.keys(obj1);
    if (!stars) {
      keys = keys.filter(key => !key.toLowerCase().includes('holostars'));
      keys = keys.filter(key => key !== 'Alum');
    };
    if (!alumni) {
      keys = keys.filter(key => !key.toLowerCase().includes('alum'));
    };
    const group = keys[ keys.length * Math.random() << 0];
    const groupMembers = obj1[group];
    const index = groupMembers.length * Math.random() << 0;
    const rndMember = groupMembers[index];
    const imgMember = obj2[group][index]; 
    return {group, rndMember, imgMember};
  };

  const handleClick = () => {
    setSelect(randomProperty(members, imgs));
  }

  const handleAlumn = () => {
    allowAlumni(!alumni);
  }

  const handleStars = () => {
    allowStars(!stars);
  }

  return (
    <div className="App">
        <h1>Holoctober Rnd Member</h1>
        <label><input type='checkbox' onChange={handleAlumn} checked={alumni}/>Graduated</label>
        <label><input type='checkbox' onChange={handleStars} checked={stars}/>Holostars</label>
        <button onClick={handleClick}>Select</button>
        <h3>{select.group}</h3>
        <p>{select.rndMember}</p>
        <img height='600px' src={select.imgMember} loading='lazy' alt={select.rndMember}/>
    </div>
  );
}

export default App;
