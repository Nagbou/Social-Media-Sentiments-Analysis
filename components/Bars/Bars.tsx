"use client";
import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import styles from "./Bars.module.css";
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
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

// Define prop types for CustomTooltipCursor
interface CustomTooltipCursorProps {
    x?: number;
    y?: number;
    width?: number;
    height?: number;
}

const CustomTooltipCursor: React.FC<CustomTooltipCursorProps> = ({ x = 0, y = 0, width = 0, height = 0 }) => {
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

const CustomTooltip: React.FC<TooltipProps<number, string>> = ({ active, payload, label }) => {
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
                    Total likes:
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

const Bars: React.FC<BarsProps> = ({ xaxis, bar1, bar2, csvpath }) => {
    const [data, setData] = useState<ChartData[]>([]);

    useEffect(() => {
        const loadCSV = async () => {
            const response = await fetch(csvpath);
            const csvText = await response.text();

            Papa.parse<ChartData>(csvText, {
                header: true,
                dynamicTyping: true,
                complete: (result) => {
                    setData(result.data);
                },
            });
        };

        loadCSV();
    }, [csvpath]);

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
                        cursor={<CustomTooltipCursor />} // Simplified the cursor usage
                        content={<CustomTooltip />}
                    />
                    <Bar dataKey={bar1} fill="#76EEC6" />
                    <Bar dataKey={bar2} fill="#E6E6FA" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Bars;
