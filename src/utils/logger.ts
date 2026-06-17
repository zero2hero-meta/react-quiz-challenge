export const logger = {
  info(message: string, data?: unknown) {
    console.info(`[React Quiz Challenge] ${message}`, data ?? "");
  },
  warn(message: string, data?: unknown) {
    console.warn(`[React Quiz Challenge] ${message}`, data ?? "");
  },
  error(message: string, data?: unknown) {
    console.error(`[React Quiz Challenge] ${message}`, data ?? "");
  },
};
