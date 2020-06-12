import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, } from 'react-native';

import * as Resources from '../../services/api/resources';
import style from './detail.style';

const callIcon = require("../../assets/images/icons/phone.png");

export default class detail extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { avatar, first_name, last_name, email } = this.props.route.params;
    return (
      <View style={{ ...style.container }}>
        <View>
          <Image style={{ ...style.imageContact }}
            source={{
              uri: avatar,
            }} />
        </View>

        <Text style={{ ...style.nameContact }}>
          {/* {this.data.first_name} {this.data.last_name} */}
          {first_name} {last_name}
        </Text>
        <Text style={{ ...style.emailContact }}>
          {email}
        </Text>

        <View>
          <TouchableOpacity style={{ ...style.call}}>
            <Image style={{ ...style.callIcon }}
              source={callIcon}/>
          </TouchableOpacity>
        
        </View>

      </View>

    )
  }

}

// const detail = () => {
//   return (
//     <View style={container}>
//       <Text>Details Screen</Text>
//     </View>
//   );
// };

// export default detail;
