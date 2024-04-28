import fs from "fs";
import path from "path";

import { POST_DIR_NAME } from "@/shared/config";

export const getAllCategories = () => {
  try {
    return fs
      .readdirSync(path.join(process.cwd(), POST_DIR_NAME), {
        withFileTypes: true,
      })
      .filter((file) => file.isDirectory())
      .map((dir) => dir.name);
  } catch (error) {
    return console.error(error);
  }
};
