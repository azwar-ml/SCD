import Section1 from "@/components/Section1";
import Section2 from "@/components/Section2";
import Section3 from "@/components/Section3";
import Section4 from "@/components/Section4";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900 font-sans">
      
      {/* Navbar */}
      <Section1 />
      
      {/* Hero / Profile */}
      <Section2 />
      
      {/* Services Cards */}
      <Section3 />
      
      {/* Gallery Images */}
      <Section4 />

    </main>
  );
}