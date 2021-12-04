import { } from './dom.js';
import { } from './logic.js';
import './style.css';

const entries = [];

const myForm = (() => {
    'use strict';
    const formsHolder = document.createElement('div');
    formsHolder.id = 'forms-holder';
    document.body.append(formsHolder);

    const newForm = document.createElement('button');
    newForm.classList.add('form-button');
    newForm.textContent = '+';

    const newFormStyle = (() => {
        newForm.addEventListener('mouseover', function () {
            newForm.id = 'hover'
        });

        newForm.addEventListener('mouseout', function () {
            newForm.id = '';
        })
    })();

    const switcher = (() => {
        const formTabContainer = document.createElement('div');
        formTabContainer.classList.add('hidden');

        const formTab = document.createElement('div');
        formTab.id = 'form-tab';

        const todoTab = document.createElement('button');
        todoTab.textContent = 'New To-Do';

        const projectTab = document.createElement('button');
        projectTab.textContent = 'New Project';

        formTab.append(todoTab, projectTab);

        formTabContainer.appendChild(formTab);

        newForm.addEventListener('click', function () {
            formTabContainer.classList.remove('hidden');
        })

        formsHolder.append(formTabContainer);

        return { formTab, formTabContainer, projectTab, todoTab };
    })();

    const projects = (() => {
        const projectForm = document.createElement('form');
        projectForm.id = 'myForm';

        const project = document.createElement('input');
        project.type = 'text';
        project.placeholder = 'New Project';

        const submit = document.createElement('button');
        submit.type = 'button';
        submit.textContent = 'Submit';

        projectForm.append(project, submit);

        switcher.projectTab.addEventListener('click', function () {
            formToDo.formContainer.removeChild(formToDo.form);
            formToDo.formContainer.appendChild(projectForm);
        })

        return { projectForm };

    })();

    const formToDo = (() => {

        const formContainer = document.createElement('div');
        formContainer.classList.add('hidden');

        const form = document.createElement('form');
        form.id = 'myForm';

        const task = document.createElement('input');
        task.type = 'text';
        task.placeholder = 'Task';

        const dueDate = document.createElement('input');
        dueDate.type = 'date';

        const submit = document.createElement('button');
        submit.textContent = 'Submit';
        submit.type = 'button';

        newForm.addEventListener('click', function () {
            formContainer.classList.remove('hidden');
            newForm.classList.add('hidden');
        })

        submit.addEventListener('click', function () {
            formContainer.classList.add('hidden');
            myForm.switcher.formTabContainer.classList.add('hidden');
            newForm.classList.remove('hidden');
            const userData = todo(task.value, dueDate.value);
            userData.addToEntries();
            userData.updateDom();
        })

        document.body.appendChild(newForm);

        form.append(task, dueDate, submit);

        formContainer.appendChild(form);

        formsHolder.appendChild(formContainer);

        switcher.todoTab.addEventListener('click', function () {
            formContainer.removeChild(projects.projectForm);
            formContainer.appendChild(form);
        })

        return { formContainer, form };

    })();
    return { switcher };

})();


function todo(task, dueDate) {
    return {
        task: task,
        dueDate: dueDate,

        addToEntries() {
            entries.push({ task, dueDate });
        },
        updateDom() {
            const container = document.createElement('div');
            container.id = 'todo-container';

            for (let property in entries[entries.length - 1]) {
                let content = document.createElement('h2');
                content.textContent = entries[entries.length - 1][property];
                container.appendChild(content);
            }
            document.body.appendChild(container);
        }
    };
};

const example = todo('Create a To-Do App', '04/12/21');
example.addToEntries();
example.updateDom();