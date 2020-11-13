import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';

import CheckBox from '@react-native-community/checkbox';

import {
  Container,
  TitleContent,
  NewTaskFormContent,
  NewTaskButton,
  ButtonText,
  Title,
  NewTaskInput,
  Task,
  TaskListContent,
  TaskListItem,
  DeleteTaskButton,
} from './styles';

interface Task {
  name: string;
  isChecked: boolean;
}

export const TodoList = () => {
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState<Task[]>([]);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  useEffect(() => {}, [tasks, setToggleCheckBox]);

  function handleAddNewTask() {
    if (newTask) {
      setTasks([...tasks, { name: newTask, isChecked: false }]);
      setNewTask('');
    }
  }

  function handleRemoveTask(taskName: string) {
    setTasks(tasks.filter((taskItem) => taskItem.name !== taskName));
  }

  function handleSwitchTaskChecked(check: boolean, task: Task) {
    setToggleCheckBox(check);
    task.isChecked = check;
  }

  return (
    <Container>
      <TitleContent>
        <Title>Done</Title>
      </TitleContent>

      <NewTaskFormContent>
        <NewTaskInput
          placeholder="New Task"
          onChangeText={(text) => setNewTask(text)}
          value={newTask}
        />
        <NewTaskButton onPress={handleAddNewTask} activeOpacity={0.6}>
          <ButtonText>+</ButtonText>
        </NewTaskButton>
      </NewTaskFormContent>

      <TaskListContent>
        <FlatList
          data={tasks}
          keyExtractor={(item) => item.name}
          renderItem={({ item: task }) => (
            <TaskListItem>
              <CheckBox
                disabled={false}
                value={task.isChecked}
                onChange={() => handleSwitchTaskChecked(!task.isChecked, task)}
              />
              <Task isChecked={task.isChecked}>{task.name}</Task>
              <DeleteTaskButton onPress={() => handleRemoveTask(task.name)}>
                <ButtonText>X</ButtonText>
              </DeleteTaskButton>
            </TaskListItem>
          )}
        />
      </TaskListContent>
    </Container>
  );
};
