import Accordion from "./shared/accordion.js";
import DevelopmentAccordion from "./shared/developmentAccordion.js";
import ServicesAccordion from "./shared/servicesAccordion.js";
import Banner from "./shared/banner.js";
import InitInstance from './shared/init-instance';
import IndustriesSlider from './shared/industries-slider';
import PortfolioSlider from "./shared/portfolio-slider";
import AnimatedSlider from "./shared/animated-slider";
import TabSlider from "./shared/tab-slider";
import Header from "./shared/header";

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
      init: () => new InitInstance('.animated-slider', AnimatedSlider),
      selectors: ['.animated-slider']
    },
    tabSlider: {
      init: () => new InitInstance('.tab-slider', TabSlider),
      selectors: ['.tab-slider']
    },
    header: {
      init: () => new Header(),
      selectors: [".header"],
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
