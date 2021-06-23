import React from 'react';
import './Header.css'


export default function Header(){
    return(
        <header className='header-container'>
            <img className='avatar' src={'https://sun9-20.userapi.com/impf/c853628/v853628689/122fd6/OOZxpi3RmFA.jpg?size=1080x810&quality=96&sign=630e9db31501713ffe17e2a41192318d&type=album'} />
            <div className='info-div'>
                <h1 classNamne='name'>Храмушин Никита</h1>
                <span className='job'>Junior Frontend Developer (400 руб/ч)</span>
                <span className='about'>О себе:</span>
                    <ul>
                        <li>👨🏻‍💻 Студент-программист<a href='https://sibsau.ru/' target='_blank'> Университета Решетнёва</a></li>
                        <li>😍 Любитель интересных проектов</li>
                        <li>🤘🏻 Роцкер</li>
                        <li></li>
                    </ul>
            </div>
        </header>
    )
}