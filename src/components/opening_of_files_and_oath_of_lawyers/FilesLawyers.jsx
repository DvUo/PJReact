import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

export const FilesLawyers = () => {
  return (
    <Grid
      container
      spacing={4}
      sx={{
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        padding: { xs: 2, md: 4 },
      }}
    >
      <Grid container justifyContent="center">
        <Grid item xs={12} md={10}>
          <Box
            component="section"
            sx={{
              padding: { xs: 3, md: 5 },
              backgroundColor: "#e3f2fd",
              borderRadius: 2,
              boxShadow: 3,
              maxWidth: 900,
              margin: "0 auto",
              textAlign: "justify",
            }}
          >
            <Typography
              variant="h5"
              component="h2"
              sx={{ mb: 3, fontWeight: "bold", textAlign: "center" }}
            >
              Indicaciones para la redacción del documento "Certificado de Alegatos"
            </Typography>

            <Typography
              variant="body1"
              sx={{ lineHeight: 1.8, fontSize: { xs: "1em", md: "1.2em" } }}
            >
              <strong>Requisitos de formato:</strong>
              <ul style={{ marginTop: 8, marginBottom: 16, paddingLeft: 20 }}>
                <li>Fuente: Calibri</li>
                <li>Tamaño de fuente: 11</li>
                <li>Interlineado: 1.5</li>
                <li>Texto justificado</li>
              </ul>

              <strong>Ejemplo:</strong>
              <ul style={{ marginTop: 8, marginBottom: 16, paddingLeft: 20 }}>
                <li><strong>Causa rol:</strong> 123-2023 civil</li>
                <li><strong>Relator:</strong> Alejandro Clunes (sin abreviaturas)</li>
                <li><strong>Caratulado:</strong> Garcia / Jiménez (como figura en la página del PJUD)</li>
                <li><strong>Abogados:</strong> Rodrigo González - Paula Salas (solo quienes comparecieron en la audiencia)</li>
                <li><strong>Materia (Primera instancia):</strong> Honorarios, cobro de (en juicio)</li>
                <li><strong>Sala:</strong> Primera</li>
              </ul>

              <strong>Descargar plantilla:</strong> 
              <a href="plantilla_postulante.doc" target="_blank" class="card-link">
                <i class="fa fa-file"></i>
                Descargar plantilla de Certificado de Alegatos (Word)
              </a>
              
              <br />
              <br />
              Una vez escuchados todos los alegatos indicados por la Corporación de Asistencia Judicial, envíe el o los documentos en un solo correo electrónico (en formato Word) a: <strong>ca_temuco@pjud.cl</strong>.
              <br />
              En el asunto del correo indique: <em>“Certificación de alegatos”</em>.
            </Typography>
          </Box>
        </Grid>
      </Grid>


      {/* Bloque 2: Presentación de Documentos */}
     
      <Grid item xs={12} md={10}>
        <Box
          component="article"
          sx={{
            padding: { xs: 3, md: 5 },
            backgroundColor: "#fce4ec",
            borderRadius: 2,
            boxShadow: 3,
            maxWidth: 900,
            margin: "0 auto",
            textAlign: "justify",
          }}
        >
          <Typography
            variant="h5"
            component="h2"
            sx={{ mb: 3, fontWeight: "bold", textAlign: "center" }}
          >
            Instrucciones para la presentación de documentos
          </Typography>

          <Typography
            variant="body1"
            sx={{ lineHeight: 1.8, fontSize: { xs: "1em", md: "1.2em" } }}
          >
            <strong>Paso 1:</strong> Enviar los documentos escaneados (copia del original) al correo <strong>ca_temuco@pjud.cl</strong>.
            <br />
            <br />
            <strong>Documentos entregados por la institución universitaria:</strong>
            <ul style={{ marginTop: 8, marginBottom: 16, paddingLeft: 20 }}>
              <li>Certificado de Licenciado</li>
              <li>Certificado de Conducta u Honorabilidad</li>
              <li>Certificado de Notas</li>
            </ul>

            <strong>Documentos en formato de la Excelentísima Corte Suprema:</strong>
            <ul style={{ marginTop: 8, marginBottom: 16, paddingLeft: 20 }}>
              <li>Escrito de Apertura de Expediente (Formato PJUD - <em>Descargar plantilla</em>)</li>
              <li>Formulario de Discapacidad (<em>Descargar plantilla</em>)</li>
              <li>Formulario del Colegio de Abogados (<em>Descargar plantilla</em>)</li>
            </ul>

            <strong>Otros documentos requeridos:</strong>
            <ul style={{ marginTop: 8, marginBottom: 16, paddingLeft: 20 }}>
              <li>
                Certificado de Nacimiento (<a href="https://www.registrocivil.cl/principal/servicios-en-linea" target="_blank" rel="noopener noreferrer">registrocivil.cl</a>)
              </li>
              <li>Declaración Jurada de Testigos (Formato varía según notaria):</li>
              <ul style={{ paddingLeft: 20 }}>
                <li>No debe tener una antigüedad superior a 15 días</li>
                <li>Debe incluir copia simple (no notarial) de las cédulas de identidad del postulante y testigos, por ambos lados</li>
              </ul>
              <li>Certificado de Práctica Profesional Aprobada (Solicitarlo en la Corporación de Asistencia Judicial)</li>
              <li>Copias simples de las Cédulas de Identidad del postulante y testigos</li>
              <li>Foto Tamaño Carnet</li>
            </ul>

            En caso de dudas, consulte las <strong>Instrucciones de la Corte Suprema relativas al Juramento de Abogados</strong> disponibles en el siguiente enlace:
            <a href="https://www.pjud.cl/docs/download/2617" target="_blank" rel="noopener noreferrer">Instrucciones Corte Suprema</a>.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              lineHeight: 1.8,
              fontSize: { xs: "1em", md: "1.2em" },
              mt: 3,
            }}
          >
            <strong>Paso 2:</strong> Espere el correo de confirmación, que indicará si los documentos cumplen con los requisitos.
            <br />
            <br />
            <strong>Paso 3:</strong> Preséntese en las dependencias de la Corte de Apelaciones con los documentos originales en un sobre cerrado, incluyendo los siguientes datos:
            <ul style={{ marginTop: 8, marginBottom: 16, paddingLeft: 20 }}>
              <li>Nombre</li>
              <li>Número de teléfono</li>
              <li>Correo electrónico</li>
            </ul>
          </Typography>
        </Box>
      </Grid>
    </Grid>

  );
};

export default FilesLawyers;
