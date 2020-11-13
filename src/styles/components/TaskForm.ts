import styled from 'styled-components/native';

export const TaskFormContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: -25px;
`;

export const NewTaskInput = styled.TextInput`
  height: 50px;
  border: 1px solid #dcdcdc;
  border-radius: 5px;
  flex: 1;
  color: #000;
  font-weight: bold;
  font-size: 20px;
`;

export const DeleteTaskButton = styled.TouchableOpacity`
  background-color: red;
  border-radius: 50px;
  height: 25px;
  width: 25px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: #fafafa;
  font-weight: bold;
  font-size: 30px;
`;
