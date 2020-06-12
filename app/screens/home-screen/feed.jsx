import React, { useEffect, Component } from 'react';
import { View, Text, Alert, Image, TouchableOpacity, FlatList, } from 'react-native';
import * as Resources from '../../services/api/resources';
// import * as Text from '../../components/Text';
// import * as Button from '../../components/Button';
import * as mainStyle from '../../assets/styles/main-style';
import style from './feed.style';

const addContactIcon = require("../../assets/images/icons/plus.png");

export default class feed extends Component {

  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      data: []
    }
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    this.setState({ loading: true })

    Resources.getUsers()
      .then((res) => {
        this.setState({ loading: false, data: res.data })
      })
      .catch((err) => {
        alert(err)
      })
  }

  floatinIconAlert = () => {
    //function to handle click on floating Action Button
    Alert.alert('Edit Kontak');
  };

  render() {
    return (
      <View style={{ ...style.container }}>
        <FlatList
          refreshing={this.state.loading}
          onRefresh={() => this.getData()}
          style={{}}
          data={this.state.data}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item, index }) => (

            <TouchableOpacity
              activeOpacity={0.7}
              // onPress={() => this.props.navigation.navigate("Detail",{
              //   data : this.state.data[index]
              // })}

              onPress={() => {
                this.props.navigation.navigate('Detail', {
                  id: item.id,
                  avatar: item.avatar,
                  first_name: item.first_name,
                  last_name: item.last_name,
                  email: item.email,
                });
              }}
            >
              <View style={{ ...style.listContact }}>
                <View style={{ ...style.cardContact }}>
                  <Image style={{ ...style.imageContact }}
                    source={{
                      uri: item.avatar,
                    }}
                  />
                  <Text style={{ ...style.nameContact }}>
                    {item.first_name} {item.last_name}
                  </Text>
                  <Text style={{ ...style.emailContact }}>
                    {item.email}
                  </Text>
                </View>
              </View>

            </TouchableOpacity>
          )}
        />

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={this.floatinIconAlert}
          style={{ ...style.floatingicon }}>
          <Image style={{ ...style.addIcon }}
            source={addContactIcon} />
        </TouchableOpacity>
      </View >
    )
  }
}

//  function Feed({ navigation }) {
//     useEffect(() => {
//       getUsers();
//     }, []);

//     const getUsers = () => {
//       Resources.getUsers()
//         .then((r) => {
//           console.tron.log(r);
//         })
//         .catch((e) => {
//           console.tron.log(e);
//         });
//     };

//     <View style={{ ...style.feedBlock }}>
//       <Text.Regular>
//         Tes
//         <Text.Bold> Bold</Text.Bold>
//       </Text.Regular>
//       <Text.Bold>Tes</Text.Bold>
//       <View
//         style={{
//           ...mainStyle.main.shadow,
//           padding: 60,
//           backgroundColor: '#FFF',
//         }}
//       >
//         <Text.Light style={{}}>Tes</Text.Light>
//       </View>
//       <Button.Regular style={style.buttonMargin} onPress={() => navigation.navigate('Detail')} text="Go to Details" />
//       <Button.Outline style={style.buttonMargin} onPress={() => navigation.navigate('Detail')} text="Go to Details" />
//     </View>
//   );
// }

// export default Feed;
