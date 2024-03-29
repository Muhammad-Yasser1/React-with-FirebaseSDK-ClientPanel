import React from "react";
import Clients from "../clients/Clients";
import Sidebar from "./Sidebar";

export default function Dashboard() {
  return (
    <div className="row mt-4">
      <div className="col-md-10">
        <Clients />
      </div>
      <div className="col-md-2">
        <Sidebar />
      </div>
    </div>
  );
}
