import Vue from 'vue'

var routeWrapper = Vue.component('route-wrapper', {
  template: '<div><router-view :name="name"></router-view></div>',
  props: {
    name: {
      default: 'default'
    }
  },
  data () {
    return {
      // "routeMatches" attribute contains true if the last call to $createElement
      // returned a new component. In general true means that the current
      // route generates a request to show some component in the wrapped
      // router view.
      routeMatches: false
    }
  },
  render (createElement) {
    return createElement('div', [
      createElement('router-view', {
        attrs: {
          name: this.name
        }
      })
    ])
  },
  created () {
    // Wrap $createElement function
    var orig = this.$createElement

    // "lastComponent" variable contains the last component created
    // by $createElement function. In certain cases this
    // stored component is returned instead of a new component.
    var lastComponent

    this.$createElement = function (componentType, data) {
      if (componentType && (!data || !data.routerView)) {
        // Seems that it is someone else (than Vue-router) calling
        // the  "$createElement", use original function as is.
        return orig.apply(this, arguments)
      }

      // Find a parent router wrapper
      var parentRouteWrapper = this.$parent
      while (parentRouteWrapper) {
        if (parentRouteWrapper instanceof routeWrapper) {
          break
        }
        parentRouteWrapper = parentRouteWrapper.$parent
      }

      // Check if the parent router has a match
      var parentRouteMatch =
        parentRouteWrapper && parentRouteWrapper.routeMatches

      if (componentType && (!parentRouteWrapper || parentRouteMatch)) {
        // A specific component is requested and the parent router wrapped
        // does not exists or has a match.

        // Mark that currently this router wrapper has
        // a matching route, child router wrappers may check this
        // information to decide what to show.
        this.routeMatches = true
      } else {
        // An empty component is requested.

        // Mark that currently this router wrapper does not have
        // a matching route, child router wrappers may check this
        // information to decide what to show.
        this.routeMatches = false

        // If the parent route wrapper does not have a match,
        // return previously created component.
        if (!parentRouteMatch) {
          return lastComponent
        }
        // else
        // The parent router view has a match but empty view
        // is requested for this child router view. Let's assume
        // that this request is OK, continue and create and return
        // an empty component.
      }

      // Create the requested component and store it for a later use
      lastComponent = orig.apply(this, arguments)
      return lastComponent
    }.bind(this)
  }
})

export default routeWrapper
