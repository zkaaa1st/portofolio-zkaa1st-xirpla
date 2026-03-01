import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ nama: "", pesan: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const canSend = form.nama.trim() && form.pesan.trim() && status !== "sending";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!canSend) return;
    setStatus("sending");
    // simulate send
    setTimeout(() => {
      setStatus("success");
      setForm({ nama: "", pesan: "" });
      setTimeout(() => setStatus("idle"), 1800);
    }, 1200);
  };

  const inputStyle = {
    width: "100%",
    boxSizing: "border-box",
    padding: "12px 14px",
    borderRadius: 10,
    border: "1px solid rgba(255,255,255,0.12)",
    background: "rgba(255,255,255,0.03)",
    color: "white",
    outline: "none",
    transition: "box-shadow .18s, transform .12s",
  };

  const labelStyle = {
    fontSize: 13,
    marginBottom: 6,
    color: "rgba(255,255,255,0.8)",
  };

  return (
    <section
      className="section"
      style={{
        maxWidth: 720,
        margin: "28px auto",
        padding: 24,
        borderRadius: 14,
        background:
          "linear-gradient(135deg, rgba(20,20,35,0.9), rgba(10,12,20,0.85))",
        boxShadow: "0 6px 30px rgba(2,6,23,0.6)",
        color: "white",
        fontFamily: "Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
      }}
    >
      <h2 style={{ margin: 0, marginBottom: 8, fontSize: 22 }}>Kontak</h2>
      <p style={{ marginTop: 0, marginBottom: 18, color: "rgba(255,255,255,0.75)" }}>
        Kirim pesan singkat — saya akan menghubungi kembali secepatnya.
      </p>

      <form onSubmit={handleSubmit} style={{ display: "grid", gap: 12 }}>
        <div>
          <label style={labelStyle}>Nama</label>
          <input
            placeholder="Nama"
            value={form.nama}
            onChange={(e) => setForm({ ...form, nama: e.target.value })}
            style={{
              ...inputStyle,
              boxShadow:
                form.nama.trim() && "0 6px 18px rgba(0,150,136,0.06) inset",
            }}
          />
        </div>

        <div>
          <label style={labelStyle}>Pesan</label>
          <textarea
            placeholder="Tulis pesanmu di sini..."
            value={form.pesan}
            onChange={(e) => setForm({ ...form, pesan: e.target.value })}
            rows={7}
            style={{
              ...inputStyle,
              minHeight: 140,
              resize: "vertical",
              background:
                "linear-gradient(180deg, rgba(0,0,0,0.35), rgba(4,4,8,0.6))",
              fontSize: 15,
              lineHeight: 1.45,
            }}
          />
        </div>

        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <button
            type="submit"
            disabled={!canSend}
            style={{
              cursor: canSend ? "pointer" : "not-allowed",
              padding: "10px 16px",
              borderRadius: 10,
              border: "none",
              background: canSend
                ? "linear-gradient(90deg,#00c2a8,#0066ff)"
                : "linear-gradient(90deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03))",
              color: canSend ? "white" : "rgba(255,255,255,0.5)",
              fontWeight: 600,
              boxShadow: canSend ? "0 8px 30px rgba(0,100,255,0.12)" : "none",
              transition: "transform .12s, box-shadow .12s, opacity .12s",
              transform: status === "sending" ? "translateY(1px)" : "none",
            }}
          >
            {status === "sending" ? "Mengirim…" : status === "success" ? "Terkirim ✓" : "Kirim"}
          </button>

          <div style={{ color: "rgba(255,255,255,0.75)", fontSize: 13 }}>
            {status === "success" && "Terima kasih — pesan terkirim."}
            {status === "error" && "Terjadi kesalahan. Coba lagi."}
            {status === "idle" && !canSend && "Lengkapi nama & pesan untuk mengirim."}
          </div>
        </div>
      </form>
    </section>
  );
}