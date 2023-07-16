"use client";

import React, { FC, useEffect, useState } from "react";
import Typewriter from "typewriter-effect";

interface TypeWriterProps {
  array: string[];
}

const TypeWriter: FC<TypeWriterProps> = ({ array }: TypeWriterProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <div>
      <Typewriter
        options={{
          strings: [...array],
          autoStart: true,
          loop: true,
          delay: 50,
          deleteSpeed: 50,
        }}
      />
    </div>
  );
};

export default TypeWriter;
