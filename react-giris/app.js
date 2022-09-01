import axios from "axios";

const getData = async (id) => {

    const {data:user} = await axios("https://jsonplaceholder.typicode.com/users/"+id);
    const {data:posts} = await axios("https://jsonplaceholder.typicode.com/posts?userId="+id); //

    const Data = [user,...posts];
    return Data
}

export default getData;