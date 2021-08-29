import React, { useRef } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import FooterComponent from "./components/FooterComponent";
import { QueryClientProvider, QueryClient } from "react-query";
import Home from "../src/views/Home";
import NavbarComponent from "./components/NavbarComponent";

const queryClient = new QueryClient();
export default function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <ChakraProvider>
          <NavbarComponent />
          <Router>
            <div className="content">
              <Switch>
                <Route path="/">
                  <Home />
                </Route>
              </Switch>
            </div>
          </Router>
          <FooterComponent />
        </ChakraProvider>
      </QueryClientProvider>
    </div>
  );
}
