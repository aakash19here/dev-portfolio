"use client";

import { useEffect, useState } from "react";

import { AskAIModel } from "@/components/modals/ask-ai-modal";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <AskAIModel />
    </>
  );
};
