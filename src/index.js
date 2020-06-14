/**
 * Build styles
 */
require('./index.css').toString();

/**
 * Spacer Block for the Editor.js.
 * Based on Delimiter from CodeX
 *
 * @author Brad Veryard (brad@veryard.dev)
 * @copyright CodeX 2018
 * @license The MIT License (MIT)
 * @version 1.0.0
 */

/**
 * @typedef {Object} SpacerData
 * @description Tool's input and output data format
 */
class Spacer {
  /**
   * Allow Tool to have no content
   * @return {boolean}
   */
  static get contentless() {
    return true;
  }

  /**
   * Render plugin`s main Element and fill it with saved data
   *
   * @param {{data: SpacerData, config: object, api: object}}
   *   data — previously saved data
   *   config - user config for Tool
   *   api - Editor.js API
   */
  constructor({data, config, api}) {
    this.api = api;

    this._CSS = {
      block: this.api.styles.block,
      wrapper: 'ce-spacer'
    };

    this._data = {};
    this._element = this.drawView();

    this.data = data;
  }

  /**
   * Create Tool's view
   * @return {HTMLElement}
   * @private
   */
  drawView() {
    let div = document.createElement('DIV');

    div.classList.add(this._CSS.wrapper, this._CSS.block);

    return div;
  }

  /**
   * Return Tool's view
   * @returns {HTMLDivElement}
   * @public
   */
  render() {
    return this._element;
  }

  /**
   * Extract Tool's data from the view
   * @param {HTMLDivElement} toolsContent - Paragraph tools rendered view
   * @returns {SpacerData} - saved data
   * @public
   */
  save(toolsContent) {
    return {};
  }

  /**
   * Get Tool toolbox settings
   * icon - Tool icon's SVG
   * title - title to show in toolbox
   *
   * @return {{icon: string, title: string}}
   */
  static get toolbox() {
    return {
      icon: `<svg width="19" height="10" viewBox="0 0 15.7 10" xml:space="preserve"><path d="M13.6,0H7.9h0H2.1C1.4,0,0.9,0.6,0.9,1.3s0.6,1.3,1.3,1.3h5.7h0h5.7c0.7,0,1.3-0.6,1.3-1.3S14.3,0,13.6,0z" transform="translate(0 7)"></path></svg>`,
      title: 'Spacer'
    };
  }
}

module.exports = Spacer;
