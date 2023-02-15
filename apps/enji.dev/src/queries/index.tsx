export const storeItemsQuery = `*[_type == "storeItems"] {
    _id,
    body[] { children[] { text } },
    categories,
    imageAlt,
    imageSrc {
     asset {
       _ref
     }
    },
    price,
    slug {
      current
    }
  }`;

export const exerienceQuery = `*[_type == "experience"] {
    _id,
    company,
    description[] {children[] {_key, text }},
    designation,
    location,  
    roles[] { children [] { text } } ,
    skills   
 }`;
