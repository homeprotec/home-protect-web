export default function Home() {
  return (
    <main style={{fontFamily:"Arial, sans-serif", margin:0}}>

      {/* HERO */}
      <section style={{
        background:"#020617",
        color:"white",
        padding:"90px 20px",
        textAlign:"center"
      }}>
        <h1 style={{fontSize:"50px", marginBottom:"15px"}}>
          HOME PROTECT
        </h1>

        <h2 style={{fontWeight:"normal"}}>
          Ingeniería en seguridad electrónica y redes
        </h2>

        <p style={{maxWidth:"700px", margin:"20px auto"}}>
          Implementamos soluciones integrales de videovigilancia,
          control de acceso, redes e infraestructura eléctrica
          para hogares, negocios e industria.
        </p>

        <a href="https://wa.me/522228120997"
          style={{
            background:"#2563eb",
            padding:"16px 35px",
            color:"white",
            borderRadius:"8px",
            textDecoration:"none",
            fontWeight:"bold",
            display:"inline-block",
            marginTop:"25px"
          }}>
          Solicitar cotización inmediata
        </a>
      </section>


      {/* SERVICIOS */}
      <section style={{padding:"70px 20px", textAlign:"center"}}>
        <h2 style={{fontSize:"32px"}}>Soluciones Profesionales</h2>

        <div style={{
          display:"grid",
          gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",
          gap:"25px",
          marginTop:"45px"
        }}>

          <div style={card}>
            🎥 Videovigilancia IP y CCTV profesional
          </div>

          <div style={card}>
            🔐 Sistemas de control de accesos
          </div>

          <div style={card}>
            ⚡ Sistemas perimetrales electrificados
          </div>

          <div style={card}>
            📡 Enlaces inalámbricos y redes WiFi empresariales
          </div>

          <div style={card}>
            🧠 Configuración de equipos de cómputo
          </div>

          <div style={card}>
            🏢 Cableado estructurado y electricidad
          </div>

        </div>
      </section>


      {/* COBERTURA */}
      <section style={{
        background:"#f1f5f9",
        padding:"70px 20px",
        textAlign:"center"
      }}>
        <h2>Cobertura regional</h2>

        <p>
          Operamos en los estados de:
        </p>

        <h3>Puebla • Tlaxcala • Veracruz • Morelos</h3>
      </section>


      {/* POR QUE ELEGIRNOS */}
      <section style={{padding:"70px 20px", textAlign:"center"}}>
        <h2>Por qué elegir HOME PROTECT</h2>

        <div style={{maxWidth:"700px", margin:"auto"}}>
          <p>✔ Instalaciones con estándares profesionales</p>
          <p>✔ Equipos de marcas líderes del mercado</p>
          <p>✔ Soporte técnico y mantenimiento</p>
          <p>✔ Diagnóstico y asesoría sin compromiso</p>
          <p>✔ Atención inmediata vía WhatsApp</p>
        </div>
      </section>


      {/* CONTACTO */}
      <section style={{
        background:"#020617",
        color:"white",
        padding:"70px 20px",
        textAlign:"center"
      }}>
        <h2>Contacto</h2>
        <p>WhatsApp: 222 812 0997</p>
        <p>Email: homeprotecc.es@gmail.com</p>
      </section>


      {/* BOTON WHATSAPP */}
      <a href="https://wa.me/522228120997"
         style={{
           position:"fixed",
           bottom:"20px",
           right:"20px",
           background:"#22c55e",
           color:"white",
           padding:"16px 22px",
           borderRadius:"50px",
           textDecoration:"none",
           fontWeight:"bold",
           boxShadow:"0 4px 12px rgba(0,0,0,0.3)"
         }}>
         WhatsApp
      </a>

    </main>
  )
}

const card = {
  background:"white",
  padding:"30px",
  borderRadius:"12px",
  boxShadow:"0 6px 15px rgba(0,0,0,0.1)",
  fontWeight:"bold",
  fontSize:"18px"
}

