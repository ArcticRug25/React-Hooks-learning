import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Test1 from "./hooks/useState/Test1";
import Test2 from "./hooks/useState/Test2";
import { PageHeader } from "antd";
import Menus from "./components/Menus";
import styled from "@emotion/styled";

function App() {
  return (
    <div className="App">
      <Router>
        <Container>
          <Menus />
          <Main>
            <Switch>
              <Route path="/useState">
                <PageHeader
                  className="site-page-header"
                  onBack={() => null}
                  title="useState"
                />
                <Switch>
                  <Route path="/useState/test1">
                    <Test1 />
                  </Route>
                  <Route path="/useState/test2">
                    <Test2 />
                  </Route>
                </Switch>
              </Route>
            </Switch>
          </Main>
        </Container>
      </Router>
    </div>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

const Main = styled.div`
  height: 100%;
  width: calc(100vw - 200px);
`;
