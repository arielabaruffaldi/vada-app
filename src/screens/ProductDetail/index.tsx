import { FC } from 'react'
import Text from '@atoms/Text'
import PaddingWrapper from '@containers/PaddingWrapper'
import { NavigationScreenProp } from 'react-navigation'

const ProductDetail: FC<{ navigation: NavigationScreenProp<any, any> }> = ({ navigation }) => {
  return (
    <PaddingWrapper hasPadding>
      <Text>
        ProductDetail
      </Text>
    </PaddingWrapper>
  )
}

export default ProductDetail
