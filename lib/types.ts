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
    teaser?: string;
  };
}


export interface Author{
  title : string;
  pfp: string;
}

export interface Article {
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
    teaser?: string;
  };
  text ?: string;
}
