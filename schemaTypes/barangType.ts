import { defineType, defineField } from 'sanity';

export const barangType = defineType({
  name: 'barang',
  type: 'document',
  title: 'Barang',
  fields: [
    defineField({
      name: 'namaBarang',
      type: 'string',
      title: 'Nama Barang',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'hargaJual',
      type: 'number',
      title: 'Harga Jual',
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'hargaModal',
      type: 'number',
      title: 'Harga Modal',
      description: 'Tidak Wajib',
      validation: (Rule) => Rule.min(0),
    }),
    defineField({
      name: 'kategori',
      type: 'reference',
      title: 'Kategori',
      to: [{type: 'kategori'}],
    }),
    defineField({
      name: 'satuan',
      type: 'string',
      title: 'Satuan',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'favorit',
      type: 'boolean',
      title: 'Favorit',
      initialValue: false,
    }),
    defineField({
      name: 'kelolaStok',
      type: 'object',
      title: 'Kelola Stok',
      fields: [
        defineField({
          name: 'aktif',
          type: 'boolean',
          title: 'Aktif',
          initialValue: true,
        }),
        defineField({
          name: 'stokSaatIni',
          type: 'number',
          title: 'Stok Saat Ini',
          validation: (Rule) => Rule.min(0),
        }),
        defineField({
          name: 'stokMinimum',
          type: 'number',
          title: 'Stok Minimum',
          validation: (Rule) => Rule.min(0),
        }),
      ],
    }),
  ],
});
