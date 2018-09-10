import { api } from './api';

function loadEntries(){
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
            table.innerHTML = rows
            for (let entry of data.entries){

                let tr = document.createElement('tr');
                tr.innerHTML = `<td><input type="checkbox"/></td>
                    <td>${entry.title}</td>
                    <td><a href="contents.html?id=${entry.id}">view contents</a></td>
                    <td>${entry.created_at}</td>
                    <td><a class="button bg-dark float-right" href="editEntry.html?id=${entry.id}">edit</a></td>
                    </tr>`;
                rows += tr
            

                let td = document.createElement('td');
                let link = document.createElement('a');
                link.innerHTML = "Delete";
                link.classList.add('button');
                link.classList.add("button1");
                link.classList.add("float-right");
                
                link.addEventListener("click", function(){
                    deleteEntry(entry.id);
                });
                td.appendChild(link);
                tr.appendChild(td);

                table.appendChild(tr);
        }

        }else{
            noOfEntries.innerHTML = 0;
            view.classList.add("alert", "alert-warning")
            view.innerHTML = "No entries found"

        }
    })

}
window.addEventListener("load", ()=>{
   loadEntries();
})
function deleteEntry(entryId){
    if ( confirm("Do you want to delete this entry?")){
        api.delete(`/entries/${entryId}`)
        .then(res => res.json())
        .then(data => {
            loadEntries();
            let info = document.getElementById("info");
            info.classList.add("alert", "alert-success")
            info.innerHTML = data.message;
            info.style.display = "block";

            setTimeout(function(){
                info.style.display = "";
            }, 2000);
        })
    }
}


