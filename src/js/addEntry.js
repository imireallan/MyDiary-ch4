import { api } from './api';

const addEntry = document.querySelector(".myForm")
const success = document.querySelector("#success")
const warning = document.querySelector("#warning")


addEntry.addEventListener("submit", e => {
    e.preventDefault();
    const title = document.querySelector("#title").value
    const contents = document.querySelector("#contents").value

    const data = {
        title,
        contents
    }
    api.post("/entries", data)
    .then(res => res.json())
    .then(data => {
        if(data.message === "Entry added successfully"){
            warning.classList.add("hide")
            success.classList.remove('hide')
            success.classList.add('show')
            success.innerHTML = data.message
            setTimeout(() =>{window.location.href = './dashboard.html'},2000)
        }else{
            success.classList.add('hide')
            warning.classList.remove('hide')
            warning.classList.add('show')
            warning.innerHTML = data.warning
        }

    })
})