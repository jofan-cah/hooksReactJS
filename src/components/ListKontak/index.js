import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteKontak, detailKontak, getListKontak } from "../../actions/kontakaction";

function ListKontak() {
  const { getListKontakResult, getListKontakLoading, getListKontakError, deleteKontakResult } = useSelector((state) => state.KontakReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getListKontak());
  }, [dispatch]);

  useEffect(() => {
    if (deleteKontakResult) {
      dispatch(getListKontak());
    }
  }, [deleteKontakResult, dispatch]);

  // console.log("ISI KONTAK", getListKontakResult);
  return (
    <div>
      <h4>List Kontak Jofan</h4>
      {getListKontakResult ? (
        getListKontakResult.map((kontak) => {
          return (
            <p key={kontak.id}>
              {kontak.id}. {kontak.nama} : {kontak.nohp}
              <button onClick={() => dispatch(deleteKontak(kontak.id))}> hapus</button>
              <button style={{ marginLeft: 10 }} onClick={() => dispatch(detailKontak(kontak))}>
                edit
              </button>
            </p>
          );
        })
      ) : getListKontakLoading ? (
        <p> Loading ..... </p>
      ) : (
        <p> {getListKontakError ? getListKontakError : " Data Kosong"}</p>
      )}
    </div>
  );
}

export default ListKontak;
