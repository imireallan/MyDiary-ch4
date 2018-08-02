import { api } from './api';
const signup = document.querySelector("#myForm")

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
    .then(res => res)
    .then(data => {
        if(data.message === 'User registered successfully') {
            // localStorage.setItem('success', data.message)
            redirect: window.location.replace('./signin.html')
        } else {
            alert("Try and Register Again")
        }
    }) 
})


