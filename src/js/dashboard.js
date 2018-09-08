import { api } from './api';

window.addEventListener("load", ()=>{
    api.get("/entries")
    .then(res => res.json())
    .then(data => {


        let user = document.querySelector("#username")
        let noOfEntries = document.querySelector("#entries");
        let table = document.querySelector("#table")
        let view = document.querySelector("#view")
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
                    <td><a href="contents.html?id=${entry.id}">view contents</a></td>
                    <td>${entry.created_at}</td>
                    <td><a class="button bg-dark float-right" href="editEntry.html?id=${entry.id}">edit</a></td>
                    <td><a class="button button1 float-right" href="#" onclick="">delete</a></td>
                    </tr>`;
                rows += row;
                table.innerHTML = rows
        }

        }else{
            noOfEntries.innerHTML = 0;
            view.classList.add("alert", "alert-warning")
            view.innerHTML = "No entries found"

        }
    })

})


