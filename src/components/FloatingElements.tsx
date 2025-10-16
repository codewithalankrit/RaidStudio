import { useParallax, useScrollVelocity } from '@/hooks/useParallax';

const FloatingElements = () => {
  const slowParallax = useParallax(0.3);
  const mediumParallax = useParallax(0.5);
  const fastParallax = useParallax(0.8);
  const velocity = useScrollVelocity();

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Optimized background elements with CSS animations */}
      <div 
        className="absolute w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float-slow will-change-transform"
        style={{ 
          top: `${20 + slowParallax * 0.1}%`,
          left: '10%',
          transform: `scale(${1 + velocity * 0.05})`,
        }}
      />
      
      <div 
        className="absolute w-48 h-48 bg-primary/10 rounded-full blur-2xl animate-float-medium will-change-transform"
        style={{ 
          top: `${60 + mediumParallax * 0.15}%`,
          right: '15%',
          transform: `scale(${1 + velocity * 0.08})`,
        }}
      />
      
      <div 
        className="absolute w-32 h-32 bg-primary/8 rounded-full blur-xl animate-float-fast will-change-transform"
        style={{ 
          bottom: `${25 + fastParallax * 0.2}%`,
          left: '70%',
          transform: `scale(${1 + velocity * 0.1})`,
        }}
      />

      {/* Simplified floating geometric shapes */}
      <div 
        className="absolute w-2 h-2 bg-primary/20 rotate-45 animate-pulse-gentle will-change-transform"
        style={{ 
          top: `${30 + slowParallax * 0.05}%`,
          left: '80%',
        }}
      />
      
      <div 
        className="absolute w-1 h-8 bg-primary/15 animate-pulse-gentle will-change-transform"
        style={{ 
          top: `${70 + mediumParallax * 0.08}%`,
          right: '25%',
          animationDelay: '2s'
        }}
      />
    </div>
  );
};

export default FloatingElements;