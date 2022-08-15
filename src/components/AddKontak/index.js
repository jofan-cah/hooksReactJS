import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addKontak, getListKontak, updateKontak } from "../../actions/kontakaction";

function AddKontak() {
  const [nama, setNama] = useState("");
  const [nohp, setNohp] = useState("");
  const [id, setId] = useState("");
  const { addKontakResult, detailKontakResult, updateKontakResult } = useSelector((state) => state.KontakReducer);

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (id) {
      // update kntak
      dispatch(updateKontak({ id: id, nama: nama, nohp: nohp }));
    } else {
      //
      dispatch(addKontak({ nama: nama, nohp: nohp }));
      setNama("");
      setNohp("");
    }
  };

  useEffect(() => {
    if (addKontakResult) {
      dispatch(getListKontak());
      setNama("");
      setNohp("");
    }
  }, [addKontakResult, dispatch]);

  useEffect(() => {
    if (detailKontakResult) {
      setNama(detailKontakResult.nama);
      setNohp(detailKontakResult.nohp);
      setId(detailKontakResult.id);
    }
  }, [detailKontakResult, dispatch]);

  useEffect(() => {
    if (updateKontakResult) {
      dispatch(getListKontak());
      setNama("");
      setNohp("");
      setId("");
    }
  }, [updateKontakResult, dispatch]);

  return (
    <div>
      <h4>{id ? "Edit Kontak" : "Add Kontak"}</h4>
      <form onSubmit={(event) => handleSubmit(event)}>
        <input type="text" placeholder="Masukan Nama" value={nama} name="nama" onChange={(event) => setNama(event.target.value)} />
        <input type="tel" placeholder="Masukan No HP" value={nohp} name="nohp" onChange={(event) => setNohp(event.target.value)} />

        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddKontak;
