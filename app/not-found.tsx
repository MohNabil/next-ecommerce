import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center mt-8">
      <h2 className="text-xl font-semibold text-gray-900 my-1">Not Found</h2>
      <p className="text-xl font-semibold text-gray-900 my-1">
        Could not find requested resource
      </p>
      <Link
        href="/"
        className="text-blue-500 border border-blue-500 p-1 hover:bg-blue-500 hover:text-white"
      >
        Return Home
      </Link>
    </div>
  );
}
