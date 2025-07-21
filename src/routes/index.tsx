import { Button } from "@/components/ui/button";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: App,
});

type IndexSectionData = {
  title: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
};

const IndexSection = ({
  title,
  description,
  buttonText,
  buttonUrl,
}: IndexSectionData) => {
  return (
    <section className="p-3 flex flex-col justify-center items-center gap-6 even:bg-secondary">
      <div className="w-full max-w-5xl grid gap-3 md:grid-cols-2">
        <img className="w-full aspect-video bg-gradient-to-br from-gray-900 to-gray-700 md:col-start-2" />
        <div className="flex flex-col gap-3 md:row-start-1 md:justify-between">
          <h2 className="text-2xl">{title}</h2>
          <p className="text-lg">{description}</p>
          <Button className="w-full md:w-48">
            <Link to={buttonUrl}>{buttonText}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

const indexData: IndexSectionData[] = [
  {
    title: "Map Generator",
    description:
      "Generate truly random map layouts based on your desired parameters in an instant.",
    buttonText: "Generate a Map",
    buttonUrl: "/maps/create",
  },
  {
    title: "Character Creator",
    description:
      "Select from a range of pre-defined character templates, or roll your own. Can create templates for player characters and non-player characters.",
    buttonText: "Create a Character",
    buttonUrl: "/characters/create",
  },
  {
    title: "Relationship Generator",
    description:
      "Generates random characters from templates as well as the relationships between them. Can create various sizes of relationship networks, from a family or group of bandits to the population of an entire city.",
    buttonText: "Generate Relationships",
    buttonUrl: "/relationships/create",
  },
];

function App() {
  return (
    <div className="h-svh bg-background text-foreground">
      <header className="h-1/2 min-h-[600px] bg-secondary flex flex-col justify-center gap-10 items-center">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-semibold">Campaign Scaffolder</h1>
          <p className="text-xl">We build the bones, you bring the heart.</p>
        </div>
        <Button asChild>
          <Link to="/campaigns">Create a Campaign</Link>
        </Button>
      </header>
      <main className="flex flex-col gap-y-10">
        {indexData.map((data, index) => (
          <IndexSection
          key={`section-${index.toString()}-${data.title}`}
            title={data.title}
            description={data.description}
            buttonText={data.buttonText}
            buttonUrl={data.buttonUrl}
          />
        ))}
      </main>
      <footer className="p-3 pt-40 flex flex-col gap-1 items-center md:items-start">
        <div className="w-full max-w-5xl self-center">
          <a href="https://github.com/jrbarnhart" className="hover:underline">
            GitHub
          </a>
          <p>© 2025 Joshua Barnhart</p>
        </div>
      </footer>
    </div>
  );
}
