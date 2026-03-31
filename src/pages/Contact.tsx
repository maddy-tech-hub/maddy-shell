import React, { useState } from 'react';
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
import { lazyRemote } from '@src/shared/lib/mfe/lazyRemote';
import PageIntro from '@src/components/Layout/PageIntro';
import { PageCanvas, PageStack } from '@src/components/Layout/PageScaffold';

const ContactWidget = lazyRemote(
  () => import('ui_remote/ContactWidget'),
  'ui-contact-widget'
);

interface ContactProps {
  embedded?: boolean;
}

const Contact: React.FC<ContactProps> = ({ embedded = false }) => {
  const intl = useIntl();
  const [loading, setLoading] = useState(false);
  const contactDetails = useSelector(
    (state: RootStateType) => state.contactDetailsSlice
  );

  const contactInfo = [
    {
      label: contactDetails.location.label,
      value: contactDetails.location.value,
      icon: <FaMapMarkerAlt style={{ color: '#ff8e5f' }} />,
    },
    {
      label: contactDetails.email.label,
      value: contactDetails.email.value,
      icon: <FaEnvelope style={{ color: '#117eff' }} />,
    },
    {
      label: contactDetails.instagram.label,
      value: contactDetails.instagram.value,
      icon: <FaInstagram style={{ color: '#e1306c' }} />,
    },
    {
      label: contactDetails.phone.label,
      value: (
        <>
          <p>{contactDetails.phone.number1}</p>
          <p>{contactDetails.phone.number2}</p>
        </>
      ),
      icon: <FaPhoneAlt style={{ color: '#19b89b' }} />,
    },
    {
      label: contactDetails.linkedIn.label,
      value: contactDetails.linkedIn.value,
      icon: <FaLinkedin style={{ color: '#117eff' }} />,
    },
  ];

  const formFields = [
    {
      id: 'fullName',
      label: 'Full Name',
      type: 'text',
      placeholder: 'Your full name',
      required: true,
    },
    {
      id: 'email',
      label: 'Email',
      type: 'email',
      placeholder: 'Your work email',
      required: true,
    },
    {
      id: 'phone',
      label: 'Phone',
      type: 'tel',
      placeholder: 'Phone or WhatsApp number',
      required: true,
    },
    {
      id: 'message',
      label: 'Project Brief',
      type: 'textarea',
      placeholder: 'Tell me what you are building or improving',
      required: true,
    },
  ];

  return (
    <PageCanvas>
      <PageStack>
        {loading && <Loader text="Loading..." fullScreen={true} />}

        {!embedded ? (
          <PageIntro
            eyebrow="Get in touch"
            title="Hiring for React or full-stack work? Let's talk."
            description="If you're hiring for a React or full-stack role, improving an existing frontend, or building a product that needs clean UI and reliable ASP.NET Web API integration, I'd be happy to discuss how I can help."
            highlights={[
              'UI modernization',
              'React + ASP.NET delivery',
              'Micro-frontends',
              'Dashboards and workflow systems',
            ]}
            stats={[
              { value: 'Bengaluru', label: 'Working base' },
              { value: 'WhatsApp + email', label: 'Easy ways to reach me' },
              { value: 'Full-stack focus', label: 'Best-fit work' },
            ]}
          />
        ) : null}

        <ContactWidget
          title={
            embedded
              ? 'Start a conversation'
              : intl.formatMessage({ id: 'contactTitle' })
          }
          submitTitle={intl.formatMessage({ id: 'buttonLabel' })}
          formFields={formFields}
          contactInfo={contactInfo}
          externalApiUrl={
            'https://notifications-jjss.onrender.com/api/email/send-contact-email'
          }
          setLoading={setLoading}
        />
      </PageStack>
    </PageCanvas>
  );
};

export default Contact;
