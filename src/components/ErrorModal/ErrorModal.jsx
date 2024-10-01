import Card from "../Card/Card";
import Button from "../Button/Button";
import styles from "./ErrorModal.module.css";

import { Fragment } from "react";
import { createPortal } from "react-dom";

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onCloseModal}></div>;
};

const Modal = (props) => {
  return (
    <Card className={styles.modal}>
      <header className={styles.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={styles.content}>
        <p>{props.message}</p>
      </div>
      <footer className={styles.actions}>
        <Button onClick={props.onCloseModal}>Закрыть</Button>
      </footer>
    </Card>
  );
};

const ErrorModal = (props) => {
  return (
    <Fragment>
      {createPortal(
        <Backdrop onCloseModal={props.onCloseModal} />,
        document.getElementById("backdrop") // указатель где должен быть отображен элемент
      )}

      {createPortal(
        <Modal
          title={props.title}
          message={props.message}
          onCloseModal={props.onCloseModal}
        />,
        document.getElementById("modal")
      )}
    </Fragment>
  );
};

export default ErrorModal;
