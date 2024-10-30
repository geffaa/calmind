import ArticleSection from "@/app/components/sections/ArticleSection";
import DownloadSection from "@/app/components/sections/DownloadSection";
import FeatureSection from "@/app/components/sections/FeatureSection";
import HeroSection from "@/app/components/sections/HeroSection";
import ProfileSection from "@/app/components/sections/ProfileSection";
import WorkflowSection from "@/app/components/sections/WorkflowSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeatureSection />
      <ProfileSection />
      <WorkflowSection />
      <ArticleSection />
      <DownloadSection />
    </main>
  );
}