import { api } from './api';

window.addEventListener("load", ()=>{
    api.get("/entries")
    .then(res => res.json())
    .then(data => {

        let user = document.querySelector("#username")
        let noOfEntries = document.querySelector("#entries");
        let table = document.querySelector("#table")
        user.innerHTML = localStorage.getItem("username");

        if(data.entries){
            noOfEntries.innerHTML = data.entries.length
            let rows = `<tr>
                <th>#</th>
                <th>title</th>
                <th>Details</th>
                <th>Date Created</th>
                <th></th>
                <th></th>
            </tr>`
            for (let entry of data.entries){
                let row = `<tr>
                    <td><input type="checkbox"/></td>
                    <td>${entry.title}</td>
                    <td><a href="#" onClick=viewContents(${entry.entryId})>view contents</a></td>
                    <td>${entry.created_at}</td>
                    <td><a class="button bg-dark float-right" href="#" onClick=modifyEntry(${entry.entryId})>edit</a></td>
                    <td><a class="button button1 float-right" href="#" onClick=deleteEntry(${entry.entryId})>delete</a></td>
                    </tr>`;
                rows += row;
                table.innerHTML = rows
        }

        }else{
            noOfEntries.innerHTML = 0;
            div.classList.add("alert", "alert-warning")
            div.innerHTML = "No entries found"

        }
    })
})