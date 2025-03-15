const input = document.querySelector('.form-control');
const button = document.querySelector('.btn-success');
const taskContainer = document.querySelector('.task-container');

button.addEventListener('click', function(){
    const task = input.value;
    const taskDiv = document.createElement('div');
    taskDiv.classList.add('task');
    taskDiv.innerHTML = `
        <div class="input-group mb-1">
            <div class="input-group-text">
            <input class="form-check-input text-danger mt-0" type="checkbox" value="" aria-label="Checkbox for following text input" onclick="this.classList.toggle('text-danger');">
            </div>
            <input value="${task}" type="text" class="form-control" aria-label="Text input with checkbox">
            <button class="btn btn-danger" type="button"><i class="fa-solid fa-trash"></i></button>
        </div>
    `;
    taskContainer.appendChild(taskDiv);
    input.value = '';
});

taskContainer.addEventListener('click', function(e){
    if(e.target.classList.contains('btn-danger')){
    e.target.parentElement.parentElement.remove();
    } else if(e.target.classList.contains('form-check-input')){
    const textInput = e.target.closest('.input-group').querySelector('.form-control');
    if(e.target.checked){
        textInput.style.textDecoration = 'line-through';
    }
    else {
        textInput.style.textDecoration = 'none';
    }
    }
});

fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(data => {
    displayUsers(data);
})
.catch(error => console.log(error));

const displayUsers = (users) => {
    const userContainer = document.querySelector('.user-container');
    userContainer.classList.add('row'); // 
    users.forEach(user => {
        const userDiv = document.createElement('div');
        userDiv.classList.add('user', 'p-3', 'mb-2', 'bg-light', 'text-dark', 'col-4'); // Combine class additions

        userDiv.innerHTML = `
            <h3>${user.name}</h3>
            <p>${user.email}</p>
        `;
        userContainer.appendChild(userDiv);
    });
};
