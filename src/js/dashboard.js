import { api } from './api';

window.addEventListener("load", ()=>{
    api.get("/entries")
    .then(res => res.json())
    .then(data => {

        let user = document.querySelector("#username")
        let noOfEntries = document.querySelector("#entries");
        let div = document.querySelector("#card")
        user.innerHTML = localStorage.getItem("username");

        if(data.entries){
            noOfEntries.innerHTML = data.entries.length
            let output = `<ul class="list-group">
            </ul>`;
            for (let entry of data.entries){
                output +=            `
                <li class="list-group-item">
                    <p>${entry.title}
                        <a class="button bg-dark float-right" href="editEntry.html">edit</a>
                        <a class="button button1 float-right" href="${entry.id}">delete</a>
                    </p>
                </li>
                `
                div.innerHTML = output
        }

        }else{
            noOfEntries.innerHTML = 0;
            div.classList.add("alert", "alert-warning")
            div.innerHTML = "No entries found"

        }
    })
})