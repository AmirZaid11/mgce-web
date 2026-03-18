import Hero from "@/components/Hero";
import DailyQuote from "@/components/DailyQuote";
import ImpactStats from "@/components/ImpactStats";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <DailyQuote />
      <ImpactStats />
      {/* FeaturedPrograms teaser goes here, we'll build it later or as part of programs page */}
      <Testimonials />
    </div>
  );
}
