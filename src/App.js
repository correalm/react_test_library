import './App.css';
import { Container } from 'react-bootstrap';
import OrderEntry from './pages/entry/OrderEntry'
import { OrderDetailsProvider, useOrderDetails } from './contexts/OrderDetails';

export function replaceCamelCaseWithSpaces(name) {
  return name.split(/(?=[A-Z])/g).join(' ')
}

function App() {

  return (
    <Container>
      <OrderDetailsProvider>
        <OrderEntry />
      </OrderDetailsProvider>
    </Container>
  );
}

export default App;
