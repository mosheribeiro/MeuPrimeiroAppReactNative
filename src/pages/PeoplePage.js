import React from 'react';
import { Text, View } from 'react-native';
//meu componentes
import PeopleList from '../components/PeopleList';

// terceiros
import axios from "axios";

export default class PeoplePage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      peoples: []
    }
  }

  componentDidMount() {
    axios.get('https://randomuser.me/api/?nat=br&results=150')
      .then(response => {
        const { results } = response.data;
        this.setState({
          peoples: results
        });
      })
  }

  render() {
    return (
      <View>
        <PeopleList peoples={this.state.peoples}
        onPressItem={(pageParams)=>{
          this.props.navigation.navigate('PeopleDetail', pageParams);
        }}/>
      </View>
    );
  }
}
