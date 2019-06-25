import React,{Component} from 'react'
import {Segment, Header} from 'semantic-ui-react'
import { db } from './firebase'
import _ from 'lodash'

export default class Recommend extends Component {
    state = {
        games : []
    }
    componentDidMount(){
        const data = this.props.data
        db.collection("games").get().then(
            async qs =>{
                console.log(qs.docs.length)
                return Promise.all(_.map(qs.docs,doc=>doc.data()))
            }
                
        ).then(games => this.setState({games:_.filter(games,game=>{
            return (
                game.minPlayer <= data.users &&
                game.maxPlayer >= data.users 
            )

            

        })}))
    }
    render(){
        return(
            <Segment>
                <Header>당신을 위한 추천</Header>
                {
                    this.state.games.map(game => game.name)
                }
            </Segment>
        )
    }
}