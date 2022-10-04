import { ClientJS } from "clientjs";

export default class Banner {
  constructor() {
    this.init();
  }

  videoGen(src, className, loop) {
    return `<video autoplay playsinline muted ${loop} src="${src}" class="${className}"></video>`;
  }

  imgGen(src) {
    return `<img src="${src}" alt="abstraction"/>`;
  }

  init() {
    const client = new ClientJS();
    const isMobile = client.isMobile();

    const bgContainer = document.querySelector(".banner__bg-container");

    const data = {
      image: "./resources/images/banner/img.png",
      greet: "./resources/images/banner/video-greeting.mp4",
      loop: "./resources/images/banner/video-loop.mp4",
    };

    if (isMobile) {
      bgContainer.insertAdjacentHTML("beforeend", this.imgGen(data.image));
    } else {
      const isVideoSeen = localStorage.getItem("videoSeen") === "true";
      const loop = "loop";
      const greeting = "greeting";

      if (isVideoSeen) {
        bgContainer.insertAdjacentHTML(
          "beforeend",
          this.videoGen(data.loop, loop, "loop")
        );
      } else {
        bgContainer.insertAdjacentHTML(
          "beforeend",
          this.videoGen(data.greet, greeting, "")
        );
        bgContainer.insertAdjacentHTML(
          "beforeend",
          this.videoGen(data.loop, `${loop} hide`, "loop")
        );

        const greetingVideo = bgContainer.querySelector(`video.${greeting}`);
        greetingVideo.addEventListener("loadeddata", () => {
          bgContainer.querySelector(`video.${loop}`).classList.remove(`hide`);
        });

        greetingVideo.addEventListener("ended", () => {
          localStorage.setItem("videoSeen", "true");
          greetingVideo.classList.add(`hide`);
        });
      }
    }
  }
}
