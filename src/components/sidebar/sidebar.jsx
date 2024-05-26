import SettingButton from '../settings/settingsStuff';
import NewEventButton from '../addEvent/newEventButton';
import LoginButton from '../login/loginStuff';

const Sidebar = () => {
    return (
    <div className = "sidebar">
        <SettingButton />
        <NewEventButton />
        <LoginButton />
    </div>
    )
}

export default Sidebar;