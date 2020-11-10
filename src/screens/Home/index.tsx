import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { api } from '../../services/api';

import { Container, AddButton, ExitButton } from './styles';

interface ITasks {
    id: string;
    name: string;
    description: string;
    finish: number;
}

const Home: React.FC = () => {
    const [tasks, setTasks] = useState<ITasks[]>([]);

    const navigation = useNavigation();

    useEffect(() => {
        api.get('/tasks').then(response => {setTasks(response.data)});
    }, [tasks]);

    const handleLogout = () => {
        navigation.navigate('Login');
    }

  return (
        <Container>
            {
                tasks.map(task => (
                <Text key={task.id}>{task.name}</Text>
                ))
            }
            <AddButton onPress={() => {navigation.navigate('AddTask')}}>
                <Text>Add</Text>
            </AddButton>

            <ExitButton onPress={handleLogout}>
                <Text>Sair</Text>
            </ExitButton>
        </Container>
  );
}

export default Home;