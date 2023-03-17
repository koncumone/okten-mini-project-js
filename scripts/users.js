fetch('http://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => displayUsers(users))
    .catch(error => console.error(error));


const userList = document.getElementById('users-list');

function displayUsers(users) {

    users.forEach(user => {
        const userDiv = document.createElement('div');
        userDiv.classList.add('user');

        const userInfo = document.createElement('p');
        userInfo.innerText = `ID: ${user.id} Name: ${user.name}   `;

        const button = document.createElement('button');
        button.innerText = 'info'
        button.classList.add('button-info');
        button.onclick = function() {
            window.location.href = `user-details.html?id=${user.id}`;     
        }

        userDiv.appendChild(userInfo);
        userDiv.appendChild(button);

        userList.appendChild(userDiv);
    });

}
  

