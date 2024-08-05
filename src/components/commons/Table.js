// Table.js
import React from 'react';

const Table = ({ headers, data }) => {
    return (
        <div className="overflow-auto w-full">
            <table className="min-w-full  ">
                <thead className="">
                    <tr>
                        {headers.map((header, index) => (
                            <th
                                key={index}
                                className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase border-b border-gray-200"
                            >
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, rowIndex) => (
                        <tr key={rowIndex} className="border-b border-gray-200">
                            {row.map((cell, cellIndex) => (
                                <td key={cellIndex} className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap">
                                    {cell}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
