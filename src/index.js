import "./index.css";

class ToDoList {
  static projects = [];

  // Static method to add a project
  static createProject(project) {
    ToDoList.projects.push(project);
  }

  // Static method to retrieve all projects
  static getProjects() {
    return ToDoList.projects;
  }
  static getProjectByIndex(index) {
    return ToDoList.projects[index];
  }
}

class Project {
  #task = [];
  constructor(name, status) {
    this.name = name;
    this.isComplete = false;
  }

  getTasks() {
    return this.#task;
  }

  addTask(task) {
    this.#task.push(task);
  }
}

class Task {
  constructor(name, priority, status, dueDate) {
    this.name = name;
    this.priority = priority;
    this.status = status;
    this.dueDate = dueDate;
  }

  getDetails() {
    return `Task Name: ${this.name}, Priority: ${this.priority}, Status: ${this.status}, Due Date: ${this.dueDate}`;
  }
}

const task = new Task("maicol", "urgent", "complete", new Date(2013 - 2 - 98));
const project = new Project("TodoLIst", false);
ToDoList.createProject(new Project(project));

console.log(ToDoList.getProjects());

console.log(ToDoList.getProjectByIndex(0).getTasks());
