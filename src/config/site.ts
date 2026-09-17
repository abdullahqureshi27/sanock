export const siteConfig = {
  name: 'Sanock',
  brandName: 'SANOCK',
  phoneNumber: process.env.NEXT_PUBLIC_PHONE_NUMBER || '+923082945620',
  phoneDisplay: process.env.NEXT_PUBLIC_PHONE_DISPLAY || '+92 308 2945620',
  whatsappNumber:
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ||
    (process.env.NEXT_PUBLIC_PHONE_NUMBER || '+923082945620').replace(/[^0-9]/g, ''),
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'mabdullahqureshi583@gmail.com',
};
