import { Box, Typography, Link } from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { CardComponent } from "../GridComponents/CardComponent";
import "./home.css";

export const HomeElements = () => {
  return (
    <>
      <Box className="container-first-image">
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

      <Box
        className="button-follow-grid"
        sx={{ textAlign: "center", margin: "2rem 0" }}
      >
        <Link href="#grid-cards">
          <ArrowDownwardIcon className="arrow-downdirection" />
        </Link>
      </Box>

      <Box sx={{ padding: "2rem", margin: "0 auto" }} id={"grid-cards"}>
        <CardComponent
          url={""}
          title={"secretaria"}
          img={"public/secretaria.png"}
        />
        <CardComponent url={""} title={"publico"} img={"public/publico.png"} />
        <CardComponent url={""} title={"salas"} img={"public/salas_audiencia.png"} />
        <CardComponent url={""} title={"apertura"} img={"public/apertura.png"} />
      </Box>

      <Box
        className="map-about-information"
        sx={{ margin: "2rem 0", textAlign: "center" }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3112.4980591537533!2d-72.5891324875869!3d-38.729331586801294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9614d3c15a4ae635%3A0xa60027e7ca9a9662!2sCorte%20de%20Apelaciones%20de%20Temuco!5e0!3m2!1ses-419!2scl!4v1727174139672!5m2!1ses-419!2scl"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </Box>
    </>
  );
};

export default HomeElements;