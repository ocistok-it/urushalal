export const phoneNumber = "08131515951";
export const message = `Halo tim Urushalal,
Saya ingin memulai proses sertifikasi halal untuk bisnis saya.

Berikut sedikit informasi usaha saya:

Nama usaha:
Jenis produk:
Lokasi usaha:

Mohon dibantu untuk langkah selanjutnya ya. Terima kasih ￼🙏`;

export const encodedMessage = encodeURIComponent(message);
export const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
