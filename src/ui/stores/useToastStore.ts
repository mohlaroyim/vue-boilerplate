import { defineStore } from "pinia";

//Types & Interfaces
export type ToastStatusType = "success" | "warning" | "error";
export type ToastPayload = { timeout?: number; text: string };

interface ToastType {
  text: string;
  status: ToastStatusType;
  id: number;
}

// Constants
const defaultTimeout: number = 2000;

// Utils
const createToast = (text: string, status: ToastStatusType): ToastType => ({
  text,
  status,
  id: Math.random() * 1000,
});

export const useToastStore = defineStore("toaster-store", {
  state: (): { toasts: ToastType[] } => ({
    toasts: [],
  }),
  actions: {
    updateState(payload: ToastPayload, status: ToastStatusType) {
      const { text, timeout } = payload;

      const toast = createToast(text, status);

      this.toasts.push(toast);

      setTimeout(() => {
        this.toasts = this.toasts.filter((t) => t.id !== toast.id);
      }, timeout ?? defaultTimeout);
    },
    success(payload: ToastPayload) {
      this.updateState(payload, "success");
    },
    warning(payload: ToastPayload) {
      this.updateState(payload, "warning");
    },
    error(payload: ToastPayload) {
      this.updateState(payload, "error");
    },
  }
});
