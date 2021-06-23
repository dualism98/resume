import React from 'react';
import './Info.css';


export default function Info(){
    return(
        <div className={'info-container'}>
                <h2>СКИЛЛЫ</h2>
                <div className='skill-row'><div id='react' className='current-skill'>REACT (70%)</div></div>
                <div className='skill-row'><div id='react-native' className='current-skill'>REACT-NATIVE (90%)</div></div>
                <div className='skill-row'><div id='redux' className='current-skill'>REDUX (50%)</div></div>

                <span style={{marginTop: 10, marginBottom: 10, fontWeight: '500'}}>
                    Кроме того, имел дело с 
                    <span style={{color: 'blue'}}> Express JS</span>,
                    <span style={{color: 'red'}}> MySQL</span>, и немножко
                    <span style={{color: 'darkorange'}}> Python'ом</span>
                </span>
        </div>
    )
}