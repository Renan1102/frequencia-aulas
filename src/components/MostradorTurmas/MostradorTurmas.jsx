import * as React from "react";
import {
  Table,
  TableContainer,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";

export default function TurmasTable({ turmasData }) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="aulas table">
        <TableBody>
          {turmasData.map((turma, index) => (
            <TableRow
              key={index}
              onClick={() => /*IniciarChamada*/ console.log("iniciar chamada")}
            >
              <TableCell
                sx={{
                  fontWeight: "700",
                  width: "auto",
                  padding: "10px 1px",
                }}
                component="th"
                scope="row"
              >
                {turma.nome} - {turma.horarios}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
