// Операции
// Используй функцию createAsyncThunk для объявления асинхронный генераторов экшенов и выполнения HTTP-запросов. Обработку экшенов и изменение данных в состоянии Redux сделай при помощи createSlice.

// Объяви следующие операции:

// fetchContacts - получение массива контактов (метод GET) запросом. Базовый тип экшена "contacts/fetchAll".
// addContact - добавление контакта (метод POST). Базовый тип экшена "contacts/addContact".
// deleteContact - удаление контакта (метод DELETE). Базовый тип экшена "contacts/deleteContact".

import { createAsyncThunk } from '@reduxjs/toolkit';

import * as api from '../../services/contacts';

// import * as actions from "./contacts-actions";

export const fetchAllContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const data = await api.getAllContacts();
      return data;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.data);
    }
  }
);

export const fetchAddContact = createAsyncThunk(
  'contacts/addContact',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.addContact(data);
      return result;
    } catch ({ response }) {
      return rejectWithValue(response.data);
    }
  },
//   {
//     condition: ({ name, number }, { getState }) => {
//       const { contacts } = getState();
//       const normalizedName = name.toLowerCase();
//       const normalizedNumber = number.toLowerCase();
//       const result = contacts.find(({ name, number }) => {
//         return (
//           name.toLowerCase() === normalizedName &&
//           number.toLowerCase() === normalizedNumber
//         );
//       });
//       if (result) {
//         alert(`${name} is already ixist`);
//         return false;
//       }
//     },
//   }
);

export const fetchDeleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (id, {rejectWithValue}) => {
      try {
        await api.deleteContact(id);
        return id;
      } catch ({ response }) {
        return rejectWithValue(response.data);
      }
    }
  );

// export const fetchAllContacts = ()=> {
//     const func = async(dispatch) => {
//         try {
//             dispatch(actions.fetchAllContactsLoading()); // запрос пошел
//             const data = await api.getAllContacts();
//             dispatch(actions.fetchAllContactsSuccess(data)); // ответ пришел успешнор
//         }
//         catch({response}) {
//             dispatch(actions.fetchAllContactsError(response.data.message)); // ответ пришел с ошибкой
//         }
//     }

//     return func;
// }

// const isDublicate = (contacts, {name, number}) => {
//     const normalizedName = name.toLowerCase();
//     const normalizedNumber = number.toLowerCase();
//     const result = contacts.find(({ name, number }) => {
//         return (name.toLowerCase() === normalizedName && number.toLowerCase() === normalizedNumber)
//     })

//     return Boolean(result)
// }

// export const fetchAddContact = (data) => {
//     const func = async(dispatch, getState) => {
//         try {
//             const {contacts} = getState();
//             if(isDublicate(contacts.items, data)) {
//                 alert(`${data.name} is already ixist`);
//                 return false;
//             }
//             dispatch(actions.fetchAddContactLoading());
//             const result = await api.addContact(data);
//             dispatch(actions.fetchAddContactSuccess(result));
//         }
//         catch({response}) {
//             dispatch(actions.fetchAddContactError(response.data.message));
//         }
//     }

//     return func;
// }

// export const fetchDeleteContact = (id) => {
//     const func = async(dispatch) => {
//         try {
//             dispatch(actions.fetchDeleteContactLoading());
//             await api.deleteContact(id);
//             dispatch(actions.fetchDeleteContactSuccess(id));
//         }
//         catch({response}) {
//             dispatch(actions.fetchDeleteContactError(response.data.message));
//         }
//     }

//     return func;
// }
