import React from "react";
import { Route, Switch } from "react-router-dom";
import TemplateSub from "./container/TemplateSub";
import Header from "./components/Header";
import Home from "./page/home/Home";
import About from "./page/about/About";
import Sitemap from "./api/SitemapApi";
import "./App.scss";

function App() {
    return (
        <div className="App">
            <Header />

            <TemplateSub>
                <Switch>
                    <Route
                        path="/"
                        render={({ match }) => (
                            <Home match={match} sitemap={Sitemap} />
                        )}
                        exact
                    />
                    <Route
                        path="/about"
                        render={({ match }) => (
                            <About match={match} sitemap={Sitemap} />
                        )}
                    />
                </Switch>
            </TemplateSub>
        </div>
    );
}

export default App;
