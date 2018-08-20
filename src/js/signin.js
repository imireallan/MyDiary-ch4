import { api } from './api';
const signin = document.querySelector("#signIn")
const success = document.querySelector("#success")
const warning = document.querySelector("#warning")

signin.addEventListener('submit', e =>  {
    e.preventDefault()
    const username = document.querySelector("#username").value
    const password = document.querySelector("#password").value

    const data = {
        username,  
        password, 
    }

    api.post('/auth/login', data)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if (data.message == "Logged in successfully"){
            localStorage.setItem("token", data.token)
            localStorage.setItem("username", username)
            success.classList.remove('hide')
            success.classList.add('show')
            success.innerHTML = data.message
            setTimeout(() =>{window.location.href = './dashboard.html'},2000)
        }
        else{
            console.log(data)
            success.classList.add('hide')
            warning.classList.remove('hide')
            warning.classList.add('show')
            warning.innerHTML = data.warning
        }
    } )
})


