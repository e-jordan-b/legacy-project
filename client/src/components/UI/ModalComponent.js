import { Modal } from "antd";
import { useState } from "react";

const ModalComponent = (props) => {
  const [open, setOpen] = useState(false);
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
  // const handleCancel = () => {
  //   console.log('Clicked cancel button');
  //   setOpen(false);
  // };
  return (
    <>
      <Modal
        open={props.open}
        confirmLoading={confirmLoading}
        // onOk={handleOk}
        // onCancel={handleCancel}
        style={{margin: "4.5vw", padding: 0}}
        footer={null}
        closable={false}
      >
        <div>{props.children}</div>

      </Modal>
    </>
  );
}

export default ModalComponent