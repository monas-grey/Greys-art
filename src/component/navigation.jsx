function Navigation() {
  return (
    <header className="container grid grid-flow-col grid-rows-1 py-[1.5rem]">
      <a href="#">
        <img className="logo" alt="Basic logo" src="images/logo/logo-2.svg" />
      </a>

      <nav className="max-[450]:block">
        <ul className="grid grid-flow-col grid-rows-1 list-none">
          <li>
            <a className="text-[1rem] text-[#333] hover:text-red-400" href="#how">
              Home
            </a>
          </li>
          <li>
            <a className="text-[1rem] text-[#333] hover:text-red-400" href="#meals">
              Features
            </a>
          </li>
          <li>
            <a
              className="text-[1rem] text-[#333] hover:text-red-400"
              href="#testimonials"
            >
              About
            </a>
          </li>
          <li>
            <a
              className="text-[1rem] text-[#333] hover:text-red-400"
              href="#pricing"
            >
              Why
            </a>
          </li>
          <li>
            <a
              className="text-[1rem] text-[#333] hover:text-red-400"
              href="#pricing"
            >
              Team
            </a>
          </li>
          <li>
            <a
              className="text-[1rem] text-[#333] hover:text-red-400"
              href="#pricing"
            >
              Blog
            </a>
          </li>
          <li>
            <a
              className="px-[1.6rem] py-[0.8rem] text-white bg-red-400 hover:bg-rose-400 rounded-lg"
              href="#cta"
            >
              Download now
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
};

export default Navigation;