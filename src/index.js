import { } from './dom.js';
import { } from './logic.js';
import './style.css';

const entries = [];

const bodyContainer = (() => {
    const display = document.createElement('div');
    display.id = 'display';

    const headContainer = (() => {

        const head = document.createElement('div');
        head.id = 'head';

        const header = document.createElement('h1');
        header.textContent = 'To-Do';

        head.appendChild(header);

        return { head };
    })();


    const mainContainer = (() => {

        const main = document.createElement('div');
        main.id = 'main';

        const tabContainer = (() => {

            const tab = document.createElement('div');
            tab.id = 'tab';

            const tabHead = document.createElement('h2');
            tabHead.textContent = 'Projects';

            const newProject = document.createElement('button');
            newProject.textContent = '+ New Project';
            newProject.id = 'newProject';

            tab.append(tabHead, newProject);
            main.appendChild(tab);
        })();

        const dynamicContainer = (() => {

            const dynamic = document.createElement('div');
            dynamic.id = 'dynamic';

            const newTask = document.createElement('button');
            newTask.textContent = 'Add a New Task';
            newTask.id = 'newTodo';

            const myForm = (() => {
                const formContainer = document.createElement('div');
                formContainer.classList.add('hidden');
                formContainer.id = 'formContainer';

                const form = document.createElement('form');
                form.id = 'myForm';

                const task = document.createElement('input');
                task.type = 'text';

                const dueDate = document.createElement('input');
                dueDate.type = 'date';

                const submit = document.createElement('button');
                submit.type = 'button';
                submit.textContent = 'Submit';

                form.append(task, dueDate, submit);
                formContainer.append(form);

                submit.addEventListener('click', function () {
                    formContainer.classList.add('hidden');
                    const newTodo = todo(task.value, dueDate.value);
                    newTodo.addToEntries();
                    console.log(entries);
                    const updaterContainer = document.createElement('div');
                    updaterContainer.classList.add('todos');
                    for (let prop in entries[entries.length - 1]) {
                        const updater = document.createElement('h3');
                        updater.textContent = entries[entries.length - 1][prop];
                        updaterContainer.append(updater);
                    }
                    dynamic.append(updaterContainer);
                })

                return { formContainer };
            })();

            newTask.addEventListener('click', function () {
                myForm.formContainer.classList.remove('hidden');
            })

            dynamic.append(newTask);
            dynamic.append(myForm.formContainer)
            main.appendChild(dynamic);
        })();

        return { main };
    })();

    display.append(headContainer.head, mainContainer.main);
    document.body.appendChild(display);

})();

function todo(task, dueDate) {
    return {
        task: task,
        dueDate: dueDate,

        addToEntries() {
            entries.push({ task, dueDate });
        }
    };
};

const projects = (() => {
    const project = {};

    const tab = document.querySelector('#tab');

    const projectContainer = document.createElement('div');
    projectContainer.classList.add('hidden');

    const projectForm = document.createElement('form');
    projectForm.id = 'projectForm';

    const projectName = document.createElement('input');
    projectName.type = 'text';

    const submit = document.createElement('button');
    submit.textContent = 'Submit';
    submit.type = 'button';

    projectForm.append(projectName, submit);
    projectContainer.append(projectForm);
    tab.append(projectContainer);

    const newProject = document.querySelector('#newProject');

    newProject.addEventListener('click', function () {
        projectContainer.classList.remove('hidden');
    })

    submit.addEventListener('click', function () {
        projectContainer.classList.add('hidden');
    })

    const addProject = (() => {
        submit.addEventListener('click', function () {
            project[projectName.value] = [];
            console.log(Object.keys(project).length);
            console.log(project);
        })
    })();
})();