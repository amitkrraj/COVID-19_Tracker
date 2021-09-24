import React, {useEffect, useState} from 'react'
import './covid.css';

const Covid = () => {

    const [data, setData] = useState([]);

    const getCovidData = async () =>{
        try{
            const res = await fetch('https://data.covid19india.org/data.json');
            const actualData = await res.json();
            setData(actualData.statewise[0]);
        } catch(err){
            console.log(err);
        }
    }

    useEffect(() => {
        getCovidData();
    }, []);

    return (
        <>
        <section>
            <h2>Live COVID19 Tracker for India</h2>
            <ul>
                <li className="card">
                    <div className="card__main">
                        <div className="card__inner">
                            <p className="card__name">Total Active</p>
                            <p className="card__total card__small">{data.active}</p>
                        </div>
                    </div>
                </li>
                <li className="card">
                    <div className="card__main">
                        <div className="card__inner">
                            <p className="card__name">Total Recovered</p>
                            <p className="card__total card__small">{data.recovered}</p>
                        </div>
                    </div>
                </li>
                <li className="card">
                    <div className="card__main">
                        <div className="card__inner">
                            <p className="card__name">Total Confirmed</p>
                            <p className="card__total card__small">{data.confirmed}</p>
                        </div>
                    </div>
                </li>
                <li className="card">
                    <div className="card__main">
                        <div className="card__inner">
                            <p className="card__name">Total Delta Confirmed</p>
                            <p className="card__total card__small">{data.deltaconfirmed}</p>
                        </div>
                    </div>
                </li>
                <li className="card">
                    <div className="card__main">
                        <div className="card__inner">
                            <p className="card__name">Total Delta Recovered</p>
                            <p className="card__total card__small">{data.deltarecovered}</p>
                        </div>
                    </div>
                </li>
                <li className="card">
                    <div className="card__main">
                        <div className="card__inner">
                            <p className="card__name">Total Deaths</p>
                            <p className="card__total card__small">{data.deaths}</p>
                        </div>
                    </div>
                </li>
            </ul>
        </section>
        </>
    )
}

export default Covid
