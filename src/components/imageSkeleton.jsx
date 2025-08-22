const ImageSkeleton = ({ isLoading }) => (
  <div className="w-full aspect-[5/5] bg-gray-200 animate-pulse flex items-center justify-center">
    {isLoading ? (
      <div className="text-gray-500 text-sm">Chargement...</div>
    ) : (
      <div className="w-full h-full bg-gray-200"></div>
    )}
  </div>
);

export default ImageSkeleton;