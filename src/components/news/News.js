import React from 'react';
import './News.css';

export default function News(props){
    const { headline, source, summary, datetime, url } = props.article;
    
    // converting incoming date string to a more user friendly string
    const date = new Date(datetime).toLocaleDateString();
    const time = new Date(datetime).toLocaleTimeString();
    return(
        <div>
            <div className="panel">
                <a target="_blank" href={url}>                
                    <div className="panel-header">
                            <p id="title">{headline}</p> <p id="source">{source}</p>
                    </div>
                </a>
                <div className="panel-body">
                    {date} {time} <br />
                    {summary}
                </div>
            </div>
        </div>
    )
}