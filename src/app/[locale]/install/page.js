import Image from "next/image";
import img1 from "../step1.jpg";

export default function Install() {
  // const imageUrls = [
  //     '../'
  //     '/images/image1.jpg',
  //     '/images/image2.jpg',
  //     '/images/image3.jpg',
  //   ];

  const imageUrls = [img1];

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
