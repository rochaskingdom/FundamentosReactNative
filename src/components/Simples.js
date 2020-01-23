import React from 'react'
import { Text } from 'react-native'

// export default function(props) {
//     return <Text>{props.texto}</Text>
// }

export default props => <Text>Arrow 1: {props.texto}</Text>


// 2 componentes entre a View
// export default props =>
//     <View>
//         <Text>Arrow 1: {props.texto}</Text>
//         <Text>Arrow 2: {props.texto}</Text>
//     </View>

// 2 componentes entre um Array
// export default props => [ 
//     <Text key={1}>Arrow : {props.texto}</Text>,
//     <Text key={2}>Arrow 2: {props.texto}</Text>
// ];
    