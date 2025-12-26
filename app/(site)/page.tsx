import { Suspense } from "react";
import { AboutSection } from "@/components/sections/about";
import { ContactSection } from "@/components/sections/contact";
import { HeroSection } from "@/components/sections/hero";
import { ProjectsSection } from "@/components/sections/projects";
import { WorkflowSection } from "@/components/sections/workflow";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <Suspense fallback={null}>
        <ProjectsSection />
      </Suspense>
      <WorkflowSection />
      <ContactSection />
    </>
  );
}
