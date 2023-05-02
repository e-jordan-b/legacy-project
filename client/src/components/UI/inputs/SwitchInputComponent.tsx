import React, { FunctionComponent } from 'react';
import { Switch, SwitchProps } from 'antd';

// type switchInputComponentProps = {
//   onchange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
// }

const SwitchInputComponent: FunctionComponent<SwitchProps> = (props) => {

  return <Switch
  // name={props.name}
  checkedChildren="Private"
  unCheckedChildren="Public"
  onClick={props.onChange}
  />

}




export default SwitchInputComponent;