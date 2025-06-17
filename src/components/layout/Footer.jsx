import IconLinks from "../IconLinks";

export default function Footer() {
  return (
    <footer className="py-8 border-t">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center">
        <IconLinks />
        <p className="text-xs text-gray-500 text-center">
          Designed in Figma, built by me • using React and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
