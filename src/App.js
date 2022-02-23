
import styled from 'styled-components';
// import Index from './Basic/Index.js';
import Index from './Sorting/Index.js';


const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`
function App() {


  return (
    <Styles>

      <Index></Index>
      {/* <Table
        columns={[
          {
            Header: "Age",
            accessor: "age"
          }
        ]}
        data={[{ age: 8 }, { age: 11 }, { age: 9 }, { age: 6 }, { age: 12 }]}
        getCellProps={(cellInfo) => ({
          style: {
            backgroundColor: cellInfo.value > 10 ? "red" : null
          }
        })}
      /> */}
    </Styles>
  );
}

export default App;
