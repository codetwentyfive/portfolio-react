const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "Etch-A-Sketch",
      link: "https://github.com/codetwentyfive/Etch-A-Sketch",
      screenshot: "etchasketch-screenshot.png",
      description:
        "My twist on the nostalgic Etch-a-Sketch toy.<br/>This interactive web application brings the nostalgic look to your browser.<br/>Letting you create and save your drawings!<br/>With adjustable drawingboard sizes and color.",
    },
    {
      id: 2,
      name: "Dumpling Haven",
      link: "https://github.com/codetwentyfive/dumlping-haven",
      screenshot: "dumplinghaven-screenshot.png",
      description:
        'The project showcases my skills in layout management and asset creation, utilizing stable diffusion to generate captivating dumpling visuals.<br/>Dumpling Haven, a fictional, "possibly future" dumpling restaurant, served as the canvas for merging aesthetics with the anticipation of culinary possibilities.',
    },
    {
      id: 4,
      name: "Sign-Up Form",
      link: "https://github.com/codetwentyfive/Sign-up-Form",
      screenshot: "signup-screenshot.png",
      description:
        "Discover the Buuz.com sign-up form—created using HTML, CSS, and JavaScript.<br/>It showcases a seamless and engaging user experience.<br/>Step into the realm of Buuz.com, where the blend of design and functionality transforms the sign-up process into an easy process, ensuring users effortlessly join the Buuz.com community.",
    },
    {
      id: 3,
      name: "CV-Application",
      link: "https://github.com/codetwentyfive/cv-application",
      screenshot: "cv-application-screenshot.png",
      description:
        "Created an easy-to-use CV-Maker.<br/>See updates in real time as you make them in your CV.<br/>For a modern approach to making the boring more fun.",
    },
  ];


  return (
    <main>
      <div className="main-wrapper">
        <h2>My work</h2>
        <div className="project-container">
          {projects.map((project) => (
            <section key={project.id} className="project card glass-effect">
              <div className={`screenshot color${project.id}`}>
                <img
                  src={`/images/${project.screenshot}`}
                  alt={`Screenshot of ${project.name}`}
                />
              </div>
              <div className="title">
                <h3>{project.name}</h3>
                {/* ... Other project details */}
              </div>
              <div className="content">
                <p className="description" dangerouslySetInnerHTML={{ __html: project.description }}></p>
              </div>
              <div className="project-icon-container">
                <a href={`${project.link}`} target="_blank">
                  <img
                    className="icon"
                    src="/icons/icons8-github-50.png"
                    alt="GitHub icon"
                  />
                </a>
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Projects;
