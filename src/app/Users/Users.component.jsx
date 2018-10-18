/* Модули */
import React from 'react';
/* Стили */
import './Users.component.less';

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
        
        console.log(JSON.stringify(this.props.name));
        
        this.getDataComponent = this.getDataComponent.bind(this);
    }
    
    getDataComponent(props) {
        console.log('Запустили');
        console.log('props', props);
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
                    <h3>
                        Получили данные из другой компоненты?
                    </h3>
                    {this.props.name}
                </div>
            </div>
        )
    }
}