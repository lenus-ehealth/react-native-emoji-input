import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import _ from 'lodash'

const EMOJI_DATASOURCE_VERSION = '4.0.4'

class Emoji extends React.PureComponent {
  static defaultProps = {
    native: true,
  }

  render() {
    let imageComponent = null

    const { native, style, labelStyle, data, onPress, onLongPress } = this.props

    if (!data.char) {
      return null
      //   data.char = data.unified.replace(/(^|-)([a-z0-9]+)/gi, (s, b, cp) =>
      //     String.fromCodePoint(parseInt(cp, 16))
      //   )
    }

    const emojiComponent = (
      <View style={StyleSheet.flatten([styles.emojiWrapper, style])}>
        {native ? (
          <Text
            style={StyleSheet.flatten([
              styles.labelStyle,
              labelStyle,
              {
                fontSize: this.props.size,
              },
            ])}
          >
            {data.char}
          </Text>
        ) : (
          imageComponent
        )}
      </View>
    )

    return onPress || onLongPress ? (
      <TouchableOpacity
        style={styles.emojiWrapper}
        onPress={(evt) => {
          onPress && onPress(data, evt)
        }}
        onLongPress={(evt) => {
          onLongPress && onLongPress(data, evt)
        }}
      >
        {emojiComponent}
      </TouchableOpacity>
    ) : (
      emojiComponent
    )
  }
}

const styles = StyleSheet.create({
  emojiWrapper: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 1,
  },
  labelStyle: {
    color: 'black',
    fontWeight: 'bold',
  },
})

export default Emoji
