export default function newToDo() {
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