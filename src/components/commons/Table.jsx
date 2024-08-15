import React from 'react';

const Table = ({ headers, data, isDashboard = false }) => {
    const columnWidth = 100 / headers.length;

    return (
        <div className="overflow-auto w-full">
            <table className="min-w-full table-fixed">
                <thead>
                    <tr>
                        {headers?.map((header, index) => (
                            <th
                                key={index}
                                className={`py-3 px-6 ${isDashboard ? 'font-semibold text-lg' : 'font-medium text-xs'} tracking-wider text-gray-700 ${isDashboard ? '' : 'border-b border-gray-200'}`}
                                style={{
                                    textOverflow: 'ellipsis',
                                    overflow: 'hidden',
                                    whiteSpace: 'nowrap',
                                    textAlign: index === headers.length - 1 ? 'right' : 'left',
                                }}
                            >
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data?.map((row, rowIndex) => (
                        <tr key={rowIndex} className={`${isDashboard ? '' : 'border-b border-gray-200'}`}>
                            {row?.map((cell, cellIndex) => (
                                <td
                                    key={cellIndex}
                                    className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap"
                                    style={{
                                        textOverflow: 'ellipsis',
                                        overflow: 'hidden',
                                        whiteSpace: 'nowrap',
                                        textAlign: cellIndex === headers.length - 1 ? 'right' : 'left',
                                    }}
                                >
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
