import { api } from './api';
const signup = document.querySelector("#myForm")
const success = document.querySelector('#success')
const warning = document.querySelector('#warning')

signup.addEventListener('submit', e =>  {
    e.preventDefault()
    const username = document.querySelector("#username").value
    const email = document.querySelector("#email").value
    const password = document.querySelector("#password").value
    const confirm = document.querySelector("#password_confirm").value

    const data = {
        username, 
        email, 
        password, 
        confirm
    }

    api.post('/auth/signup', data)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if (data.message === 'User registered successfully'){
            success.classList.remove('hide')
            success.classList.add('show')
            success.innerHTML = data.message
            setTimeout(() =>{window.location.href = './signin.html'},2000)
        }
        else{
            warning.classList.remove('hide')
            warning.classList.add('show')
            warning.innerHTML = data.warning
        }
    }) 
})


