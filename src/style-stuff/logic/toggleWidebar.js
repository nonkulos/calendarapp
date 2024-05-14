import React from 'react';
import { createRoot } from 'react-dom/client';

import SettingsForm from '../../components/settings/settingsForm';
import AddForm from '../../components/addEvent/newEventForm';

const findCurrForm = () => {
    if(document.getElementById("settings")){
        return "settings";
    } else if(document.getElementById("new")){
        return "newevent";
    }
}

const toggleWidebar = (form) => {
    const currForm = findCurrForm();
    const widebar = document.getElementById("widebar");
    const widebarPos = widebar.getBoundingClientRect();
    let newChild = <AddForm />;

    if(form == "settings"){
        newChild = <SettingsForm />;
    } else if (form == "newevent"){
        newChild = <AddForm />;
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

    if(form == "settings"){
        const node = widebar;
        const root = createRoot(node);
        root.render(<SettingsForm />);
    } else if (form == "newevent"){
        const node = widebar;
        const root = createRoot(node);
        root.render(<AddForm />);
    }
}

export default toggleWidebar;