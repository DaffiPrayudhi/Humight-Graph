import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, InputGroup, FormControl } from 'react-bootstrap';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    companyName: '',
    services: {
      ContentCreation: false,
      SocialMediaManagement: false,
      PaidAdvertising: false,
      InfluencerMarketing: false,
      AnalyticsReporting: false,
      CommunityManagement: false,
    },
    platforms: {
      Instagram: false,
      Facebook: false,
      Twitter: false,
      Tiktok: false,
    },
    goals: '',
    budget: '',
    startDate: '',
    duration: '',
    additionalNotes: '',
    file: null,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      const [category, field] = name.split('.');
      setFormData((prev) => ({
        ...prev,
        [category]: { ...prev[category], [field]: checked },
      }));
    } else if (type === 'file') {
      setFormData((prev) => ({ ...prev, [name]: e.target.files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div id="conform" className="bg-dark text-white py-5">
      <Container>
        <div className="section-title text-center">
          <h2>Contact Us</h2>
          <i>
            Field you're data here to contact us
          </i>
        </div>
        <Form onSubmit={handleSubmit} className="conform">
          <Row>
            <Col md={6}>
              <Form.Group controlId="name">
                <Form.Label className='label-name'>Name :</Form.Label>
                <Form.Control
                  type="text"
                  placeholder='Full Name'
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="email">
                <Form.Label className='label-name'>Email :</Form.Label>
                <Form.Control
                  type="email"
                  placeholder='Email'
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <Form.Group controlId="phone">
                <Form.Label className='label-name'>No. Handphone :</Form.Label>
                <Form.Control
                  type="tel"
                  placeholder='Phone Number'
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="companyName">
                <Form.Label className='label-name'>Company/Brand Name :</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Company Name"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>

          <div className="checkbox-group">
            <Form.Label className='label-name'>Services Needed :</Form.Label>
            <Row>
              {Object.keys(formData.services).map((service) => (
                <Col md={4} key={service}>
                  <Form.Check
                    type="checkbox"
                    name={`services.${service}`}
                    label={service.replace(/([A-Z])/g, ' $1')}
                    checked={formData.services[service]}
                    onChange={handleChange}
                    className="form-check-inline"
                  />
                </Col>
              ))}
            </Row>
          </div>

          <div className="checkbox-group">
            <Form.Label className='label-name'>Social Media Platforms :</Form.Label>
            <Row>
              {Object.keys(formData.platforms).map((platform) => (
                <Col md={4} key={platform}>
                  <Form.Check
                    type="checkbox"
                    name={`platforms.${platform}`}
                    label={platform.charAt(0).toUpperCase() + platform.slice(1)}
                    checked={formData.platforms[platform]}
                    onChange={handleChange}
                  />
                </Col>
              ))}
            </Row>
          </div>

          <Form.Group controlId="goals">
            <Form.Label className='label-name'>Primary Goals :</Form.Label>
            <Form.Control
              as="textarea"
              placeholder='Write your goals project...'
              name="goals"
              value={formData.goals}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="budget">
            <Form.Label className='label-name'>Budget (Rp) :</Form.Label>
            <Form.Control
              type="number"
              placeholder='Range in rupiah'
              name="budget"
              value={formData.budget}
              onChange={handleChange}
            />
          </Form.Group>

          <Row>
            <Col md={6}>
              <Form.Group controlId="startDate">
                <Form.Label className='label-name'>Project Start Date :</Form.Label>
                <Form.Control
                  type="date"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="duration">
                <Form.Label className='label-name'>Project Duration (in months) :</Form.Label>
                <Form.Control
                  type="number"
                  placeholder='Months'
                  name="duration"
                  value={formData.duration}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group controlId="additionalNotes">
            <Form.Label className='label-name'>Additional Notes :</Form.Label>
            <Form.Control
              as="textarea"
              placeholder='Add...'
              name="additionalNotes"
              value={formData.additionalNotes}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="file">
            <Form.Label className='label-name'>Upload any supporting files (optional) :</Form.Label>
            <Form.Control
              type="file"
              name="file"
              onChange={handleChange}
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="btn-rs btn-reset btn-lg page-scroll mt-3">
            Reset
          </Button>
          <Button variant="primary" type="submit" className="btn-rs btn-submit btn-lg page-scroll mt-3">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default ContactForm;
