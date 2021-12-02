import axios from "axios";

const USER_REST_API_URL = 'http://localhost:8081/user/login';
const USER_REGISTER_URL ="http://localhost:8081/user/register";
const USER_AUTH_URL = "http://localhost:8081/user/authentication";

class UserService {

    constructor() {
        this.state = {
            veri:[],
            dogrulama:""
        };
      }

    Logins(e){
        axios.get(USER_REST_API_URL,e).then((response)=> {
            this.setState({veri:response.data});
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        });
 };
    Register(e){
        axios.get(USER_REGISTER_URL,e).then((response)=> {
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        });
    }

    authentication(){
        axios.get(USER_AUTH_URL).then((response)=> {
            this.setState({dogrulama : response.data});
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        });
    };
}
export default new UserService();