import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { api } from '../../services/api';

import { Container, Input, Button, TextButton, Title } from './styles';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { navigate } = useNavigation();

  const handleLogin = async () => {
    const response = await api.post('/users/login', {
      email,
      password
    });

      await AsyncStorage.setItem("token", response.data);
  
      navigate('TabRoute');
  
      setEmail('');
      setPassword('');
  }

  return (
      <Container>
          <Title>ToDo List</Title>
          <Input 
            placeholder="Email" 
            value={email} 
            onChangeText={text => setEmail(text)} 
          />
          <Input 
            placeholder="Senha" 
            secureTextEntry={true} 
            value={password}
            onChangeText={text => setPassword(text)} 
          />
          <Button onPress={handleLogin}>
            <TextButton>Login</TextButton>
          </Button>
      </Container>
  );
}

export default Login;