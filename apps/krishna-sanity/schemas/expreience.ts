import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'experience',
  title: 'Expreience',
  type: 'document',
  fields: [
    defineField({
      name: 'company',
      title: 'Company Name',
      type: 'string',
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
    }),
    defineField({
      name: 'designation',
      title: 'Designation',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'blockContent',
    }),
    defineField({
      name: 'roles',
      title: 'Roles',
      type: 'blockContent',
    }),
    defineField({
      name: 'skills',
      title: 'Skills',
      type: 'array',
      of: [
        {
          type: 'string',
          lists: [],
        },
      ],
    }),
  ],

  preview: {
    select: {
      title: 'company',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
