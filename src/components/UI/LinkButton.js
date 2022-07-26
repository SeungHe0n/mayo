import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from './Button';

LinkButton.propTypes = {
  to: PropTypes.string,
};

export default function LinkButton({ to, children, ...rest }) {
  return (
    <Link to={to}>
      <Button {...rest}>{children}</Button>
    </Link>
  );
}
