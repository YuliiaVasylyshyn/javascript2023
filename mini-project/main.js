const users = fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json())
    .then(res => res.map(item => {

        const user = document.createElement('div');
        user.className = 'users_one_user'

        const userId = document.createElement('p');
        userId.className = 'users_one_user_id'
        userId.innerText ='ID: '+ item.id

        const userName = document.createElement('p');
        userName.className = 'users_one_user_name'
        userName.innerText ='Name: '+ item.name


        const userLink = document.createElement('a');
        userLink.setAttribute('href',`user-details.html?${JSON.stringify(item.id)}`)
        userLink.className = 'button'
        userLink.innerText = 'User Details'
        user.append(userId,userName,userLink)
        usersBlock.appendChild(user)
    }))

const usersBlock = document.createElement('div');
usersBlock.className = 'users'

document.body.appendChild(usersBlock);