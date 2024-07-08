import './TableMain.css'

import { useState } from "react";

import {Table} from './Table';
import {Modal} from './Modal';


function TableMain() {
  const [modalOpen, setModalOpen] = useState(false);
  const [rows, setRows] = useState([
    {
      id: "1",
      restaurant: "Resto A",
      host: "Host A",
      email: "restoa@gmail.com",
      address: "Colombo",
      status: "pending",
    },
    {
      id: "2",
      restaurant: "Resto A",
      host: "Host A",
      email: "restoa@gmail.com",
      address: "Colombo",
      status: "pending",
    },
    {
      id: "3",
      restaurant: "Resto A",
      host: "Host A",
      email: "restoa@gmail.com",
      address: "Colombo",
      status: "pending",
    },
    {
      id: "4",
      restaurant: "Resto A",
      host: "Host A",
      email: "restoa@gmail.com",
      address: "Colombo",
      status: "pending",
    },
    {
      id: "5",
      restaurant: "Resto A",
      host: "Host A",
      email: "restoa@gmail.com",
      address: "Colombo",
      status: "pending",
    },
    {
      id: "6",
      restaurant: "Resto A",
      host: "Host A",
      email: "restoa@gmail.com",
      address: "Colombo",
      status: "pending",
    },
    {
      id: "7",
      restaurant: "Resto A",
      host: "Host A",
      email: "restoa@gmail.com",
      address: "Colombo",
      status: "pending",
    },
    {
      id: "8",
      restaurant: "Resto A",
      host: "Host A",
      email: "restoa@gmail.com",
      address: "Colombo",
      status: "pending",
    },
    {
      id: "9",
      restaurant: "Resto A",
      host: "Host A",
      email: "restoa@gmail.com",
      address: "Colombo",
      status: "pending",
    },



  ]);
  const [rowToEdit, setRowToEdit] = useState(null);

  const handleDeleteRow = (targetIndex) => {
    setRows(rows.filter((_, idx) => idx !== targetIndex));
  };

  const handleEditRow = (idx) => {
    setRowToEdit(idx);

    setModalOpen(true);
  };

  const handleSubmit = (newRow) => {
    rowToEdit === null
      ? setRows([...rows, newRow])
      : setRows(
          rows.map((currRow, idx) => {
            if (idx !== rowToEdit) return currRow;

            return newRow;
          })
        );
  };

  return (
    <div className="App">
      <Table rows={rows} deleteRow={handleDeleteRow} editRow={handleEditRow} />
      <button onClick={() => setModalOpen(true)} className="btn">
        Add
      </button>
      {modalOpen && (
        <Modal
          closeModal={() => {
            setModalOpen(false);
            setRowToEdit(null);
          }}
          onSubmit={handleSubmit}
          defaultValue={rowToEdit !== null && rows[rowToEdit]}
        />
      )}
    </div>
  );
}

export default TableMain;
