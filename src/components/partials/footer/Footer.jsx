import pjud from "../../../img/pjud_blanco.png";
import {
  Box,
  Typography,
  Link,
  AppBar,

} from "@mui/material";
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
        marginTop: "auto",
        padding: "20px 10px",
      }}
    >
      <Grid
        container
        spacing={5}
        columns={4}
        sx={{
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <Box>
          <Link href="https://www.pjud.cl/" target="_blank" rel="noopener">
            <img
              src={pjud}
              alt="Pjud Logo"
              className="logo-pjud"
            />
          </Link>
        </Box>

        <Box>
          <Icons
            title={"Facebook"}
            url={"https://www.facebook.com/pjudoficial"}
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

        <Box
          sx={{ display: "flex", flexDirection: "column", padding: "0 20px" }}
        >
          <Typography
            variant="h6"
            className="titles"
            sx={{ fontWeight: "bold" }}
          >
            Contacto
          </Typography>
          <ul className="list-footer">
            <li>
              <Typography>Teléfono: 123456789</Typography>
            </li>
            <li>
              <Reference
                text="Email: example@gmail.com"
                direction="mailto:example@gmail.com"
              />
            </li>
          </ul>
        </Box>
      </Grid>
    </AppBar>
  );
};
