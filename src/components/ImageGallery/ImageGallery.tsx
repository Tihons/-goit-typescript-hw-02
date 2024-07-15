import css from "./ImageGallery.module.css";
import { FC } from "react";
import { Images } from "../types";
import ImageCard from "../ImageCard/ImageCard";

interface ImageGalleryProps {
  images: Images[];
  openModal: (id: string) => void;
}

const ImageGallery: FC<ImageGalleryProps> = ({ images, openModal }) => {
  return (
    <>
      <ul className={css.list}>
        {Array.isArray(images) &&
          images.map((image) => (
            <ImageCard
              key={image.id}
              image={image}
              openModal={openModal}
              user={image.user}
            />
          ))}
      </ul>
    </>
  );
};

export default ImageGallery;