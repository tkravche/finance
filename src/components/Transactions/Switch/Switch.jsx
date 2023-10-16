// import { useField } from 'formik';
import { CiCircleMinus, CiCirclePlus } from 'react-icons/ci';
import {
  StyledSwitch,
  SwitchCheckBox,
  SwitchSlider,
  SwitchText,
} from './Switch.styled';
import { useState } from 'react';

const Switch = () => {
  const [isOn, setIsOn] = useState(false);
  const handleToggle = () => {
    setIsOn(!isOn);
  };

  // const { checked } = props;
  // const [field] = useField(props);

  return (
    <StyledSwitch>
      <SwitchText checked={isOn}>Income</SwitchText>
      <SwitchSlider checked={isOn}>
        <SwitchCheckBox
          type="checkbox"
          checked={isOn}
          onChange={handleToggle}
        />
        <CiCirclePlus icon="icon__btn-plus" checked={isOn} />
        <CiCircleMinus icon="icon__btn-minus" checked={isOn} />
      </SwitchSlider>
      <SwitchText checked={isOn}>Expense</SwitchText>
    </StyledSwitch>
  );
};

export default Switch;
