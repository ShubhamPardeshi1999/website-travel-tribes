import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrendingPlaces from "@/components/TrendingPlaces";
import DomesticTrips from "@/components/DomesticTrips";
import InternationalTrips from "@/components/InternationalTrips";
import HoneymoonSection from "@/components/HoneymoonSection";
import GallerySection from "@/components/GallerySection";
import ReviewsSection from "@/components/ReviewsSection";
import BlogsSection from "@/components/BlogsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <TrendingPlaces />
      <DomesticTrips />
      <InternationalTrips />
      <HoneymoonSection />
      <GallerySection />
      <ReviewsSection />
      <BlogsSection />
      <CTASection />
      <Footer />
    </main>
  );
}

