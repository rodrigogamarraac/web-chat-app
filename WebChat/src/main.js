//import "./style.css";
//import "./botones";
import Router from "./services/router";

//Router.init();

window.app = {};

app.router = Router;

window.addEventListener('DOMContentLoaded', () => {
    app.router.init();
});