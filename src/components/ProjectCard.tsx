import React from 'react';

interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
}

const ProjectCard: React.FC<ProjectProps> = ({ title, description, tags }) => {
  return (
    <div style={{
      backgroundColor: '#112240',
      padding: '25px',
      borderRadius: '10px',
      transition: 'transform 0.3s ease',
      cursor: 'pointer',
      boxShadow: '0 10px 30px -15px rgba(2,12,27,0.7)'
    }} 
    onMouseOver={(e) => (e.currentTarget.style.transform = 'translateY(-10px)')}
    onMouseOut={(e) => (e.currentTarget.style.transform = 'translateY(0px)')}>
      
      <h3 style={{ color: '#64ffda', marginBottom: '10px' }}>{title}</h3>
      <p style={{ color: '#8892b0', fontSize: '0.9rem', lineHeight: '1.5' }}>{description}</p>
      <div style={{ display: 'flex', gap: '10px', marginTop: '20px', flexWrap: 'wrap' }}>
        {tags.map((tag, index) => (
          <span key={index} style={{ color: '#64ffda', fontSize: '0.8rem', fontFamily: 'monospace' }}>
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;