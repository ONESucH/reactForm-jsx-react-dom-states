/* Модули */
import React from 'react';

/* Стили */
import './Events.component.less';

/* Компоненты */
import CarsComponent from '../Cars/Cars.component';

/* Переменные */
const User = new CarsComponent;

export default class EventsComponent extends React.Component {
    
    constructor(props){
        super(props);
        
        this.state = {
            counter: 0,
            eventClickCar: null
        };
        
        this.letterCars = this.letterCars.bind(this);
        this.eventSubmited = this.eventSubmited.bind(this);
        this.shadowValue = this.shadowValue.bind(this);
    }
    
    // Счетчик машин
    letterCars(index) {
        this.setState({
          counter: index
        })
    }

    // Ловим/сохраняем события
    eventSubmited(event) {
        event.persist(); // Сохраним event объект
        this.setState({
            eventClickCar: event.target
        });
        
        // Если есть класс удалим его
        if (document.querySelectorAll('.active')[0]) document.querySelectorAll('.active')[0].classList.remove('active');
        
        event.target.classList.add('active');
    }
    
    // С помощью ref дублируем объект
    shadowValue() {
        this.setState({
            shadow: this.refs.userText.value
        })
    }
    
    render() {
        return (
            <div className="app-Events">
                <h4>Список пользователей <span>Количество автомобилей: {this.state.counter}</span></h4>
                <div className="show-users">
                    {User.listCars.map((items, index)=> {
                        return (
                            <div className="card-car" style={{display: 'inline-block', margin: '20px'}} key={index} onLoad={(e) => this.letterCars(index)} onClick={(e) => this.eventSubmited(e)}>
                                <div className="car-title">{items.title}</div>
                                <div className="car-logo"><img src={items.img} alt="car"/></div>
                                <div className="car-name">{items.name}</div>
                                <div className="car-description">{items.description}</div>
                            </div>
                        )
                    })}
                </div>
                <div className="copy">
                    <h4>С помощью ref получаем дубликацию объекта</h4>
                    <input style={{'width': '100%', 'padding': '10px', 'margin': '10px 0'}} type="text" ref="userText" onChange={this.shadowValue} placeholder="Введите сообщение для дублироания"/><br />
                    <input style={{'width': '100%', 'padding': '10px', 'margin': '10px 0'}} type="text" placeholder={this.state.shadow} disabled/>
                </div>
            </div>
        )
    }
}
