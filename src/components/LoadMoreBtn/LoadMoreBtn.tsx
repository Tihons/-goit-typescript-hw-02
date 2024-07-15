interface LoadMoreBtnProps {
    onAddPage: () => void;
  }
  
  const LoadMoreBtn = ({ onAddPage }: LoadMoreBtnProps) => {
    return (
      <>
        <button onClick={onAddPage}>Load more</button>
      </>
    );
  };
  
  export default LoadMoreBtn;