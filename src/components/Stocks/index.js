import { Redirect, useHistory } from "react-router-dom/cjs/react-router-dom";

function Stocks() {
  const loggedIn = true;
  const handleClick = () => {
    window.alert("Sending info to the DB!");
    history.push("/");
  };

  const history = useHistory();
  console.log(history);
  return loggedIn ? (
    <div className="comp orange">
      <h1>Stocks Component</h1>
      <button onClick={handleClick}>Home</button>
    </div>
  ) : (
    <Redirect to="/not-logged-in" />
  );
}

export default Stocks;
