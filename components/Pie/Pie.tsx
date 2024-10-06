"use client";
import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import styles from "./Pie.module.css";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { TooltipProps } from 'recharts';

interface PieProps {
    dataKey: string;  // Key for the data to visualize
    nameKey: string;  // Key for the name used in the legend
    csvpath: string;  // Path to the CSV file
}

// Define the type for chart data
interface ChartData {
    [key: string]: string | number; // Generic structure for chart data
}

// Custom tooltip component for displaying information
const CustomTooltip = ({ active, payload, label }: TooltipProps<number, string>) => {
    if (active && payload && payload.length) {
        return (
            <div
                style={{
                    backgroundColor: 'rgba(15, 23, 42, 0.9)', // Dark background
                    padding: '16px',
                    borderRadius: '8px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px',
                    color: '#fff',
                }}
            >
                <p style={{ fontSize: '16px', fontWeight: '500' }}>{label}</p>
                <p style={{ fontSize: '14px', color: '#fff' }}>
                    Value: <span style={{ marginLeft: '8px' }}>{payload[0].value}</span>
                </p>
            </div>
        );
    }
    return null;
};

function PieChartComponent({ dataKey, nameKey, csvpath }: PieProps) {
    const [data, setData] = useState<ChartData[]>([]); // State to hold parsed CSV data

    // Load CSV data when the component mounts
    useEffect(() => {
        const loadCSV = async () => {
            try {
                const response = await fetch(csvpath);
                const csvText = await response.text();
                // Parse CSV data into JSON format
                Papa.parse<ChartData>(csvText, {
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

    // Define colors for pie slices
    const COLORS = [
        '#76EEC6',
        '#E6E6FA',
        '#A7C6ED',
        '#FFCCB3',
        '#FFA07A',
        '#98FF98',
        '#C8A2E8',
        '#87CEFA',
        '#FFB6C1',
        '#FFD700',
        '#FF69B4',
        '#DDA0DD',
        '#B0E0E6',
        '#F08080',
        '#20B2AA',
        '#778899',
        '#FF4500',
        '#32CD32',
        '#4682B4',
        '#F0E68C',
        '#FF6347',
        '#DA70D6',
        '#FFC0CB',
        '#D3D3D3',
        '#FF1493',
        '#ADFF2F',
        '#FFDAB9',
        '#B0C4DE',
        '#00FA9A',
        '#FF8C00',
        '#FFA500',
        '#F5DEB3',
        '#6B8E23',
        '#9370DB',
        '#7FFF00',
        '#3CB371',
        '#00BFFF',
        '#F4A460',
        '#B22222',
        '#228B22',
        '#7B68EE',
        '#8A2BE2',
        '#D2691E',
        '#E0FFFF',
        '#FFE4B5',
        '#A0522D',
        '#B8860B',
        '#FFDEAD',
        '#FF00FF',
        '#8B0000',
    ];

    return (
        <div className={styles.chartContainer}>
            <ResponsiveContainer width="100%" height={400}>
                <PieChart>
                    <Pie
                        data={data}
                        dataKey={dataKey} // Key for the value
                        nameKey={nameKey} // Use the nameKey passed as a prop
                        cx="50%" // Center of the pie chart
                        cy="50%" // Center of the pie chart
                        outerRadius={80}
                        label
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Legend
                        className={styles.legend}
                        layout="vertical"
                        verticalAlign="middle"
                        align="right"
                        wrapperStyle={{
                            maxHeight: '200px', // Limit the height of the legend
                            overflowY: 'scroll', // Enable vertical scrolling
                            padding: '10px', // Optional: add some padding for aesthetics
                        }}
                    />

                    <Tooltip content={<CustomTooltip />} />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
}

export default PieChartComponent;
