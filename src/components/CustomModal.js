import { Button, Modal, Text, View } from 'react-native';

import React from 'react'
import styles from '../../styles';

const CustomModal = ({deleteItem, setModalVisible, selectedItem, modalVisible}) => {

    return (
        <Modal
            animationType='slide'
            visible={modalVisible}
            transparent
        >
            <View style={styles.modalContainer}>
                <View style={[styles.modalContent, styles.shadow]}>
                    <Text>Seguro que deseas borrar este producto?</Text>
                    <View style={styles.buttonContainer}>
                        <Button
                            title="SI"
                            color={"blue"}
                            onPress={() => deleteItem(selectedItem.id)}
                        />
                        <Button
                            title="NO"
                            color={"blue"}
                            onPress={() => setModalVisible(false)}
                        />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default CustomModal