//!! generated by clutz.
// Generated from third_party/closure/goog/dom/htmlelement.js
declare namespace ಠ_ಠ.clutz.goog.dom {
  /**
   * This subclass of HTMLElement is used when only a HTMLElement is possible and
   * not any of its subclasses. Normally, a type can refer to an instance of
   * itself or an instance of any subtype. More concretely, if HTMLElement is used
   * then the compiler must assume that it might still be e.g. HTMLScriptElement.
   * With this, the type check knows that it couldn't be any special element.
   */
  class HtmlElement extends HTMLElement {
    private noStructuralTyping_goog_dom_HtmlElement : any;
    /**
     * This subclass of HTMLElement is used when only a HTMLElement is possible and
     * not any of its subclasses. Normally, a type can refer to an instance of
     * itself or an instance of any subtype. More concretely, if HTMLElement is used
     * then the compiler must assume that it might still be e.g. HTMLScriptElement.
     * With this, the type check knows that it couldn't be any special element.
     */
    constructor ( ) ;
  }
}
// Generated from third_party/closure/goog/dom/htmlelement.js
declare module 'goog:goog.dom.HtmlElement' {
  import HtmlElement = ಠ_ಠ.clutz.goog.dom.HtmlElement;
  export default HtmlElement;
  const __clutz_actual_path: 'google3/third_party/closure/goog/dom/htmlelement';
}
declare module 'google3/third_party/closure/goog/dom/htmlelement' {
  import HtmlElement = ಠ_ಠ.clutz.goog.dom.HtmlElement;
  export { HtmlElement };
  const __clutz_strip_property: 'HtmlElement';
  const __clutz_actual_namespace: 'goog.dom.HtmlElement';
}
