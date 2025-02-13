import React, { lazy, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootStateType } from '@src/redux/store';
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaInstagram,
  FaLinkedin,
} from 'react-icons/fa';
import Loader from '../components/Misc/Loader';
import { useIntl } from 'react-intl';

const ContactWidget = lazy(() => import('maddy_mfe/ContactWidget'));

const Contact: React.FC = () => {
  const intl = useIntl();
  const [loading, setLoading] = useState(false);
  const contactDetails = useSelector(
    (state: RootStateType) => state.contactDetailsSlice
  );
  const contactInfo = [
    {
      label: contactDetails.location.label,
      value: contactDetails.location.value,
      icon: <FaMapMarkerAlt style={{ color: 'red' }} />,
    },
    {
      label: contactDetails.email.label,
      value: contactDetails.email.value,
      icon: <FaEnvelope style={{ color: '#D44638' }} />,
    },
    {
      label: contactDetails.instagram.label,
      value: contactDetails.instagram.value,
      icon: <FaInstagram style={{ color: '#E1306C' }} />,
    },
    {
      label: contactDetails.phone.label,
      value: (
        <>
          <p>{contactDetails.phone.number1}</p>
          <p>{contactDetails.phone.number2}</p>
        </>
      ),
      icon: <FaPhoneAlt style={{ color: 'green' }} />,
    },
    {
      label: contactDetails.linkedIn.label,
      value: contactDetails.linkedIn.value,
      icon: <FaLinkedin style={{ color: '#0077B5' }} />,
    },
  ];

  const formFields = [
    {
      id: 'fullName',
      label: 'Name',
      type: 'text',
      placeholder: 'Your Name',
      required: true,
    },
    {
      id: 'email',
      label: 'Email',
      type: 'email',
      placeholder: 'Your Email',
      required: true,
    },
    {
      id: 'phone',
      label: 'Phone',
      type: 'tel',
      placeholder: 'Your Phone Number',
      required: true,
    },
    {
      id: 'message',
      label: 'Message',
      type: 'textarea',
      placeholder: 'Your Message',
      required: true,
    },
  ];

  return (
    <div className="parent-component">
      {loading && <Loader text="Loading..." fullScreen={true} />}
      <ContactWidget
        title={intl.formatMessage({ id: 'contactTitle' })}
        submitTitle={intl.formatMessage({ id: 'buttonLabel' })}
        formFields={formFields}
        contactInfo={contactInfo}
        externalApiUrl={'https://notifications-jjss.onrender.com/api/email/send-contact-email'}
        setLoading={setLoading}
      />
    </div>
  );
};

export default Contact;
