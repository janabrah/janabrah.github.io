import { useState } from 'react';
import { Link } from 'react-router-dom';
import type { ProjectMeta } from '../types';

interface PageHeaderProps {
  title: string;
  description?: string;
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <>
      <h1>{title}</h1>
      {description && <p>{description}</p>}
    </>
  );
}

interface LinkCardProps {
  project: ProjectMeta;
  className?: string;
}

export function LinkCard({
  project,
  className = 'project-card',
}: LinkCardProps) {
  const [hover, setHover] = useState(false);
  const preview = project.children;

  return (
    <div
      className='link-card-wrapper'
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Link to={project.path} className={className}>
        <h2>{project.title}</h2>
        {project.description && <p>{project.description}</p>}
      </Link>
      {preview && preview.length > 0 && hover && (
        <div className='link-card-preview'>
          <ul>
            {preview.map((item) => (
              <li key={item.path}>
                <Link to={item.path}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

interface CardGridProps {
  children: React.ReactNode;
  className?: string;
}

export function CardGrid({
  children,
  className = 'projects-grid',
}: CardGridProps) {
  return <div className={className}>{children}</div>;
}
