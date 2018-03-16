// Styles
import '../../stylus/components/_labels.styl'

// Mixins
import Colorable from '../../mixins/colorable'

export default {
  functional: true,

  name: 'v-label',

  props: {
    absolute: Boolean,
    activeTransform: String,
    color: {
      type: String,
      default: 'primary'
    },
    focused: Boolean,
    for: String,
    left: {
      type: [Number, String],
      default: 0
    },
    top: {
      type: [Number, String],
      default: 0
    },
    transformOrigin: {
      type: String,
      default: 'top left'
    },
    value: Boolean
  },

  render (h, { children, props }) {
    const data = {
      staticClass: 'v-label',
      'class': {
        'v-label--active': props.value
      },
      attrs: {
        for: props.for
      },
      style: {
        left: `${parseInt(props.left)}px`,
        position: props.absolute ? 'absolute' : 'relative',
        top: `${parseInt(props.top)}px`,
        transformOrigin: props.transformOrigin
      }
    }

    if (props.value) {
      data.style.transform = props.activeTransform
    }

    if (props.focused) {
      data.class = Colorable.methods.addTextColorClassChecks(data.class, props.color)
    }

    return h('label', data, children)
  }
}