import React from 'react'

class Products extends React.Component {
    constructor () {
        super()
        this.state = {
            results: []
        }
    }

    componentDidMount() {
        this.callApi()
        .then(res => this.setState({ response: res.express }))
        .catch(err => console.log(err));
    }
    
    callApi = async () => {
        const response = await fetch('http://localhost:3001/products');
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);
        
        return body;
    };

    render ()  {
        return (
            <div>
                <div>Products Place holder</div>
                <div>{this.state.response}</div>
            </div>
        )
    }
}

export default Products