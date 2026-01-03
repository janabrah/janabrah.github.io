import { useState } from 'react';
import { Link } from 'react-router-dom';

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

interface PreviewItem {
  title: string;
  path: string;
}

interface LinkCardProps {
  to: string;
  title: string;
  description?: string;
  className?: string;
  preview?: PreviewItem[];
}

export function LinkCard({
  to,
  title,
  description,
  className = 'project-card',
  preview,
}: LinkCardProps) {
  const [hover, setHover] = useState(false);

  return (
    <div
      className='link-card-wrapper'
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Link to={to} className={className}>
        <h2>{title}</h2>
        {description && <p>{description}</p>}
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
