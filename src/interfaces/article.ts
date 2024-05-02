export default interface Article {
  id: number;
  attributes: {
    title: string;
    description: string;
    content: string;
    url: string;
    slug: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    cover?: Cover;
  };
}

export interface Cover {
  data: {
    attributes: {
      url: string;
      formats: {
        small: {
          url: string;
          width: number;
          height: number;
        },
        medium: {
          url: string;
          width: number;
          height: number;
        }
      }
    }
  }
}
