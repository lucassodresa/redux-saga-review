import React from "react";
import { Button, Modal } from "semantic-ui-react";
import EntryForm from "./EntryForm";
import { useDispatch } from "react-redux";
import { closeEditModal } from "../actions/modals.action";
import { useEntryDetails } from "../hooks/useEntryDetails";

function ModalEdit({ isOpen, description, value, isExpense, id }) {
  const dispatch = useDispatch();
  const entryUpdated = useEntryDetails({
    description,
    isExpense,
    value,
  });

  return (
    <Modal open={isOpen}>
      <Modal.Header>Edit entry</Modal.Header>
      <Modal.Content>
        <EntryForm
          description={entryUpdated.description}
          value={entryUpdated.value}
          isExpense={entryUpdated.isExpense}
          setDescription={entryUpdated.setDescription}
          setValue={entryUpdated.setValue}
          setIsExpense={entryUpdated.setIsExpense}
        />
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => dispatch(closeEditModal())}>Close</Button>
        <Button onClick={() => entryUpdated.updateEntry(id)} primary>
          Ok
        </Button>
      </Modal.Actions>
    </Modal>
  );
}

export default ModalEdit;
