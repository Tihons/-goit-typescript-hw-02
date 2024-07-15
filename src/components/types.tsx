export interface OpModal {
    openModal: (img: string) => void;
  }
  export interface Images {
    id: string;
    alt_description: string;
    likes: number;
    urls: {
      small: string;
      regular: string;
    };
    user: {
      name: string;
    };
  }
  
  export interface User {
    name: string;
    location?: string;
  }
  
  export type ModalDataType = {
    imageSrc: string;
    imageAltDescription?: string;
    imageDescription?: string;
    imageAuthor?: string;
    imageLikes?: number;
  };
  export type ImageType = {
    id: string;
    description?: string;
    alt_description?: string;
    urls: {
      regular: string;
      small: string;
    };
    user: {
      name: string;
    };
    likes: number;
  };
  export type responseDataType = {
    total: number;
    total_pages: number;
    results: ImageType[];
  };