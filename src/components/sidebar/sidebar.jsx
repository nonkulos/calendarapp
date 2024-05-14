import SettingButton from '../settings/settingsStuff'
import NewEventButton from '../addEvent/newEventButton'

const Sidebar = () => {
    return (
    <div className = "sidebar">
        <SettingButton />
        <NewEventButton />
    </div>
    )
}

export default Sidebar;