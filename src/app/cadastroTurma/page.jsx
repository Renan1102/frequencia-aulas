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
} from "@mui/material";
import styles from "../cadastroTurma/style.module.css";

export default function CadastroTurma() {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
    console.log(e.target.value);
  };

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "20px",
      }}
    >
      <div className={styles.cabecalho}>
        <Link
          className={styles.backButton}
          href="/mostrarTurmas"
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
        <h1 className={styles.titlePage}>Cadastrar Turma</h1>
      </div>

      <main>
        <FormControl fullWidth>
          <input
            className={styles.inputs}
            type="text"
            placeholder="Nome da Turma"
          />

          <select className={styles.inputs} onChange={handleChange}>
            <option value="0">Selecione modalidade:</option>
            <option value="Infantil">Infantil</option>
            <option value="Juvenil">Juvenil</option>
            <option value="Adulto">Adulto</option>
          </select>

          <button className={styles.buttonSubmit} type="submit">
            Salvar
          </button>
        </FormControl>
      </main>
    </Container>
  );
}
