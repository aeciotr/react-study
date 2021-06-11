import React, { useState } from "react";

const App = () => (
  <div>
    <h1 style={{ textAlign: "center" }}>Counter component vs function:</h1>
    <CounterClass />
    <CounterFunction />
  </div>
);

class CounterClass extends React.PureComponent {
  state = {
    counter: 0,
    toggle: false
  };

  render() {
    return (
      <>
        <Counter
          counter={this.state.counter}
          /*increment={() => {
            this.setState({
              counter: this.state.counter + 1
            })
          }}*/
          //para atualizar com base no estado anterior (prevState):
          increment={() => {
            this.setState((prevState) => ({
              counter: prevState.counter + 1
            }));
          }}
          decrement={() => {
            this.setState((prevState) => ({
              counter: prevState.counter - 1
            }));
          }}
        />

        <div style={{ textAlign: "center" }}>
          {this.state.toggle && <h1>Visivel agora!</h1>}
          <button
            onClick={() => {
              console.log(this.state.toggle);
              this.setState((prevState) => ({
                toggle: !prevState.toggle
              }));
            }}
          >
            Toogle Cass
          </button>
        </div>
      </>
    );
  }
}

function CounterFunction() {
  const [counter, setCounter] = useState(0);
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <Counter
        counter={counter}
        increment={() => {
          setCounter((counter) => counter + 1);
        }}
        decrement={() => {
          setCounter((counter) => counter - 1);
        }}
      />
      <div style={{ textAlign: "center" }}>
        {toggle && <h1>Visivel agora!</h1>}
        <button
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          Toogle Function
        </button>
      </div>
    </>
  );
}

const Counter = ({ counter, increment, decrement }) => (
  <div style={{ textAlign: "center" }}>
    <h1>{counter}</h1>
    <button onClick={decrement}>-</button>
    <button onClick={increment}>+</button>
  </div>
);

export default App;
