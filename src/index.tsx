import React, { useState } from 'react';
import { StatusBar, FlatList } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

import { colors } from './styles/global/colors';
import { SafeAreaView } from './styles/SafeAreaView';
import { Header } from './styles/components/Header';
import { Logo } from './styles/components/Logo';
import {
  TaskFormContainer,
  NewTaskInput,
  DeleteTaskButton,
  ButtonText,
} from './styles/components/TaskForm';

import { NewTaskForm } from './components/NewTaskForm';

import logo from './assets/images/logo.png';

interface Task {
  name: string;
  isChecked: boolean;
}

export const App = (): JSX.Element => {
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState<Task[]>([]);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  function handleAddNewTask() {
    if (newTask) {
      setTasks([...tasks, { name: newTask, isChecked: false }]);
      setNewTask('');
    }
  }

  function handleRemoveTask(taskName: string) {
    setTasks(tasks.filter(taskItem => taskItem.name !== taskName));
  }

  function handleSwitchTaskChecked(check: boolean, task: Task) {
    setToggleCheckBox(check);
    task.isChecked = check;
  }

  return (
    <>
      <StatusBar backgroundColor={colors.background} barStyle="dark-content" />
      <SafeAreaView>
        <Header>
          <Logo source={logo} resizeMode="contain" />
        </Header>
        <TaskFormContainer>
          <NewTaskInput
            placeholder="New Task"
            onChangeText={newTaskName => setNewTask(newTaskName)}
            value={newTask}
          />
          <DeleteTaskButton onPress={() => handleRemoveTask(task.name)}>
            <ButtonText>X</ButtonText>
          </DeleteTaskButton>
        </TaskFormContainer>
        <TaskListContent>
          <FlatList
            data={tasks}
            keyExtractor={item => item.name}
            renderItem={({ item: task }) => (
              <TaskListItem isChecked={task.isChecked}>
                <CheckBox
                  disabled={false}
                  value={task.isChecked}
                  onChange={() =>
                    handleSwitchTaskChecked(!task.isChecked, task)}
                />
                <Task isChecked={task.isChecked}>{task.name}</Task>
                <DeleteTaskContent>
                  <DeleteTaskButton onPress={() => handleRemoveTask(task.name)}>
                    <ButtonText>X</ButtonText>
                  </DeleteTaskButton>
                </DeleteTaskContent>
              </TaskListItem>
            )}
          />
        </TaskListContent>
      </SafeAreaView>
    </>
  );
};
