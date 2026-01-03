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

interface LinkCardProps {
  to: string;
  title: string;
  description?: string;
  className?: string;
}

export function LinkCard({
  to,
  title,
  description,
  className = 'project-card',
}: LinkCardProps) {
  return (
    <Link to={to} className={className}>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </Link>
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
