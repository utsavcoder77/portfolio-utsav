import { useState } from "react";
import img1 from "../assets/projects/urmate/urmate1.png";
import img2 from "../assets/projects/urmate/urmate2.png";
import img3 from "../assets/projects/urmate/urmate3.png";
import img4 from "../assets/projects/urmate/urmate4.png";

function ProjectGallery() {
  const images = [img1, img2, img3, img4];

  const [selected, setSelected] = useState(images[0]);

  return (
    <div className="flex flex-col gap-4">
      {/* Main Image */}
      <div className="w-full h-[400px] rounded-xl overflow-hidden border">
        <img
          src={selected}
          alt="project preview"
          className="w-full h-full object-cover transition duration-300"
        />
      </div>

      {/* Thumbnails */}
      <div className="flex gap-3 overflow-x-auto">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            onClick={() => setSelected(img)}
            className={`h-20 w-32 object-cover rounded-lg cursor-pointer border-2 ${
              selected === img ? "border-blue-500" : "border-transparent"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectGallery;
