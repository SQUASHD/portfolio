import { featuredGallery } from "@/config/portfolio/gallery";
import ProjectCard from "@/components/cards";
import { SimplePageLayout } from "@/components/layouts";

const galleryItemList = featuredGallery;

export const metadata = {
  title: "Galleri - Hjartland",
  description: "Et lite utvalg av komponenter og animasjoner jeg har laget.",
};

export default function Galleri() {
  return (
    <SimplePageLayout
      header="Galleri"
      subheader="Et lite utvalg av komponenter og animasjoner jeg har laget. Noen
              ganger ser jeg en animasjon eller effekt jeg liker, og prøver å
              gjenskape den. Andre ganger er det bare noe jeg har lyst til å
              lage."
    >
      <section className="mx-auto max-w-5xl">
        <h2 className="mb-4 text-3xl font-bold">Animasjoner og komponenter</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItemList.map((galleryItem, index) => (
            <ProjectCard type="ProjectCard" key={index} project={galleryItem} />
          ))}
        </div>
      </section>
    </SimplePageLayout>
  );
}

export { featuredGallery };
