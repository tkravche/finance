import { useField } from 'formik';
import { StyledTextArea } from './Comment.styled';

const Comment = ({ ...props }) => {
  const [field] = useField(props);

  return <StyledTextArea {...field} {...props} />;
};

export default Comment;
