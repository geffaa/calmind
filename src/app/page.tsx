import FeatureSection from "./components/sections/FeatureSection";
import HeroSection from "./components/sections/HeroSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeatureSection />
    </main>
  );
}