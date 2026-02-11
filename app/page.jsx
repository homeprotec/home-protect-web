export default function Home() {
  return (
    <main style={{fontFamily:"Arial, sans-serif", margin:0}}>

      {/* NAVBAR */}
      <nav style={{
        background:"#020617",
        color:"white",
        padding:"15px 40px",
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        position:"sticky",
        top:0
      }}>
        <h2>HOME PROTECT</h2>
        <a href="https://wa.me/522228120997"
          style={{
            background:"#22c55e",
            padding:"10px 20px",
            borderRadius:"6px",
            color:"white",
            textDecoration:"none",
            fontWeight:"bold"
          }}>
          WhatsApp
        </a>
      </nav>

      {/* HERO */}
      <section style={{
        background:"linear-gradient(90deg,#020617,#0f172a)",
        color:"white",
        padding:"100px 20px",
        textAlign:"center"
      }}>
        <h1 style={{fontSize:"52px"}}>
          Ingeniería en Seguridad Electrónica
        </h1>

        <p style={{maxWidth:"750px", margin:"20px auto"}}>
          Protegemos hogares, negocios e industria con tecnología
          de videovigilancia, redes y control de accesos de nivel profesional.
        </p>

        <a href="https://wa.me/522228120997"
          style={{
            background:"#2563eb",
            padding:"18px 35px",
            color:"white",
            borderRadius:"8px",
            textDecoration:"none",
            fontWeight:"bold",
            display:"inline-block",
            marginTop:"20px"
          }}>
          Cotizar proyecto
        </a>
      </section>

      {/* SERVICIOS */}
      <section style={{padding:"70px 20px", textAlign:"center"}}>
        <h2 style={{fontSize:"32px"}}>Servicios especializados</h2>

        <div style={{
          display:"grid",
          gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",
          gap:"25px",
          marginTop:"45px"
        }}>
          {[
            "Videovigilancia IP y CCTV",
            "Control de accesos",
            "Sistemas perimetrales",
            "Radio enlaces",
            "Cableado estructurado",
            "Electricidad residencial e industrial"
          ].map((item)=>(
            <div style={card}>{item}</div>
          ))}
        </div>
      </section>

      {/* COBERTURA */}
      <section style={{
        background:"#f1f5f9",
        padding:"70px 20px",
        textAlign:"center"
      }}>
        <h2>Cobertura</h2>
        <h3>Puebla · Tlaxcala · Veracruz · Morelos</h3>
      </section>

      {/* CTA */}
      <section style={{
        background:"#020617",
        color:"white",
        padding:"70px 20px",
        textAlign:"center"
      }}>
        <h2>Solicita tu cotización</h2>
        <p>Atención inmediata por WhatsApp</p>
        <a href="https://wa.me/522228120997"
          style={{
            background:"#22c55e",
            padding:"18px 35px",
            borderRadius:"8px",
            color:"white",
            textDecoration:"none",
            fontWeight:"bold"
          }}>
          Enviar mensaje
        </a>
      </section>

      {/* FOOTER */}
      <footer style={{
        background:"#020617",
        color:"#94a3b8",
        textAlign:"center",
        padding:"25px"
      }}>
        © 2026 HOME PROTECT — Sistemas de seguridad y redes
      </footer>

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
{/* GALERIA */}
<section style={{
  padding:"80px 20px",
  background:"#f8fafc",
  textAlign:"center"
}}>
  <h2 style={{fontSize:"32px", marginBottom:"10px"}}>
    Proyectos realizados
  </h2>

  <p style={{color:"#555"}}>
    Instalaciones reales realizadas por HOME PROTECT
  </p>

  <div style={{
    marginTop:"40px",
    display:"grid",
    gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",
    gap:"25px"
  }}>
    
    <img src="/imagenes/camara1.jpg" style={{width:"100%", borderRadius:"12px"}}/>
    <img src="/imagenes/camara2.jpg" style={{width:"100%", borderRadius:"12px"}}/>
    <img src="/imagenes/camara3.jpg" style={{width:"100%", borderRadius:"12px"}}/>
    <img src="/imagenes/instalacion1.jpg" style={{width:"100%", borderRadius:"12px"}}/>

  </div>
</section>

