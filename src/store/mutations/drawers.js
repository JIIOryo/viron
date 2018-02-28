import reject from 'mout/array/reject';
import exporter from './exporter';

export default exporter('drawers', {
  /**
   * ドローワーを追加します。
   * @param {Object} state
   * @param {String} tagName
   * @param {Object} tagOpts
   * @param {Object} drawerOpts
   * @param {Object} opts
   * @return {Array}
   */
  add: (state, tagName, tagOpts = {}, drawerOpts = {}, opts = {}) => {
    const obj = {
      id: `drawer_${Date.now()}`,
      tagName,
      tagOpts,
      drawerOpts
    };
    // 意図的に配列の先頭に追加している。
    // TinyMCEのdom監視が強いため。
    if (opts.forceFront) {
      state.drawers.push(obj);
    } else {
      state.drawers.unshift(obj);
    }
    return ['drawers'];
  },

  /**
   * ドローワーを削除します。
   * @param {Object} state
   * @param {String} drawerID
   * @return {Array}
   */
  remove: (state, drawerID) => {
    state.drawers = reject(state.drawers, drawer => {
      return (drawer.id === drawerID);
    });
    return ['drawers'];
  }
});
