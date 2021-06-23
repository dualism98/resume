import React from 'react';
import './Contacts.css';


export default function Contacts() { 
    return(
        <div className='education-container'>
            <h2>КОНТАКТЫ</h2>
            <span><a href='tel:+79130546593'>📞 +7(913)054-65-93</a></span>
            <span><a href='mailto:beachsidebearhi@gmail.com'>💌 beachsidebearhi@gmail.com</a></span>
            <br />
            <span><a href={'https://vk.com/kotaro98'} target='_blank'>🥲 ВКонтакте</a></span>
            <span><a href={'https://t.me/dualism98'} target='_blank'>☺️ Telegram</a></span>
            <span><a href={'https://github.com/dualism98'} target='_blank'>😍 Github</a></span>
        </div>
    )
}