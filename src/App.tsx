import React from 'react';
import { TextKitWidgetProvider } from '@statflo/textkit-widget-sdk-react';
import Widget from './Widget';

function App() {
  return (
    <TextKitWidgetProvider header='Your Standard Widget' footer='Show More'>
      <Widget />
    </TextKitWidgetProvider>
  );
}

export default App;

