import type { Data } from "../types/notification";

export const notifications: Array<Data> = [
  { id: 1, message: "Yeni bir mesajınız var.", read: false },
  { id: 2, message: "Hesap ayarlarınız güncellendi.", read: false },
  { id: 3, message: "Kampanya başladı!", read: true },
];
