import axios from 'axios'

export default class CoasterService {

    constructor() {
        this.api = axios.create({
            baseURL: 'http://localhost:5000/api'
        })
    }

    getAllCoasters = () => this.api.get('/getAllCoasters')
    getOneCoaster = id => this.api.get(`/getOneCoaster/${id}`)
    saveCoaster = coaster => this.api.post('/newCoaster', coaster)
    updateCoaster = (id, coaster) => this.api.put(`/editCoaster/${id}`, coaster)
}