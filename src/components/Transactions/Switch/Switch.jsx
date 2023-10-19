import { useField } from 'formik';
import { CiCircleMinus, CiCirclePlus } from 'react-icons/ci';
import {
  StyledSwitch,
  SwitchCheckBox,
  SwitchSlider,
  SwitchText,
} from './Switch.styled';

const Switch = ({ ...props }) => {
  const { checked } = props;
  const [field] = useField(props);

  return (
    <StyledSwitch>
      <SwitchText checked={checked}>Income</SwitchText>
      <SwitchSlider checked={checked}>
        <SwitchCheckBox {...field} {...props} />
        <CiCirclePlus icon="icon__btn-plus" checked={checked} />
        <CiCircleMinus icon="icon__btn-minus" checked={checked} />
      </SwitchSlider>
      <SwitchText checked={checked}>Expense</SwitchText>
    </StyledSwitch>
  );
};

export default Switch;
