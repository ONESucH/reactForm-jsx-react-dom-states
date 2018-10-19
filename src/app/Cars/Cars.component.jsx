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
            cars: [
                {title: 'Название заголовка', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsVQRrPL1Le6o3CKHt4L4GECGAidGxTi0vVZGi9lCxhOxDMno0', name:'Название машины', description: 'Описание машины'},
                {title: 'Название заголовка', img: 'https://i1.androeed.ru/icons/2018/08/28/17961.png', name:'Название машины', description: 'Описание машины'},
                {title: 'Название заголовка', img: 'https://www.techbooky.com/wp-content/uploads/2018/10/2019_The-Year-of-E-Cars-200x200.jpg', name:'Название машины', description: 'Описание машины'},
                {title: 'Название заголовка', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNnJhkGbT0EXOgpQ0lx27t9ea-rxdXlxXfvzOapWHIxiWlfWABgQ', name:'Название машины', description: 'Описание машины'},
                {title: 'Название заголовка', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBpVVwIs-CHnvAJdH513mv5zQKUvaS5znZXBBMpIsmKO4XSJ1o', name:'Название машины', description: 'Описание машины'}
            ],
            gamer: 'Володя'
        }
    }

    get done() {
        /*return this.state.user === [] ? 'Данных нет' : 'данные есть';*/
        return this.state.user;
    }

    get listCars() {
        return this.state.cars;
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