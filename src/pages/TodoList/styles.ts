import styled from 'styled-components/native';

interface Task {
  isChecked: boolean;
}

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

export const DeleteTaskContent = styled.View`
  align-items: flex-end;
  flex: 1;
  margin-right: 5px;
`;

export const Task = styled.Text`
  font-size: 25px;
  font-weight: bold;
  padding: 10px;

  color: ${({ isChecked }: Task) => (isChecked ? '#dcdcdc' : 'green')};
  text-decoration: ${({ isChecked }: Task) =>
    isChecked ? 'line-through' : 'none'};
`;
