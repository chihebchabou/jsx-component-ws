import './App.css';
import { Fragment } from 'react';

function App() {
  const name = 'John Doe';

  const loggedIn = true;

  const greeting = () => `Hello my name is ${name}`;
  // if (loggedIn === false) {
  //   return <div>Sorry</div>;
  // }
  return (
    <Fragment>
      <h1>Workshop JSX</h1>
      {/* <p>{loggedIn === true ? greeting() : ''}</p> */}
      <p>{loggedIn === true && greeting()}</p>
      <label htmlFor="name">Name:</label>
      <br />
      <input type="text" id="name" />
      <p>{1 + 2}</p>
    </Fragment>
  );
}

export default App;
