import { useEffect, useState, useMemo } from 'react';
import styled from 'styled-components';
import Table from './Table.js';

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
  const columns = useMemo(() => [
    {
      Header: 'Name',
      accessor: 'name',

    }, {
      Header: 'Trips Amount',
      accessor: 'trips',
      Cell: props => {
        // return props.value == null ? 'No value' : props.value
        return (
          <span style={{ color: props.value == null ? "red" : "black" }}>
            {props.value == null ? 'No value' : props.value}
          </span>
        );
      }
      // Cell: props => {
      //   return props.value == null ? (
      //     <button>Click Me </button>
      //   ) : (
      //     <button disabled> No action </button>
      //   );
      // }

    }, {
      Header: 'Current Flight',
      accessor: 'airline[0].name',

    }
  ], []);

  const [passengerData, setPassengerData] = useState([]);

  const getPassengerData = async () => {
    const response = await fetch(`https://api.instantwebtools.net/v1/passenger?page=1&size=20`)
    const data = await response.json();
    setPassengerData(data.data);
    console.log(data)
  }

  useEffect(() => {

    getPassengerData();
  }, [])




  const data = useMemo(() => (passengerData), [passengerData]);

  return (
    <Styles>
      <Table columns={columns} data={data}
      />

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
