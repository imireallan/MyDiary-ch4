import "jquery";
import { api } from './api';

window.addEventListener("load", () =>{
    api.get("/entries")
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if (data.entries){
            let col = [];
            for (let i = 0; i < data.entries.length; i++) {
                for (let key in data.entries[i]) {
                    if (col.indexOf(key) === -1) {
                        col.push(key);
                    }
                }
            }
            // create table.
            const table = document.createElement("table");
            table.classList.add("table")
    
            // table row
            let tr = table.insertRow(-1);
    
            for (let i = 0; i < col.length; i++) {
                let th = document.createElement("th"); // table header
                th.innerHTML = col[i];
                tr.appendChild(th);
            }
            // ADD JSON DATA TO THE TABLE AS ROWS.
            for (let i = 0; i < data.entries.length; i++) {
    
                tr = table.insertRow(-1);
    
                for (let j = 0; j < col.length; j++) {
                    let tabCell = tr.insertCell(-1);
                    tabCell.innerHTML = data.entries[i][col[j]];
                }
            }
    
            // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
            const divContainer = document.getElementById("showData");
            divContainer.innerHTML = "";
            divContainer.appendChild(table);

        }else{
            let entryDiv = document.querySelector("#entries")
            entryDiv.classList.remove("hide")
            entryDiv.classList.remove("show")
            entryDiv.innerHTML = "No Entries Found"
        }     
    })
})

