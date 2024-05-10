import Buttons from './components/calendar/adjMonth';
import Sidebar from './components/sidebar/sidebar';
import Bar from './components/topBar/barContents';

const App = () => {
    return (
        <>
            <div class="topbar">
                <Bar />
            </div>
            <div class="widebar" id = "widebar" />
            <div>
                <Sidebar />
            </div>
            <div class="main-content text-center">
                <Buttons />
            </div>
        </>
    )
}

export default App;