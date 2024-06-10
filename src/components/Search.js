import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import logo2 from '../assests/Group.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image } from 'react-bootstrap';

function Search() {
  return (
    <Navbar className=" justify-content-between p-5 pt-1 pb-3 sm:p-1">
     <Image 
     src={logo2}
    className='logo'
     />
     
      <Form inline>
        <Row>
          <Col xs="auto" className='hide' >
            <Form.Control
              type="text"
              placeholder="Explore"
              className=" mr-sm-2 bg-body-tertiary"
            />
          </Col>
         
        </Row>
      </Form>
    </Navbar>
  );
}

export default Search;