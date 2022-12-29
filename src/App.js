import React from 'react';

import {
  StatusBar,
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';

import styles from './assets/styles/styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import IconTecnologia from 'react-native-vector-icons/Ionicons';

const urlFacebook = 'https://www.facebook.com/ChinaAmendola/';
const urlGithub = 'https://github.com/lohanmattos';
const urlLinkedin = 'https://www.linkedin.com/in/lohan-amendola-a09b93154/';

const App = () => {

  const handleLink = async (props) => {

    switch (props) {
      case 'facebook':
        await Linking.openURL(urlFacebook);
        break;
      case 'github':
        await Linking.openURL(urlGithub);
        break;

      case 'linkedin':
        await Linking.openURL(urlLinkedin);
        break;

      default:
        break;

    }
  }

  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.container}>
        <Image
          source={require('./assets/img/img-perfil.jpg')}
          style={styles.imgPerfil}
        />
        <View style={styles.top}>
          <Text style={styles.textNome}>
            Lohan Amendola de Mattos Dos Santos
            <MaterialIcons
              color={'green'}
              name='verified-user'
              size={15}
            />
          </Text>
          <Text style={styles.textFuncao}>
            Desenvolvedor Full-Stack | NodeJs | React | React Native
          </Text>
        </View>
      </View>
      <View style={styles.card}>
        <Text style={styles.tituloCard}>Redes Sociais</Text>
        <View style={styles.redesSociais}>

          <TouchableOpacity onPressIn={() => handleLink('facebook')}>
            <Icon
              name="facebook-square"
              size={50}
            />
          </TouchableOpacity>

          <TouchableOpacity onPressIn={() => handleLink('github')}>
            <Icon
              name="github-square"
              size={50}
            />
          </TouchableOpacity>

          <TouchableOpacity onPressIn={() => handleLink('linkedin')}>
            <Icon
              name="linkedin-square"
              size={50}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.tituloCard}>Formação Profissional</Text>
        <View style={styles.redesSociais}>
          <Icon name="institution" size={50} />
          <View style={styles.descricaoCard}>
            <Text style={styles.textDescricaoCard}>
              Curso: Bacharel em Sistemas de Informação</Text>
            <Text style={styles.textDescricaoCard}>
              Instituição: UNEMAT</Text>
          </View>
        </View>
      </View>
      <View style={styles.card}>
        <Text style={styles.tituloCard}>Tecnologias</Text>
        <View style={styles.redesSociais}>
          <IconTecnologia name="logo-html5" size={50} />
          <IconTecnologia name="logo-css3" size={50} />
          <IconTecnologia name="logo-javascript" size={50} />
          <IconTecnologia name="logo-nodejs" size={50} />
          <IconTecnologia name="logo-react" size={50} />
        </View>
      </View>
    </SafeAreaView>

  );
};


export default App;
