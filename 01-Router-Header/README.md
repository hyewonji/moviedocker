## Learning React Router

### Router

1. `import { HashRouter as Router, Route } from "react-router-dom";` 입력.
2. ```jsx
   <Router>
     <Header />
     <Route path="/prices" component={Prices} />
     <Route path="/exchanges" component={Exchanges} />
     <Route path="/coins" component={Coins} />
   </Router>
   ```

- Header는 반드시 Router 안에 들어와야 한다.
- Router 안에 원하는 Route를 생성한다.

### Header

1. `import { Link } from "react-router-dom";` 입력.
2. ```jsx
   export default () => (
     <header>
       <Link to="/coins">Coins</Link>
       <Link to="/exchanges">Exchanges</Link>
       <Link to="/prices">Prices</Link>
     </header>
   );
   ```

- 클릭했을때 가고자 하는 Route를 'to'를 사용해 입력해준다.
