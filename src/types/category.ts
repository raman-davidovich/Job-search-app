type Position = {
  id_parent: number;
  key: number;
  title: string;
  title_rus: string;
  url_rus: string;
};

export interface CategoryType {
  key: number;
  positions: Array<Position>;
  title: string;
  title_rus: string;
  title_trimmed: string;
  url_rus: string;
}

export type CategoryTitleType = CategoryType["title" | "title_trimmed"];
