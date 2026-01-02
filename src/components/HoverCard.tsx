import { Link } from 'react-router-dom';
import { useState } from 'react';
import { ALL_PROJECTS_BY_ID } from '../config/allProjects';

interface HoverCardProps {
  projectId: string;
  children: React.ReactNode;
}

export default function HoverCard({ projectId, children }: HoverCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const project = ALL_PROJECTS_BY_ID[projectId];

  if (!project) {
    return <span>{children}</span>;
  }

  return (
    <span
      className='hover-card-wrapper'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={project.path} className='hover-card-link'>
        {children}
      </Link>
      {isHovered && (
        <div className='hover-card-popup'>
          <h4>{project.title}</h4>
          <p>{project.summary}</p>
        </div>
      )}
    </span>
  );
}
