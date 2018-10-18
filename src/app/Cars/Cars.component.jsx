/* Модули */
import React from 'react';
import { Link } from 'react-router-dom';

/* Стили */
import './Cars.component.less';

/* Компоненты */
import UsersComponent from '../Users/Users.component';

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
    
    render() {
        return (
            <div className="app-Cars">
                <h4>Передача данных в другую компоненту</h4>
                <p>Увидим результат {this.state.gamer}</p><br /><br />
                
                /* Придумали свой props, чтобы в другой компоненте его вызвать(Строка обязательна!) */
                <UsersComponent obj={this.state.user} />
                <br /><Link to="/users">Передать данные debugger другую компоненту</Link>
                <h4>Пример цикла</h4><br />
                <ul>/* нужна переменная с массивом */
                    {this.state.user.map((item, index) => {
                        return (
                            <li>{index}: {item.name}</li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}