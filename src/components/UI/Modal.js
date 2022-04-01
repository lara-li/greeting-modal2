import React, { useState } from "react";
import styles from "./Modal.module.css";
function Modal(props) {
    const [modalState, setModalState] = useState(true);
    function stateAssign() {
        setModalState(false);
        props.onClick(modalState);
    }
  return (
    <div className={styles.modal}>
      <h2 className={styles.header}>welcome to ...</h2>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        placerat auctor ipsum. Donec eget urna tellus. Proin vitae ante sit.
      </p>
      <div className={styles.btnWrapper}>
        <a onClick={stateAssign} href="/" className={styles.btnLight}>Customise preferences</a>
        <a onClick={stateAssign} href="/" className={styles.btnDark}>Accept cookies</a>
      </div>
    </div>
  );
}
export default Modal;
