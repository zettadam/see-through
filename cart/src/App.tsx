import BasicCart from "./cart/BasicCart";
import FullCart from "./cart/FullCart";

import "./App.css";

const App = () => {
  return (
    <div className="content">
      <h1>Cart</h1>

      <BasicCart />
      <FullCart />
    </div>
  );
};

export default App;
