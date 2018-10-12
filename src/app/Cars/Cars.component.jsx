/* Модули */
import React from 'react';
import { Link } from 'react-router-dom';

/* Стили */
import './Cars.component.less';

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
        };
    }
    
    render() {
        return (
            <div className="app-Cars">
                <h4>Передача данных в другую компоненту</h4>
                <p>Увидим результат {this.state.gamer}</p>
                <UsersComponent gamer={this.state.gamer} />
                <Link to="/users" onClick={()=> {this.props.getData(this.state.user)}}>Users document</Link>
            </div>
        )
    }
}