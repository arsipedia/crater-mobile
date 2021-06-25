// @flow

import React from 'react';
import Modal from 'react-native-modal';
import styles from './styles';

interface IProps {
    onToggle?: Function;
    visible?: Boolean;
    modalProps?: any;
    style?: any;
    children?: any;
}

export const AnimateModal = (props: IProps) => {
    const { onToggle, visible, children, modalProps, style } = props;
    return (
        <Modal
            isVisible={visible}
            animationIn={'fadeIn'}
            animationOut={'fadeOut'}
            onBackdropPress={() => onToggle()}
            backdropTransitionInTiming={100}
            backdropTransitionOutTiming={0}
            onBackButtonPress={() => onToggle()}
            style={[styles.modalContainer, style]}
            statusBarTranslucent={true}
            {...modalProps}
        >
            {children}
        </Modal>
    );
};
