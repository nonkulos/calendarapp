import Buttons from './components/calendar/adjMonth';
import SettingButton from './components/settings/settingsStuff'
import NewEventButton from './components/addEvent/newEventButton'

const App = () => {
    return (
        <>
            <Buttons />
            <NewEventButton />
            <SettingButton />
        </>
    )
}

export default App;