import Table from "./Table";

import React, { useMemo, useEffect, useState } from 'react'

const Index = () => {
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
        <Table columns={columns} data={data}
        />
    )
}

export default Index