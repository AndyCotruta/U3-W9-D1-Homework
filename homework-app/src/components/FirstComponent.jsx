const FirstComponent = (props) => {
  const reloadPage = () => {
    window.location.reload();
  };
  return (
    <button className="action-btn" onClick={reloadPage}>
      {props.buttonLabel}
    </button>
  );
};

export default FirstComponent;
