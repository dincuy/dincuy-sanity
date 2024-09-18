import {defineField, defineType} from 'sanity'

export const kategoriType = defineType({
  name: 'kategori',
  type: 'document',
  title: 'Kategori',
  fields: [
    defineField({
      name: 'namaKategori',
      type: 'string',
      title: 'Nama Kategori',
    }),
  ],
})
