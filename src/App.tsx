import "./App.css";
import toast, { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";

import requestImagesByQuery from "./services/api";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import SearchBar from "./components/SearchBar/SearchBar";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";
import { ImageType, ModalDataType, responseDataType } from "./types";

function App() {
  const [query, setQuery] = useState<string>("");
  const [images, setImages] = useState<ImageType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [loadMoreBtn, setLoadMoreBtn] = useState<boolean>(false);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [modalData, setModalData] = useState<ModalDataType>({
    imageSrc: "",
    imageAltDescription: "",
    imageDescription: "",
    imageAuthor: "",
    imageLikes: 0,
  });

  useEffect(() => {
    if (!query) {
      return;
    }
    const fetchPhotos = async () => {
      try {
        setError(false);
        setLoading(true);
        setLoadMoreBtn(false);
        const data: responseDataType = await requestImagesByQuery(query, page);
        if (data.total === 0) {
          setImages([]);
          toast("Sorry, we couldn't find any images! Please, try again!", {
            position: "top-right",
          });
        } else {
          setImages((prevImages) => [...prevImages, ...data.results]);
          setLoadMoreBtn(
            data.total_pages !== null && data.total_pages !== page
          );
        }
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchPhotos();
  }, [query, page]);

  const handleSearch = (searchQuery: string): void => {
    if (searchQuery !== query) {
      setQuery(searchQuery);
      setPage(1);
      setImages([]);
    }
  };

  const handleSearchNextPage = (): void => {
    setPage((prevPage) => prevPage + 1);
  };

  const openModal = (): void => {
    setModalIsOpen(true);
  };

  const closeModal = (): void => {
    setModalIsOpen(false);
  };

  const handleImageClick = (imageData: ModalDataType): void => {
    setModalData(imageData);
    openModal();
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      <Toaster />
      {error && <ErrorMessage />}
      {images.length > 0 && (
        <ImageGallery images={images} onImageClick={handleImageClick} />
      )}
      {loading && <Loader />}
      {loadMoreBtn && <LoadMoreBtn onLoadMore={handleSearchNextPage} />}
      <ImageModal
        closeModal={closeModal}
        modalIsOpen={modalIsOpen}
        {...modalData}
      />
    </>
  );
}

export default App;