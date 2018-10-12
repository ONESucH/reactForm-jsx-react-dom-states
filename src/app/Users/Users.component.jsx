/* Модули */
import React from 'react';

/* Стили */
import './Users.component.less';

export default class UsersComponent extends React.Component {
    
    getData(data) {
        console.log('Получили данные', data);
    }
    
    render() {
        return (
            <div className="app-Users">
                Получили данные из другой компоненты?
                {this.props.gamer}
            </div>
        )
    }
}