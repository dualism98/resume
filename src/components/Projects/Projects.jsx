import React from 'react';
import axios from 'axios';
import './Projects.css';


export default function Projects(){
    const [repos, setRepos] = React.useState([])

    React.useEffect(() => {
        axios({
            method: "GET",
            url: '/users/dualism98/repos',
            headers: {
                "Accept": 'application/vnd.github.mercy-preview+json'
            }
        })
        .then(response => {
            console.log(response.data)
            setRepos(response.data)
        })
    }, [])

    const cache = (key, value) => {
        if (typeof value == 'undefined') {
            return cache[key];
        }
        cache[key] = value;
    }

    const hash = (str) => {
        if (!cache(str)) {
            var hash = 0;
            for (var i = 0; i < str.length; i++) {
                hash = str.charCodeAt(i) + ((hash << 5) - hash);
            }
            cache(str, hash);
        }
        return cache(str);
    }

    const color = (i) => {
        if (!cache(i)) {
            var c = (i & 0x00FFFFFF)
                .toString(16)
                .toUpperCase();
    
            cache(i, '#' + ("00000".substring(0, 6 - c.length) + c) + ';');
        }
    
        return cache(i);;
    }

    return(
        <div className={'projects-container'}>
            <h2>ПРОЕКТЫ</h2>
            {repos.map(item => {
                return(
                    <div>
                        <a href={item.html_url} target='_blank'><span>👾 {item.name}</span></a>
                        <div style={{marginTop: 10, marginBottom: 10}}>
                            {item.topics.map(topic => {
                                return(<span className='topic-span' style={{borderRadius: 10, fontWeight: '500', marginRight: 5, backgroundColor: String(color(hash(topic)).slice(0, 7))}}>{topic}</span>)
                            })}
                        </div>
                        <p style={{fontSize: 20}}>{item.description}</p>
                    </div>
                )
            })}
        </div>
    )
}