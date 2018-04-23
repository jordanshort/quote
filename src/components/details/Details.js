import React from 'react';
import './Details.css';

export default function Details(props){
    const { companyName, symbol, primaryExchange, open, avgTotalVolume,
            high, low, previousClose, sector, latestVolume, week52High, week52Low } = props.stockData;
    return(
        <div>
            <table>
                <tbody>
                    <tr>
                        <td>Company</td>
                        <td>{companyName}</td>
                        <td>Open</td>
                        <td>{open}</td>
                    </tr>
                    <tr>
                        <td>Symbol</td>
                        <td>{symbol}</td>
                        <td>High</td>
                        <td>{high}</td>
                    </tr>
                    <tr>
                        <td>Primary Exchange</td>
                        <td>{primaryExchange}</td>
                        <td>Low</td>
                        <td>{low}</td>
                    </tr>
                    <tr>
                        <td>Sector</td>
                        <td>{sector}</td>
                        <td>Prev. Close</td>
                        <td>{previousClose}</td>
                    </tr>
                    <tr>
                        <td>Volume</td>
                        <td>{latestVolume}</td>
                        <td>Avg. Volume</td>
                        <td>{avgTotalVolume}</td>
                    </tr>
                    <tr>
                        <td>52 Week High</td>
                        <td>{week52High}</td>
                        <td>52 Week Low</td>
                        <td>{week52Low}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}