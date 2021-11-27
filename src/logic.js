const template = [
    {
        title: 'Build a Website', description: 'Its a To-Do Page', due: 'Today', priority: 'Important',
    }
]

function createToDo(title, description, due, priority) {

    return {
        title: title,
        description: description,
        due: due,
        priority: priority,

        addNewBox() {
            template.push({ title, description, due, priority });
        }
    }
}

const todo = createToDo('titl', 'desc', 'du', 'prio');
todo.addNewBox();

function submitForm() {
    const task = document.querySelector('#task');
    const desc = document.querySelector('#desc');
    const due = document.querySelector('#due');
    const prio = document.querySelectorAll('.radio-button');
    const submit = document.querySelector('#submit');

    submit.addEventListener('click', function () {
        let prioName;
        for (let i = 0; i < prio.length; i++) {
            if (prio[i].checked == true) {
                prioName = prio[i].id;
            }
        }
        let add = createToDo(task.value, desc.value, due.value, prioName);
        add.addNewBox();
    })
    return {

    }
}

export { template, createToDo, submitForm };