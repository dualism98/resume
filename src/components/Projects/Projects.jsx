import React from 'react';
import axios from 'axios';
import './Projects.css';


export default function Projects(){
    const [repos, setRepos] = React.useState([])

    React.useEffect(() => {
        axios({
            method: "GET",
            url: '/users/dualism98/repos',
        })
        .then(response => {
            console.log(response.data)
            setRepos(response.data)
        })
    }, [])

    return(
        <div className={'projects-container'}>
            <h2>ПРОЕКТЫ</h2>
            {repos.map(item => {
                return(
                    <div>
                        <a href={item.url}><span>👾 {item.name}</span></a>
                        <p>{item.description}</p>
                    </div>
                )
            })}
        </div>
    )
}