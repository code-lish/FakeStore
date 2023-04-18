import Skeleton from "react-loading-skeleton";
const SingleProductLoading = () => {
  return (
    <div className="single-product container">
      <div className="row">
        <div className="col-12 col-md-6">
          <Skeleton height={400} />
        </div>
        <div className="col-12 col-md-6">
          <Skeleton height={20} width={100} />
          <Skeleton height={40} className="mt-4" />
          <Skeleton height={40} className="mt-4" />
          <Skeleton height={20} width={90} className="mt-4" />
          <Skeleton height={15} className="mt-4" />
          <Skeleton height={15} className="mt-4" />
          <Skeleton height={40} className="mt-4" />
          <Skeleton height={40} className="mt-4" />
        </div>
      </div>
    </div>
  );
};

export default SingleProductLoading;
