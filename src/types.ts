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
  
  export type requestDataType = {
    client_id: string;
    query: string;
    page: number;
    per_page: number;
    orientation: string;
  };
  
  export type responseDataType = {
    total: number;
    total_pages: number;
    results: ImageType[];
  };