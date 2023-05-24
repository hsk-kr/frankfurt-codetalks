import TopSection from '@/components/landing/TopSection';
import WelcomeSection from '@/components/landing/WelcomeSection';
import ProjectSection from '@/components/landing/ProjectSection';
import BackgroundImage from '@/components/landing/BackgroundImage';
import JoinUsSection from '@/components/landing/JoinUsSection';

const Landing = () => {
  return (
    <>
      <TopSection />
      <WelcomeSection />
      <ProjectSection />
      <BackgroundImage height={240} imgSrc="/imgs/code.jpg" />
      <JoinUsSection />
    </>
  );
};

export default Landing;
