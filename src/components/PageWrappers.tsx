interface PageWrapperProps {
  children: React.ReactNode;
  className?: string;
}

interface CobyPageProps extends PageWrapperProps {
  background?: string;
}

const DEFAULT_BACKGROUND = '/images/Ferrovolcanism-Art-Crop.jpg';

export function CobyPage({
  children,
  className = '',
  background,
}: CobyPageProps) {
  const bg = background ?? DEFAULT_BACKGROUND;
  return (
    <div
      className={`page ${className}`}
      style={{ backgroundImage: `url('${bg}')` }}
    >
      <div className='page-overlay'>
        <article className='page-content'>{children}</article>
      </div>
    </div>
  );
}

export function ForwardPage({ children, className = '' }: PageWrapperProps) {
  return (
    <div className={`page ${className}`} style={{ backgroundColor: '#1e7898' }}>
      <div className='page-overlay' style={{ background: 'transparent' }}>
        <article className='page-content'>{children}</article>
      </div>
    </div>
  );
}

export function MeterPage({ children, className = '' }: PageWrapperProps) {
  return (
    <div className={`page ${className}`} style={{ backgroundColor: '#2a2c3f' }}>
      <div className='page-overlay' style={{ background: 'transparent' }}>
        <article className='page-content'>{children}</article>
      </div>
    </div>
  );
}
