import { Button, KeyboardAvoidingView, StyleSheet, TextInput, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { auth } from '../firebase'
import { useNavigation } from '@react-navigation/native'

const LoginScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigation = useNavigation()

  useEffect(() => {

    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        navigation.replace("Home")
      }
    })

    return unsubscribe
  }, [])


  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user
      })
      .catch(error => {
        alert(error.message)
      })
  }

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user
      })
      .catch(error => {
        alert(error.message)
      })
  }
  return (
    <KeyboardAvoidingView style={styles.container}>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.input} />

        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={text => setPassword(text)}
          style={styles.input}
          secureTextEntry={true} />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Login"
          onPress={handleLogin}
        />
        <Button
          title="Sign Up"
          onPress={handleSignUp}
        />
      </View>

    </KeyboardAvoidingView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    width: '75%',
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    marginTop: 5,
    borderRadius: 15,
    padding: 5,
  },
  buttonContainer: {
    width: '50%',
    marginTop: 15,
  },
})