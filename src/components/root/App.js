import { Container } from "reactstrap";
import Navi from "../Navbar/Navi";
import Home from "../Home/Home";
import { Route, Switch } from "react-router-dom";
import Blog from "../Blog/Blog";
import About from "../About/About";
import Contact from "../Contact/Contact";
import NotFound from "../common/NotFound";

function App() {
  return (
    <>
      <Container>
        <Navi></Navi>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/blog" component={Blog} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </Container>
    </>
  );
}

export default App;
