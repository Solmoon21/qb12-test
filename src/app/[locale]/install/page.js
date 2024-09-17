import Image from "next/image";
import img1 from "../step1.jpg";
import img2 from "../step2.jpg";
import img3 from "../step3.jpg";

export default function Install() {
  const imageUrls = [img1, img2, img3];

  return (
    <div className="image-list">
      {imageUrls.map((url, index) => (
        <div key={index} className="image-item">
          <Image
            src={url}
            alt={`Image ${index + 1}`}
            width="80vw" // Adjust the width
            height="40vw" // Adjust the height
            layout="responsive" // Responsive image layout
            objectFit="cover" // How the image should fit
          />
        </div>
      ))}
    </div>
  );
}
