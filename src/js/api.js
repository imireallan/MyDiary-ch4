// const uri = 'https://mydiary-v2-dev-allan.herokuapp.com/api/v2'
const uri = 'http://127.0.0.1:5000/api/v2'

export const api = {
    post (endpoint, data) {
        return fetch(`${uri}${endpoint}`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "x-access-token": localStorage.getItem("token"),
                "content-type": "application/json"
            }
        })
    },

    update(endpoint, data=null) {
        return fetch(`${uri}${endpoint}`, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                "x-access-token": localStorage.getItem("token"),
                "content-type": "application/json"
            }
        })
    },

    get(endpoint) {
        return fetch(`${uri}${endpoint}`, {
            method: 'GET',
            headers: {
                "x-access-token": localStorage.getItem("token"),
                "content-type": "application/json"
            }
        })
    },

    delete(endpoint) {
        return fetch(`${uri}${endpoint}`, {
            method: 'DELETE',
            headers: {
                "x-access-token": localStorage.getItem("token"),
                "content-type": "application/json"
            }
        })
    }
}