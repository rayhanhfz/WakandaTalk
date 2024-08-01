import React from 'react';

function Contact() {
  return (
    <div className="container mt-4">
      <h1>Hubungi Kami</h1>
      <p>
        Kami senang mendengar dari Anda! Jika Anda memiliki pertanyaan, komentar, atau hanya ingin mengirimkan meme lucu, jangan ragu untuk menghubungi kami melalui informasi di bawah ini.
      </p>

      <h2>Alamat Kantor</h2>
      <div style={{ width: '100%', height: '400px', marginBottom: '20px' }}>
        <iframe
          width="100%"
          height="100%"
          frameBorder="0"
          src={`https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=Universitas+Indonesia,Depok+Jawa+Barat`}
          allowFullScreen
          title="Google Maps Location"
        ></iframe>
      </div>
      <p>
        <strong>Alamat:</strong> Jalan Wakanda No.1, Depok, Jawa Barat
      </p>

      <h2>Kontak</h2>
      <p>
        <strong>Email:</strong> <a href="mailto:contact@wakandatalk.com">contact@wakandatalk.com</a>
      </p>
      <p>
        <strong>Telepon:</strong> <a href="tel:+628123456789">+62 812-3456-789</a>
      </p>
    </div>
  );
}

export default Contact;
