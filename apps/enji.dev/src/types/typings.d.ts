interface Image {
  asset: {
    url: string;
  };
}

export interface Experince {
  _id: string;
  company: string;
  description: Description[];
  designation: string;
  location: string;
  roles: Role[];
  skills: string[];
}

interface Description {
  children: DescriptionChild[];
}

interface DescriptionChild {
  _key: string;
  text: string;
}

interface Role {
  children: RoleChild[];
}

interface RoleChild {
  text: string;
}
