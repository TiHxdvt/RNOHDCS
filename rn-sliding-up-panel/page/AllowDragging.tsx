import React, { createRef, useState } from 'react';
import { Text, View, Button } from 'react-native';
import SlidingUpPanel from 'rn-sliding-up-panel';
import styles from '../components/styles';
import PanelView, { height } from '../components/Variable';

export function AllowDragging() {
  const panelRef = createRef<SlidingUpPanel>();
  const draggableRange = { top: height, bottom: 0 };
  const [draggingFlag, setDraggingFlag] = useState(false)

  const textCont = `
  draggableRange=${JSON.stringify(draggableRange)}
  snappingPoints=[300]
  allowDragging=${draggingFlag}`

  return (
    <View style={styles.container}>
      <View style={styles.viewbox}>
        <Text>{textCont}</Text>
      </View>
      <View style={styles.viewbox}>
        <Button title='Show panel btn allowDragging=false' onPress={() => {
          setDraggingFlag(false)
          panelRef.current!.show();
        }} />
      </View>
      <View style={styles.viewbox}>
        <Button title='Show panel btn allowDragging=true' onPress={() => {
          setDraggingFlag(true)
          panelRef.current!.show();
        }} />
      </View>

      <SlidingUpPanel
        ref={panelRef}
        draggableRange={draggableRange}
        snappingPoints={[300]}
        allowDragging={draggingFlag}
      >
        <View style={styles.panel}>
          <PanelView onPress={() => panelRef.current!.hide()} >
            <View style={styles.viewbox}>
              <Text>{textCont}</Text>
            </View>
          </PanelView>
        </View>
      </SlidingUpPanel>
    </View>
  )
}