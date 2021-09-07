import { Route, Switch } from "react-router-dom";
import { Header, Footer, HomePage, ProjectSingle, AchievementPage, ExperiencePage } from "./components";

function App() {
    return (
        <>
            <Header />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/experience" component={ExperiencePage} />
                <Route exact path="/achievement" component={AchievementPage} />
                <Route exact path="/project/:name" component={ProjectSingle} />
            </Switch>
            <Footer />
        </>
    );
}

export default App;
