import { api } from "./api"

function getQueryParameter(key) {
    let url = new URL(window.location.href);
    return url.searchParams.get(key);
}
let entryId = getQueryParameter('id');

api.get(`/entries/${entryId}`)
.then(res => res.json())
.then(data => {
    console.log(data)
    document.getElementById("title").value = data['title'];
    document.getElementById("contents").value = data['contents'];
})

const success = document.querySelector("#success")
const warning = document.querySelector("#warning")

const form = document.querySelector("#editForm")

form.addEventListener("submit", e =>{
    e.preventDefault()
    let title = document.getElementById("title").value
    let contents = document.getElementById("contents").value

    const data = {
        title,
        contents
    }
    
    api.update(`/entries/${entryId}`, data)
    .then(res => res.json())
    .then(data => {
        if(data.message == "Updated successfully"){
            warning.classList.add('hide')
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
