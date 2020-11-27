import React from 'react';

const Counter = ({ index, score, changeScore}) => {
    
    
   /*  
   incrementScore = () => {
      this.setState( prevState => ({
        score: prevState.score + 1
      }));
    }
  
    decrementScore = () => {
      this.setState( prevState => ({
        score: prevState.score - 1
      }));
    } 
    */
  
    
    return (
    <div className="counter">
        <button className="counter-action decrement" onClick={() => changeScore(index, -1)}> - </button>
        <span className="counter-score">{ score }</span>
        <button className="counter-action increment" onClick={() => changeScore(index, 1)}> + </button>
    </div>
    );

  }

  export default Counter;