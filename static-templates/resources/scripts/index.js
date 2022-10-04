import Accordion from "./shared/accordion.js";
import DevelopmentAccordion from "./shared/developmentAccordion.js";
import ServicesAccordion from "./shared/servicesAccordion.js";
import Banner from "./shared/banner.js";
import InitInstance from './shared/init-instance';
import IndustriesSlider from './shared/industries-slider';
import PortfolioSlider from "./shared/portfolio-slider";
import AnimatedSlider from "./shared/animated-slider";


document.addEventListener("DOMContentLoaded", async () => {
  window.refs = {
    // gridSlider: {
    //   init: () => new InitInstance('.grid-slider', GridSlider),
    //   selectors: ['.grid-slider'],
    // },
    accordion: {
      init: () => new Accordion(),
      selectors: ["*"],
    },
    banner: {
      init: () => new Banner(),
      selectors: [".banner"],
    },
    developmentAccordion: {
      init: () => new DevelopmentAccordion(),
      selectors: [".development-item"],
    },
    servicesAccordion: {
      init: () => new ServicesAccordion(),
      selectors: [".accordion-item"],
    },
    industriesSlider: {
      init: () => new IndustriesSlider(),
      selectors: ['.industries-slider'],
    },
    portfolioSlider: {
      init: () => new PortfolioSlider(),
      selectors: ['.portfolio-slider'],
    },
    animatedSlider: {
      init: () => new AnimatedSlider(),
      selectors: ['.animated-slider'],
    },
  };

  Object.keys(window.refs).forEach((ref) => {
    if (
        window.refs[ref].hasOwnProperty("init") &&
        document.querySelectorAll(window.refs[ref].selectors.join(", ")).length
    ) {
      window.refs[ref].class = window.refs[ref].init();
    }
  });
});