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

        }, {
            Header: 'Current Flight',
            accessor: 'airline[0].name',
            disableSortBy: true //disabled sorting in this Header

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