import React from 'react';

export let SortDate = () => {
    let dates = [
        {date: "19.05.1978"},
        {date: "05.12.1970"},
        {date: "25.11.1969"},
        {date: "05.06.1964"},
        {date: "08.10.1977"}
    ]

    const formatDate = (date: any) => {
        const dateArr = date.split('.')
        // console.log(dateArr)
        const formattedDate = `${dateArr[2]}-${dateArr[1]}-${dateArr[0]}`
        // console.log(formattedDate)
         return {date: new Date(formattedDate).getTime()}
    }

    const abc = dates
        .map((date) => formatDate(date.date))
        .sort((a, b) => a.date - b.date)
        .map((d) => ({date: new Date(d.date).toLocaleDateString('ru-Ru')}))

    return (
        <div>
            {abc.map((e:{date: string})=><tr>{e.date}</tr>)}
        </div>
    )
}