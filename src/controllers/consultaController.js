import { sequelize } from "../config/database.js";
import { QueryTypes } from "sequelize";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export async function getQuery(req, res) {
  try {
    const results = await sequelize.query(
      `
      SELECT
          bp.boarding_pass_id AS boarding_pass_id,
          bp.seat_number AS seat_number,
          bp.issue_time AS issue_time,
          p.first_name AS passenger_first_name,
          p.last_name AS passenger_last_name,
          f.flight_number AS flight_number,
          f.departure_airport AS departure_airport,
          f.arrival_airport AS arrival_airport
      FROM
          boarding_pass bp
      JOIN
          passenger p ON bp.passenger_id = p.passenger_id
      JOIN
          flight f ON bp.flight_id = f.flight_id
      ORDER BY
          bp.boarding_pass_id;
      `,
      { type: QueryTypes.SELECT }
    );

    const acceptHeader = req.headers["accept"];
    if (acceptHeader && acceptHeader.includes("application/octet-stream")) {
      const filePath = path.join(__dirname, "resultado.json");
      fs.writeFileSync(filePath, JSON.stringify(results, null, 2));

      return res.download(filePath, "resultado.json", (err) => {
        if (err) {
          console.error("Erro ao enviar arquivo:", err);
          res.status(500).send("Erro ao gerar o arquivo.");
        }
      });
    }

    res.json(results);
  } catch (err) {
    res.status(500).send("Erro ao executar consulta.");
  }
}
