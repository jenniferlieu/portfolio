import IconLinks from "../IconLinks";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="p-page-padding-x flex flex-col items-center gap-2">
        <IconLinks />
        <p className="text-xs">
          Designed in Figma, built by me ✦ using Next.js, Tailwind CSS, and
          ContentLayer.
        </p>
      </div>
    </footer>
  );
}
