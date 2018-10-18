/* Модули */
import React from 'react';
/* Стили */
import './Users.component.less';

/* Компоненты */
import CarsComponent from '../Cars/Cars.component';

/* Переменные */
let User = new CarsComponent;

export default class UsersComponent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            getUsers: '',
            loader: true,
            name: ''
        };
        
        window.onload = () => {
            this.setState({loader: false})
        };
        
        console.log('Урааа вытащили из другой компоненты ', User.done);
    }

    render() {
        return (
            <div className="app-Users">
                {this.state.loader ? (
                    <div className="main-loader">
                        <div className="loader" />
                    </div>
                ) : false }
                <div className="users">
                    <h3>Получили данные из другой компоненты?</h3><br /><br />
                    {JSON.stringify(User.done)}
                </div>
                <div className="timer"><br /><br />
                    <p>Сейчас на часах: {(new Date()).toString()}</p>
                </div>
            </div>
        )
    }
}