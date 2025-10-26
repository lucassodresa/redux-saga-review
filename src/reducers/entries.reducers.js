const initialEntries = [
  {
    id: 1,
    description: "Work income",
    value: 1000.0,
    isExpense: false,
  },
  {
    id: 2,
    description: "Water bill",
    value: 20.0,
    isExpense: true,
  },
  {
    id: 3,
    description: "Rent",
    value: 300,
    isExpense: true,
  },
  {
    id: 4,
    description: "Power bill",
    value: 50,
    isExpense: true,
  },
];

export const entriesReducer = (state = initialEntries, action) => {
  switch (action.type) {
    case "ADD_ENTRY":
      const newEntriesAdded = state.concat({ ...action.payload });
      return newEntriesAdded;

    case "REMOVE_ENTRY":
      const newEntriesDeleted = state.filter(
        (entry) => entry.id !== action.payload.id
      );
      return newEntriesDeleted;

    case "UPDATE_ENTRY":
      const newEntriesUpdated = [...state];
      const entryToBeUpdatedIndex = newEntriesUpdated.findIndex(
        (entry) => entry.id === action.payload.id
      );
      newEntriesUpdated[entryToBeUpdatedIndex] = { ...action.payload.entry };
      return newEntriesUpdated;

    default:
      return state;
  }
};
