import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import "./CardInformation.css";

const CardInformation = () => {
  return (
    <Grid
      container
      spacing={4}
      columns={{ xs: 1, md: 2 }}
      sx={{
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        padding: { xs: 2, md: 4 },
      }}
    >
      <Grid xs={12} md={6} sx={{ display: "flex", justifyContent: "center" }}>
        <Box
          sx={{
            width: { xs: "100%", sm: "80%", md: "70%" },
            padding: { xs: 2, md: 4 },
            backgroundColor: "#f5f5f5",
            borderRadius: 2,
            boxShadow: 3,
            textAlign: "justify",
          }}
          className="container-information"
        >
          <Typography
            variant="body1"
            sx={{ fontSize: { xs: "1em", md: "1.2em" } }}
          >
            El Poder Judicial en Temuco, Chile, es esencial para la
            administración de justicia en la Región de la Araucanía. La
            institución incluye la Corte de Apelaciones de Temuco, el órgano
            judicial de mayor jerarquía regional, junto con tribunales de
            primera instancia, como los Juzgados de Letras, de Garantía y de
            Familia.
          </Typography>
          <Typography
            variant="body1"
            sx={{ mt: 2, fontSize: { xs: "1em", md: "1.2em" } }}
          >
            La Corte de Apelaciones, compuesta por ministros nombrados por el
            Presidente y ratificados por el Senado, revisa las decisiones de
            tribunales inferiores y asegura el cumplimiento de las leyes. Otros
            actores clave son los fiscales del Ministerio Público, que
            investigan delitos, y los defensores públicos, que garantizan el
            acceso a la justicia para quienes no pueden pagar un abogado. En
            conjunto, estos organismos y funcionarios mantienen el acceso a la
            justicia y la transparencia en la región.
          </Typography>
        </Box>
      </Grid>

      <Grid
        xs={12}
        md={6}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", sm: "80%", md: "70%" },
            padding: { xs: 1, md: 2 },
            backgroundColor: "#d0d0d0",
            borderRadius: 2,
            boxShadow: 3,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              textAlign: "center",
              color: "#444",
              fontSize: { xs: "1.2em", md: "1.5em" },
            }}
          >
            Información Adicional
          </Typography>
        </Box>

        <Box
          sx={{
            width: { xs: "100%", sm: "80%", md: "70%" },
            padding: { xs: 1, md: 2 },
            backgroundColor: "#e0e0e0",
            borderRadius: 2,
            boxShadow: 3,
          }}
          className="container-information"
        >
          <table className="table-information">
            <thead>
              <tr>
                <th>Horario de Turno Presencial</th>
                <th>Dirección</th>
                <th>Datos</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Lunes a Viernes: 08:00 a 14:00</td>
                <td>Manuel Bulnes 0355, Temuco</td>
                <td>RUT: 60.311.000-5</td>
              </tr>
              <tr>
                <td>Sábado: 09:00 a 12:00</td>
                <td></td>
                <td>Cuenta corriente: 62.900.103.641</td>
              </tr>
            </tbody>
          </table>
        </Box>

        <Box
          sx={{
            width: { xs: "100%", sm: "80%", md: "70%" },
            padding: { xs: 1, md: 2 },
            backgroundColor: "#d0d0d0",
            borderRadius: 2,
            boxShadow: 3,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              textAlign: "center",
              color: "#444",
              fontSize: { xs: "1.2em", md: "1.5em" },
            }}
          >
            Contacto
          </Typography>
        </Box>

        <Box
          sx={{
            width: { xs: "100%", sm: "80%", md: "70%" },
            padding: { xs: 1, md: 2 },
            backgroundColor: "#e0e0e0",
            borderRadius: 2,
            boxShadow: 3,
          }}
        >
          <table className="table-information">
            <thead>
              <tr>
                <th></th>
                <th>Correos electrónicos</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Cuenta Genérica</td>
                <td className="mail-hightlight">ca_temuco@pjud.cl</td>
              </tr>
              <tr>
                <td>Presidencia</td>
                <td className="mail-hightlight">
                  presidencia_catemuco@pjud.cl
                </td>
              </tr>
              <tr>
                <td>Pleno</td>
                <td className="mail-hightlight">pleno_ca_temuco@pjud.cl</td>
              </tr>
            </tbody>
          </table>
        </Box>
      </Grid>
    </Grid>
  );
};

export default CardInformation;
