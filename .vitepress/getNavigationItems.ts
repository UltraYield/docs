import { fileURLToPath } from 'url'
import { dirname, join, resolve } from 'path'
import { readdirSync, readFileSync } from "fs";
import * as matter from "gray-matter";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const getNavigationItems = (dirName: string): { text: string, link: string }[] => {
  const fileDir = resolve(__dirname, `../${dirName}`);
  const dirFiles = readdirSync(fileDir);

  return dirFiles
    .map(file => {
      const filePath = join(fileDir, file);
      const content = readFileSync(filePath, 'utf-8');
      const { data } = matter(content);

      return data;
    })
    .sort((a, b) => a.order - b.order)
    .map(({text,link})=>({text,link}));
}
