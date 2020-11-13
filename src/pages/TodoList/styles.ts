import styled from 'styled-components/native';

interface Task {
  isChecked: boolean;
}

export const LogoImage = styled.Image`
  width: 200px;
  height: 200px;
  top: -35px;
`;

export const Container = styled.SafeAreaView`
  flex: 1;
  margin: 5px 20px;
  flex-direction: column;
`;

export const TitleContent = styled.View`
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const NewTaskFormContent = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: -25px;
`;

export const TaskListContent = styled.View`
  margin-top: 20px;
  flex: 1;
`;
export const TaskListItem = styled.View`
  flex-direction: row;
  align-items: center;
  border: 1px solid #dcdcdc;
  border-radius: 5px;
  margin-top: 5px;
  background-color: ${({ isChecked }: Task) =>
    isChecked ? '#0006' : '#fafafa'};
`;

export const NewTaskButton = styled.TouchableOpacity`
  border-radius: 50px;
  background-color: green;
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
  margin-left: 5px;
`;

export const ButtonText = styled.Text`
  color: #fafafa;
  font-weight: bold;
  font-size: 30px;
`;

export const DeleteTaskContent = styled.View`
  align-items: flex-end;
  flex: 1;
  margin-right: 5px;
`;

export const DeleteTaskButton = styled.TouchableOpacity`
  background-color: red;
  border-radius: 50px;
  height: 25px;
  width: 25px;
  justify-content: center;
  align-items: center;
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

export const Task = styled.Text`
  font-size: 25px;
  font-weight: bold;
  padding: 10px;

  color: ${({ isChecked }: Task) => (isChecked ? '#dcdcdc' : 'green')};
  text-decoration: ${({ isChecked }: Task) =>
    isChecked ? 'line-through' : 'none'};
`;
