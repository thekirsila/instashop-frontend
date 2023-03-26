import React from 'react';
import {Link} from "react-router-dom";

const Question = ({ number, headline, secondaryText, inputType, children, next, item, action }) => {
  return (
    <div className='parent' style={{width: "100vw"}}>
      <div className="question">
        <h2>Question {number}</h2>
        <h1>{headline}</h1>
        <p style={{color: 'grey'}}>{secondaryText}</p>
        {inputType === 'color' ? (
          children
        ) : (
          <input value={item} onChange={e => action(e.target.value)} placeholder="Write your answer here..." type={inputType} className="question-input" style={{color: "rgb(2, 100, 81)"}} />
        )}
        <div style={{marginTop: '20px'}}>
          {next && <Link to={next} className="next-button">Next</Link>}
        </div>
      </div>
      <div className="question-image"></div>
    </div>
  );
};

export default Question;
