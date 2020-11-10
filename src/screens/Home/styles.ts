import styled from 'styled-components/native';

export const Container = styled.View({
    flex: 1,
    alignItems: 'center',
    marginTop: 10
});

export const AddButton = styled.TouchableOpacity({
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute', 
    bottom: 100, 
    right: 30, 
    backgroundColor: '#0D9200',
    width: 50,
    height: 50,
    borderRadius: 50,
});

export const ExitButton = styled.TouchableOpacity({
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute', 
    bottom: 30, 
    right: 30, 
    backgroundColor: 'red',
    width: 50,
    height: 50,
    borderRadius: 50,
});