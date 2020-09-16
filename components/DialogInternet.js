import React, { useState } from 'react';
import { View } from 'react-native';

//custom components:
import { Dialog, Button, Paragraph, Portal } from 'react-native-paper';

const DialogInternet = (props) => {
  const [visible, setVisible] = useState(false);
  return (
    <View>
      <Portal>
        <Dialog visible={visible} onDismiss={setVisible(false)}>
          <Dialog.Title>Alert</Dialog.Title>
          <Dialog.Content>
            <Paragraph>Unable to connect to the server !</Paragraph>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={() => setVisible(false)}>CLOSE</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
};

export default DialogInternet;
