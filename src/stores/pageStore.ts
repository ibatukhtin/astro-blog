import { atom } from "nanostores";

export const page = atom(1);

export const increasePage = () => {
  page.set(page.get() + 1);
};
