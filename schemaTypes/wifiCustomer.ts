import {defineField, defineType} from 'sanity'

export const wifiCustomer = ({
  name: 'wifiCustomer',
  title: 'Pelanggan WiFi',
  type: 'document',
  fields: [
    defineField({
      name: 'namaPelanggan',
      title: 'Nama Pelanggan',
      type: 'string',
      validation: (Rule) => Rule.required().min(2).error('Nama Pelanggan harus diisi dan minimal 2 karakter'),
    }), 
    defineField({
      name: 'alamatMacWifi',
      title: 'Alamat MAC WiFi',
      type: 'string',
      description: 'Masukkan alamat MAC dalam format xx:xx:xx:xx:xx:xx',
      validation: (Rule) =>
        Rule.required()
          .regex(/^([0-9A-Fa-f]{2}[:]){5}[0-9A-Fa-f]{2}$/, {
            name: 'MAC address', // Error message name
            invert: false, // Regex condition
          })
          .error('Alamat MAC tidak valid. Format yang benar adalah xx:xx:xx:xx:xx:xx'),
    }),
  ],
})
