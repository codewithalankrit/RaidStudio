import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FloatingElements from '@/components/FloatingElements';
import ScrollReveal from '@/components/ScrollReveal';

const Index = () => {
  useEffect(() => {
    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Add scroll momentum for iOS
    (document.body.style as any).webkitOverflowScrolling = 'touch';
    
    return () => {
      document.documentElement.style.scrollBehavior = '';
      (document.body.style as any).webkitOverflowScrolling = '';
    };
  }, []);

  return (
    <>
      <div className="min-h-screen relative overflow-x-hidden">
        <FloatingElements />
        <Header />
        <Hero />
        
        <ScrollReveal direction="up" delay={100}>
          <About />
        </ScrollReveal>
        
        <ScrollReveal direction="scale" delay={150}>
          <Projects />
        </ScrollReveal>
        
        <ScrollReveal direction="left" delay={200}>
          <Services />
        </ScrollReveal>
        
        <ScrollReveal direction="fade" delay={100}>
          <Contact />
        </ScrollReveal>
        
        <Footer />
      </div>
    </>
  );
};

export default Index;
