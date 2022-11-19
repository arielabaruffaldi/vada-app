import Text from "@atoms/Text"
import { Spacing } from "@theme/index";
import { useCallback, useEffect, useRef, useState } from "react";
import { Dimensions, FlatList, Image, SafeAreaView, ScrollView, TextStyle, View } from "react-native"
import styles from "./styles";


const { width: windowWidth, height: windowHeight } = Dimensions.get("window");


const Slide = ({ data }: any) => {
  const { width, height } = Dimensions.get('window');
  return (
    <View
      style={{
        // width: (width / 2) - Spacing.SMALL,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: Spacing.LATERAL
      }}
    >
      <Image
        source={{ uri: data.image }}
        style={{ width: 170, height: 170, borderRadius: 100, marginBottom: Spacing.MEDIUM }}
      />
      <Text size="medium">{data.title}</Text>
      <Text size="xsmall" color="gray">{data.subtitle}</Text>
      <Text size="small" color="violet" weight="bold" style={{ marginTop: Spacing.TINY }}>$ {data.price}</Text>
    </View>
  );
}

interface CarrouselProps {
  data: any[]
  style?: TextStyle | TextStyle[]
}

const Carrousel = ({ style, data }: CarrouselProps) => {
  const [index, setIndex] = useState(0);
  const indexRef = useRef(index);
  indexRef.current = index;

  const onScroll = useCallback((event: any) => {
    const slideSize = event.nativeEvent.layoutMeasurement.width;
    const index = event.nativeEvent.contentOffset.x / slideSize;
    const roundIndex = Math.round(index);
    const distance = Math.abs(roundIndex - index);
    const isNoMansLand = 0.4 < distance;
    if (roundIndex !== indexRef.current && !isNoMansLand) {
      setIndex(roundIndex);
    }
  }, []);

  return (
    <FlatList
      data={data}
      style={[style, { flex: 1 }]}
      renderItem={({ item }) => {
        return <Slide data={item} />;
      }}
      pagingEnabled
      horizontal
      showsHorizontalScrollIndicator={false}
      onScroll={onScroll}
    />
  );
}

export default Carrousel