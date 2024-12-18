import pjud from "../../../img/pjud_blanco.png";
import { Box, Typography, Link, AppBar } from "@mui/material";
import { Icons, Reference } from "./subcomponents";
import Grid from "@mui/material/Grid2";
import "./footer.css";

export const Footer = () => {
  return (
    <AppBar
      component="footer"
      position="sticky"
      className="footer"
      sx={{
        padding: { xs: "1rem 1.5rem", sm: "2rem" },
      }}
    >
      <Grid
        container
        spacing={0}
        columns={4}
        sx={{
          justifyContent: {sm: "space-around", md: "space-between"},
          
          
        }}
      >
        <Box sx={{ width: { xs: "12em", sm: "15em", md: "20em" } }}>
          <Link href="https://www.pjud.cl/" target="_blank" rel="noopener">
            <img
              src={pjud}
              alt="Pjud Logo"
              id="id-img-Logo-Pjud"
              className="logo-pjud"
              sx={{ width: "100%" }}
            />
          </Link>
        </Box>

        <Box>
          <Icons
            title={"Facebook"}
            url={"https://www.facebook.com/PoderJudicialdeChile"}
          />

          <Icons title={"Twitter"} url={"https://twitter.com/pjudicialchile"} />

          <Icons
            title={"Instagram"}
            url={"https://www.instagram.com/pjudicialchile/"}
          />

          <Icons
            title={"YouTube"}
            url={"https://www.youtube.com/user/pjudicialchile"}
          />
        </Box>

        <Box>
          <Typography
            variant="h6"
            className="titles"
            sx={{ fontWeight: "bold" }}
          >
            Enlaces de interés
          </Typography>

          <ul className="list-footer">
            <li>
              <Reference
                text="Chile atiende"
                direction="https://www.chileatiende.gob.cl/"
              />
            </li>
            <li>
              <Reference
                text="Portal de transparencia del estado"
                direction="http://www.portaltransparencia.cl/PortalPdT/"
              />
            </li>
            <li>
              <Reference
                text="Oficina Judicial Virtual"
                direction="https://ojv.pjud.cl/kpitec-ojv-web/views/login.html"
              />
            </li>
            <li>
              <Reference
                text="Trámite Fácil"
                direction="https://ojv.pjud.cl/kpitec-ojv-web/tramite_facil"
              />
            </li>
            <li>
              <Reference
                text="Trabaja con nosotros"
                direction="https://postulaciones.pjud.cl/postulacionessrh/servlet/com.postulaciones.login"
              />
            </li>
          </ul>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography
            variant="h6"
            className="titles"
            sx={{ fontWeight: "bold" }}
          >
            Contacto
          </Typography>
          <ul className="list-footer">
            <li>
              <Typography>Teléfono: (45) 2685200</Typography>
            </li>
            <li>
              <Reference
                text="Email: ca_temuco@pjud.cl"
                direction="mailto:ca_temuco@pjud.cl"
              />
            </li>
          </ul>
        </Box>
      </Grid>
    </AppBar>
  );
};
