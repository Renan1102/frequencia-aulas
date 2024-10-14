// Import necessary components from Material-UI
"use client";

import * as React from "react";
import { useState } from "react";

import {
  Container,
  Typography,
  Link,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  TextField,
  Box,
} from "@mui/material";

import styles from "../mostrarTurmas/style.module.css";

import TurmasTable from "../../components/MostradorTurmas/MostradorTurmas";

export default function mostrarTurmas() {
  const turmasData = [
    { nome: "Infatil", horarios: "Seg e Qua - 8:00" },
    { nome: "Juvenil", horarios: "Ter e Qui - 8:00" },
    { nome: "Adulto", horarios: "Seg e Sex - 14:00" },
  ];

  return (
    <Container>
      <div className={styles.cabecalho}>
        <Link
          className={styles.backButton}
          href="/calendario"
          sx={{ color: "primary", textDecoration: "none" }}
        >
          <Typography
            sx={{
              fontSize: "16px",
              color: "#b0733e",
              fontSize: "1rem",
              fontWeight: "700",
            }}
            variant="body2"
          >
            Voltar
          </Typography>
        </Link>
        <h1 className={styles.titlePage}>Turmas</h1>

        <Link
          className={styles.backButton}
          href="/cadastroTurma"
          sx={{ color: "primary", textDecoration: "none" }}
        >
          <Typography
            sx={{
              fontSize: "16px",
              color: "#b0733e",
              fontSize: "1rem",
              fontWeight: "700",
            }}
            variant="body2"
          >
            Cadastrar
          </Typography>
        </Link>
      </div>

      <main>
        <Box>
          <TurmasTable turmasData={turmasData} />
        </Box>
      </main>
    </Container>
  );
}
