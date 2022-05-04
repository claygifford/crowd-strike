import IconAvailable from "./icons/IconAvailable";
import IconScheduled from "./icons/IconScheduled";

type Props = {
  status: string;
};
function StatusCell(props: Props) {
  return (
    <div
      style={{
        height: "24px",
        width: "24px",
        display: "flex",
        userSelect: "none",
      }}
    >
      {
        {
          scheduled: (
            <div style={{ display: "flex", gap: "12px" }}>
              <IconScheduled />
              Scheduled
            </div>
          ),
          available: (
            <div style={{ display: "flex", gap: "12px" }}>
              <IconAvailable />
              Available
            </div>
          ),
        }[props.status]
      }
    </div>
  );
}

export default StatusCell;
