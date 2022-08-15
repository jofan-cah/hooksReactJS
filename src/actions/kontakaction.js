import axios from "axios";

export const GET_LIST_KONTAK = "GET_LIST_KONTAK";
export const ADD_KONTAK = "ADD_KONTAK";
export const DELETE_KONTAK = "DELETE_KONTAK";
export const DETAIL_KONTAK = "DETAIL_KONTAK";
export const UPDATE_KONTAK = "UPDATE_KONTAK";

export const getListKontak = () => {
  return (dispatch) => {
    // console.log("L2.Loading");
    // Loading
    dispatch({
      type: GET_LIST_KONTAK,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });
    // get API

    axios({
      method: "GET",
      url: "http://localhost:3000/kontak",
      timeout: 12000,
    })
      .then((response) => {
        // console.log("3.Sukses", response.data);

        // Berhasil Get Api
        dispatch({
          type: GET_LIST_KONTAK,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        // Gagal  Api
        console.log("4.Error", error);

        dispatch({
          type: GET_LIST_KONTAK,
          payload: {
            loading: false,
            data: false,
            errorMessage: error,
          },
        });
      });
  };
};

export const addKontak = (data) => {
  return (dispatch) => {
    // console.log("L2.Loading");
    // Loading
    dispatch({
      type: ADD_KONTAK,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });
    // get API

    axios({
      method: "POST",
      url: "http://localhost:3000/kontak",
      timeout: 12000,
      data: data,
    })
      .then((response) => {
        // console.log("3.Sukses", response.data);

        // Berhasil Get Api
        dispatch({
          type: ADD_KONTAK,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        // Gagal  Api
        console.log("4.Error", error);

        dispatch({
          type: ADD_KONTAK,
          payload: {
            loading: false,
            data: false,
            errorMessage: error,
          },
        });
      });
  };
};

export const deleteKontak = (id) => {
  return (dispatch) => {
    // console.log("L2.Loading");
    // Loading
    dispatch({
      type: DELETE_KONTAK,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });
    // get API

    axios({
      method: "DELETE",
      url: "http://localhost:3000/kontak/" + id,
      timeout: 12000,
    })
      .then((response) => {
        // console.log("3.Sukses", response.data);

        // Berhasil Get Api
        dispatch({
          type: DELETE_KONTAK,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        // Gagal  Api
        console.log("4.Error", error);

        dispatch({
          type: DELETE_KONTAK,
          payload: {
            loading: false,
            data: false,
            errorMessage: error,
          },
        });
      });
  };
};

export const detailKontak = (data) => {
  return (dispatch) => {
    dispatch({
      type: DETAIL_KONTAK,
      payload: {
        data: data,
      },
    });
  };
};

export const updateKontak = (data) => {
  return (dispatch) => {
    // console.log("L2.Loading");
    // Loading
    dispatch({
      type: UPDATE_KONTAK,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });
    // get API

    axios({
      method: "PUT",
      url: "http://localhost:3000/kontak/" + data.id,
      timeout: 12000,
      data: data,
    })
      .then((response) => {
        // console.log("3.Sukses", response.data);

        // Berhasil Get Api
        dispatch({
          type: UPDATE_KONTAK,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        // Gagal  Api
        console.log("4.Error", error);

        dispatch({
          type: UPDATE_KONTAK,
          payload: {
            loading: false,
            data: false,
            errorMessage: error,
          },
        });
      });
  };
};
