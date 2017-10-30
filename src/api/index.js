import uuidv4 from 'uuid/v4';

const fakeDatabase = {
  todos: [
    {
      id: uuidv4(),
      text: 'hey',
      completed: true,
      priority: false,
      projectId: '2501a2bf-e176-4c2f-b4f4-8b25266cdedb',
    },
    {
      id: uuidv4(),
      text: 'ho',
      completed: true,
      priority: false,
      projectId: '2501a2bf-e176-4c2f-b4f4-8b25266cdedb',
    },
    {
      id: uuidv4(),
      text: 'let’s go',
      completed: false,
      priority: false,
      projectId: 'aab4edaf-b179-4bad-99d7-567fc925742d',
    },
  ],
  projects: [
    {
      id: '2501a2bf-e176-4c2f-b4f4-8b25266cdedb',
      name: 'Inbox',
    },
    {
      id: 'aab4edaf-b179-4bad-99d7-567fc925742d',
      name: 'Learning Redux',
    },
  ],
};

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

export const fetchTodos = filter =>
  delay(500).then(() => {
    if (Math.random() > 0.95) throw new Error('NOPE!');

    switch (filter) {
      case 'all':
        return fakeDatabase.todos;
      case 'active':
        return fakeDatabase.todos.filter(t => !t.completed);
      case 'completed':
        return fakeDatabase.todos.filter(t => t.completed);
      case 'priority':
        return fakeDatabase.todos.filter(t => t.priority);
      default:
        throw new Error(`Unknown filter: ${filter}`);
    }
  });

export const fetchProjectTodo = projectId =>
  delay(500).then(() => {
    if (Math.random() > 0.95) throw new Error('NOPE!');
    return fakeDatabase.todos.filter(t => !t.projectId !== projectId);
  });

export const fetchProjects = () =>
  delay(10000).then(() => {
    if (Math.random() > 0.95) throw new Error('NOPE!');
    return fakeDatabase.projects;
  });

export const addTodo = text =>
  delay(500).then(() => {
    const todo = {
      id: uuidv4(),
      text,
      completed: false,
    };

    fakeDatabase.todos.push(todo);

    return todo;
  });

export const toggleTodo = id =>
  delay(500).then(() => {
    const todo = fakeDatabase.todos.find(t => t.id === id);
    todo.completed = !todo.completed;
    return todo;
  });

export const deleteTodo = id =>
  delay(500).then(() => {
    const todo = fakeDatabase.todos.find(t => t.id === id);
    fakeDatabase.todos = fakeDatabase.todos.filter(t => t.id !== id);
    return todo;
  });

export const togglePriority = id =>
  delay(500).then(() => {
    const todo = fakeDatabase.todos.find(t => t.id === id);
    todo.priority = !todo.priority;
    return todo;
  });
