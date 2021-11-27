import { newToDo, newUser } from './dom.js';
import { template, createToDo, submitForm } from './logic.js';

document.body.append(newToDo(), newUser());

submitForm();