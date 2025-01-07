import {TagIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

// export const categoryType = defineType({
//   name: 'category',
//   title: 'Category',
//   type: 'document',
//   icon: TagIcon,
//   fields: [
//     defineField({
//       name: 'title',
//       type: 'string',
//     }),
//     defineField({
//       name: 'slug',
//       type: 'slug',
//       options: {
//         source: 'title',
//       },
//     }),
//     defineField({
//       name: 'description',
//       type: 'text',
//     }),
//   ],
// })


// ==================


// Category Schema
export const categoryType = defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
  ],
});
