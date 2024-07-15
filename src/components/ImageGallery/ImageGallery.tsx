import { ImageType, ModalDataType } from "../../types";
import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

interface ImageGalleryProps {
  onImageClick: (image: ModalDataType) => void;
  images: ImageType[];
}

const ImageGallery = ({ images, onImageClick }: ImageGalleryProps) => {
  return (
    <ul className={css.gallery}>
      {images.map((image) => {
        return (
          <li className={css.galleryItem} key={image.id}>
            <ImageCard image={image} onImageClick={onImageClick} />
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;