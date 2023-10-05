import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function CustomDatePicker() {
    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    const renderMonthContent = (month, shortMonth, longMonth) => {
        const tooltipText = `Tooltip for month: ${longMonth}`;
        return <span title={tooltipText}>{shortMonth}</span>;
    };
    const renderYearContent = (year) => {
        const tooltipText = `Tooltip for year: ${year}`;
        return <span title={tooltipText}>{year}</span>;
    };
    return (
        <div>
            <DatePicker
                selected={new Date()}
                renderYearContent={renderYearContent}
                showYearPicker
                dateFormat="yyyy"
                renderMonthContent={renderMonthContent}
                // showMonthYearPicker
                // dateFormat="MM/yyyy"
                showFourColumnMonthYearPicker
            />
            <button onClick={() => { }}>Daily</button>
            <button onClick={() => { }}>Weekly</button>
            <button onClick={() => { }}>Monthly</button>
        </div>
    );
}

export default CustomDatePicker;