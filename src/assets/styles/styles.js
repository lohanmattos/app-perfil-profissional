import React from "react";
import {StyleSheet} from "react-native";

const styles = StyleSheet.create({

    page:{
        flex:1,
        backgroundColor: '#F8F8FF',
        alignItems: 'center',
    },

    container:{
        flexDirection: 'row',
    },

    top:{
        width: 300,
        justifyContent: 'center',
    },

    imgPerfil:{
        width: 100,
        height:100,
        borderRadius: 50,
        margin:10,
    },

    textNome:{
        fontSize: 20,
        marginTop: 0,
        color: 'black',
        padding: 2
    },

    textFuncao:{
        marginTop: 10,
        color: 'black',
        textAlign: "auto"
    },

    card:{
        backgroundColor: '#D5CABD',
        alignItems: 'flex-start',
        marginTop: 10,
        padding: 10,
        width: 400,
 
    },

    tituloCard: {
        color: 'black',
    },

    descricaoCard:{
        width: 400,
        justifyContent: 'center',
    },

    textDescricaoCard:{
        color: 'black',
        textAlign: 'auto',
    },
    redesSociais:{
        borderColor: 'black',
        width: 200,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15,
    }
});


export default styles; 