import { createReducer } from '@reduxjs/toolkit';
import { filterContacts } from './contacts-actions';


export const filter = createReducer('', {
    [filterContacts]: (_, action) => action.payload,
});

