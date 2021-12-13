import { } from './dom.js';
import { } from './logic.js';
import './style.css';

const project = {
    default: [
        { task: 'one', dueDate: 'today' },
        { task: 'two', dueDate: 'now' },
        { task: 'three', dueDate: 'in two minutes' },
        { task: 'four', dueDate: 'right now' },
    ],
    chores: [
        { task: 'laundry', dueDate: 'now' },
        { task: 'dishes', dueDate: 'today' },
        { task: 'trash', dueDate: 'tomorrow' },
        { task: 'shower', dueDate: 'tonight' },
    ],
    other: [
        { task: 'test', dueDate: 'soon as possible' },
    ]
};

function todo(task, dueDate, array) {
    return {
        task: task,
        dueDate: dueDate,

        addToEntries() {
            project[array].push({ task, dueDate });
        }
    };
};

function populateDisplay(t, d, arr) {

    const dynamicAll = document.querySelectorAll('.display');

    const container = document.querySelectorAll('.projectRadio');


    for (let p = 0; p < container.length; p++) {
        if (container[p].checked == true) {
            arr = container[p].parentNode.textContent;
        }
    }

    for (let j = 0; j < dynamicAll.length; j++) {
        if (j > 1) {
            dynamicAll[j].remove();
        }
    }
    if (t != undefined && d != undefined) {
        const newTodo = todo(t, d, arr);

        if (t != '' && d != '') {
            newTodo.addToEntries();
        }
    }

    for (let i = 0; i < project[arr].length; i++) {
        const updateContainer = document.createElement('div');
        updateContainer.classList.add('todos');
        updateContainer.classList.add('display');

        for (let prop in project[arr][i]) {
            const updater = document.createElement('h3');
            updater.textContent = project[arr][i][prop];
            updateContainer.append(updater);
        }
        dynamic.append(updateContainer);
    }
}

const bodyContainer = (() => {
    const display = document.createElement('div');
    display.id = 'display';

    const headContainer = (() => {

        const head = document.createElement('div');
        head.id = 'head';

        const header = document.createElement('h1');
        header.textContent = 'To-Do';

        head.appendChild(header);
        display.appendChild(head);
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
            newTask.classList.add('display');
            newTask.id = 'newTodo';

            const myForm = (() => {
                const formContainer = document.createElement('div');
                formContainer.classList.add('display');
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



                dynamic.append(newTask);
                dynamic.append(formContainer);

                submit.addEventListener('click', function () {
                    formContainer.classList.add('hidden');

                    populateDisplay(task.value, dueDate.value);
                })
                newTask.addEventListener('click', function () {
                    formContainer.classList.remove('hidden');
                })
            })();

            main.appendChild(dynamic);

            display.appendChild(main);

        })();
    })();

    document.body.appendChild(display);
})();

let starter = false;
function createRadio(proj) {
    const projectRadio = document.createElement('input');
    projectRadio.type = 'radio';
    projectRadio.name = 'radio';
    projectRadio.id = proj;
    projectRadio.classList.add('projectRadio');
    projectRadio.checked = true;

    const projectLabel = document.createElement('label');
    projectLabel.textContent = proj;
    projectLabel.setAttribute('for', proj);
    projectLabel.appendChild(projectRadio);

    document.querySelector('#radioContainer').append(projectLabel);
}
function populateTab(pro) {
    if (starter == false) {
        for (let prop in project) {
            console.log(prop)

            if (pro == '') {
                pro = prop;
            }
            else if (project[pro] == undefined) {
                project[pro] = [];
            }
            createRadio(pro);
            pro = '';
        }

    }
    else {
        if (pro == '') {
            pro = 'Project: ' + Object.keys(project).length;
        }
        else if (project[pro] == undefined) {
            project[pro] = [];
        }
        createRadio(pro);
        pro = '';
    }

    starter = true;
}
const projects = (() => {

    const tab = document.querySelector('#tab');

    const projectRadioContainer = document.createElement('div');
    projectRadioContainer.id = 'radioContainer';

    const projectFormContainer = document.createElement('div');
    projectFormContainer.classList.add('hidden');

    const projectForm = document.createElement('form');
    projectForm.id = 'projectForm';

    const projectName = document.createElement('input');
    projectName.type = 'text';

    const submit = document.createElement('button');
    submit.textContent = 'Submit';
    submit.type = 'button';

    projectForm.append(projectName, submit);
    projectFormContainer.append(projectForm);
    tab.append(projectFormContainer);
    tab.append(projectRadioContainer);

    const newProject = document.querySelector('#newProject');

    newProject.addEventListener('click', function () {
        projectFormContainer.classList.remove('hidden');
    })

    submit.addEventListener('click', function () {
        projectFormContainer.classList.add('hidden');
    })

    populateTab(projectName.value);

    populateDisplay();

    const addProject = (() => {
        submit.addEventListener('click', function () {
            populateTab(projectName.value);
        });
    })();

    projectRadioContainer.addEventListener('click', e => {
        if (e.target.className == 'projectRadio') {
            populateDisplay();
        }
    })
})();