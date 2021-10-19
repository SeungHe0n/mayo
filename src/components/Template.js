import './Template.scss';

const Template = ({ children }) => {
  return (
    <div className="Template">
      <div className="app-title">MAYO</div>
      <div>{children}</div>
    </div>
  );
};

export default Template;
