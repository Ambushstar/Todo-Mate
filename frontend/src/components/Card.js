import React from 'react';
import './Card.css';

const Card = ({ taskName, taskCategory, taskDesc }) => {

  let cardStyle = {};
  let btnStyle = {};
  if(taskCategory === 'Personal'){
    cardStyle = {border: '2px solid #94FEB8'}
    btnStyle = {border: '2px solid #94FEB8', color:'#94FEB8'}
  }else if(taskCategory === 'Urgent'){
    cardStyle = {border: '2px solid #FF9264'}
    btnStyle = {border: '2px solid #FF9264', color:'#FF9264'}
  }else if(taskCategory === 'Work'){
    cardStyle = {border: '2px solid #64F6FF'}
    btnStyle = {border: '2px solid #64F6FF', color:'#64F6FF'}
  }else if(taskCategory === 'Important'){
    cardStyle = {border: '2px solid #94ABFE'}
    btnStyle = {border: '2px solid #94ABFE', color:'#94ABFE'}
  }else if(taskCategory === 'Misc'){
    cardStyle = {border: '2px solid #EFFE94'}
    btnStyle = {border: '2px solid #EFFE94', color:'#EFFE94'}
  }else{
    cardStyle = {border: '2px solid #e8e6e1'}
    btnStyle = {border: '2px solid #e8e6e1', color:'#e8e6e1'}
  }

  
  return (
    <div className='card' style={cardStyle}>
      <button className='cardbtn' style={btnStyle}>{taskCategory}</button>
      <h2>{taskName}</h2>
      <p>{taskDesc}</p>
    </div>
  );
};

export default Card;
