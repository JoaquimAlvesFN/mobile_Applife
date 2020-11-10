import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView({
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'center'
});

export const Title = styled.Text({
    fontWeight: 'bold',
    marginBottom: 20
});

export const Input = styled.TextInput({
    backgroundColor: '#DDD',
    padding: 15,
    width: Dimensions.get('window').width - 80,
    borderRadius: 8,
    marginBottom: 10
});

export const Button = styled.TouchableOpacity({
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0D9200',
    padding: 15,
    width: Dimensions.get('window').width - 80,
    borderRadius: 8,
    marginTop: 10
});

export const TextButton = styled.Text({
    color: '#FFF',
    fontWeight: 'bold'
})