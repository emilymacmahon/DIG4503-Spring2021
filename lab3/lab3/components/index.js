import React from 'react';

class HomePage extends React.Component {
    render(){
        return(
            <p>{this.props.name}</p>
        );
    }
}

export default HomePage;