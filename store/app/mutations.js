export default {
    setDrawer: (state, value) => (state.drawer = value),
    setImage: (state, value) => (state.image = value),
    setColor: (state, value) => (state.color = value),
    toggleDrawer: (state) => (state.drawer = !state.drawer),
    toggleDrawerLanding: (state) => (state.drawerLanding = !state.drawerLanding),
    setDraweLanding: (state, value) => (state.draweLanding = value),

};