import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID 7PAcDKW95m7deU5sNK7mCGUoORih0wyGy7ib_w3aviY",
  },
});
