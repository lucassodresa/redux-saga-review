import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addEntryRedux, updateEntryRedux } from "../actions/entries.actions";
import { v4 as uuidv4 } from "uuid";
import { closeEditModal } from "../actions/modals.action";

export const useEntryDetails = (
  entry = {
    description: "",
    value: "",
    isExpense: true,
  }
) => {
  const [description, setDescription] = useState(entry.description);
  const [value, setValue] = useState(entry.value);
  const [isExpense, setIsExpense] = useState(entry.isExpense);
  const dispatch = useDispatch();

  useEffect(() => {
    setDescription(entry.description);
    setValue(entry.value);
    setIsExpense(entry.isExpense);
  }, [entry.description, entry.value, entry.isExpense]);

  const resetValues = () => {
    setDescription("");
    setValue("");
    setIsExpense("");
  };

  const updateEntry = (id) => {
    dispatch(
      updateEntryRedux(id, {
        id,
        value,
        description,
        isExpense,
      })
    );
    dispatch(closeEditModal());
    resetValues();
  };

  const addEntry = () => {
    dispatch(
      addEntryRedux({
        id: uuidv4(),
        value,
        description,
        isExpense,
      })
    );
    setValue("");
    setDescription("");
    setIsExpense(true);
  };

  return {
    description,
    setDescription,
    value,
    setValue,
    isExpense,
    setIsExpense,
    addEntry,
    updateEntry,
  };
};
