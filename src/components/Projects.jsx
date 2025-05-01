import { PROJECTS } from "../constants";

const Projects = () => {
  return (
    <section className="pt-20 pb-24" id="projects">
      <div className="max-w-[1200px] mx-auto px-4">
        <h2  className='text-center text-4xl font-semibold tracking-tighter mb-10'>
          PROJECTS
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project) => (
        <div
        key={project.id}
        className="group relative overflow-hidden rounded-3xl shadow-lg aspect-[4/3] w-full"
      >
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center font-bold text-white opacity-0 backdrop-blur-lg bg-black bg-opacity-60 transition-opacity duration-500 group-hover:opacity-100">
          <h3 className="mb-2 text-xl">{project.name}</h3>
          <p className="mb-12 p-4 text-center">{project.description}</p>
        </div>
      </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;