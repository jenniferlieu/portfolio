"use client";

import PropTypes from "prop-types";

import ArrowRightIcon from "../assets/ArrowRightIcon.svg";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function ExternalLink({ children, href, variant, className }) {
  const externalLinkRef = useRef();
  const arrowIconRef = useRef();
  let arrowSize = 0; // size of the arrow

  useEffect(() => {
    if (externalLinkRef.current) {
      // Set target attribute
      const userAgent = navigator.userAgent; // gets device and browser information
      const isAppleMobile = /iPad|iPhone|iPod|Node|Mac/i.test(userAgent); // checks if user agent is an apple mobile device
      const isSafari = /WebKit/i.test(userAgent); // checks if user agent is using Safari iOS browser
      const isNotSafari = !/CriOS|FxiOS|OPiOS|mercury/i.test(
        navigator.userAgent
      ); // checks that the browser is not any other browser
      if (isAppleMobile && isSafari && isNotSafari) {
        // If on Safari iOS, set external links to open in same tab.
        externalLinkRef.current.setAttribute("target", "_self");
      } else {
        // If on any other device and browser, set external links to open in a new tab.
        externalLinkRef.current.setAttribute("target", "_blank");
      }

      // Set arrow size based on font size
      arrowSize = window.getComputedStyle(externalLinkRef.current).fontSize;
      if (arrowIconRef.current) {
        arrowIconRef.current.setAttribute("width", arrowSize);
        arrowIconRef.current.setAttribute("height", arrowSize);
      }
    }
  }, []);

  // Define and set style variants for external links
  let style = "";
  const arrowStyle = "group flex items-center font-bold ";
  switch (variant) {
    case "functional": // only has the external link attributes target and rel with no styling
      break;
    case "clean": // has arrow with no underline
      style += arrowStyle;
      break;
    default: // has arrow with underline
      style += `${arrowStyle} underline`;
  }
  if (className) {
    style += ` ${className}`;
  }

  return (
    <Link
      ref={externalLinkRef}
      href={href}
      rel="noopener noreferrer"
      className={style}>
      {children}
      {variant !== "functional" && (
        <span className="ml-1">
          <ArrowRightIcon
            ref={arrowIconRef}
            width={arrowSize}
            height={arrowSize}
            className="transition-transform duration-300 ease-out -rotate-45 group-hover:rotate-0 group-focus:rotate-0 group-active:rotate-0"
          />
        </span>
      )}
    </Link>
  );
}

ExternalLink.propTypes = {
  href: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
  className: PropTypes.string,
};
