interface Image {
  asset: {
    url: string;
  };
}

export interface Experince {
  _id: string;
  company: string;
  description: string[];
  designation: string;
  location: string;
  roles: string[];
  skills: string[];
}
