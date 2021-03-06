const project = {
    default: [
        { task: 'one', dueDate: 'today', description: 'Task One' },
        { task: 'two', dueDate: 'now', description: 'Task Two' },
        { task: 'three', dueDate: 'in two minutes', description: 'Task Three' },
        { task: 'four', dueDate: 'right now', description: 'Task Four' },
    ],
    chores: [
        { task: 'laundry', dueDate: 'today', description: 'Take the laundry down to the washroom' },
        { task: 'dishes', dueDate: 'today', description: 'Wash the dishes after dinner' },
        { task: 'trash', dueDate: 'tomorrow', description: 'Take out the trash in the morning' },
        { task: 'shower', dueDate: 'today', description: 'Shower before bed' },
    ],
};

function todo(task, dueDate, description, array) {
    return {
        task: task,
        dueDate: dueDate,
        description: description,

        addToEntries() {
            project[array].push({ task, dueDate, description });
        }
    };
};

function populateDisplay(t, d, desc, arr) {
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
        const newTodo = todo(t, d, desc, arr);

        if (t != '' && d != '') {
            newTodo.addToEntries();
        }
    }
    for (let i = 0; i < project[arr].length; i++) {
        const propertiesContainer = document.createElement('div');
        propertiesContainer.classList.add('todos');
        propertiesContainer.classList.add('display');

        for (let prop in project[arr][i]) {
            const properties = document.createElement('h3');
            const otherProperties = document.createElement('div');
            otherProperties.id = 'topProperties';

            properties.classList.add('properties');
            properties.textContent = project[arr][i][prop];
            if (properties.textContent != project[arr][i]['description']) {
                properties.classList.add('otherProperties');
                otherProperties.appendChild(properties);
                propertiesContainer.appendChild(otherProperties)
            }
            else if (properties.textContent == project[arr][i]['description']) {
                properties.classList.add('description');
                propertiesContainer.appendChild(properties);
            }
        }
        dynamic.append(propertiesContainer);
    }
}

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

    document.querySelector('#radioContainer').appendChild(projectLabel);
}
let starter = false;
function populateTab(pro) {
    if (starter == false) {
        for (let prop in project) {
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
    projectFormContainer.appendChild(projectForm);
    tab.appendChild(projectFormContainer);
    tab.appendChild(projectRadioContainer);

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
            populateDisplay();
        });
    })();
    projectRadioContainer.addEventListener('click', e => {
        if (e.target.className == 'projectRadio') {
            populateDisplay();
        }
    })
})();