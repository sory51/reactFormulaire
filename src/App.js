
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Img1 from './djoudj.jpg';
import './App.css';

function App() {
  return (
    <Container id="main-container" className='d-grid h-100'>
      <Form id="sign-in-form" className='text-center w-100'>
        <img className='mb-4 bootstrap-logo'
        scr={Img1}
        alt="Bootstrap 5" 
        ></img>
        <h3 className='mb-3  fs-4 fw-normal'>S'inscrire au régistre de visite</h3>
        <Form.Group className='mb-2'>
          <Form.Control  type="text" size="md" placeholder='Prénom'autoComplete='username'>

          </Form.Control>
        </Form.Group>
        <Form.Group className='mb-2'>
          <Form.Control type="text" size="md" placeholder='Nom'autoComplete='username'>

          </Form.Control>
        </Form.Group>
        <Form.Group className='mb-2'>
          <Form.Control type="text" size="md" placeholder='Phone'autoComplete='username'>

          </Form.Control>
        </Form.Group>
        
        <Form.Group>
          <Form.Control type="email" size="md" placeholder='Email address'autoComplete='username'>

          </Form.Control>
        </Form.Group>
        <div className='d-grid mt-3'>
        <Button variant='primary' size='md'> Enrégistrer</Button>
        </div>
        <p className='mt-3'>&copy;2021-2022</p>
      </Form>

    </Container>
      
   
  );
}

export default App;
