import Hero from "@/components/Hero";
import LatestArticles from "@/components/LatestArticles";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <LatestArticles />
    </main>
  );
}
