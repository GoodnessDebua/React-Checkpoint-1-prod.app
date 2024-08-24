import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image';


const firstName = 'John';
function App() {
  return (
    <div className="App">
      <Card style={{ width: '18rem', margin: '20px auto', padding: '20px' }}>
        <Image />
        <Card.Body>
          <Card.Title>
            <Name />
          </Card.Title>
          <Card.Text>
            <Price />
            <Description />
          </Card.Text>
        </Card.Body>
      </Card>
      <footer>
        {firstName ? (
          <>
            <p>Hello, {firstName}!</p>
            <img src="handbag.webp" alt="Greeting" />
          </>
        ) : (
          <p>Hello, there!</p>
        )}
      </footer>
    </div>
  );
}

export default App