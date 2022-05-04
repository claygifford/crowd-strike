import { Mode } from "../App";
import Button from "../components/button/Button";
import IconFalconEye from "../components/icons/IconFalconEye";
import IconFalconMarks from "../components/icons/IconFalconMarks";
import IconPlay from "../components/icons/IconPlay";
import "./Intro.css";

function Intro(props: any) {
  return (
    <div className="Intro">
      <div className="box-centered-vertically-horizontally">
        <div
          style={{ display: "flex", justifyContent: "center", gap: "200px" }}
        >
          <IconFalconEye position="left" />
          <IconFalconEye position="right" />
        </div>
        <div className="coding-challenge">4 hr Coding Challenge</div>
        <Button onClick={onStart} styleName="intro-button" icon={<IconPlay />}>
          Start
        </Button>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "200px",
            paddingTop: "50px",
          }}
        >
          <IconFalconMarks position="left" />
          <IconFalconMarks position="right" />
        </div>
      </div>
    </div>
  );

  function onStart() {
    props.setMode(Mode.Challenge);
  }
}

export default Intro;
