import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import Heroes from '../../assets/heroes.png'
import Logo from '../../assets/logo.svg'

export default function Logon() {
    const [id, setId] = useState('');
    const history = useHistory();

    async function handleLogin(e) {
        e.preventDefault();

        try {
            const response = await api.post('session', { id });

            if (response.status === 200) {
                localStorage.setItem('ongId', id);
                localStorage.setItem('ongName', response.data.name);

                history.push('/profile');
            }
            
            console.log(response.data.name);
        } catch (err) {
            alert('Falha no login');
        }
    }

    return (
        <div className="container-Logon">
            <section className="form">

                <img src={Logo} alt="Be the Hero"/>

                <form onSubmit={handleLogin}>
                    <h1>Faça seu logon</h1>

                    <input 
                        placeholder="Digite seu ID"
                        value={id}
                        onChange={e => setId(e.target.value)}
                    />
                    <button className="button" type="submit">Entrar</button>

                    <Link className="back-link" to="/register">
                        <FiLogIn size={18} color="#e02041"/>
                        Não tenho cadastro
                    </Link>
                </form>

            </section>
            <img src={Heroes} alt="Heroes"/>
        </div>
    )
};