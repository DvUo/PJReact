import { Box, Typography} from "@mui/material";
import publico from "../../img/publico.png";
import apertura from "../../img/apertura.png";
import salas_audiencia from "../../img/salas_audiencia.png";
import secretaria from "../../img/secretaria.png";
import corteTemucoImg from "../../img/CorteTemuco.jpg";
import { CardComponent } from "../GridComponents/CardComponent";
import Grid from "@mui/material/Grid2";
import "./home.css";

export const HomeElements = () => {
  return (
    <>
      <Box
        className="container-first-image"
        sx={{
          background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.8)), url(${corteTemucoImg}) no-repeat bottom fixed`,
          backgroundSize: "cover",
        }}
      >
        <Box sx={{ maxWidth: "40em" }}>
          <Typography
            variant="h1"
            sx={{
              fontSize: "3rem",
              fontWeight: "bold",
              padding: "1.5em 0 1em 0.5em",
              color: "#fff",
            }}
          >
            Corte de Apelaciones
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: "1.2rem",
              textAlign: "justify",
              paddingLeft: "1.5em",
              color: "#eee",
            }}
          >
            El Poder Judicial es uno de los tres pilares que sostienen el estado
            democrático de derecho en nuestro país, junto al Poder Ejecutivo y
            Poder Legislativo. Está conformado por tribunales de diversa
            competencia tales como corte suprema, corte de apelaciones, civil,
            penal, laboral, cobranza y familia. Su labor está destinada a
            otorgar a las personas una justicia oportuna y de calidad.
          </Typography>
        </Box>
      </Box>


      <Grid
        container
        spacing={0}
        columns={2}
        sx={{
          padding: "5em 0",
          justifyContent: "center",
        }}
      > 
            <CardComponent url={""} title={"secretaria"} img={secretaria} />
            <CardComponent
              url={"https://buzon.pjud.cl/formulario"}
              title={"publico"}
              img={publico}
            />
            <CardComponent
              url={"/SalaDeAudiencias"}
              title={"salas"}
              img={salas_audiencia}
            />
            <CardComponent url={""} title={"apertura"} img={apertura} />

      </Grid>

      <Grid
        container
        spacing={5}
        columns={2}
        sx={{
          marginBottom: "5em",
          justifyContent: "center",
        }}
      > 

      <Box
        className="map-about-information"
        sx= {{width:"30em",
           height:"25em"}}

      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3112.4980591537533!2d-72.5891324875869!3d-38.729331586801294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9614d3c15a4ae635%3A0xa60027e7ca9a9662!2sCorte%20de%20Apelaciones%20de%20Temuco!5e0!3m2!1ses-419!2scl!4v1727174139672!5m2!1ses-419!2scl"
          style={{ border: 0, width: "100%",  
          height: "100%"}}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </Box >

      <Box
        className="facebook-news"
        sx={{width:"50em",
            height:"25em",}}
        >
        <Typography
          variant="h3"
          sx={{
            backgroundColor: "#ccc",
            textAlign: "center",
            borderRadius: "1.25em",
            fontSize: "2rem",
            fontWeight: "bold",
            height: "100%",
            width: "100%",
            color: "#000",
          }}
        >
          Noticias
        </Typography>
        </Box>

      </Grid>
     
    </>
  );
};

export default HomeElements;
