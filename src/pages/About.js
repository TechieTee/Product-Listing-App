
import GithubIcon from "../assets/icons/logo-github.svg";

const About = () => {
  return (
    <>
      <div className='mt-[8rem] text-center block'>
        <h1>About</h1> <br />
        <p>
          This project creates a product listing page and implements a search
          using the product's title and a filter functionality, filtering
          products based on their categories.
        </p>{" "}
        <br />
        <p>
          The Project was built with React/NextJs and TailwindCSS.
        </p>{" "}
        <br />
        <a style={{borderTop: '#b0960a solid 2px'}}
          className="btn"
          href="https://github.com/TechieTee/Product-Listing-Page"
          target="_blank"
          rel="noreferrer"
        >
          <img src={GithubIcon} alt="github-icon" />
          View on Github
        </a>
      </div>
    </>
  );
};

export default About;