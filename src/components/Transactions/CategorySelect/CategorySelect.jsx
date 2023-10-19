import Select from 'react-select';
import { useField } from 'formik';
import DropdownIndicator from './DropdownIndicator/DropdownIndicator';
import { CategoryWrapper, customStyles } from './CategorySelect.styled';

const CategorySelect = ({ ...props }) => {
  const [field] = useField(props);

  return (
    <CategoryWrapper>
      <Select
        styles={customStyles}
        components={{ DropdownIndicator }}
        {...field}
        {...props}
      />
    </CategoryWrapper>
  );
};

export default CategorySelect;
