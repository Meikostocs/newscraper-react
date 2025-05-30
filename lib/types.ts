export interface GlobalData {
  metadata: {
    site_title: string;
    site_tag: string;
  };
}

export interface Post {
  id : string
  title: string;
  metadata: {
    published_date: string;
    content?: string;
    imgix_url?: string;
    author?: {
      title?: string;
      pfp?: string;
      
    };
    text ?: string;
    teaser?: string;
  };
}
