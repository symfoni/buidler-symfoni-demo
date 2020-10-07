import React from 'react';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { Box, Footer, Grommet, Main, Text } from "grommet";
import { Me } from './components/Me';
import { BuidlerSymfoniReact } from "./BuidlerSymfoniReact";
import { Navigation } from './ui/Navigation';


function App() {

  // useEffect(() => {
  //   EmbarkJS.onReady((err: string | { message: string }) => {
  //     if (err) {
  //       // If err is not null then it means something went wrong connecting to ethereum
  //       // you can use this to ask the user to enable metamask for e.g
  //       if (typeof err === "string") {
  //         return setMessages(old => [...old, err])
  //       }
  //       if (typeof err === "object") {
  //         return setMessages(old => [...old, err.message])
  //       }
  //     }
  //     setEthereumReady(true)
  //   });
  // }, []);

  return (
    // <drizzleReactHooks.DrizzleProvider drizzle={drizzle}>

    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Grommet>
        <BuidlerSymfoniReact>
          <Box>
            {/* Navigation */}
            <Navigation></Navigation>
            {/* Content swtich */}
            <Main pad="large">
              <Switch>
                <Route exact path="/me">
                  <Me />
                </Route>
              </Switch>
            </Main>
            {/* footer */}
            <Footer background="brand" pad="medium">
              <Text>Copyright Symfoni 2020</Text>
            </Footer>

          </Box>
        </BuidlerSymfoniReact>
      </Grommet>
    </BrowserRouter >
    // </drizzleReactHooks.DrizzleProvider>
  );
}

export default App;
