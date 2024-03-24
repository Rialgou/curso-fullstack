import { useState } from "react";
const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};
const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  );
};
const Statistics = (props) => {
  const { good, neutral, bad, all, average, positive } = props;
  if (all === 0) {
    return <p>No feedback given</p>;
  }
  return (
    <table>
      <tbody>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value={all} />
        <StatisticLine text="average" value={average / all} />
        <StatisticLine text="positive" value={(positive / all) * 100 + " %"} />
      </tbody>
    </table>
  );
};

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);
  const [average, setAverage] = useState(0);
  const [positive, setPositive] = useState(0);

  const handleGoodClick = () => {
    setGood(good + 1);
    setAll(all + 1);
    setAverage(average + 1);
    setPositive(positive + 1);
  };
  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
    setAll(all + 1);
  };
  const handleBadClick = () => {
    setBad(bad + 1);
    setAll(all + 1);
    setAverage(average - 1);
  };
  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={handleGoodClick} text="good" />
      <Button onClick={handleNeutralClick} text="neutral" />
      <Button onClick={handleBadClick} text="bad" />
      <h1>statistics</h1>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        all={all}
        average={average}
        positive={positive}
      />
    </div>
  );
};

export default App;

// const Hello = ({ name, age }) => {
//   const bornYear = () => new Date().getFullYear() - age;
//   return (
//     <div>
//       <p>
//         Hello {name}, you are {age} years old
//       </p>
//       <p>So you were probably born in {bornYear()}</p>
//     </div>
//   );
// };

// const App = () => {
//   const name = 'Peter'
//   const age = 10

//   return (
//     <div>
//       <h1>Greetings</h1>
//       <Hello name="Maya" age={26 + 10} />
//       <Hello name={name} age={age} />
//     </div>
//   )
//}
// const Display = ({counter}) => <div>{counter}</div>
// const Button = ({onClick,text}) =>{
//   return(
//     <button onClick={onClick}>{text}</button>
//   )

// }
// const App = (props) => {
//   const [counter, setCounter] = useState(0);

//   const addOne = () => setCounter(counter + 1);
//   const decreaseOne = () => setCounter(counter - 1);
//   const setToZero = () => setCounter(0);

//   return (
//     <>
//       <Display counter={counter}/>
//       <Button onClick={addOne} text='plus'/>
//       <Button onClick={setToZero} text='zero'/>
//       <Button onClick={decreaseOne} text='minus'/>
//     </>
//   );
// };

// const History = (props) =>{
//   console.log(props.allClicks.length)
//   if(props.allClicks.length  === 0){
//     return(
//       <div>
//         the app is used by pressing the buttons
//       </div>
//     )
//   }
//   return(
//     <div>
//       button press history: {props.allClicks.join(' ')}
//     </div>
//   )
// }
// const Button = ({onClick,text}) =>{
//   return(
//     <button onClick={onClick}>{text}</button>
//   )
// }
// const App = () => {
//   const [left, setLeft] = useState(0)
//   const [right, setRight] = useState(0)
//   const [total, setTotal] = useState(0)
//   const [allClicks, setAll] = useState([])

//   const handleLeftClick = () => {
//     setAll(allClicks.concat('L'))
//     const updatedLeft = left +1
//     setLeft(updatedLeft)
//     setTotal(updatedLeft+right)
//   }

//   const handleRightClick = () => {
//     setAll(allClicks.concat('R'))
//     const updatedRight = right +1
//     setRight(updatedRight)
//     setTotal(left+updatedRight)
//   }
//   const handleClearClick = () => {
//     setAll([])
//     setLeft(0)
//     setRight(0)
//     setTotal(0)
//   }

//   return (
//     <div>
//       {left}
//       <Button onClick={handleLeftClick} text='left'/>
//       <Button onClick={handleRightClick} text='right'/>
//       {right}
//       <Button onClick={handleClearClick} text='clear'/>
//       <History allClicks={allClicks}/>
//       <p>total {total}</p>
//     </div>
//   )
// }
// const Display = props => <div>{props.value}</div>

// const Button = (props) => (
//   <button onClick={props.handleClick}>
//     {props.text}
//   </button>
// )
// const App = (props) => {
//   const [value, setValue] = useState(10)
//   const setToValue = (newValue) => {
//     setValue(newValue)
//   }
//   // ...
//   return (
//     <div>
//       <Display value={value} />
//       <Button handleClick={() => setToValue(1000)} text="thousand" />
//       <Button handleClick={() => setToValue(0)} text="reset" />
//       <Button handleClick={() => setToValue(value + 1)} text="increment" />
//     </div>
//   )
// }
