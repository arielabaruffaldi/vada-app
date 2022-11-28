import { PixelRatio, StyleSheet } from 'react-native'

export default StyleSheet.create({
  imageStyle: {
    height: PixelRatio.getPixelSizeForLayoutSize(135),
    width: '100%'
  },
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20
  },
  paragraph: {
    fontSize: 17
  }
})
