import Skeleton from "react-loading-skeleton";
const Loading = () => {
  return (
    <>
      <div>
        <Skeleton height={250} />
        <Skeleton height={20} />
        <Skeleton height={30} />
        <Skeleton height={40} />
      </div>
      <div>
        <Skeleton height={250} />
        <Skeleton height={20} />
        <Skeleton height={30} />
        <Skeleton height={40} />
      </div>
      <div>
        <Skeleton height={250} />
        <Skeleton height={20} />
        <Skeleton height={30} />
        <Skeleton height={40} />
      </div>
      <div>
        <Skeleton height={250} />
        <Skeleton height={20} />
        <Skeleton height={30} />
        <Skeleton height={40} />
      </div>
    </>
  );
};

export default Loading;
