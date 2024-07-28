// import React, { useState } from 'react';
// import { Tab, Nav, Col, Row, Card } from 'react-bootstrap';
// import './About.css';


// export const About = () => {
//   const [key, setKey] = useState('tab1');

//   const tabContent = [
//     {
//       eventKey: 'tab1',
//       title: 'Tab 1',
//       image: 'https://via.placeholder.com/150',
//       description: 'This is the description for Tab 1.'
//     },
//     {
//       eventKey: 'tab2',
//       title: 'Tab 2',
//       image: 'https://via.placeholder.com/150',
//       description: 'This is the description for Tab 2.'
//     },
//     {
//       eventKey: 'tab3',
//       title: 'Tab 3',
//       image: 'https://via.placeholder.com/150',
//       description: 'This is the description for Tab 3.'
//     }
//   ];

//   return (
//     <div className="container-fluid">
//     <Tab.Container id="left-tabs-example" activeKey={key} onSelect={(k) => setKey(k)}>
//       <Row className="tab-container">
//         <Col sm={3} className="mb-3">
//           <Nav variant="pills" className="flex-column">
//             {tabContent.map((tab) => (
//               <Nav.Item key={tab.eventKey}>
//                 <Nav.Link eventKey={tab.eventKey}>{tab.title}</Nav.Link>
//               </Nav.Item>
//             ))}
//           </Nav>
//         </Col>
//         <Col sm={9}>
//           <Tab.Content>
//             {tabContent.map((tab) => (
//               <Tab.Pane eventKey={tab.eventKey} key={tab.eventKey}>
//                 <Card className="horizontal-card">
//                   <Row noGutters>
//                     <Col md={4}>
//                       <Card.Img variant="top" src={tab.image} className="card-img" />
//                     </Col>
//                     <Col md={8}>
//                       <Card.Body>
//                         <Card.Title>{tab.title}</Card.Title>
//                         <Card.Text>{tab.description}</Card.Text>
//                       </Card.Body>
//                     </Col>
//                   </Row>
//                 </Card>
//               </Tab.Pane>
//             ))}
//           </Tab.Content>
//         </Col>
//       </Row>
//     </Tab.Container>
//   </div>
//   );
// };

// export default About;


import React, { useState } from "react"; 
import './bootstarp.css';
import "./About.css";
//import "@blueprintjs/core/lib/css/blueprint.css"; 
import { Tabs, Tab } from "@blueprintjs/core"; 
import pic1 from '../../../../assets/Doctor1.webp'
// import { Card, CardList } from "@blueprintjs/core";

const Section = ({ title, children }) => (
  <div className="section">
    <h2>{title}</h2>
    {children}
  </div>
);

const SectionCard = ({ padded, children }) => (
  <div className={`section-card ${padded ? 'padded' : ''}`}>
    {children}
  </div>
);

const CardList = ({ bordered, children }) => (
  <div className={`card-list ${bordered ? 'bordered' : ''}`}>
    {children}
  </div>
);

const Card = ({ children }) => (
  <div className="card">
    {children}
  </div>
);
  
export function About() { 
    const [selectBool, setSelectBool] = useState(true); 
  
    const onHandleChange = () => { 
        setSelectBool(!selectBool); 
    }; 

    const tabContent = [
          {
            eventKey: 'tab1',
            title: 'Tab 1',
            image: 'https://via.placeholder.com/150',
            description: 'This is the description for Tab 1.'
          },
          {
            eventKey: 'tab2',
            title: 'Tab 2',
            image: 'https://via.placeholder.com/150',
            description: 'This is the description for Tab 2.'
          },
          {
            eventKey: 'tab3',
            title: 'Tab 3',
            image: 'https://via.placeholder.com/150',
            description: 'This is the description for Tab 3.'
          }
        ];

    return ( 
      <div className="contact-container">
      <div className="contact-section">
        <div className="App" style={{ marginLeft: 10 }}> 
          {/* This cide is to give and option to swtich from vertical tabs to horizontal tabs
            <h4>React.js BluePrint Component Tabs Props</h4> 
            <p> 
                <b style={{ marginLeft: 30 }}> 
                    animate, vertical, large ? 
                </b> 
                <button 
                    onClick={onHandleChange} 
                    style={{  
                        marginLeft: 10,  
                        fontSize: 15,  
                        padding: 10  
                    }} 
                > 
                    {"" + selectBool} 
                </button> 
            </p>  */}
  
            <Tabs animate={selectBool}  
                vertical={selectBool} large={selectBool}> 
                <Tab id="1" title="Doctors" 
                    panel={ <div className="contact-section">
                      
                                <Section title="">
                                    <SectionCard padded={false}>
                                        <CardList bordered={false}>
                                            <Card className="horizontal-card">
                                            {/* <img variant="top" src={pic1} className="card-img" /> */}
                                            <img src={pic1} className='card-img'></img>
                                            </Card>
                                            <Card>
                                                    <p className='headTextComponent'>Dr Ranjith K M</p>
                                                    <p className='normalText'>
                                                        Dr Ranjith earned this Masters in Veterinary at Bangalore 
                                                        Veterinary College. He manages our team and makes sure all our 
                                                        backgrounds work together to help support our organisation.
                                                      </p>
                                            </Card>
                                            {/* ... */}
                                        </CardList>
                                    </SectionCard>
                                </Section>
                    </div>} /> 
                <Tab id="2" title="Supporting Staff" 
                    panel={<div className="contact-section">
                      
                      <Section title="">
                          <SectionCard padded={false}>
                              <CardList bordered={false}>
                                  <Card className="horizontal-card">
                                  {/* <img variant="top" src={pic1} className="card-img" /> */}
                                  <img src={pic1} className='card-img'></img>
                                  </Card>
                                  <Card>
                                          <p className='headTextComponent'>Dr Ranjith K M</p>
                                          <p className='normalText'>
                                              Dr Ranjith earned this Masters in Veterinary at Bangalore 
                                              Veterinary College. He manages our team and makes sure all our 
                                              backgrounds work together to help support our organisation.
                                            </p>
                                  </Card>
                               
                                  <Card className="horizontal-card">
                                  {/* <img variant="top" src={pic1} className="card-img" /> */}
                                  <img src={pic1} className='card-img'></img>
                                  </Card>
                                  <Card>
                                          <p className='headTextComponent'>Dr Ranjith K M</p>
                                          <p className='normalText'>
                                              Dr Ranjith earned this Masters in Veterinary at Bangalore 
                                              Veterinary College. He manages our team and makes sure all our 
                                              backgrounds work together to help support our organisation.
                                            </p>
                                  </Card>
                                  <Card className="horizontal-card">
                                  {/* <img variant="top" src={pic1} className="card-img" /> */}
                                  <img src={pic1} className='card-img'></img>
                                  </Card>
                                  <Card>
                                          <p className='headTextComponent'>Dr Ranjith K M</p>
                                          <p className='normalText'>
                                              Dr Ranjith earned this Masters in Veterinary at Bangalore 
                                              Veterinary College. He manages our team and makes sure all our 
                                              backgrounds work together to help support our organisation.
                                            </p>
                                  </Card>
                                  {/* ... */}
                              </CardList>
                          </SectionCard>
                      </Section>
          </div>} /> 
            </Tabs> 
        </div> 
        </div>
        </div>
    ); 
} 
  
export default About;
