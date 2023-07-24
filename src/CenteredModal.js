import {React, useState} from 'react';
import { Modal, Button, Form, Dropdown } from 'react-bootstrap';
import './App.css'; // Import a custom CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const CenteredModal = ({ show, onHide }) => {

const [currentIndex, setCurrentIndex] = useState(0);
  const handlePrevClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (currentIndex < (3 - 1)) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const [isChecked, setIsChecked] = useState(false);

  const handleSwitchChange = () => {
    setIsChecked(!isChecked);
  };

    const [selectedDate, setSelectedDate] = useState(null);
  
    const handleDateChange = (date) => {
      setSelectedDate(date);
    };

  return (
    
    <Modal show={show} onHide={onHide} centered  dialogClassName="custom-modal-content">
      <Modal.Header closeButton>

        <Modal.Title>Add a Profile
            
        </Modal.Title>

            <div className='first'>
              <div className='second'>
                  <button style={{ backgroundColor: currentIndex===0 ? 'green' : 'lightgreen' }}>1</button>
              </div>

              <div className='third'>
                <button style={{ backgroundColor: currentIndex===1 ? 'green' : 'lightgreen' }}>2</button>
              </div>

              <div className='fourth'>
                <button style={{ backgroundColor: currentIndex===2 ? 'green' : 'lightgreen' }}>3</button>
              </div>
            </div>
      </Modal.Header>
    
      <Modal.Body>
        {/* Add your modal content here */}
        {/* <p>This is a vertically centered modal example.</p> */}
        <div className="content-tabs">
        <div
          className={currentIndex === 0 ? "content  active-content" : "content"}
        >
          <div className='main-div'>
            <div className='left-div'>
                <div>
                  <input  type='name' placeholder='Name*' />
                </div><br/>

                <div>
                  <input  type='name' placeholder='Timezone*' />
                </div><br/>

                <div>
                    <Form.Check className="custom-switch" // prettier-ignore 
                      type="switch"
                      id="custom-switch"
                      label="Enable Turn-by-Turn Navigation"
                      checked={isChecked}
                      onChange={handleSwitchChange}
                      
                    />
                  </div><br/>

                  <div>
                  <input  type='text' placeholder='Field Contact Phone Number' maxLength={13} />
                </div><br/>

                <div>
                  <Dropdown className='custom-dropdown' >
                    <Dropdown.Toggle variant="primary" id="dropdown-basic" style={{ textAlign: 'left' ,backgroundColor: '#fff', color: 'black', borderColor: 'black', width: '480px', marginTop: '10px' }}>
                      Viewers
                    </Dropdown.Toggle>
                    <button className='add-button'>Add Company</button>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#option1">Generator 1</Dropdown.Item>
                      <Dropdown.Item href="#option2">Generator 2</Dropdown.Item>
                      <Dropdown.Item href="#option3">Generator 3</Dropdown.Item>
                   </Dropdown.Menu>
                  </Dropdown>
                </div><br/>
            </div>

            <div className='right-div'>
                <div>
                  <input  type='name' placeholder='Phone Number*' />
                </div><br/>

                <div>
                  <div className='generator'>
                      <div>
                          <h6>Generator Company</h6>
                      </div>
                      <div>
                          <button className='generator-button'>View Generator Project Contacts</button>
                      </div>
                  </div>
                  <div>
                      <Dropdown className='custom-dropdown' >
                        <Dropdown.Toggle variant="primary" id="dropdown-basic" style={{ textAlign: 'left' ,backgroundColor: '#fff', color: 'black', borderColor: 'black', width: '480px', marginTop: '10px' }}>
                          Generator*
                      </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item href="#option1">Option 1</Dropdown.Item>
                          <Dropdown.Item href="#option2">Option 2</Dropdown.Item>
                          <Dropdown.Item href="#option3">Option 3</Dropdown.Item>
                      </Dropdown.Menu>
                      </Dropdown>
                  </div><br/>


                  <div>
                  <div className='generator'>
                      <div>
                          <h6>Contractor Company</h6>
                      </div>
                      <div>
                          <button className='generator-button'>View Generator Project Contacts</button>
                      </div>
                  </div>
                  <div>
                      <Dropdown className='custom-dropdown' >
                        <Dropdown.Toggle variant="primary" id="dropdown-basic" style={{ textAlign: 'left' ,backgroundColor: '#fff', color: 'black', borderColor: 'black', width: '480px', marginTop: '10px' }}>
                        Contractor*
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item href="#option1">Contractor 1</Dropdown.Item>
                          <Dropdown.Item href="#option2">Contractor 2</Dropdown.Item>
                          <Dropdown.Item href="#option3">Contractor 3</Dropdown.Item>
                      </Dropdown.Menu>
                      </Dropdown>
                  </div>
                </div> <br/>

                <div>
                  <div className='generator'>
                      <div>
                          <h6>Transporter Companies</h6>
                      </div>
                      <div>
                          <button className='generator-button'>View Generator Project Contacts</button>
                      </div>
                  </div>
                  <div>
                      <Dropdown className='custom-dropdown' >
                        <Dropdown.Toggle variant="primary" id="dropdown-basic" style={{ textAlign: 'left' ,backgroundColor: '#fff', color: 'black', borderColor: 'black', width: '480px', marginTop: '10px' }}>
                          Contractor*
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item href="#option1">Contractor 1</Dropdown.Item>
                          <Dropdown.Item href="#option2">Contractor 2</Dropdown.Item>
                          <Dropdown.Item href="#option3">Contractor 3</Dropdown.Item>
                      </Dropdown.Menu>
                      </Dropdown>
                  </div>
                </div>
                </div>
            </div>
          </div>
        </div>

        <div
          className={currentIndex === 1 ? "content  active-content" : "content"}
        >
          <div className='main-div'>
            <div className='left-div'>

                  <div>
                    <Form.Check className="custom-switch" // prettier-ignore 
                      type="switch"
                      id="custom-switch"
                      label="Enable Reporting"
                      checked={isChecked}
                      onChange={handleSwitchChange}
                      
                    />
                  </div><br/>

                  <div>
                  <Dropdown className='custom-dropdown' >
                    <Dropdown.Toggle variant="primary" id="dropdown-basic" style={{ textAlign: 'left' ,backgroundColor: '#fff', color: 'black', borderColor: 'black', width: '480px', marginTop: '10px' }}>
                      Scale Company*
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#option1">Scale Company 1</Dropdown.Item>
                      <Dropdown.Item href="#option2">Scale Company 2</Dropdown.Item>
                      <Dropdown.Item href="#option3">Scale Company 3</Dropdown.Item>
                   </Dropdown.Menu>
                  </Dropdown>
                </div><br/>

                <div>
                  <Dropdown className='custom-dropdown' >
                    <Dropdown.Toggle variant="primary" id="dropdown-basic" style={{ textAlign: 'left' ,backgroundColor: '#fff', color: 'black', borderColor: 'black', width: '480px', marginTop: '10px' }}>
                      Scales
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="#option1">Scales 1</Dropdown.Item>
                      <Dropdown.Item href="#option2">Scales 2</Dropdown.Item>
                      <Dropdown.Item href="#option3">Scales 3</Dropdown.Item>
                   </Dropdown.Menu>
                  </Dropdown>
                </div> <br/>
                  
                <div>
                  <input  type='name' placeholder='Generators Phone Number*' />
                </div><br/>

                <div>
                  <input  type='name' placeholder='Description of Waste Material*' />
                </div>

            </div>

            <div className='right-div'><br/><br/>
                <div>
                  <Dropdown className='custom-dropdown' >
                    <Dropdown.Toggle variant="primary" id="dropdown-basic" style={{ textAlign: 'left' ,backgroundColor: '#fff', color: 'black', borderColor: 'black', width: '480px', marginTop: '10px' }}>
                      Region
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="#option1">Region 1</Dropdown.Item>
                      <Dropdown.Item href="#option2">Region 2</Dropdown.Item>
                      <Dropdown.Item href="#option3">Region 3</Dropdown.Item>
                   </Dropdown.Menu>
                  </Dropdown>
                </div><br/>

                <div>
                  <input  type='name' placeholder='Generators Mailing Address*' />
                </div><br/>

                <div>
                  <input  type='name' placeholder='Generators Site Address*' />
                </div><br/>

                <div>
                  <input  type='name' placeholder='Generators Additional Descriptions for Materials*' />
                </div><br/>
            </div>
          </div>
        </div>

        <div
          className={currentIndex === 2 ? "content  active-content" : "content"}
        >
          <div className='main-div'>
            <div className='left-div'>


                <div>
                  <input  type='name' placeholder='Bill to*' />
                </div><br/>

                <div>
                  <input  type='name' placeholder='Minimum Signed Manifest Threshold*' />
                </div><br/>

                <div>
                  <h6>Manifests Custom Inputs Definitions</h6>
                  <Dropdown className='custom-dropdown' >
                    <Dropdown.Toggle variant="primary" id="dropdown-basic" style={{ textAlign: 'left' ,backgroundColor: '#fff', color: 'black', borderColor: 'black', width: '400px', marginTop: '10px' }}>
                      Add New Type*
                    </Dropdown.Toggle>
                    <button style={{backgroundColor:'green', color: 'white', fontWeight: 'bold', marginLeft:'10px', padding: '8px', borderRadius: '8px', width:'70px' }}>Add</button>
                    <Dropdown.Menu>
                      <Dropdown.Item href="#option1">Scales 1</Dropdown.Item>
                      <Dropdown.Item href="#option2">Scales 2</Dropdown.Item>
                      <Dropdown.Item href="#option3">Scales 3</Dropdown.Item>
                   </Dropdown.Menu>
                  </Dropdown>
                </div> <br/>

            </div>

            <div className='right-div'>

                <div>
                  <input  type='name' placeholder='Emergency Contact/ Phone Number*' />
                </div><br/>

               <div className="">
                      <p>Expiration Date:</p>
                      <DatePicker
                        selected={selectedDate}
                        onChange={handleDateChange}
                        dateFormat="MMMM d, yyyy"
                        className="form-control"
                        placeholderText='MM/DD/YYYY'
                      />
                </div><br/>
            </div>
          </div>
        </div>
      </div>

      </Modal.Body>
      <Modal.Footer>
        

            <div className="navigation">
               <div className="previous">
                     <button onClick={()=>handlePrevClick()} style={{ display : currentIndex===0 ? 'none' : '' }}>
                         <FontAwesomeIcon icon={faArrowLeft} />
                     </button>
                 </div>

                 <div className="next">
                     <button onClick={() => handleNextClick()} style={{ display : currentIndex===2 ? 'none' : '' }}>
                         <FontAwesomeIcon icon={faArrowRight}/>
                     </button>
                 </div>
             </div>
      </Modal.Footer>
    </Modal>
  );
};

export default CenteredModal;