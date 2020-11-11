import React, { useState } from 'react';
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
  DeleteTaskButton
} from './styles';

interface CheckBoxTask {
  taskName: string;
  isChecked: boolean;
}

export const TodoList = () => {
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState<string[]>([]);
  // const [toggleCheckBox, setToggleCheckBox] = useState<CheckBoxTask[]>([]);

  function handleAddNewTask() {
    setTasks([ ...tasks, newTask ]);
    setNewTask('');
  }

  function handleRemoveTask(task: string) {
    setTasks(tasks.filter(taskItem => taskItem !== task))
  }

  return (
    <Container>
      <TitleContent>
        <Title>TODO LIST</Title>
      </TitleContent>

      <NewTaskFormContent>
        <NewTaskInput
          placeholder='New Task'
          onChangeText={text => setNewTask(text)}
          value={newTask}
        />
        <NewTaskButton onPress={handleAddNewTask} activeOpacity={0.6}>
          <ButtonText>+</ButtonText>
        </NewTaskButton>
      </NewTaskFormContent>

      <TaskListContent>
        <FlatList
          data={tasks}
          keyExtractor={task => task}
          renderItem={({ item: task }) => (
            <TaskListItem>
            <CheckBox
              disabled={false}
              // value={toggleCheckBox}
              // onValueChange={(newValue) => setToggleCheckBox(newValue)}
            />
            <Task>{task}</Task>
            <DeleteTaskButton onPress={() => handleRemoveTask(task)}>
              <ButtonText>X</ButtonText>
            </DeleteTaskButton>
            </TaskListItem>
          )}
        />
      </TaskListContent>
    </Container>
  );
}
