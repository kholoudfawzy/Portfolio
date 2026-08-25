import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Lottie from 'lottie-react';
import contactImg from '../assets/img/developer1.json';

const formInitialDetails = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  message: '',
};

const Contact = () => {
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [status, setStatus] = useState({ type: '', message: '' });
  const [errors, setErrors] = useState({});

  const validateForm = (values) => {
    const nextErrors = {};

    if (!values.firstName.trim()) nextErrors.firstName = 'First name is required.';
    if (!values.lastName.trim()) nextErrors.lastName = 'Last name is required.';

    if (!values.email.trim()) {
      nextErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      nextErrors.email = 'Please enter a valid email address.';
    }

    if (!values.message.trim()) {
      nextErrors.message = 'Message is required.';
    } else if (values.message.trim().length < 10) {
      nextErrors.message = 'Message must be at least 10 characters long.';
    }

    return nextErrors;
  };

  const onFormUpdate = (category, value) => {
    setFormDetails((prev) => ({ ...prev, [category]: value }));
    setErrors((prev) => ({ ...prev, [category]: '' }));

    if (status.message) {
      setStatus({ type: '', message: '' });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const nextErrors = validateForm(formDetails);
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setStatus({ type: 'error', message: 'Please fix the highlighted fields before sending.' });
      return;
    }

    setErrors({});
    setStatus({
      type: 'success',
      message: 'Message is ready to be sent. Connect this form to your backend or EmailJS service to deliver it.',
    });
    setFormDetails(formInitialDetails);
  };

  return (
    <section className="contact" id="contact">
      <Row className="align-items-center">
        <Col md={6}>
          <Lottie className="lottie" animationData={contactImg} loop={true} />
        </Col>

        <Col md={6}>
          <h2>Let&apos;s Build Something</h2>

          <form onSubmit={handleSubmit} noValidate>
            <Row>
              <Col sm={6} className="px-2">
                <label htmlFor="firstName" className="sr-only">First Name</label>
                <input
                  id="firstName"
                  type="text"
                  value={formDetails.firstName}
                  placeholder="First Name"
                  onChange={(e) => onFormUpdate('firstName', e.target.value)}
                  aria-invalid={Boolean(errors.firstName)}
                />
                {errors.firstName && <span className="field-error">{errors.firstName}</span>}
              </Col>

              <Col sm={6} className="px-2">
                <label htmlFor="lastName" className="sr-only">Last Name</label>
                <input
                  id="lastName"
                  type="text"
                  value={formDetails.lastName}
                  placeholder="Last Name"
                  onChange={(e) => onFormUpdate('lastName', e.target.value)}
                  aria-invalid={Boolean(errors.lastName)}
                />
                {errors.lastName && <span className="field-error">{errors.lastName}</span>}
              </Col>

              <Col sm={6} className="px-2">
                <label htmlFor="email" className="sr-only">Email Address</label>
                <input
                  id="email"
                  type="email"
                  value={formDetails.email}
                  placeholder="Email Address"
                  onChange={(e) => onFormUpdate('email', e.target.value)}
                  aria-invalid={Boolean(errors.email)}
                />
                {errors.email && <span className="field-error">{errors.email}</span>}
              </Col>

              <Col sm={6} className="px-2">
                <label htmlFor="phone" className="sr-only">Phone Number</label>
                <input
                  id="phone"
                  type="tel"
                  value={formDetails.phone}
                  placeholder="Phone No."
                  onChange={(e) => onFormUpdate('phone', e.target.value)}
                />
              </Col>

              <Col xs={12} className="px-2">
                <label htmlFor="message" className="sr-only">Message</label>
                <textarea
                  id="message"
                  rows="6"
                  value={formDetails.message}
                  placeholder="Message"
                  onChange={(e) => onFormUpdate('message', e.target.value)}
                  aria-invalid={Boolean(errors.message)}
                />
                {errors.message && <span className="field-error">{errors.message}</span>}
                <button type="submit" aria-label="Send message">
                  <span className="text-capitalize">Send</span>
                </button>
              </Col>

              {status.message && (
                <Col xs={12} className="px-2">
                  <p className={`contact-status ${status.type}`} role="status" aria-live="polite">
                    {status.message}
                  </p>
                </Col>
              )}
            </Row>
          </form>
        </Col>
      </Row>
    </section>
  );
};

export default Contact;

//   Old Code  //
// import { useState } from "react"
// import { Col, Container, Row } from "react-bootstrap"
// import Lottie from "lottie-react";
// import contactImg from "../assets/img/developer1.json"

// const Contact = () => {

//     const formInitialDetails = {
//         firstName: "",
//         lastName: "",
//         email: "",
//         phone: "",
//         message: ""
//     }

//     const [formDetails, setFormDetails] = useState(formInitialDetails)
//     const [buttonText, setButtonText] = useState("send")
//     const [status, setStatus] = useState({})

//     const onFormUpdate = (category, value) => {
//         setFormDetails({
//             ...formDetails,
//             [category]: value
//         })
//     }

//     return (
//         <section className="contact" id="contact">
//             {/* <Container> */}
//                 <Row className="align-items-center">
//                     <Col md={6}>
//                         <Lottie className="lottie" animationData={contactImg} loop={true} />
//                     </Col>
//                     <Col md={6}>
//                         <h2>Lets Build Something</h2>
//                         <form >
//                             <Row>
//                                 <Col sm={6} className="px-2">
//                                     <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate("firstName", e.target.value)}/>
//                                 </Col>
//                                 <Col sm={6} className="px-2">
//                                     <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate("lastName", e.target.value)}/>
//                                 </Col>
//                                 <Col sm={6} className="px-2">
//                                     <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate("email", e.target.value)}/>
//                                 </Col>
//                                 <Col sm={6} className="px-2">
//                                     <input type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate("phone", e.target.value)}/>
//                                 </Col>
//                                 <Col>
//                                     <textarea rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate("message", e.target.value)}/>
//                                     <button type="submit"><span className="text-capitalize">{buttonText}</span></button>
//                                 </Col>
//                                 {/* {
//                                     status.message &&
//                                     <Col>
//                                         <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
//                                     </Col>
//                                 } */}
//                             </Row>
//                         </form>
//                     </Col>
//                 </Row>
//             {/* </Container> */}
//         </section>
//     )
// }

// export default Contact;