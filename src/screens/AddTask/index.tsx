import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { api } from '../../services/api';

import { Form, NameTask, Description, Button } from './styles';

const AddTask: React.FC = () => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')

    const { navigate } = useNavigation();

    const handleSubmit = () => {
        api.post('/tasks', {
            name,
            description
        }).then(() => {
            navigate('ToDo');
            
            setName('');
            setDescription('');
        })
    }

  return (
      <Form>
          <NameTask placeholder="Nome da Task" value={name} onChangeText={text => setName(text)} />
          <Description 
            placeholder="Breve descricao" 
            multiline={true} 
            numberOfLines={5} 
            value={description} 
            onChangeText={text => setDescription(text)}
        />
            <Button onPress={handleSubmit}>
                <Text>Adicionar</Text>
            </Button>
      </Form>
  );
}

export default AddTask;