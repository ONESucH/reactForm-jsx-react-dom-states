/* Модули */
import React from 'react';
import { Link } from 'react-router-dom';

/* Стили */
import './Cars.component.less';

export default class CarsComponent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            user: [
                {name: 'Имя пользователя', family: 'Фамилия пользователя'},
                {name: 'Имя пользователя', family: 'Фамилия пользователя'},
                {name: 'Имя пользователя', family: 'Фамилия пользователя'},
                {name: 'Имя пользователя', family: 'Фамилия пользователя'},
                {name: 'Имя пользователя', family: 'Фамилия пользователя'}
            ],
            gamer: 'Володя'
        }
    }

    get done() {
        /*return this.state.user === [] ? 'Данных нет' : 'данные есть';*/
        return this.state.user;
    }
    
    render() {
        return (
            <div className="app-Cars">
                <h4>Передача данных в другую компоненту</h4>
                <p>Увидим результат {this.state.gamer}</p><br /><br />
                
                <br /><Link to="/users">Перейти в другую компоненту</Link>
                <h4>Пример цикла</h4><br />
                <ul>/* нужна переменная с массивом */
                    {this.state.user.map((item, index) => {
                        return (
                            <li key={index}>{index}: {item.name}</li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}