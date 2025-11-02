import Link from "next/link";
import ArrowleftIcon from "../../assets/ArrowLeftIcon.svg";

export default function SubpageLayout({ children }) {
  return (
    <main className="max-w-page-width mx-auto py-page-padding-y px-page-padding-x lg:px-page-padding-x-lg space-y-8">
      {/* Back to Home button */}
      <Link href="/" className="inline-flex items-center gap-2 group">
        <ArrowleftIcon
          size={20}
          className="transition-transform duration-300 ease-out group-hover:-translate-x-1 group-focus:-translate-x-1 group-active:-translate-x-1"
        />
        <span className="font-semibold">Home</span>
      </Link>

      {children}
    </main>
  );
}
