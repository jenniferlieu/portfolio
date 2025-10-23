"use client";

import { useState, useEffect, useRef } from "react";
import { getEmail } from "../utils/getEmail";
import CopyButton from "./CopyButton";
import CopyIcon from "../assets/CopyIcon.svg";

export default function EmailLink() {
  const [showEmail, setShowEmail] = useState(false);
  const emailRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowEmail(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (emailRef.current) {
      observer.observe(emailRef.current);
    }

    return () => {
      if (emailRef.current) {
        observer.unobserve(emailRef.current);
      }
    };
  }, []);

  return (
    <div ref={emailRef}>
      {showEmail ? (
        <CopyButton textToCopy={getEmail()}>
          <div className="inline-flex gap-2 items-center group text-text">
            <span className="block font-bold text-xl group-hover:text-primary">
              {getEmail()}
            </span>
            <CopyIcon
              width={18}
              height={18}
              className="group group-hover:text-primary"
            />
          </div>
        </CopyButton>
      ) : (
        <div></div>
      )}
    </div>
  );
}
