import { defineField } from 'sanity'

const roomTypes = [
  { title: 'One in a room', value: 'one in a room' },

  { title: 'Two in a room', value: 'two in a room' },

  { title: 'Three in a room', value: 'three in a room' },

  { title: 'Four in a room', value: 'four in a room' },

  { title: 'Five in a room', value: 'five in a room' },

  { title: 'Six in a room', value: 'six in a room' },
]

const hostelRoom = {
  name: 'hostelRoom',
  title: 'Hostel Room',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) =>
        Rule.required().max(50).error('Maximun 50 characters'),
    }),

    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name',
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) =>
        Rule.required().min(100).error('Minimun 100 characters'),
    }),

    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: (Rule) =>
        Rule.required().min(100).error('Minimun 100 characters'),
    }),

    defineField({
      name: 'discount',
      title: 'Discount',
      type: 'number',
      initialValue: 0,
      validation: (Rule) => Rule.min(0),
    }),

    defineField({
      name: 'image',
      title: 'Image',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'url',
              type: 'url',
              title: 'URL',
            },

            {
              name: 'file',
              type: 'file',
              title: 'File',
            },
          ],
        },
      ],

      validation: (Rule) =>
        Rule.required().min(3).error('Minimum of 3 images required'),
    }),

    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'object',
      fields: [
        {
          name: 'url',
          type: 'url',
          title: 'URL',
        },

        {
          name: 'file',
          type: 'file',
          title: 'File',
        },
      ],
      validation: (Rule) => Rule.required().error('Cover Image is required'),
    }),

    defineField({
      name: 'type',
      title: 'Room Type',
      type: 'string',
      options: {
        list: roomTypes,
      },
      initialValue: 'one in a room',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'specialNote',
      title: 'Special Note',
      type: 'text',
      initialValue:
        'Check-in time is 12:00 PM, check-out time is 11:59 AM. If you have leave behind any items, please contact the hostel manager.',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'dimension',
      title: 'Dimension',
      type: 'string',
    }),

    defineField({
      name: 'numberOfBeds',
      title: 'Number of Beds',
      type: 'number',
      validation: (Rule) => Rule.min(1),
      initialValue: 1,
    }),

    defineField({
      name: 'offeredAmenities',
      title: 'Offered Amenities',
      type: 'array',
      of: [
        {
          name: 'icon',
          title: 'Icon',
          type: 'string',
        },

        {
          name: 'amenity',
          title: 'Amenity',
          type: 'string',
        },
      ],
    }),

    defineField({
      name: 'isBooked',
      title: 'Is Booked',
      type: 'boolean',
      initialValue: false,
    }),

    defineField({
      name: 'isFeatured',
      title: 'Is Featured',
      type: 'boolean',
      initialValue: false,
    }),

    defineField({
      name: 'reviews',
      title: 'Reviews',
      type: 'array',
      of: [{ type: 'review' }],
    }),
  ],
}

export default hostelRoom
