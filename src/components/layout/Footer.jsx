import IconLinks from "../IconLinks";
import { allSiteInfos } from "contentlayer/generated";
import { getMDXComponent } from "next-contentlayer2/hooks";

export default function Footer() {
  const MDXFooterContent = getMDXComponent(allSiteInfos[0].footer.code);
  return (
    <footer className="border-t border-border">
      <div className="p-page-padding-x flex flex-col items-center gap-2">
        <IconLinks />
        <div className="text-xs text-center">
          <MDXFooterContent className="text-xs text-center" />
        </div>
      </div>
    </footer>
  );
}
