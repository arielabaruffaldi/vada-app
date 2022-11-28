import Text from '@atoms/Text'
import { Spacing } from '@theme/index'
import { FC, useCallback, useRef, useState } from 'react'
import {
  FlatList,
  Image,
  TextStyle,
  View
} from 'react-native'

const Slide: FC<{ data: any }> = ({ data }) => {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: Spacing.LATERAL
      }}
    >
      <Image
        source={{ uri: data.image }}
        style={{
          width: 170,
          height: 170,
          borderRadius: 100,
          marginBottom: Spacing.MEDIUM
        }}
      />
      <Text size="medium">{data.title}</Text>
      <Text size="xsmall" color="gray">
        {data.subtitle}
      </Text>
      <Text
        size="small"
        color="violet"
        weight="bold"
        style={{ marginTop: Spacing.TINY }}
      >
        $ {data.price}
      </Text>
    </View>
  )
}

interface CarrouselProps {
  data: any[]
  style?: TextStyle | TextStyle[]
}

const Carrousel: FC<CarrouselProps> = ({ style, data }) => {
  const [index, setIndex] = useState(0)
  const indexRef = useRef(index)
  indexRef.current = index

  const onScroll = useCallback((event: any) => {
    const slideSize = event.nativeEvent.layoutMeasurement.width
    const index = event.nativeEvent.contentOffset.x / slideSize
    const roundIndex = Math.round(index)
    const distance = Math.abs(roundIndex - index)
    const isNoMansLand = distance > 0.4
    if (roundIndex !== indexRef.current && !isNoMansLand) {
      setIndex(roundIndex)
    }
  }, [])

  return (
    <FlatList
      data={data}
      style={[style, { flex: 1 }]}
      renderItem={({ item }) => {
        return <Slide data={item} />
      }}
      pagingEnabled
      horizontal
      showsHorizontalScrollIndicator={false}
      onScroll={onScroll}
    />
  )
}

export default Carrousel
