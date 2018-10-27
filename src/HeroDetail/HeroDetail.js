import React, { Component } from 'react';

class HeroDetail extends Component {
    state = {
        hero: null
    }
    async componentDidMount() {
        const id = this.props.match.params.id;
        if (id) {
            const response = await fetch(`https://gateway.marvel.com:443/v1/public/characters/${id}?apikey=d8d8ce52b720254562a2abd11f684b8a`);
            if (response.ok) {
                const body = await response.json();
                this.setState({
                    hero: body.data.results[0]
                });
            }
        }
    }

    render () {
        console.log(this.state.hero);
        return (<div>Detail</div>);
    }
}

export default HeroDetail;