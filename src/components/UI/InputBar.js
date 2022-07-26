import styled from 'styled-components';
import PropTypes from 'prop-types';
import Button from './Button';
import { IoArrowDown } from 'react-icons/io5';

InputBar.propTypes = {
  placeholder: PropTypes.string,
  button: PropTypes.bool,
  onButtonClick: PropTypes.func,
};

InputBar.defaultProps = {
  button: false,
};

export default function InputBar({
  placeholder,
  button,
  onButtonClick,
  textareaRef,
  ...rest
}) {
  return (
    <Form button={button}>
      <textarea
        placeholder={placeholder}
        autoFocus
        spellCheck="false"
        ref={textareaRef}
        {...rest}
      />
      {button && (
        <Button size={'big'} onClick={onButtonClick}>
          <IoArrowDown />
        </Button>
      )}
    </Form>
  );
}

const Form = styled.form`
  background-color: white;
  display: flex;
  align-items: center;
  border: 2px solid silver;
  border-radius: 1.3rem;

  textarea {
    background: none;
    outline: none;
    border: none;
    margin: 14px 20px;
    ${({ button }) => button && 'margin-right: 0'};
    padding: 0;
    font-size: 1.125rem;
    font-family: sans-serif;
    line-height: 1.5;
    resize: none;
    color: black;
    height: 1.6875rem;
    max-height: 20rem;
    word-break: break-all;

    &::placeholder {
      color: silver;
    }
    flex: 1;
  }
`;
