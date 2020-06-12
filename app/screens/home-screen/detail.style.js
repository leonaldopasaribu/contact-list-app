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
        backgroundColor: '#f6f6f6',
        paddingTop:100,
    },
    header: {
        backgroundColor: '#33b2ff',
        justifyContent: 'space-around',
    },
    imageContact: {
        width: 170,
        height: 170,
        borderRadius: 150,
        top: 14,
        alignContent: 'center'
    },
    nameContact: {
        textAlign: 'center',
        top: 34,
        fontSize: 20,
        fontWeight: 'bold',
    },
    emailContact: {
        textAlign: 'center',
        top: 44,
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
    addIcon: {
        width: 33,
        height: 33,
    },
    call:{
        backgroundColor: '#00ff00',
        width:250,
        height:50,
        borderRadius:100,
        alignItems: 'center',
        top:200,
    },
    callIcon:{
        top:5,
        width:33,
        height:33,
    }
});
