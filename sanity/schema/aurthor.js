export default {
    name: 'author',
    title: 'Author',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      {
        name: 'bio',
        title: 'Bio',
        type: 'text',
      },
      {
        name: 'avatar',
        title: 'Avatar',
        type: 'image',
        options: { hotspot: true },
      },
      {
        name: 'posts',
        title: 'Posts',
        type: 'array',
        of: [{ type: 'reference', to: { type: 'blog' } }],
      },
    ],
  };
  