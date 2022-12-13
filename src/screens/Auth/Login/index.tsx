/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { FC, useState } from 'react'
import { KeyboardAvoidingView, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import Layout from '@organisms/Layout'
import styles from './styles'
import Text from '@atoms/Text'
import Button from '@atoms/Button'
import { useDispatch } from 'react-redux'
import { signIn } from '@store/actions/auth'
import Input from '@atoms/Input'

const Login: FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorLogin, setErrorLogin] = useState('')
  const dispatch = useDispatch()
  const navigation = useNavigation()

  const handleError = (e: string) => {
    setErrorLogin(e)
  }

  const onConfirmLogin = () => {
    if ((email.length > 0) && (password.length > 0)) {
      dispatch(signIn(email, password, handleError))
    }
  }

  const goToSignUp = () => {
    navigation.navigate('SignUp')
  }

  return (
    <Layout noHeader>
      <KeyboardAvoidingView behavior="height" style={styles.container}>
        <View style={styles.title}>
          <Text size="medium" weight="regular" align="center">
            Login
          </Text>
        </View>

        <View style={styles.main}>
          <Input
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.input}
            onChangeText={text => setEmail(text)}
            value={email}
          />
          <Input
            placeholder="Password"
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={true}
            style={styles.input}
            onChangeText={text => setPassword(text)}
            value={password}
          />
          {errorLogin !== '' && <Text color='error'>{errorLogin}</Text>}
          <Button disabled={(email.length === 0) || (password.length === 0)} onPress={onConfirmLogin} style={styles.buttonConfirm}>
            <Text color="white" align="center">
              Login
            </Text>
          </Button>
        </View>
        <View style={styles.footer}>
          <View style={styles.signUpContainer}>
            <Text size="small" align="center" color="gray">
              Don't have an account?
            </Text>
            <Button
              variation="outlined"
              onPress={goToSignUp}
              style={styles.buttonSignUp}>
              <Text color="black" weight="bold">
                Sign Up
              </Text>
            </Button>
          </View>

          <Text size="small" align="center" color="gray">
            Forgotten Password?
          </Text>
        </View>
      </KeyboardAvoidingView>
    </Layout>
  )
}
export default Login
