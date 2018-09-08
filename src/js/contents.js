import { api } from "./api"

function getQueryParameter(key) {
    let url = new URL(window.location.href);
    return url.searchParams.get(key);
}
let entryId = getQueryParameter('id');
let username = localStorage.getItem("username")


api.get(`/entries/${entryId}`)
.then(res => res.json())
.then(data => {
    console.log(data)
    document.getElementById("title").innerHTML = data['title'];
    document.getElementById("user").innerHTML = username;
    document.getElementById("date").innerHTML = data['created_at'];
    document.getElementById("contents").innerHTML = data['contents'];
})