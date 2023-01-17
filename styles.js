// Styles
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightgray',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 50,
    },
    inputContainer : {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: 20,
    },
    input: {
        borderBottomColor: "black",
        borderBottomWidth: 1,
        width: 200,
        height: 50,
    },
    title: {
        fontSize: 25,
    }
})