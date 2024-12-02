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
      <Grid xs={12}>
        <Box
          component="section"
          sx={{
            padding: { xs: 3, md: 5 },
            backgroundColor: "#e3f2fd",
            borderRadius: 2,
            boxShadow: 3,
            maxWidth: "900px",
            margin: "0 auto",
            textAlign: "justify",
          }}
        >
          <Typography
            variant="h5"
            component="h2"
            sx={{ mb: 3, fontWeight: "bold", textAlign: "center" }}
          >
            Indicaciones para la redacción del documento "Certificado de
            Alegatos"
          </Typography>
          <Typography
            variant="body1"
            sx={{ lineHeight: 1.8, fontSize: { xs: "1em", md: "1.2em" } }}
          >
            Fuente: Calibri
            <br />
            Tamaño fuente: 11
            <br />
            Interlineado: 1.5
            <br />
            Texto justificado
            <br />
            <br />
            <strong>Ejemplo:</strong>
            <br />
            Causa rol: 123-2023 civil
            <br />
            Relator: Alejandro Clunes (sin abreviaturas)
            <br />
            Caratulado: Garcia / Jiménez (Tal como figura en la página del PJUD)
            <br />
            Abogados: Rodrigo González - Paula Salas (Indicar solo los abogados
            que comparecieron en la audiencia)
            <br />
            Materia (Primera instancia): Honorarios, cobro de (en juicio)
            <br />
            Sala: Primera
            <br />
            <br />
            <strong>Descargar plantilla:</strong> Certificado de Alegatos
            (Word).
            <br />
            <br />
            Una vez escuchados todos los alegatos que le han sido indicados por
            la Corporación de Asistencia Judicial, enviar el o los documentos en
            un solo correo electrónico (formato Word) a:{" "}
            <strong>postulantes_cavaldivia@pjud.cl</strong>, indicando en el
            asunto del mismo: “Certificación de alegatos”.
          </Typography>
        </Box>
      </Grid>

      {/* Bloque 2: Presentación de Documentos */}
      <Grid xs={12}>
        <Box
          component="article"
          sx={{
            padding: { xs: 3, md: 5 },
            backgroundColor: "#fce4ec",
            borderRadius: 2,
            boxShadow: 3,
            maxWidth: "900px",
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
            <strong>Paso N°1:</strong> Enviar los documentos escaneados (copia
            del original) al correo <strong>titulos_cavaldivia@pjud.cl</strong>
            <br />
            <br />
            <strong>
              1.- Documentos entregados por institución universitaria
              correspondiente:
            </strong>
            <br />
            - Certificado de Licenciado de la Universidad
            <br />
            - Certificado de Conducta u Honorabilidad
            <br />
            - Certificado de Notas de la Universidad
            <br />
            <br />
            <strong>
              2.- Documentos en formato de Excelentísima Corte Suprema:
            </strong>
            <br />
            - Escrito Apertura de Expediente Formato de página PJUD (Descargar
            plantilla).
            <br />
            - Formulario de Discapacidad (Descargar plantilla).
            <br />
            - Formulario Colegio de Abogados (Descargar plantilla).
            <br />
            <br />
            <strong>3.- Otros documentos requeridos:</strong>
            <br />- Certificado de Nacimiento. (Disponible en{" "}
            <a
              href="https://www.registrocivil.cl/principal/servicios-en-linea"
              target="_blank"
              rel="noopener noreferrer"
            >
              registrocivil.cl
            </a>
            )<br />
            - Declaración Jurada de Testigos (El formato puede variar según la
            notaría).
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;- Esta declaración no puede tener una
            antigüedad superior a 15 días.
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;- Se debe presentar además copia simple (no
            notarial) de las cédulas de identidad del postulante y de los
            testigos, por ambos lados.
            <br />
            - Certificado de Práctica Profesional Aprobada (Solicitarlo en la
            Corporación de Asistencia Judicial respectiva).
            <br />
            - Copias simples de las Cédulas de Identidad del postulante y los
            testigos.
            <br />
            - Foto Tamaño Carnet.
            <br />
            <br />
            En caso de dudas respecto de los documentos: revisar las{" "}
            <strong>INSTRUCCIONES</strong> de la CORTE SUPREMA RELATIVAS A
            JURAMENTO DE ABOGADOS disponible en el siguiente enlace:{" "}
            <a
              href="https://www.pjud.cl/docs/download/2617"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instrucciones Corte Suprema
            </a>
            .
          </Typography>

          <Typography
            variant="body1"
            sx={{
              lineHeight: 1.8,
              fontSize: { xs: "1em", md: "1.2em" },
              mt: 3,
            }}
          >
            <strong>Paso N°2:</strong> Esperar el correo de confirmación, el
            cual señala si los documentos cumplen los requisitos.
            <br />
            <br />
            <strong>Paso N°3:</strong> Dirigirse a las dependencias de la Corte
            de Apelaciones con los documentos originales en un sobre cerrado,
            incluyendo los siguientes datos:
            <br />
            - Nombre
            <br />
            - Número de teléfono
            <br />
            - Correo electrónico
            <br />
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default FilesLawyers;
