/* Модули */
import React from 'react';

/* Стили */
import './Cars.component.less';

export default class CarsComponent extends React.Component {
    
    users = [
        {name: 'Имя пользователя', family: 'Фамилия пользователя'},
        {name: 'Имя пользователя', family: 'Фамилия пользователя'},
        {name: 'Имя пользователя', family: 'Фамилия пользователя'},
        {name: 'Имя пользователя', family: 'Фамилия пользователя'},
        {name: 'Имя пользователя', family: 'Фамилия пользователя'}
    ];
    
    render() {
        return (
            <div className="app-Cars">
                <h4>Передача данных в другую компоненту</h4>
                <Link to="/ada"></Link>
            </div>
        )
    }
}
