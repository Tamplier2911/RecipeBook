import React, { useContext } from "react";
import { Keyboard } from "react-native";

// context
import AppStore from "../../contexts/GlobalContext";
import DataContext from "../../contexts/DataContext";

// components
import Button from "../Button/Button";

// sc
import {
  DataConfirmationModalElement,
  DataConfirmationModalTouchable,
  DataConfirmationModalView,
  DataConfirmationModalAvoidingView,
  DataConfirmationModalControlsView,
  DataConfirmationModalControlsTextView,
  DataConfirmationModalControlsText,
  DataConfirmationModalControlsButtonsView,
  DataConfirmationModalControlsButtonsWrap,
} from "./DataConfirmationModal.styles";

const DataConfirmationModal = () => {
  const { theme, platform } = useContext(AppStore);
  const {
    removeCategory,
    removeDish,
    dataModalHidden,
    closeDataModal,
    dataModalContext,
    cleanDataModalContextState,
  } = useContext(DataContext);

  let [id, name] = dataModalContext.split("%");

  return (
    <DataConfirmationModalElement
      visible={!dataModalHidden}
      animationType="slide"
    >
      <DataConfirmationModalTouchable onPress={Keyboard.dismiss}>
        <DataConfirmationModalView theme={theme}>
          <DataConfirmationModalAvoidingView
            // moves entire avoiding view
            behavior={platform === "ios" ? "padding" : "height"}
            // moves only what inside of the view
            // behavior="position"
          >
            <DataConfirmationModalControlsView theme={theme}>
              <DataConfirmationModalControlsTextView>
                <DataConfirmationModalControlsText theme={theme}>
                  Remove {name ? name : dataModalContext} ?
                </DataConfirmationModalControlsText>
              </DataConfirmationModalControlsTextView>
              <DataConfirmationModalControlsButtonsView>
                <DataConfirmationModalControlsButtonsWrap>
                  <Button
                    title={"Back"}
                    onPress={() => {
                      name = "";
                      id = "";
                      cleanDataModalContextState();
                      closeDataModal();
                    }}
                  />
                </DataConfirmationModalControlsButtonsWrap>
                <DataConfirmationModalControlsButtonsWrap>
                  <Button
                    title={"Remove"}
                    onPress={() => {
                      name ? removeDish(id) : removeCategory(dataModalContext);
                      cleanDataModalContextState();
                      closeDataModal();
                      name = "";
                      id = "";
                    }}
                  />
                </DataConfirmationModalControlsButtonsWrap>
              </DataConfirmationModalControlsButtonsView>
            </DataConfirmationModalControlsView>
          </DataConfirmationModalAvoidingView>
        </DataConfirmationModalView>
      </DataConfirmationModalTouchable>
    </DataConfirmationModalElement>
  );
};

export default DataConfirmationModal;
