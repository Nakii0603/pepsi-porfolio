import logo from "../GIF/BeColdGIF.gif";
import Image from "next/image";

export default function BeColdGIF() {
  return (
    <div className="gif-container">
      <Image
        src="https://cdn-images-1.medium.com/fit/t/1600/480/1*AmI9wRbXrfIWGESx6eEiTw.gif"
        alt="my gif"
        height={500}
        width={500}
      />
    </div>
  );
}
