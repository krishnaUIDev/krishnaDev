import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'storeItems',
  title: 'storeItems',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Item Name',
      type: 'string',
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'imageSrc',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'imageAlt',
      title: 'Image Alt',
      type: 'string',
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [
        {
          type: 'string',
        },
      ],
      options: {
        list: [
          {title: 'Electronics', value: 'Electronics'},
          {title: 'E-books', value: 'E-books'},
          {title: 'T-shirts', value: 'T-shirts'},
          {title: 'Stickers', value: 'Stickers'},
          {title: 'Misc', value: 'Misc'},
        ],
      },
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
  ],

  preview: {
    select: {
      title: 'name',
      author: 'author.name',
      media: 'imageSrc',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
