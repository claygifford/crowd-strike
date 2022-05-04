import "./Challenge.css";
import Table from "../components/table/Table";
import { Mode } from "../App";
import { useEffect, useState } from "react";
import StatusCell from "../components/StatusCell";
import TableHeader from "../components/table/TableHeader";
import Checkbox from "../components/checkbox/Checkbox";
import data from "../data/data.json";
import Button from "../components/button/Button";
import IconBack from "../components/icons/IconBack";
import IconFalcon from "../components/icons/IconFalcon";

function Challenge(props: any) {
  const [rows, setRows] = useState<any[]>([]);
  const [selectedRows, setSelectedRows] = useState<{ [key: string]: any }>(
    {}
  );
  const [allRowsChecked, setAllRowsChecked] = useState<boolean | undefined>(
    false
  );

  useEffect(() => {
    const length = Object.keys(selectedRows).length;
    const rowlength = Object.entries(rows).filter(([key, value]) => value['status'] === 'available').length;
    let state =
      length === 0 ? false : length === rowlength ? true : undefined;
    setAllRowsChecked(state);
  }, [selectedRows, rows]);

  useEffect(() => {
    setRows(data);
  }, []);

  function selectAll(checked: boolean | undefined) {
    if (checked) {
      setSelectedRows(
        rows.reduce((p, c: { [key: string]: {} }, index) => {
          if (c['status'] === 'available')
            return { ...p, [index]: c };
          return p;
        }, {})
      );
    } else {
      setSelectedRows({});
    }
  }

  function onSelect(checked: boolean | undefined, rowIndex: number, row: any) {
    if (checked) {
      setSelectedRows({ ...selectedRows, [rowIndex]: row });
    } else {
      delete selectedRows[rowIndex];
      setSelectedRows({ ...selectedRows });
    }
  }

  function onBack() {
    props.setMode(Mode.Intro);
  }

  return (
    <div className="Challenge">
      <div className="background-falcon">
        <IconFalcon />
      </div>
      <div className="table-container">
        <TableHeader
          checked={allRowsChecked}
          selectedRows={selectedRows}
          onSelectAll={selectAll}
          allRowsChecked={allRowsChecked}
        />
        <Table
          {...{ rows }}
          columns={[
            {
              name: "",
              accessor: "",
              size: "50px",
              template: (rowIndex, row) => (
                <Checkbox
                  styleName={
                    row['status'] !== 'available' ? "CheckboxDisabled" : undefined
                  }
                  checked={selectedRows[rowIndex] ? true : false}
                  onChange={(checked) => onSelect(checked, rowIndex, row)}
                />
              ),
            },
            { name: "Name", accessor: "name", size: "150px" },
            { name: "Device", accessor: "device", size: "150px" },
            { name: "Path", accessor: "path", size: "1fr" },
            {
              name: "Status",
              accessor: "status",
              size: "150px",
              template: (rowIndex, row) => (
                <StatusCell status={row['status']} />
              ),
            },
          ]}
        />
      </div>
      <Button styleName="back-button" onClick={onBack} icon={<IconBack />}>
        Back
      </Button>
    </div>
  );
}

export default Challenge;
