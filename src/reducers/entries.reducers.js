import { entriesTypes } from "../actions/entries.actions";

const initialEntries = [];

export const entriesReducer = (state = initialEntries, action) => {
  switch (action.type) {
    case entriesTypes.POPULATE_ENTRIES:
      return action.payload;

    case entriesTypes.ADD_ENTRY_RESULT:
      const newEntriesAdded = state.concat({ ...action.payload });
      return newEntriesAdded;

    case entriesTypes.REMOVE_ENTRY_RESULT:
      const newEntriesDeleted = state.filter(
        (entry) => entry.id !== action.payload.id
      );
      return newEntriesDeleted;

    case entriesTypes.POPULATE_ENTRY_DETAILS:
    case entriesTypes.UPDATE_ENTRY:
      const newEntriesUpdated = [...state];
      const entryToBeUpdatedIndex = newEntriesUpdated.findIndex(
        (entry) => entry.id === action.payload.id
      );
      newEntriesUpdated[entryToBeUpdatedIndex] = {
        ...newEntriesUpdated[entryToBeUpdatedIndex],
        ...action.payload.entry,
      };
      return newEntriesUpdated;

    default:
      return state;
  }
};
