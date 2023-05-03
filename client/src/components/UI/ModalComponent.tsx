// NOT USED
import { Modal, ModalProps } from "antd";
import { useState, FunctionComponent } from "react";

type modalComponentProps = {
  title?: string;
  open?: boolean;
  close?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  children?: any;
}

const ModalComponent: FunctionComponent<modalComponentProps> = (props) => {

  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState('Content of the modal');

  // const handleOk = () => {
  //   setModalText('The modal will be closed after two seconds');
  //   setConfirmLoading(true);
  //   setTimeout(() => {
  //     setOpen(false);
  //     setConfirmLoading(false);
  //   }, 2000);
  // };
  return (
    <>
      <Modal
        open={props.open}
        confirmLoading={confirmLoading}
        // onOk={handleOk}
        onCancel={props.close}
        style={{margin: "4.5vw", padding: 0, minHeight: "50vh"}}
        footer={null}
        width="auto"
        closable={false}
      >
        <div>{props.children}</div>

      </Modal>
    </>
  );
}

export default ModalComponent