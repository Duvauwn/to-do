import './style.css';

function newToDo() {
    const container = document.createElement('div');

    const title = document.createElement('h2');
    title.textContent = 'TITLE';

    const dueDate = document.createElement('h3');
    dueDate.textContent = 'DUEDATE';

    const description = document.createElement('p');
    description.textContent = 'DESCRIPTION';

    const priority = document.createElement('h3');
    priority.textContent = 'PRIORITY';

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
    const newTaskLabel = document.createElement('label');
    newTaskLabel.textContent = 'Add a New Task';
    newTaskLabel.append(newTask);

    //New Description
    const newDescription = document.createElement('input');
    newDescription.type = 'text';
    const newDescriptionLabel = document.createElement('label');
    newDescriptionLabel.textContent = 'Description';
    newDescriptionLabel.append(newDescription);

    //New Date
    const newDueDate = document.createElement('input');
    newDueDate.type = 'date';
    const newDueDateLabel = document.createElement('label');
    newDueDateLabel.textContent = 'Due Date';
    newDueDateLabel.append(newDueDate);

    //Priorities
    const priorityRed = document.createElement('input');
    priorityRed.type = 'radio';
    priorityRed.classList.add('radio-button');
    priorityRed.id = 'radio-red';
    priorityRed.name = 'radio';

    const priorityOrange = document.createElement('input');
    priorityOrange.type = 'radio';
    priorityOrange.classList.add('radio-button');
    priorityOrange.id = 'radio-orange';
    priorityOrange.name = 'radio';

    const priorityBlue = document.createElement('input');
    priorityBlue.type = 'radio';
    priorityBlue.classList.add('radio-button');
    priorityBlue.id = 'radio-blue';
    priorityBlue.name = 'radio';

    const priorityLabel = document.createElement('div');
    priorityLabel.textContent = 'Priority';
    priorityLabel.id = 'radio-container';
    priorityLabel.append(priorityRed, priorityOrange, priorityBlue);
    console.log(priorityLabel);

    const submitNew = document.createElement('button');
    submitNew.type = 'button';
    submitNew.textContent = 'Submit';

    userForm.append(
        newTaskLabel,
        newDescriptionLabel,
        newDueDateLabel,
        priorityLabel,
        submitNew
    );

    userFormContainer.append(userForm);

    return userFormContainer;
}

export { newToDo, newUser };