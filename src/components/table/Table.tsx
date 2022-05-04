import "./Table.css";

type Props = {
  columns: {
    name: string;
    accessor: string;
    size: string;
    template?: (row: any, column: any) => JSX.Element;
  }[];
  rows: any;
};

function Table(props: Props) {
  function columnSize() {
    const columns = props.columns.reduce(
      (p: {}[], c: any) => [...p, c["size"]],
      []
    );
    return columns.join(" ");
  }

  return (
    <table
      style={{
        gridTemplateColumns: columnSize(),
      }}
    >
      <thead>
        <tr>
          {props.columns?.map((column, columnIndex: number) => (
            <th key={`${columnIndex}`}>{column.name}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {props.rows?.map((row: any, rowIndex: number) => (
          <tr key={rowIndex}>
            {props.columns?.map((column, columnIndex: number) => (
              <td key={`${rowIndex}${columnIndex}`}>
                {column.template
                  ? column.template(rowIndex, row)
                  : row[column.accessor]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
