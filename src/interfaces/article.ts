export default interface Article {
  id: number;
  attributes: {
    createdAt: any;
    updatedAt: any;
    publishedAt: any;
    title: string;
    description: string;
    category: {
      data: Category
    };
    author: {
      data: Author
    };
    content: string;
    url: string;
    slug: string;
    cover?: Cover;
    relatedArticles?: {
      data: Article[]
    };
    static_img_url?: string;
    static_date?: any;
    tags?: {
      data: Tag[]
    };
    seo: Seo;
    seo_text: string;
  }
}

interface Seo {
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
}

export interface Author {
  attributes: {
    name: string;
    slug: string;
    caption: string;
    caption_line_2: string;
    email: string;
    link: string;
    avatar: Avatar;
    seo: Seo;
    seo_text: string;
  }
}

export interface Category {
  attributes: {
    name: string;
    slug: string;
    articles: Article;
    seo: Seo;
    seo_text: string;
  }
}

export interface Tag {
  attributes: {
    name: string;
    slug: string;
    color: string;
    articles: Article;
    seo: Seo;
    seo_text: string;
  }
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

interface Avatar {
  data: {
    attributes: {
      url: string;
    }
  }
}
