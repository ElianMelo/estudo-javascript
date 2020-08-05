import React from 'react';

import whastsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars1.githubusercontent.com/u/41520689?s=460&u=9d0b79fcd5a239c97a1ff4c7951024f34294a66f&v=4" alt="Elian Melo" />
                <div>
                    <strong>Elian Melo</strong>
                    <span>Química</span>
                </div>
            </header>
            <p>
                Entusiasta das melhores tecnologias de química avançada.
            <br /><br />
            Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma de minhas explosões.
        </p>
            <footer>
                <p>
                    Preço/hora
                <strong>R$ 80,00</strong>
                </p>

                <button type="button">
                    <img src={whastsappIcon} alt="Whatsapp" />
                Entrar em contato
            </button>
            </footer>
        </article>
    );
}

export default TeacherItem;