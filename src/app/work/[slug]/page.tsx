import { notFound } from "next/navigation";
import { CaseStudyPage } from "@/components/case-study-page";
import { JsonLd } from "@/components/json-ld";
import { getCaseStudy } from "@/lib/case-studies";
import { getNextProject, getProject, projects } from "@/lib/projects";
import { projectJsonLd, projectMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata(props: PageProps<"/work/[slug]">) {
  const { slug } = await props.params;
  const project = getProject(slug);

  if (!project) {
    return { title: "Page not available" };
  }

  return projectMetadata(project);
}

export default async function Page(props: PageProps<"/work/[slug]">) {
  const { slug } = await props.params;
  const project = getProject(slug);
  const study = getCaseStudy(slug);
  const next = getNextProject(slug);

  if (!project || !study || !next) {
    notFound();
  }

  return (
    <>
      <JsonLd data={projectJsonLd(project)} />
      <CaseStudyPage project={project} study={study} next={next} />
    </>
  );
}
