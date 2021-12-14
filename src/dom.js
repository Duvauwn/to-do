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

                const formTop = document.createElement('div');
                const formBottom = document.createElement('div');

                const form = document.createElement('form');
                form.id = 'myForm';

                const task = document.createElement('input');
                task.type = 'text';

                const dueDate = document.createElement('input');
                dueDate.type = 'date';

                const description = document.createElement('textarea');
                description.name = 'description';
                description.cols = '40';
                description.rows = '7';

                const submit = document.createElement('button');
                submit.type = 'button';
                submit.textContent = 'Submit';

                formTop.append(task, dueDate);
                formBottom.append(description, submit);

                form.append(formTop, formBottom);
                formContainer.appendChild(form);

                dynamic.appendChild(newTask);
                dynamic.appendChild(formContainer);

                submit.addEventListener('click', function () {
                    formContainer.classList.add('hidden');

                    populateDisplay(task.value, dueDate.value, description.value);
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