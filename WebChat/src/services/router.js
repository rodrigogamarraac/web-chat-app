import RegistroPage from "../pages/register.js";
const Router = {
    init: () => {
        //console.log("Running");
        document.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', event => {
                event.preventDefault();
                const url = event.target.getAttribute("href");
                Router.nav(url);
            });
        });

        window.addEventListener('popstate', (event) => {
            Router.nav(event.state.route, false);
        });
    },
    nav: (route, addToHistory = true) => {
        console.log(route);
        if(addToHistory) {
            history.pushState({route}, null, route);
        }

        let el;

        switch(route){
            case "/registro":
                el = RegistroPage();
                break;
            case "/login":
                el = document.createElement("h1");
                el.textContent = "Login";
                break;
            case "/chat":
                el = document.createElement("h1");
                el.textContent = "Chat";
                break;
            case "/perfil":
                el = document.createElement("h1");
                el.textContent = "Perfil"
                break;
            case "/ajustes":
                el = document.createElement("h1");
                el.textContent = "Ajustes"
                break;
            
            
            
        }

        if(el){
            document.querySelector("#contenido").appendChild(el);
        }
    },
}

export default Router;