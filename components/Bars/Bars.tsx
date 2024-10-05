"use client";
import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import styles from "./Bars.module.css";
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Label } from 'recharts';
import { TooltipProps } from 'recharts';

interface BarsProps {
    xaxis: string;
    bar1: string;
    bar2: string;
    csvpath: string;
}

interface ChartData {
    [key: string]: string | number;
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
function Bars({ xaxis, bar1, bar2, csvpath }: BarsProps) {
    const [data, setData] = useState<ChartData[]>([]);

    useEffect(() => {
        const loadCSV = async () => {
            fetch(csvpath)  // Use the csvpath prop
                .then(response => response.text())
                .then(csvText => {
                    // Use PapaParse to convert CSV to JSON
                    Papa.parse<ChartData>(csvText, {
                        header: true,  // Assume the first row contains headers
                        dynamicTyping: true,  // Automatically type numbers
                        complete: (result) => {
                            setData(result.data);  // Update state with parsed data
                        },
                    });
                });
        };

        loadCSV();  // Call the function inside useEffect
    }, [csvpath]);  // csvpath as a dependency

    return (
        <div className={styles.chartContainer}>
            <ResponsiveContainer width="100%" height={400}>
                <BarChart
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                        dataKey={xaxis}
                        tick={{ fill: '#fff', fontSize: 14, fontWeight: 'bold' }}
                    />
                    <YAxis
                        tick={{ fill: '#fff', fontSize: 14, fontWeight: 'bold' }}
                    />
                    <Tooltip
                        cursor={<CustomTooltipCursor />}
                        content={<CustomTooltip />}
                    />
                    <Bar dataKey={bar1} fill="#76EEC6" activeBar={<Rectangle fill="#98FF98" />} />
                    <Bar dataKey={bar2} fill="#E6E6FA" activeBar={<Rectangle fill="#C8A2E8" />} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );

};


export default Bars;
