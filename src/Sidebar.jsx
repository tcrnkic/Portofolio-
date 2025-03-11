// Sidebar.js
const Sidebar = () => {
    return (
      <aside className="md:w-1/4 w-full h-32 bg-maindark text-center md:text-start md:h-screen md:fixed">
        <div className="md:grid grid-cols-6 gap-5 h-screen items-center px-2">
          <div className="col-span-1 hidden md:flex md:flex-col justify-center w-full items-center  text-white gap-4">
            <a href="https://www.linkedin.com/in/tcrnkic/" aria-label="LinkedIn" title="Visit my LinkedIn" target="/blank">
              <img src="./assets/linkedin.svg" className="md:w-10 md:h-10 w-8 h-8  opacity-75" alt="LinkedIn Logo Icon" />
            </a>
            <a href="https://www.instagram.com/tcrnk.ic/" aria-label="Instagram" title="Visit my Instagram" target="/blank">
              <img src="./assets/instagram.svg" className="md:w-10 md:h-10 w-8 h-8  opacity-75" alt="Instagram Logo Icon" />
            </a>
            <a href="https://www.github.com/tcrnkic" aria-label="GitHub" title="Visit my GitHub" target="/blank">
              <img src="./assets/github.svg" className="md:w-10 md:h-10 w-8 h-8 opacity-75" alt="GitHub Logo Icon" />
            </a>
          </div>
          <div className="col-span-4 mt-4 md:mt-0 text-white">
            <h1>
              <span className="block font-bold md:text-6xl">TARIK</span>
            
              <span className="block md:text-xl">Front-end web developer</span>
              
              <span className="md:block md:text-sm hidden">
                Young and aspiring web developer from Bosnia and Herzegovina
              </span>
            </h1>
          </div>
          <div className="col-span-1 md:hidden flex md:flex-col justify-center w-full mt-3 items-center text-white gap-4">
          <a href="https://www.linkedin.com/in/tcrnkic/" aria-label="LinkedIn" title="Visit my LinkedIn" target="/blank">
              <img src="./assets/linkedin.svg" className="md:w-10 md:h-10 w-8 h-8  opacity-75" alt="LinkedIn Logo Icon" />
            </a>
            <a href="https://www.instagram.com/tcrnk.ic/" aria-label="Instagram" title="Visit my Instagram" target="/blank">
              <img src="./assets/instagram.svg" className="md:w-10 md:h-10 w-8 h-8  opacity-75" alt="Instagram Logo Icon" />
            </a>
            <a href="https://www.github.com/tcrnkic" aria-label="GitHub" title="Visit my GitHub" target="/blank">
              <img src="./assets/github.svg" className="md:w-10 md:h-10 w-8 h-8 opacity-75" alt="GitHub Logo Icon" />
            </a>
          </div>
        </div>
      </aside>
    );
  };
  
  export default Sidebar;
  