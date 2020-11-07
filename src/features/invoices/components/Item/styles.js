import { StyleSheet } from 'react-native';
import { colors, fonts } from '@/styles';

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.veryLightGray
    },
    headerTitle: {
        fontSize: 17,
        color: colors.dark1
    },
    headerContainer: {
        // backgroundColor: colors.veryLightGray,
    },
    taxFakeInput: {
        color: colors.primary,
        textAlign: 'right',
        fontFamily: fonts.poppinsMedium,
        fontSize: 16
    },
    bodyContainer: {
        paddingHorizontal: 22,
        paddingVertical: 17
    },
    dateFieldContainer: {
        flex: 1,
        flexDirection: 'row',
        marginHorizontal: -10
    },
    dateField: {
        flex: 1,
        justifyContent: 'space-between',
        paddingHorizontal: 10
    },
    inputFieldStyle: {
        borderRadius: 0
    },
    inputFieldContainer: {
        paddingHorizontal: 0
    },
    inputTextStyle: {
        color: colors.dark3,
        fontFamily: fonts.poppinsMedium,
        textAlign: 'left'
    },
    inputFieldValidation: {
        marginHorizontal: 0
    },
    hintStyle: {
        marginTop: -6,
        paddingBottom: 6,
        color: colors.dark2,
        fontSize: 14,
        fontFamily: fonts.poppins,
        textAlign: 'left'
    },
    noteHintStyle: {
        paddingBottom: 6,
        color: colors.dark2,
        fontSize: 14,
        fontFamily: fonts.poppins,
        textAlign: 'left'
    },
    fakeInputStyle: {
        marginTop: 5
    },

    amountContainer: {
        borderWidth: 0.8,
        borderColor: colors.lightGray,
        marginTop: 24,
        marginBottom: 18,
        padding: 20,
        backgroundColor: colors.white
    },
    subContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    label: {
        color: colors.gray,
        fontFamily: fonts.poppinsMedium,
        marginTop: 6,
        textAlign: 'left'
    },
    price: {
        color: colors.dark2,
        fontSize: 16
    },
    totalPrice: {
        color: colors.primary,
        fontSize: 18,
        fontWeight: '500',
        fontFamily: fonts.poppinsMedium,
        textAlign: 'left'
    },
    divider: {
        backgroundColor: colors.lightGray,
        borderColor: colors.lightGray,
        borderWidth: 0.7,
        marginTop: 10,
        marginBottom: 8
    },
    submitButton: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    handleBtn: {
        marginHorizontal: 9
    },
    buttonContainer: {
        flex: 1
    },
    itemContainer: {
        marginVertical: 4,
        borderWidth: 1,
        borderColor: colors.lightGray
    },
    itemLeftTitle: {
        fontSize: 15,
        fontFamily: fonts.poppins,
        color: colors.dark,
        textAlign: 'left'
    },
    itemLeftSubTitleLabel: {
        marginLeft: -6
    },
    itemLeftSubTitle: {
        color: colors.darkGray,
        fontSize: 13
    },
    itemRightTitle: {
        fontFamily: fonts.poppins,
        fontSize: 18,
        color: colors.secondary,
        textAlign: 'left'
    },
    selectPicker: {
        marginTop: 25
    },
    units: {
        paddingLeft: 48
    }
});
