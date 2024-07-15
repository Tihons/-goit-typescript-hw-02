import { FC } from "react";
import { Images, User } from "../types";
import css from "./ImageCard.module.css";

interface ImageCardProps {
  image: Images;
  openModal: (id: string) => void;
  user: User;
}

const ImageCard: FC<ImageCardProps> = ({ image, openModal, user }) => {
  return (
    <li className={css.listItem}>
      <div className={css.imgItem}>
        <img
          onClick={() => openModal(image.id)}
          src={image.urls.small}
          width={300}
          alt={image.alt_description}
        />
      </div>
      <div className={css.imageInfo}>
        <p className={css.textInfo}>
          Author: <span>{user.name}</span>
        </p>
        <p className={css.textInfo}>
          Location: <span>{user.location}</span>
        </p>
      </div>
    </li>
  );
};

export default ImageCard;