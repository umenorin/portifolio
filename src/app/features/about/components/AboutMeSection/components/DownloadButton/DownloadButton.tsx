import { createSignal, onCleanup, onMount, type Component } from "solid-js";

import "./DownloadButton.scss";

interface PersonalStatusProp {
  text: string;
  url: string;
  download?: boolean | string;
}

const DownloadButton: Component<PersonalStatusProp> = (props) => {
  const [width, setWidth] = createSignal(window.innerWidth);

  const updateWidth = () => setWidth(window.innerWidth);

  onMount(() => {
    window.addEventListener("resize", updateWidth);
  });

  onCleanup(() => {
    window.removeEventListener("resize", updateWidth);
  });

  return (
    <a class="download-button__container" href={props.url} download="">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height={`${width() > 450 ? "24px" : "20button"}`}
        viewBox="0 -960 960 960"
        width={`${width() > 450 ? "24px" : "20"}`}
        fill="#f2f2f2"
      >
        <path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z" />
      </svg>
      <p class={`download-button__paragraph`}>{props.text}</p>
    </a>
  );
};

export default DownloadButton;
