import './style.css';

function newToDo(t, d, dd, p) {
    const container = document.createElement('div');
    container.id = 'container';

    const title = document.createElement('h2');
    title.textContent = 'TITLE';
    title.id = 'title';

    const dueDate = document.createElement('h3');
    dueDate.textContent = 'DUEDATE';
    dueDate.id = 'dueDate';

    const description = document.createElement('p');
    description.textContent = 'DESCRIPTION';
    description.id = 'description';

    const priority = document.createElement('h3');
    priority.textContent = 'PRIORITY';
    priority.id = 'priority';

    container.append(title, dueDate, description, priority);

    return container;
}

function newUser() {
    const userFormContainer = document.createElement('div');
    const userForm = document.createElement('form');
    userForm.id = 'user-form';

    //New Task
    const newTask = document.createElement('input');
    newTask.type = 'text';
    newTask.id = 'task';
    const newTaskLabel = document.createElement('label');
    newTaskLabel.textContent = 'Add a New Task';
    newTaskLabel.append(newTask);

    //New Description
    const newDescription = document.createElement('input');
    newDescription.type = 'text';
    newDescription.id = 'desc';
    const newDescriptionLabel = document.createElement('label');
    newDescriptionLabel.textContent = 'Description';
    newDescriptionLabel.append(newDescription);

    //New Date
    const newDueDate = document.createElement('input');
    newDueDate.type = 'date';
    newDueDate.id = 'due';
    const newDueDateLabel = document.createElement('label');
    newDueDateLabel.textContent = 'Due Date';
    newDueDateLabel.append(newDueDate);

    //Priorities
    const radioContainer = document.createElement('div');
    radioContainer.textContent = 'Priority';
    radioContainer.id = 'radio-container';

    const priorityRed = document.createElement('input');
    priorityRed.type = 'radio';
    priorityRed.classList.add('radio-button');
    priorityRed.id = 'radio-red';
    priorityRed.name = 'radio';

    const redLabel = document.createElement('label');
    redLabel.textContent = 'Red';
    redLabel.append(priorityRed);

    const priorityOrange = document.createElement('input');
    priorityOrange.type = 'radio';
    priorityOrange.classList.add('radio-button');
    priorityOrange.id = 'radio-orange';
    priorityOrange.name = 'radio';

    const orangeLabel = document.createElement('label');
    orangeLabel.textContent = 'Orange';
    orangeLabel.append(priorityOrange);

    const priorityBlue = document.createElement('input');
    priorityBlue.type = 'radio';
    priorityBlue.classList.add('radio-button');
    priorityBlue.id = 'radio-blue';
    priorityBlue.name = 'radio';

    const bluelabel = document.createElement('label');
    bluelabel.textContent = 'Blue';
    bluelabel.append(priorityBlue);

    radioContainer.append(redLabel, orangeLabel, bluelabel);

    //Submit Button
    const submitNew = document.createElement('button');
    submitNew.type = 'button';
    submitNew.id = 'submit';
    submitNew.textContent = 'Submit';

    userForm.append(
        newTaskLabel,
        newDescriptionLabel,
        newDueDateLabel,
        radioContainer,
        submitNew
    );

    userFormContainer.append(userForm);

    return userFormContainer;
}

export { newToDo, newUser };