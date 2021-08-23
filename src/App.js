import { Route, Switch } from "react-router-dom";
import { Header, Footer, HomePage, ProjectPage, ProjectSingle, AchievementPage, ExperiencePage } from "./components";

function App() {
    return (
        <>
            <Header />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/project" component={ProjectPage} />
                <Route exact path="/experience" component={ExperiencePage} />
                <Route exact path="/achievement" component={AchievementPage} />
                <Route exact path="/project/:id" component={ProjectSingle} />
            </Switch>
            <Footer />
        </>
    );
}

export default App;
