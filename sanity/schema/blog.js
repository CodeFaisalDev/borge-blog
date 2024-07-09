
export default {
    name: 'blog',
    title: 'Blog Post',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'desc',
        title: 'Description',
        type: 'text',
      },
      {
        name: 'author',
        title: 'Author',
        type: 'reference',
        to: [{ type: 'author' }],
      },
      {
        name: 'category',
        title: 'Category',
        type: 'reference',
        to: [{ type: 'category' }],
      },
      {
        name: 'content',
        title: 'Content',
        type: 'array',
        of: [
          {
            type: 'block',
          },
          {
            type: 'image',
            options: { hotspot: true },
          },
        ],
      },
      {
        name: 'mainImage',
        title: 'Main Image',
        type: 'image',
        options: { hotspot: true },
      },
    ],
  };
  