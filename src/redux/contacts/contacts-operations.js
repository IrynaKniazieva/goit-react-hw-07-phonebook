import * as api from "../../services/contacts"

import * as actions from "./contacts-actions"


export const fetchAllContacts = ()=> {
    const func = async(dispatch) => {
        try {
            dispatch(actions.fetchAllContactsLoading()); // запрос пошел
            const data = await api.getAllContacts();
            dispatch(actions.fetchAllContactsSuccess(data)); // ответ пришел успешнор
        }
        catch({response}) {
            dispatch(actions.fetchAllContactsError(response.data.message)); // ответ пришел с ошибкой
        }
    }

    return func;
}

const isDublicate = (contacts, {name, number}) => {
    const normalizedName = name.toLowerCase();
    const normalizedNumber = number.toLowerCase();
    const result = contacts.find(({ name, number }) => {
        return (name.toLowerCase() === normalizedName && number.toLowerCase() === normalizedNumber)
    })

    return Boolean(result)
}

export const fetchAddContact = (data) => {
    const func = async(dispatch, getState) => {
        try {
            const {contacts} = getState();
            if(isDublicate(contacts.items, data)) {
                alert(`${data.name} is already ixist`);
                return false;
            }
            dispatch(actions.fetchAddContactLoading());
            const result = await api.addContact(data);
            dispatch(actions.fetchAddContactSuccess(result));
        }
        catch({response}) {
            dispatch(actions.fetchAddContactError(response.data.message)); 
        }
    }

    return func;
}

export const fetchDeleteContact = (id) => {
    const func = async(dispatch) => {
        try {
            dispatch(actions.fetchDeleteContactLoading());
            await api.deleteContact(id);
            dispatch(actions.fetchDeleteContactSuccess(id));
        }
        catch({response}) {
            dispatch(actions.fetchDeleteContactError(response.data.message)); 
        }
    }

    return func;
}