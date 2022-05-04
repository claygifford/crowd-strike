import "./Checkbox.css";
import IconCheckBox from "../icons/IconCheckBox";
import IconIndeterminate from "../icons/IconIndeterminate";

type Props = {
  checked?: boolean | undefined;
  onChange?: (checked: boolean | undefined) => void;
  styleName?: string;
};

function Checkbox(props: Props) {
  const onCheck = () => {
    if (props.onChange) props.onChange(!props.checked);
  };

  return (
    <div
      role="checkbox"
      aria-checked={props.checked}
      onClick={onCheck}
      className={`Checkbox ${props.styleName}`}
    >
      {props.checked === true && (
        <div
          style={{
            flex: "1",
            border: "1.5px solid #e53324",
            borderRadius: "4px",
            backgroundColor: "#e53324",
          }}
        >
          <IconCheckBox />
        </div>
      )}
      {props.checked === false && (
        <div
          style={{ flex: "1", border: "1.5px solid #777", borderRadius: "4px" }}
        ></div>
      )}
      {props.checked === undefined && (
        <div
          style={{
            flex: "1",
            border: "1.5px solid #e53324",
            borderRadius: "4px",
            backgroundColor: "#e53324",
          }}
        >
          <IconIndeterminate />
        </div>
      )}
    </div>
  );
}

export default Checkbox;
