import Button from "../button/Button";
import "./Dialog.css";

type Props = {
  isOpen: boolean | undefined;
  close: any;
  children?: any;
};

function Dialog(props: Props) {
  function onClose() {
    props.close(false);
  }
  return props.isOpen ? (
    <div className="Dialog">
      <div className="dialog-container">
        <div className="dialog-header">Download Selected</div>
        <div className="dialog-body">{props.children}</div>
        <div className="dialog-footer">
          <div style={{ marginLeft: "auto" }}></div>
          <Button onClick={onClose}>close</Button>
        </div>
      </div>
    </div>
  ) : (
    <> </>
  );
}

export default Dialog;
