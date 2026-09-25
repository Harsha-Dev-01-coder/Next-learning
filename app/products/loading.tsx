export default function Loading() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <div
          key={item}
          className="animate-pulse rounded-xl border p-4"
        >
          <div className="h-48 rounded bg-gray-200" />

          <div className="mt-4 h-5 rounded bg-gray-200" />

          <div className="mt-3 h-4 w-1/2 rounded bg-gray-200" />
        </div>
      ))}
    </div>
  );
}