import React from 'react';
import { createRoot } from 'react-dom/client';

import {LoginForm} from '../../components/login/loginForm';
import SettingsForm from '../../components/settings/settingsForm';
import AddForm from '../../components/addEvent/newEventForm';

const findCurrForm = () => {
    if(document.getElementById("settings")){
        return "settings";
    } else if(document.getElementById("new")){
        return "newevent";
    } else if(document.getElementById("login")){
        return "login";
    }
}

const toggleWidebar = (form) => {
    const currForm = findCurrForm();
    const widebar = document.getElementById("widebar");
    const widebarPos = widebar.getBoundingClientRect();
    let newChild = <AddForm />;

    switch(currForm){  
        case "settings":
            newChild = <SettingsForm />;
            break;
        case "newevent":
            newChild = <AddForm />;
            break;
        case "login":
            newChild = <LoginForm />;
            break;
    }

    if(widebarPos.x <= 0){
        widebar.classList.add("expand-widebar");
        widebar.classList.remove("reduce-widebar");
        document.getElementById("opacityThingy").style.zIndex = "-20";
        document.getElementById("opacityThingy").classList.remove("lighten");
        document.getElementById("opacityThingy").classList.add("darken");
    } else if (currForm == form) {
        widebar.classList.remove("expand-widebar");
        widebar.classList.add("reduce-widebar");
        document.getElementById("opacityThingy").classList.add("lighten");
        document.getElementById("opacityThingy").classList.remove("darken");
    }

    
    const node = widebar;
    const root = createRoot(node);
    switch(form){
        case "settings":
            root.render(<SettingsForm />);
            break;
        case "newevent":
            root.render(<AddForm />);
            break;
        case "login":
            root.render(<LoginForm />);
            break;
    }
}

export default toggleWidebar;