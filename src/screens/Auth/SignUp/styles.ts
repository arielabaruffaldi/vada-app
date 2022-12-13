
import { Spacing } from '@theme';
import { StyleSheet, Dimensions } from 'react-native';

const windowDimensions = Dimensions.get('window');


export default StyleSheet.create({
    title: {
        marginTop: Spacing.LARGE,
    },
    container: {
        width: windowDimensions.width - Spacing.LATERAL,
    },
    main: {
        // height: windowDimensions.height - 400,
        justifyContent: 'center',
        marginVertical: Spacing.MEDIUM,
        // flex: 1,
    },
    input: {
        marginVertical: Spacing.TINY,
    },
    buttonConfirm: {
        marginVertical: Spacing.MEDIUM,
        width: windowDimensions.width - Spacing.LATERAL,
    },
    footer: {
        marginVertical: Spacing.MEDIUM,
        // flex: 0.15,
    },
    signUpContainer: {
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        marginBottom: Spacing.TINY,
    },
    buttonSignUp:{
        marginLeft: Spacing.TINY
    }
})