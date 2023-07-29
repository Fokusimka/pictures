import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Button,
  Keyboard,
} from 'react-native';

const AuthonticationScreen = () => {
  const [login, setLogin] = React.useState('');
  const [pass, setPass] = React.useState('');
  const [error, setError] = React.useState('');

  const [isSecure, setIsSecure] = React.useState(true);

  const [isVisible, setIsVisible] = React.useState(true);

  const userData = {
    login: 'Admin',
    pass: '1',
  };

  function onChangeLogin(props: string) {
    setLogin(props);
  }

  function onChangePass(props: string) {
    setPass(props);
  }

  // Настоящая авторизация работает на бэке, мы лишь должны отправить токен и данные;
  // Делать так на фронте небезопасно
  function authorization() {
    if (login === userData.login && pass === userData.pass) {
      setIsVisible(false);
      Keyboard.dismiss();
    } else {
      incorrectData();
    }
  }

  function incorrectData() {
    setLogin('');
    setPass('');
    setError('Неверно введён логин или пароль');
    setTimeout(() => setError(''), 5000);
  }

  return (
    <View style={isVisible ? styles.mainContainer : styles.mainContainerHide}>
      <Text style={styles.header}>Авторизация</Text>
      <View style={styles.authCard}>
        <Text>Логин:</Text>
        <TextInput
          style={
            error === '' ? styles.input : styles.input && styles.inputIncorrect
          }
          onChangeText={onChangeLogin}
          value={login}
          placeholder="Введите логин"
        />
        <Text>Пароль:</Text>
        <View
          style={
            error === '' ? styles.input : styles.input && styles.inputIncorrect
          }>
          <TextInput
            onChangeText={onChangePass}
            value={pass}
            placeholder="Введите пароль"
            secureTextEntry={isSecure}
          />
          <Text
            style={styles.secureButton}
            onPress={() => setIsSecure(!isSecure)}>
            {isSecure ? 'Show' : 'Hide'}
          </Text>
        </View>
        <Text style={styles.error}>{error}</Text>
        <Button
          onPress={authorization}
          title="Войти"
          disabled={(login && pass) === ''}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingVertical: 20,
    position: 'absolute',
    zIndex: 10,
    backgroundColor: 'white',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  mainContainerHide: {
    display: 'none',
  },
  header: {
    fontSize: 30,
    textAlign: 'center',
  },
  authCard: {
    justifyContent: 'center',
    flex: 1,
    paddingHorizontal: 20,
  },
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 20,
    paddingHorizontal: 10,
  },
  inputIncorrect: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 20,
    paddingHorizontal: 10,
  },
  error: {
    color: 'red',
    paddingBottom: 10,
  },
  secureButton: {
    backgroundColor: '#35ebdc',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 50,
  },
});

export default AuthonticationScreen;
