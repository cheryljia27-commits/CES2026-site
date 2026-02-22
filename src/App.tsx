import { Navigation } from './sections/Navigation';
import { HeroSection } from './sections/HeroSection';
import { ThemeSection } from './sections/ThemeSection';
import { SpeakersSection } from './sections/SpeakersSection';
import { ChipWarSection } from './sections/ChipWarSection';
import { InnovationSection } from './sections/InnovationSection';
import { ScheduleSection } from './sections/ScheduleSection';
import { SummarySection } from './sections/SummarySection';
import { SkillsSection } from './sections/SkillsSection';
import { Footer } from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <HeroSection />
        <ThemeSection />
        <SpeakersSection />
        <ChipWarSection />
        <InnovationSection />
        <ScheduleSection />
        <SkillsSection />
        <SummarySection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
