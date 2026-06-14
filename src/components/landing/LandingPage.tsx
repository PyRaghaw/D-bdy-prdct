'use client';

import dynamic from 'next/dynamic';
import { AISection }           from './AISection';
import { AmbulanceSection }    from './AmbulanceSection';
import { AnnouncementBar } from './AnnouncementBar';
import { BearySection }         from './BearySection';
import { CTASection }           from './CTASection';
import { FeaturesSection }      from './FeaturesSection';
import { Footer }               from './Footer';
import { Hero }                 from './Hero';
import { Navbar }               from './Navbar';
import { ProblemSection }       from './ProblemSection';
import { ProofStrip }           from './ProofStrip';
import { RolesSection }         from './RolesSection';
import { StorySection }         from './StorySection';
import { TestimonialsSection }  from './TestimonialsSection';
import { DrugInteractionSection } from './DrugInteractionSection';
import { ChatbotWidget }        from '@/components/ui/ChatbotWidget';
import { MeetTheCrew }          from './MeetTheCrew';

// Desktop-only blob cursor – hidden on mobile via CSS (hidden md:block inside component)
const BlobCursor = dynamic(() => import('@/components/ui/BlobCursor'), { ssr: false });

export function LandingPage() {
  return (
    <>
      <AnnouncementBar />
      <Navbar hasBar />
      {/* Blob cursor: desktop only (hidden on mobile via hidden md:block) */}
      <BlobCursor />
      <main>
        <Hero />
        <ProofStrip />
        <ProblemSection />
        <StorySection />
        <FeaturesSection />
        {/* AISection (dark "One recovery plan") now before RolesSection (light "Built for every person") */}
        <AISection />
        <RolesSection />
        <DrugInteractionSection />
        <BearySection />
        <AmbulanceSection />
      </main>
      {/* Relative wrapper grouping Testimonials, CTA, and Footer for sticky MeetTheCrew boundary */}
      <div className="relative">
        <TestimonialsSection />
        <CTASection />
        <Footer />
        <MeetTheCrew />
      </div>
      <ChatbotWidget />
    </>
  );
}
