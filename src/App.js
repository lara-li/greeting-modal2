import React, { useState } from "react";
import Modal from "./components/UI/Modal";

function App() {
  const [modalState, setModalState] = useState(true);
  function evaluateModalState(state) {
    setModalState(state);
  }
  return (
    <React.Fragment>
      {modalState && <Modal onClick={evaluateModalState} />}
    </React.Fragment>
  );
}

export default App;
