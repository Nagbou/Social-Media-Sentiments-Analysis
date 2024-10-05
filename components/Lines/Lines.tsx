"use client";
import React, { useEffect, useState } from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    Rectangle,
    TooltipProps,
} from 'recharts';
import Papa from 'papaparse'; // Make sure to install this package

interface LinesProps {
    xaxis: string; // Key for the x-axis
    line1: string; // Key for the first line
    line2: string; // Key for the second line
    csvpath: string; // Path to the CSV file
}

const CustomTooltipCursor = (props: any) => {
    const { x, y, width, height } = props;
    return (
        <Rectangle
            fill="#004f99"
            x={x}
            y={y}
            width={width}
            height={height}
        />
    );
};

const CustomTooltip = ({ active, payload, label }: TooltipProps<number, string>) => {
    if (active && payload && payload.length) {
        return (
            <div
                style={{
                    backgroundColor: 'rgba(15, 23, 42, 0.9)',
                    padding: '16px',
                    borderRadius: '8px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px',
                    color: '#fff',
                }}
            >
                <p style={{ fontSize: '16px', fontWeight: '500' }}>{label}</p>
                <p style={{ fontSize: '14px', color: '#fff' }}>
                    Total likes :
                    <span style={{ marginLeft: '8px' }}>{payload[0].value}</span>
                </p>
                <p style={{ fontSize: '14px', color: '#fff' }}>
                    Total retweets:
                    <span style={{ marginLeft: '8px' }}>{payload[1].value}</span>
                </p>
            </div>
        );
    }
    return null;
};

// Sample data for the chart
const Lines: React.FC<LinesProps> = ({ xaxis, line1, line2, csvpath }) => {
    const [data, setData] = useState<any[]>([]); // State to hold parsed CSV data

    // Load CSV data when the component mounts
    useEffect(() => {
        const loadCSV = async () => {
            try {
                const response = await fetch(csvpath);
                const csvText = await response.text();
                // Parse CSV data into JSON format
                Papa.parse(csvText, {
                    header: true, // Use the first row as header
                    dynamicTyping: true, // Automatically convert types
                    complete: (result) => {
                        setData(result.data); // Set the parsed data to state
                        console.log(result.data); // Log the fetched data
                    },
                });
            } catch (error) {
                console.error('Error fetching CSV:', error); // Handle errors
            }
        };

        loadCSV(); // Call the function
    }, [csvpath]); // Dependency array

    // Check if data is available
    if (data.length === 0) {
        return <div>No data available</div>;
    }

    return (
        <ResponsiveContainer width="100%" height={400}>
            <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                    dataKey={xaxis} padding={{ left: 30, right: 30 }}
                    tick={{ fill: '#fff', fontSize: 14, fontWeight: 'bold' }} />
                <YAxis
                    tick={{ fill: '#fff', fontSize: 14, fontWeight: 'bold' }} />
                <Tooltip
                    cursor={<CustomTooltipCursor />}
                    content={<CustomTooltip />}
                />
                <Legend />
                <Line type="monotone" dataKey={line1} stroke="#FFDEAD" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey={line2} stroke="#FF1493" />
            </LineChart>
        </ResponsiveContainer>
    );
}

export default Lines;
