import React from 'react';

interface RemoteUnavailableProps {
  title: string;
  description: string;
}

const containerStyle: React.CSSProperties = {
  margin: '2rem auto',
  maxWidth: '42rem',
  padding: '1rem 1.25rem',
  borderRadius: '12px',
  border: '1px solid #f4c7c3',
  background: '#fff7f5',
  color: '#7a271a',
  boxShadow: '0 8px 24px rgba(122, 39, 26, 0.08)',
};

const titleStyle: React.CSSProperties = {
  margin: 0,
  fontSize: '1rem',
  fontWeight: 700,
};

const descriptionStyle: React.CSSProperties = {
  margin: '0.5rem 0 0',
  lineHeight: 1.5,
};

const actionStyle: React.CSSProperties = {
  marginTop: '1rem',
  padding: '0.65rem 1rem',
  borderRadius: '999px',
  border: '1px solid #d6725b',
  background: '#ffffff',
  color: '#7a271a',
  cursor: 'pointer',
  fontWeight: 600,
};

const RemoteUnavailable: React.FC<RemoteUnavailableProps> = ({
  title,
  description,
}) => {
  return (
    <section style={containerStyle}>
      <p style={titleStyle}>{title}</p>
      <p style={descriptionStyle}>{description}</p>
      <button
        style={actionStyle}
        type="button"
        onClick={() => window.location.reload()}
      >
        Reload Shell
      </button>
    </section>
  );
};

export default RemoteUnavailable;
