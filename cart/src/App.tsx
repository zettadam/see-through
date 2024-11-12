import BasicCart from "./cart/BasicCart";
import FullCart from "./cart/FullCart";

import "./app.css";

const App = () => {
  return (
    <main>
      <h1>Cart</h1>

      <BasicCart />
      <FullCart />
    </main>
  );
};

export default App;
