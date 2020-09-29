//!! generated by clutz.
// Generated from third_party/closure/goog/dom/nodetype.js
declare namespace ಠ_ಠ.clutz.goog.dom {
  /**
   * Constants for the nodeType attribute in the Node interface.
   *
   * These constants match those specified in the Node interface. These are
   * usually present on the Node object in recent browsers, but not in older
   * browsers (specifically, early IEs) and thus are given here.
   *
   * In some browsers (early IEs), these are not defined on the Node object,
   * so they are provided here.
   *
   * See http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-1950641247
   */
  /**
   * Constants for the nodeType attribute in the Node interface.
   *
   * These constants match those specified in the Node interface. These are
   * usually present on the Node object in recent browsers, but not in older
   * browsers (specifically, early IEs) and thus are given here.
   *
   * In some browsers (early IEs), these are not defined on the Node object,
   * so they are provided here.
   *
   * See http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-1950641247
   */
  enum NodeType {
    ATTRIBUTE = 2.0 ,
    CDATA_SECTION = 4.0 ,
    COMMENT = 8.0 ,
    DOCUMENT = 9.0 ,
    DOCUMENT_FRAGMENT = 11.0 ,
    DOCUMENT_TYPE = 10.0 ,
    ELEMENT = 1.0 ,
    ENTITY = 6.0 ,
    ENTITY_REFERENCE = 5.0 ,
    NOTATION = 12.0 ,
    PROCESSING_INSTRUCTION = 7.0 ,
    TEXT = 3.0 ,
  }
}
// Generated from third_party/closure/goog/dom/nodetype.js
declare module 'goog:goog.dom.NodeType' {
  import NodeType = ಠ_ಠ.clutz.goog.dom.NodeType;
  export default NodeType;
  const __clutz_actual_path: 'google3/third_party/closure/goog/dom/nodetype';
}
declare module 'google3/third_party/closure/goog/dom/nodetype' {
  import NodeType = ಠ_ಠ.clutz.goog.dom.NodeType;
  export { NodeType };
  const __clutz_strip_property: 'NodeType';
  const __clutz_actual_namespace: 'goog.dom.NodeType';
}
