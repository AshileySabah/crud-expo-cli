import React, {useState} from 'react';
import {Text, View, TouchableOpacity, TextInput, Alert} from 'react-native';
import estilos from './estilos';
import {
  atualizarRepositoriosDoUsuario,
  deletarRepositoriosDoUsuario,
} from '../../servicos/requisicoes/repositorios';

export default function InfoRepositorio({route, navigation}) {
  const {postId, id} = route.params.item;

  const [nome, setNome] = useState(route.params.item.name);
  const [data, setData] = useState(route.params.item.data);

  async function salvar() {
    const resultado = await atualizarRepositoriosDoUsuario(
      postId,
      nome,
      data,
      id,
    );

    if (resultado === 'sucessso') {
      Alert.alert('Repositório atualizado!');
      navigation.goBack();
    } else {
      Alert.alert('Erro ao atualizar o repositório.');
    }
  }

  async function deletar() {
    const resultado = await deletarRepositoriosDoUsuario(id);

    if (resultado === 'sucessso') {
      Alert.alert('Repositório deletado!');
      navigation.goBack();
    } else {
      Alert.alert('Erro ao deletar o repositório.');
    }
  }

  return (
    <View style={estilos.container}>
      <TextInput
        placeholder="Nome do repositório"
        autoCapitalize="none"
        style={estilos.entrada}
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        placeholder="Data de criação"
        autoCapitalize="none"
        style={estilos.entrada}
        value={data}
        onChangeText={setData}
      />
      <TouchableOpacity style={estilos.botao} onPress={salvar}>
        <Text style={estilos.textoBotao}>Salvar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[estilos.botao, {backgroundColor: '#DD2B2B', marginTop: 10}]}
        onPress={deletar}>
        <Text style={estilos.textoBotao}>Deletar</Text>
      </TouchableOpacity>
    </View>
  );
}
