import {defineType, defineField} from 'sanity'

export const barangType = defineType({
  name: 'barang',
  type: 'document',
  title: 'Barang',
  fields: [
    defineField({
      name: 'namaBarang',
      type: 'string',
      title: 'Nama Barang',
    }),
    defineField({
      name: 'gambar',
      type: 'array', // Mengubah tipe menjadi array
      title: 'Gambar Barang',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ], // Setiap elemen di dalam array adalah tipe image
      options: {
        layout: 'grid', // Opsi untuk menampilkan gambar dalam grid di UI
      },
    }),
    defineField({
      name: 'hargaJual',
      type: 'number',
      title: 'Harga Jual',
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
      name: 'deskripsi',
      title: 'Deskripsi',
      type: 'text',
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
  preview: {
    select: {
      title: 'namaBarang', // Menggunakan nama barang sebagai judul di pratinjau
      media: 'gambar.0', // Mengambil gambar pertama untuk ditampilkan sebagai thumbnail
      subtitle: 'hargaJual', // Menampilkan harga jual sebagai subtitle
    },
    prepare(selection) {
      const {title, media, subtitle} = selection
      return {
        title: title,
        media: media,
        subtitle: `Harga: Rp${subtitle}`,
      }
    },
  },
})
