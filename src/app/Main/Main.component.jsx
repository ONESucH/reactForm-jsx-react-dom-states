/* Модули */
import React from 'react';
import serialize from 'form-serialize';
import { Link } from 'react-router-dom'; // Модуль для кнопки перехода

/* Стили */
import './Main.component.less';

export default class MainComponent extends React.Component {
    
    constructor(props) {
        super (props);
        
        this.state = {
            obj: null,
            json: null,
            writeUsertext: ''
        };
        
        this.formSerialize = this.formSerialize.bind(this);
    }
    
    formSerialize(e) {
        e.preventDefault();
        
        const data = serialize(e.target, {hash: true});
        
        if (!data) {
            return false;
        } else if (data.pass !== data.passConfirm) {
            alert('Пароли не совпадают');
            return false;
        }
        
        console.log('Все хорошо форма валидна', data);
        
        this.setState({
            obj: data,
            json: JSON.stringify(data)
        })
    };
    
    render() {
        
        this.copy = 100000;
        this.NameUser = 'Владимир Петров';
        this.confirmPass = null;
        
        return (
            <div className="app-Main">
                <h4>Собираем данные с формы, следим за состоянием</h4>
                <div className="paste-local-data">
                    <span>Число - {this.copy}</span><br />
                    <span>Имя - {this.NameUser}</span>
                </div>
                <form className="form" onSubmit={this.formSerialize}>
                    <label>
                        <input type="text" name="name" placeholder="Имя" required />
                        {this.confirmPass && (<span>Формы пустые</span>)}
                    </label>
                    <label>
                        <input type="text" name="family" placeholder="Фамилия" required />
                        {this.confirmPass && (<span>Формы пустые</span>)}
                    </label>
                    <label>
                        <input type="email" name="email" placeholder="Email" required />
                        {this.confirmPass && (<span>Ошибка в e-mail</span>)}
                    </label>
                    <label>
                        <input type="password" name="pass" placeholder="Пароль будет скрыт" required />
                        {this.confirmPass && (<span>Ошибка в пароле</span>)}
                    </label>
                    <label>
                        <input type="password" name="passConfirm" placeholder="Повторите пароль" required />
                        {this.confirmPass && (<span>Повторите пароль</span>)}
                    </label>
                    <label><input type="submit" value="Отправить данные" /></label>
                </form>
                
                <ul className="result-json">
                    {this.state.json}
                </ul>
                
                <Link to="/cars"> Перейти к cards (роутинг) </Link>
                
                <div className="generation-data">
                    <h6>Введи что-нибудь чтобы отследить событие</h6>
                    <div className="post">
                        <p>Результат ваших действий {this.state.writeUsertext}</p>
                        <input type="text" onChange={(e) => this.setState({writeUsertext: e.target.value})} placeholder="Начинай вводить" />
                    </div>
                </div>
            </div>
        )
    }
}
