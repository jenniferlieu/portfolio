import IconLinks from "../IconLinks";

export default function Footer() {
  return (
    <footer className="py-4 border-t border-border">
      <div className="px-4 flex flex-col items-center gap-2">
        <IconLinks />
        <p className="text-xs">
          Designed in Figma, built by me ✦ using React and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
