import "./CounterComponent.css";

const CounterComponent = (props) => {
  const { count, setCount } = props;
  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    if (count == 0) {
      window.alert("Count cannot be less than 0");
    } else {
      setCount(count - 1);
    }
  }

  function goBackTo0() {
    setCount(0);
  }

  return (
    <div className="container">
      <p> {count} </p>
      <div className="buttons">
        <button onClick={increment}> Increment </button>
        <button onClick={decrement}> Decrement </button>
        {count > 10 && <button onClick={goBackTo0}> Go Back To 0 </button>}
      </div>
    </div>
  );
};

export default CounterComponent;
