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

        let el = createElement("h1");

        switch(route){
            case "/registro":
                el.textContent = "Registro";
                break;
            case "/login":
                el.textContent = "Login";
                break;
            case "/chat":
                el.textContent = "Chat";
                break;
            case "perfil":
                el.textContent = "Perfil"
                break;
            case "/ajustes":
                el.textContent = "Ajustes"
                break;
            
            
            
        }
    },
}

export default Router;