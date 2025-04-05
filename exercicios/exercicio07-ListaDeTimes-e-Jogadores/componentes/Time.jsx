import { StyleSheet, View, FlatList } from 'react-native'
import React from 'react'
import {Card, Text} from 'react-native-paper'
import Jogadores from './Jogadores'

export default function Time(props) {

const {nome, anoFundacao, mascote, imagem, jogadores } = props
  return (
    <View>
        <Card>
            <Card.Title title={nome} subtitle={anoFundacao}/>
            <Card.Content>
                <Text>{mascote}</Text>
            </Card.Content>
            <Card.Cover style={styles.cardImagem}source={{uri: imagem}}/>
            <Card.Actions>
                <FlatList 
                horizontal
                data={jogadores}
                renderItem={({item}) => (
                    <Jogadores 
                    nome={item.nome}
                    numero={item.numero}
                    imagem={item.imagem}
                    
                    />
                )}
                
                />
            </Card.Actions>


        </Card>
        
      
    </View>
  )
}

const styles = StyleSheet.create({
    cardImagem: {
        width: 250,
        height: 250,
        alignSelf: 'center',
        borderRadius: 125

    }
})