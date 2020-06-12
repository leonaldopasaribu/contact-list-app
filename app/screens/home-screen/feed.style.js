import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  feedBlock: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonMargin: {
    margin: 10,
  },
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#F3F3F3',
    },
    header: {
        backgroundColor: '#33b2ff',
        justifyContent: 'space-around',
    },
    listContact: {
        flex: 1,
    },
    cardContact: {
        backgroundColor: '#fff',
        width: Dimensions.get('window').width * 0.92,
        height: 100,
        marginTop: 20,
    },
    imageContact: {
        width: 70,
        height: 70,
        borderRadius: 50,
        left: 10,
        top: 14,
    },
    nameContact: {
        left: 110,
        top: -44,
        fontSize: 18,
        fontWeight: 'bold',
    },
    emailContact: {
        left: 110,
        top: -34,
        fontSize: 15,
        fontWeight: 'normal',
    },
    floatingicon: {
        backgroundColor: '#33b2ff',
        borderRadius: 50,
        position: 'absolute',
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        right: 30,
        bottom: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },
    addIcon :{
      width:33,
      height:33,
    }
});
