import {defineField, defineType} from 'sanity'

export const paketType = defineType({
  name: 'paket',
  title: 'Paket',
  type: 'document',
  fields: [
    defineField({
      name: 'kode',
      title: 'Kode',
      type: 'string',
    }),
    defineField({
      name: 'provider',
      title: 'Provider',
      type: 'string',
    }),
    defineField({
      name: 'jenisPaket',
      title: 'Jenis Paket',
      type: 'string',
    }),
    defineField({
      name: 'kategori',
      type: 'string',
      options: {
        list: ['pulsa', 'paket internet', 'voucher internet']
      }
    }),
    defineField({
      name: 'produk',
      title: 'Produk',
      type: 'string',
    }),
    defineField({
      name: 'desc',
      title: 'Deskripsi',
      type: 'text',
    }),
    defineField({
      name: 'harga',
      title: 'Harga',
      type: 'string',
    }),
    defineField({
      name: 'hargaJual',
      title: 'Harga Jual',
      type: 'string',
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'string',
    }),
    defineField({
      name: 'dibuatPada',
      title: 'Dibuat Pada',
      type: 'datetime',
      initialValue: () => new Date().toISOString(), // Menetapkan nilai awal
    }),
  ],
})
