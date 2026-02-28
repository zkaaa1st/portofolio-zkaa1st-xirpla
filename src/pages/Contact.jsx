import { useState } from "react"; 
 
export default function Contact() { 
  const [form, setForm] = useState({ nama: "", pesan: 
"" }); 
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // perform send action here (e.g., API call)
    // then reset the form
    setForm({ nama: "", pesan: "" });
  };
 
  return (
    <section className="section">
      <h2>Kontak</h2>

      <form className="form" onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'flex-start' }}>
        <input
          placeholder="Nama"
          value={form.nama}
          onChange={(e) => setForm({ ...form, nama: e.target.value })}
          style={{ width: '100%', boxSizing: 'border-box', padding: 10 }}
        />
        <textarea
          placeholder="Pesan"
          value={form.pesan}
          onChange={(e) => setForm({ ...form, pesan: e.target.value })}
          rows={8}
          style={{ width: '100%', boxSizing: 'border-box', padding: 10, resize: 'vertical', backgroundColor: 'black', color: 'white' }}
        ></textarea>
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <button type="submit" style={{ padding: '8px 16px' }}>Kirim</button>
        </div>
      </form>
    </section>
  );
} 