import "./TableHeader.css";
import Button from "../button/Button";
import Checkbox from "../checkbox/Checkbox";
import IconDownload from "../icons/IconDownload";
import { useState } from "react";
import Dialog from "../dialog/Dialog";
import Table from "./Table";

type Props = {
  checked: boolean | undefined;
  onSelectAll: (checked: boolean | undefined) => void;
  selectedRows: { [key: string]: any };
  allRowsChecked: boolean | undefined;
};

function TableHeader(props: Props) {
  const [showDownloadSelected, setShowDownloadSelected] = useState(false);
  function selectedDisplay() {
    return props.allRowsChecked === false
      ? `None Selected`
      : `Selected ${Object.keys(props.selectedRows).length}`;
  }

  function downloadSelected() {
    setShowDownloadSelected(true);
  }

  return (
    <div className="TableHeader">
      <Checkbox checked={props.checked} onChange={props.onSelectAll} />
      <div className="selected-rows" style={{ padding: "0px 10px" }}>
        {selectedDisplay()}
      </div>
      <Button
        styleName={
          props.allRowsChecked === false ? "ButtonDisabled" : undefined
        }
        style={{ padding: "0px 10px" }}
        icon={<IconDownload />}
        onClick={downloadSelected}
      >
        Download Selected
      </Button>
      <Dialog isOpen={showDownloadSelected} close={setShowDownloadSelected}>
        <Table
          rows={Object.values(props.selectedRows)}
          columns={[
            { name: "Device", accessor: "device", size: "150px" },
            { name: "Path", accessor: "path", size: "1fr" },
          ]}
        />
      </Dialog>
    </div>
  );
}

export default TableHeader;
