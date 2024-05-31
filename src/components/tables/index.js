import React from "react";
import { Button } from "@mui/material";
import { TableComponent } from "./table.tsx";
import { DATA } from "./DummyData";
import arrow from "../assets/Arrow 7.png";
import { MdArrowBack } from "react-icons/md";

export const Table = () => {
  const columnsDataColumns = [
    {
      id: "PhoneNumber",
      accessorKey: "PhoneNumber",
      header: "Phone Number",
      cell: (cell) => {
        return (
          <div className="grid grid-flow-row">
            <p>{cell.row.original.PhoneNumber}</p>
            <p style={{ color: "#A7A7A7", fontSize: 16 }}>
              {cell.row.original.Name}
            </p>
          </div>
        );
      },
    },
    {
      id: "arrow",
      accessorKey: "arrow",
      header: "",
      cell: () => {
        return (
          <div>
            <img src={arrow} alt="arrow" />
          </div>
        );
      },
    },
    {
      id: "ReferredTo",
      accessorKey: "ReferredTo",
      header: "Referred to",
      cell: (cell) => {
        return (
          <div className="grid grid-flow-row">
            <p>{cell.row.original.ReferredTo}</p>
            <p style={{ color: "#A7A7A7", fontSize: 16 }}>
              {cell.row.original.Name}
            </p>
          </div>
        );
      },
    },
    {
      id: "DateReferred",
      accessorKey: "DateReferred",
      header: "Date & Time",
      cell: (cell) => {
        return (
          <div className="grid grid-flow-row">
            <p style={{ color: "#0083FF" }}>{cell.row.original.DateReferred}</p>
          </div>
        );
      },
    },
  ];

  const scratchCard = [
    {
      id: "PhoneNumber",
      accessorKey: "id",
      header: "Scratch Card Id",
      cell: (cell) => {
        return (
          <div className="grid grid-flow-row col-span-3">
            <p>{cell.row.original.id}</p>
            <p style={{ color: "#A7A7A7", fontSize: 16 }}>
              {cell.row.original.Name}
            </p>
          </div>
        );
      },
    },

    {
      id: "DateReferred",
      accessorKey: "DateReferred",
      header: () => {
        return (
          <div className="grid grid-flow-row text-center">
            <p>Date & Time </p>
          </div>
        );
      },
      cell: (cell) => {
        return (
          <div className="grid grid-flow-row text-center">
            <p style={{ color: "#0083FF" }}>{cell.row.original.DateReferred}</p>
          </div>
        );
      },
    },
  ];

  return (
    <div className="p-10 pt-20 w-full" style={{ backgroundColor: "#fafafa" }}>
      <div>
        <div className="flex gap-5 items-center">
          <MdArrowBack fontSize={20} />
          <p style={{ fontSize: 20, color: "#000000", fontWeight: 500 }}>
            Marketing
          </p>
        </div>
        <div className="py-5 grid grid-flow-col justify-start gap-5">
          <div
            style={{
              borderWidth: 0.5,
              borderColor: "#00C9FF",
              backgroundColor: "#E6F5F9",
              padding: 10,
              paddingLeft: 50,
              paddingRight: 50,
              justifyContent: "center",
              textAlign: "center",
            }}>
            <p style={{ fontSize: 26, color: "#000000", fontWeight: 600 }}>
              245
            </p>
            <p style={{ fontSize: 20, color: "#000000" }}>Referred</p>
          </div>
          <div
            style={{
              borderWidth: 0.5,
              borderColor: "#22FF22",
              backgroundColor: "#EFFCEF",
              padding: 10,
              paddingLeft: 30,
              paddingRight: 30,
              justifyContent: "center",
              textAlign: "center",
              alignItems: "center",
            }}>
            <p style={{ fontSize: 26, color: "#000000", fontWeight: 600 }}>
              245
            </p>
            <p style={{ fontSize: 20, color: "#000000" }}>
              Scratch Card <br />
              Assigned
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-flow-row gap-5">
        <div className="border p-2 w-full">
          <div className="flex justify-between items-center py-2 ">
            <p style={{ fontSize: 24, color: "#000000" }}>
              Referrals <span style={{ color: "#0083FF" }}>(User)</span>
            </p>
            <Button
              variant="contained"
              size="small"
              style={{
                textTransform: "none",
                backgroundColor: "#0083FF",
                width: 100,
                borderRadius: 8,
                fontSize: 16,
              }}>
              Add
            </Button>
          </div>
          <TableComponent columnsData={columnsDataColumns} tableData={DATA} />
        </div>
        <div className="border p-2 w-full">
          <div className="flex justify-between items-center py-2 ">
            <p style={{ fontSize: 24, color: "#000000" }}>
              Referrals <span style={{ color: "#0083FF" }}>(Driver)</span>
            </p>
            <Button
              variant="contained"
              size="small"
              style={{
                textTransform: "none",
                backgroundColor: "#0083FF",
                width: 100,
                borderRadius: 8,
                fontSize: 16,
              }}>
              Add
            </Button>
          </div>
          <TableComponent columnsData={columnsDataColumns} tableData={DATA} />
        </div>
        <div className="border p-2 w-full">
          <div className="flex justify-between items-center py-2 ">
            <p style={{ fontSize: 24, color: "#000000" }}>Scratch Card</p>
            <Button
              variant="contained"
              size="small"
              style={{
                textTransform: "none",
                backgroundColor: "#0083FF",
                width: 100,
                borderRadius: 8,
                fontSize: 16,
              }}>
              Add
            </Button>
          </div>
          <TableComponent columnsData={scratchCard} tableData={DATA} />
        </div>
      </div>
    </div>
  );
};
