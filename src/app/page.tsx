import Hero from "@/components/Hero";
import DailyQuote from "@/components/DailyQuote";
import ImpactDashboard from "@/components/ImpactDashboard";
import Testimonials from "@/components/Testimonials";
import CameraRoll from "@/components/CameraRoll";
import FeaturedStory from "@/components/FeaturedStory";
import SocialFeed from "@/components/SocialFeed";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <CameraRoll />
      <DailyQuote />
      <ImpactDashboard />
      <FeaturedStory />
      <SocialFeed />
      <Testimonials />
    </div>
  );
}
