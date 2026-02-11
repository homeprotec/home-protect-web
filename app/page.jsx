export default function Home() {
  return (
    <main style={{fontFamily:"Arial", margin:0}}>

      {/* HERO */}
      <section style={{
        background:"#0f172a",
        color:"white",
        padding:"60px 20px",
        textAlign:"center"
      }}>
        <h1 style={{fontSize:"48px", marginBottom:"10px"}}>
          HOME PROTECT
        </h1>
        <h2 style={{fontWeight:"normal"}}>
          Sistemas de seguridad y redes
        </h2>

        <a href="https://wa.me/522228120997"
          style={{
            background:"#22c55e",
            color:"white",
            padding:"15px 30px",
            borderRadius:"8px",
            display:"inline-block",
            marginTop:"25px",
            fontSize:"18px",
            textDecoration:"none"
          }}>
          Cotizar por WhatsApp
        </a>
      </section>

      {/* SERVICIOS */}
      <section style={{padding:"60px 20px", textAlign:"center"}}>
        <h2>Nuestros Servicios</h2>

        <div style={{
          display:"flex",
          justifyContent:"center",
          flexWrap:"wrap",
          gap:"30px",
          marginTop:"40px"
        }}>
          {[
            "Cámaras de seguridad",
            "Alarmas",
            "Cercas eléctricas",
            "Redes WiFi",
            "Control de acceso"
          ].map((servicio)=>(
            <div key={servicio} style={{
              border:"1px solid #ddd",
              padding:"25px",
              width:"220px",
              borderRadius:"10px",
              boxShadow:"0 5px 15px rgba(0,0,0,0.1)"
            }}>
              <h3>{servicio}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* POR QUE ELEGIRNOS */}
      <section style={{
        background:"#f1f5f9",
        padding:"60px 20px",
        textAlign:"center"
      }}>
        <h2>¿Por qué elegirnos?</h2>
        <p>✔ Instalación profesional</p>
        <p>✔ Equipos de alta calidad</p>
        <p>✔ Soporte y mantenimiento</p>
        <p>✔ Atención rápida por WhatsApp</p>
      </section>

      {/* CONTACTO */}
      <section style={{
        padding:"60px 20px",
        textAlign:"center"
      }}>
        <h2>Contacto</h2>
        <p>WhatsApp: 52 2228120997</p>
        <p>Email: homeprotecc.es@gmail.com</p>
      </section>

    </main>
  )
}
