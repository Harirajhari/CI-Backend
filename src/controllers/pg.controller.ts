import { Request, Response } from "express";
import prisma from "../lib/prisma";
import ApiResponse from "../utils/Response";
import HTTP_STATUS from "../constants/enum/responseCodes.enum";

/**
 * GET /pg
 * Lists all non-system tables in the connected PostgreSQL database.
 * (Excludes information_schema and pg_catalog)
 */
export const listTables = async (_req: Request, res: Response) => {
  // Return schema + table so it’s unambiguous if you add more schemas later
  const rows: Array<{ table_schema: string; table_name: string }> =
    await prisma.$queryRaw`
      SELECT table_schema, table_name
      FROM information_schema.tables
      WHERE table_type = 'BASE TABLE'
        AND table_schema NOT IN ('pg_catalog', 'information_schema')
      ORDER BY table_schema, table_name;
    `;

  const tables = rows.map(r => ({ schema: r.table_schema, table: r.table_name }));

  return ApiResponse.success(
    res,
    HTTP_STATUS.OK,
    "Tables fetched",
    { count: tables.length, tables }
  );
};
