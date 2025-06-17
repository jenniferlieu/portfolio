import IconLinks from "../IconLinks";

export default function Footer() {
  return (
    <footer className="py-4 border-t border-border">
      <div className="mx-auto px-4 flex flex-col items-center gap-2">
        <IconLinks />
        <p className="text-xs text-text-muted">
          Designed in Figma, built by me • using React and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
