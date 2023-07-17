"use client";

import { Modal } from "@/components/ui/modal";
import { Input } from "@/components/ui/input";

import { Button } from "@/components/ui/button";
import { useChat } from "ai/react";
import React from "react";
import { useAskAIModal } from "@/hooks/use-store-model";
import { BrainIcon, Command, SendIcon, UserIcon } from "lucide-react";
import { Icons } from "../icons";
import { Separator } from "../ui/separator";

export const AskAIModel = () => {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  const askAIModal = useAskAIModal();
  return (
    <div>
      <Modal
        title="Ask AI"
        isOpen={askAIModal.isOpen}
        onClose={askAIModal.onClose}
      >
        <div className="my-2 h-[60vh] overflow-y-auto">
          {messages.length > 0
            ? messages.map((m) => (
                <div key={m.id} className="flex gap-3 py-2">
                  {m.role === "user" ? <UserIcon /> : <Command />}
                  <span>{m.content}</span>
                </div>
              ))
            : null}
        </div>
        <form
          className="flex justify-center items-center gap-2"
          onSubmit={handleSubmit}
        >
          <Input
            className="py-2"
            placeholder="The idea behind my website is..."
            value={input}
            onChange={handleInputChange}
          />
          <Button type="submit">
            <SendIcon />
          </Button>
        </form>
      </Modal>
    </div>
  );
};
