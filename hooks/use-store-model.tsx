import { create } from "zustand";

interface useStoreModalAskAI {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useAskAIModal = create<useStoreModalAskAI>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
