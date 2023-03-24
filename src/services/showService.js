import axios from 'axios';

class ShowService {
  constructor() {
    this.api = axios.create({
      baseURL: `${process.env.REACT_APP_BACKEND_URL}/shows`,
    });
  }

  getShows() {
    return this.api.get('/').then(({ data }) => data).catch(err => console.error(err));
  }

  getShow(id) {
    return this.api.get(`/${id}`).then(({ data }) => data).catch(err => console.error(err));
  }

  deleteShow(id) {
    return this.api.delete(`/${id}`).then(({ data }) => data).catch(err => console.error(err));
  }

  createShow(body) {
    return this.api.post('/', body).then(({ data }) => data).catch(err => console.error(err))
  }

  editShow(id, body) {
    return this.api.put(`/${id}`, body).then(({ data }) => data).catch(err => console.error(err));
  }
}

const showService = new ShowService();

export default showService;