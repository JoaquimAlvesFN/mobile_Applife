import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const Form = styled.View({
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
});

export const NameTask = styled.TextInput({
    width: Dimensions.get('window').width - 50,
    backgroundColor: '#FFF'
});

export const Description = styled.TextInput({
    width: Dimensions.get('window').width - 50,
    backgroundColor: '#FFF',
    marginTop: 20
});

export const Button = styled.TouchableOpacity({
    backgroundColor: '#0D9200',
    width: Dimensions.get('window').width - 80,
    padding: 15,
    marginTop: 10,
    alignItems: 'center'
});