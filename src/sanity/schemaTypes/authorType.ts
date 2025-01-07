import {UserIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const authorType = defineType({
  name: 'author',
  title: 'Author',
  type: 'document',
  icon: UserIcon,
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name:"description",
      title:"Description",
      type:"string",
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name',
      },
    }),
    defineField({
      name: 'image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
})
// ==================

// // Author Schema
// export const authorType = defineType({
//   name: 'author',
//   title: 'Author',
//   type: 'document',
//   fields: [
//     defineField({
//       name: 'name',
//       title: 'Name',
//       type: 'string',
//     }),
//     defineField({
//       name: 'bio',
//       title: 'Biography',
//       type: 'text',
//     }),
//     defineField({
//       name: 'profileImage',
//       title: 'Profile Image',
//       type: 'image',
//       options: {
//         hotspot: true,
//       },
//       fields: [
//         {
//           name: 'alt',
//           type: 'string',
//           title: 'Alternative text',
//         },
//       ],
//     }),
//   ],
// });
