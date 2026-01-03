export interface ProjectMeta {
  id: string;
  path: string;
  title: string;
  description?: string;
  background?: string;
  children?: ProjectMeta[];
}
