import ListGroup from "./components/ListGroup";

/*
function App() {
  let items = ["New York", "San Francsico", "Tokyo", "London", "Paris"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;


import Alert from "./components/alert";

function App() {
  return (
    <div>
      <Alert>
        <span>Hello World</span>
      </Alert>
    </div>
  );
}

export default App;

*/
import Button from "./components/Button";
import Alert from "./components/alert";
import { useState } from "react";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>
      )}
      <Button onClick={() => setAlertVisibility(true)}>My Button</Button>
    </div>
  );
}

export default App;
