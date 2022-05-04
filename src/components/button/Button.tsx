import "./Button.css";

function Button(props: any) {
  return (
    <div
      role="button"
      className={`Button ${props.styleName}`}
      onClick={props.onClick}
    >
      <div style={{ paddingRight: "5px", display: "flex" }}>{props.icon}</div>
      {props.children}
    </div>
  );
}

export default Button;
