import { Button } from "antd";

type Props = {
  step: number,
  handleStep: (method: boolean) => void
}

const CreateEventModalHeader = (props: Props) => {
  return (
    <div className="create-modal-header">
        {props.step > 0 ?
        <button className="step-button back-button" onClick={()=>props.handleStep(false)}>
          BACK</button> : <p className="create-modal-title">Create new Event</p>}
        {/* <div className="dots">. . .</div> */}
        {props.step === 0 &&
        <Button form="create-event-first" type="primary" htmlType="submit">
          NEXT
        </Button>}
        {props.step === 1 &&
        <Button form="create-event-second" type="primary" htmlType="submit">
          NEXT
        </Button>}
        {props.step === 2 &&
        <Button form="create-event" type="primary" htmlType="submit">
          CREATE
        </Button>}
    </div>
  )
}

export default CreateEventModalHeader;