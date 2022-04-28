<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>VueJS excercise</title>

  <!-- Scripts -->
  <!-- For browsersync gulp -->
  <script defer src="https://unpkg.com/vue@next"></script>
  <script defer src="assets/dist/js/app.min.js"></script>
  <script async src="http://course.vuejs:8888/browser-sync/browser-sync-client.js"></script>

  <!-- Styles -->
  <link href="https://fonts.googleapis.com/css2?family=Jost:wght@400;700&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="assets/dist/css/style.min.css">
</head>

<body>
  <header>
    <h1>Vue Lists and Conditional Content</h1>
  </header>
  <section id="assignment">
    <h2>Assignment</h2>
    <!-- 1) Add code to manage a list of tasks in a Vue app -->
    <!-- When clicking "Add Task" a new task with the entered text should be added -->
    <input v-model="taskText" @keyup.enter="addTask()" type="text">
    <button @click="addTask()">Add Task</button>
    <ul>
      <!-- 2) Output the list of tasks here -->
      <li v-show="showTaskListToggle" v-for="task of taskList">
        {{ task }}
      </li>
    </ul>
    <!-- 3) When the below button is pressed, the list should be shown or hidden -->
    <!-- BONUS: Also update the button caption -->
    <button @click="toggleShowTaskList()">{{ showTaskListToggleButtonAction }} List</button>
  </section>
</body>

</html>