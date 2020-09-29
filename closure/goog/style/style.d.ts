//!! generated by clutz.
// Generated from third_party/closure/goog/style/style.js
declare namespace ಠ_ಠ.clutz.goog.style {
  /**
   * Clears the background image of an element in a browser independent manner.
   * @param el The element to clear background image for.
   */
  function clearTransparentBackgroundImage (el : GlobalElement | null ) : void ;
  /**
   * Retrieves the computed background color string for a given element. The
   * string returned is suitable for assigning to another element's
   * background-color, but is not guaranteed to be in any particular string
   * format. Accessing the color in a numeric form may not be possible in all
   * browsers or with all input.
   *
   * If the background color for the element is defined as a hexadecimal value,
   * the resulting string can be parsed by goog.color.parse in all supported
   * browsers.
   *
   * Whether named colors like "red" or "lightblue" get translated into a
   * format which can be parsed is browser dependent. Calling this function on
   * transparent elements will return "transparent" in most browsers or
   * "rgba(0, 0, 0, 0)" in WebKit.
   * @param element The element to get the background color of.
   */
  function getBackgroundColor (element : GlobalElement | null ) : string ;
  /**
   * Gets the computed border widths (on all sides) in pixels
   * @param element The element to get the border widths for.
   */
  function getBorderBox (element : GlobalElement | null ) : ಠ_ಠ.clutz.goog.math.Box ;
  /**
   * Gets the border box size for an element.
   * @param element The element to get the size for.
   */
  function getBorderBoxSize (element : GlobalElement | null ) : ಠ_ಠ.clutz.goog.math.Size ;
  /**
   * Returns a bounding rectangle for a given element in page space.
   * @param element Element to get bounds of. Must not be display none.
   */
  function getBounds (element : GlobalElement | null ) : ಠ_ಠ.clutz.goog.math.Rect ;
  /**
   * Gets the cascaded style value of a node, or null if the value cannot be
   * computed (only Internet Explorer can do this).
   * @param element Element to get style of.
   * @param style Property to get (camel-case).
   */
  function getCascadedStyle (element : GlobalElement | null , style : string ) : string ;
  /**
   * Returns clientLeft (width of the left border and, if the directionality is
   * right to left, the vertical scrollbar) and clientTop as a coordinate object.
   * @param el Element to get clientLeft for.
   */
  function getClientLeftTop (el : GlobalElement | null ) : ಠ_ಠ.clutz.goog.math.Coordinate ;
  /**
   * Returns the position of the event or the element's border box relative to
   * the client viewport. If an event is passed, and if this event is a "touch"
   * event, then the position of the first changedTouches will be returned.
   * @param el Element or a mouse / touch event.
   */
  function getClientPosition (el : GlobalElement | null | GlobalEvent | ಠ_ಠ.clutz.goog.events.Event ) : ಠ_ಠ.clutz.goog.math.Coordinate ;
  /**
   * Returns the viewport element for a particular document
   * @param opt_node DOM node (Document is OK) to get the viewport element of.
   */
  function getClientViewportElement (opt_node ? : Node | null ) : GlobalElement | null ;
  /**
   * Retrieves the computed value of the box-sizing CSS attribute.
   * Browser support: http://caniuse.com/css3-boxsizing.
   * @param element The element whose box-sizing to get.
   */
  function getComputedBoxSizing (element : GlobalElement ) : string | null ;
  /**
   * Retrieves the computed value of the cursor CSS attribute.
   * @param element The element to get the cursor of.
   */
  function getComputedCursor (element : GlobalElement | null ) : string ;
  /**
   * Retrieves the computed value of the overflow-x CSS attribute.
   * @param element The element to get the overflow-x of.
   */
  function getComputedOverflowX (element : GlobalElement | null ) : string ;
  /**
   * Retrieves the computed value of the overflow-y CSS attribute.
   * @param element The element to get the overflow-y of.
   */
  function getComputedOverflowY (element : GlobalElement | null ) : string ;
  /**
   * Retrieves the computed value of the position CSS attribute.
   * @param element The element to get the position of.
   */
  function getComputedPosition (element : GlobalElement | null ) : string ;
  /**
   * Retrieves a computed style value of a node. It returns empty string if the
   * value cannot be computed (which will be the case in Internet Explorer) or
   * "none" if the property requested is an SVG one and it has not been
   * explicitly set (firefox and webkit).
   * @param element Element to get style of.
   * @param property Property to get (camel-case).
   */
  function getComputedStyle (element : GlobalElement | null , property : string ) : string ;
  /**
   * Retrieves the computed value of the text-align CSS attribute.
   * @param element The element to get the text-align of.
   */
  function getComputedTextAlign (element : GlobalElement | null ) : string ;
  /**
   * Retrieves the computed value of the CSS transform attribute.
   * @param element The element to get the transform of.
   */
  function getComputedTransform (element : GlobalElement | null ) : string ;
  /**
   * Retrieves the computed value of the z-index CSS attribute.
   * @param element The element to get the z-index of.
   */
  function getComputedZIndex (element : GlobalElement | null ) : string | number ;
  /**
   * Calculate the scroll position of `container` with the minimum amount so
   * that the content and the borders of the given `element` become visible.
   * If the element is bigger than the container, its top left corner will be
   * aligned as close to the container's top left corner as possible.
   * @param element The element to make visible.
   * @param opt_container The container to scroll. If not set, then the document scroll element will be used.
   * @param opt_center Whether to center the element in the container. Defaults to false.
   */
  function getContainerOffsetToScrollInto (element : GlobalElement | null , opt_container ? : GlobalElement | null , opt_center ? : boolean ) : ಠ_ಠ.clutz.goog.math.Coordinate ;
  /**
   * Gets the content box size for an element.  This is potentially expensive in
   * all browsers.
   * @param element The element to get the size for.
   */
  function getContentBoxSize (element : GlobalElement | null ) : ಠ_ಠ.clutz.goog.math.Size ;
  /**
   * Returns the x,y translation component of any CSS transforms applied to the
   * element, in pixels.
   * @param element The element to get the translation of.
   */
  function getCssTranslation (element : GlobalElement ) : ಠ_ಠ.clutz.goog.math.Coordinate ;
  /**
   * Gets value of explicitly-set float CSS property on an element.
   * @param el The element to get float property of.
   */
  function getFloat (el : GlobalElement | null ) : string ;
  /**
   * Returns the font face applied to a given node. Opera and IE should return
   * the font actually displayed. Firefox returns the author's most-preferred
   * font (whether the browser is capable of displaying it or not.)
   * @param el The element whose font family is returned.
   */
  function getFontFamily (el : GlobalElement | null ) : string ;
  /**
   * Returns the font size, in pixels, of text in an element.
   * @param el The element whose font size is returned.
   */
  function getFontSize (el : GlobalElement | null ) : number ;
  /**
   * Returns a Coordinate object relative to the top-left of an HTML document
   * in an ancestor frame of this element. Used for measuring the position of
   * an element inside a frame relative to a containing frame.
   * @param el Element to get the page offset for.
   * @param relativeWin The window to measure relative to. If relativeWin is not in the ancestor frame chain of the element, we measure relative to the top-most window.
   */
  function getFramedPageOffset (el : GlobalElement | null , relativeWin : Window | null ) : ಠ_ಠ.clutz.goog.math.Coordinate ;
  /**
   * Returns the units used for a CSS length measurement.
   * @param value A CSS length quantity.
   */
  function getLengthUnits (value : string ) : string | null ;
  /**
   * Gets the computed margins (on all sides) in pixels.
   * @param element The element to get the margins for.
   */
  function getMarginBox (element : GlobalElement | null ) : ಠ_ಠ.clutz.goog.math.Box ;
  /**
   * Returns the first parent that could affect the position of a given element.
   * @param element The element to get the offset parent for.
   */
  function getOffsetParent (element : GlobalElement | null ) : GlobalElement | null ;
  /**
   * Gets the opacity of a node (x-browser). This gets the inline style opacity
   * of the node, and does not take into account the cascaded or the computed
   * style for this node.
   * @param el Element whose opacity has to be found.
   */
  function getOpacity (el : GlobalElement | null ) : number | string ;
  /**
   * Gets the computed paddings (on all sides) in pixels.
   * @param element The element to get the padding for.
   */
  function getPaddingBox (element : GlobalElement | null ) : ಠ_ಠ.clutz.goog.math.Box ;
  /**
   * Returns a Coordinate object relative to the top-left of the HTML document.
   * Implemented as a single function to save having to do two recursive loops in
   * opera and safari just to get both coordinates.  If you just want one value do
   * use goog.style.getPageOffsetLeft() and goog.style.getPageOffsetTop(), but
   * note if you call both those methods the tree will be analysed twice.
   * @param el Element to get the page offset for.
   */
  function getPageOffset (el : GlobalElement | null ) : ಠ_ಠ.clutz.goog.math.Coordinate ;
  /**
   * Returns the left coordinate of an element relative to the HTML document
   * @param el Elements.
   */
  function getPageOffsetLeft (el : GlobalElement | null ) : number ;
  /**
   * Returns the top coordinate of an element relative to the HTML document
   * @param el Elements.
   */
  function getPageOffsetTop (el : GlobalElement | null ) : number ;
  /**
   * Gets the offsetLeft and offsetTop properties of an element and returns them
   * in a Coordinate object
   * @param element Element.
   */
  function getPosition (element : GlobalElement | null ) : ಠ_ಠ.clutz.goog.math.Coordinate ;
  /**
   * Returns the position of an element relative to another element in the
   * document.  A relative to B
   * @param a Element or mouse event whose position we're calculating.
   * @param b Element or mouse event position is relative to.
   */
  function getRelativePosition (a : GlobalElement | null | GlobalEvent | ಠ_ಠ.clutz.goog.events.Event , b : GlobalElement | null | GlobalEvent | ಠ_ಠ.clutz.goog.events.Event ) : ಠ_ಠ.clutz.goog.math.Coordinate ;
  /**
   * Returns the scroll bar width (represents the width of both horizontal
   * and vertical scroll).
   * @param opt_className An optional class name (or names) to apply to the invisible div created to measure the scrollbar. This is necessary if some scrollbars are styled differently than others.
   */
  function getScrollbarWidth (opt_className ? : string ) : number ;
  /**
   * Gets the height and width of an element, even if its display is none.
   *
   * Specifically, this returns the height and width of the border box,
   * irrespective of the box model in effect.
   *
   * Note that this function does not take CSS transforms into account. Please see
   * `goog.style.getTransformedSize`.
   * @param element Element to get size of.
   */
  function getSize (element : GlobalElement | null ) : ಠ_ಠ.clutz.goog.math.Size ;
  /**
   * Retrieves an explicitly-set style value of a node. This returns '' if there
   * isn't a style attribute on the element or if this style property has not been
   * explicitly set in script.
   * @param element Element to get style of.
   * @param property Property to get, css-style (if you have a camel-case property, use element.style[style]).
   */
  function getStyle (element : GlobalElement | null , property : string ) : string ;
  /**
   * Gets the height and width of an element, post transform, even if its display
   * is none.
   *
   * This is like `goog.style.getSize`, except:
   * <ol>
   * <li>Takes webkitTransforms such as rotate and scale into account.
   * <li>Will return null if `element` doesn't respond to
   * `getBoundingClientRect`.
   * <li>Currently doesn't make sense on non-WebKit browsers which don't support
   * webkitTransforms.
   * </ol>
   * @param element Element to get size of.
   */
  function getTransformedSize (element : GlobalElement ) : ಠ_ಠ.clutz.goog.math.Size | null ;
  /**
   * Calculates the viewport coordinates relative to the page/document
   * containing the node. The viewport may be the browser viewport for
   * non-iframe document, or the iframe container for iframe'd document.
   * @param doc The document to use as the reference point.
   */
  function getViewportPageOffset (doc : Document ) : ಠ_ಠ.clutz.goog.math.Coordinate ;
  /**
   * Calculates and returns the visible rectangle for a given element. Returns a
   * box describing the visible portion of the nearest scrollable offset ancestor.
   * Coordinates are given relative to the document.
   * @param element Element to get the visible rect for.
   */
  function getVisibleRectForElement (element : GlobalElement | null ) : ಠ_ಠ.clutz.goog.math.Box | null ;
  /**
   * Installs the style sheet into the window that contains opt_node.  If
   * opt_node is null, the main window is used.
   * @param safeStyleSheet The style sheet to install.
   * @param opt_node Node whose parent document should have the styles installed.
   */
  function installSafeStyleSheet (safeStyleSheet : ಠ_ಠ.clutz.goog.html.SafeStyleSheet , opt_node ? : Node | null ) : HTMLStyleElement | StyleSheet ;
  /**
   * Test whether the given element has been shown or hidden via a call to
   * {@link #setElementShown}.
   *
   * Note this is strictly a companion method for a call
   * to {@link #setElementShown} and the same caveats apply; in particular, this
   * method does not guarantee that the return value will be consistent with
   * whether or not the element is actually visible.
   * @param el The element to test.
   */
  function isElementShown (el : GlobalElement | null ) : boolean ;
  /**
   * Returns true if the element is using right to left (rtl) direction.
   * @param el The element to test.
   */
  function isRightToLeft (el : GlobalElement | null ) : boolean ;
  /**
   * Returns true if the element is set to be unselectable, false otherwise.
   * Note that on some platforms (e.g. Mozilla), even if an element isn't set
   * to be unselectable, it will behave as such if any of its ancestors is
   * unselectable.
   * @param el Element to check.
   */
  function isUnselectable (el : GlobalElement | null ) : boolean ;
  /**
   * Parses a style attribute value.  Converts CSS property names to camel case.
   * @param value The style attribute value.
   */
  function parseStyleAttribute (value : string ) : GlobalObject ;
  /**
   * Changes the scroll position of `container` with the minimum amount so
   * that the content and the borders of the given `element` become visible.
   * If the element is bigger than the container, its top left corner will be
   * aligned as close to the container's top left corner as possible.
   * @param element The element to make visible.
   * @param opt_container The container to scroll. If not set, then the document scroll element will be used.
   * @param opt_center Whether to center the element in the container. Defaults to false.
   */
  function scrollIntoContainerView (element : GlobalElement | null , opt_container ? : GlobalElement | null , opt_center ? : boolean ) : void ;
  /**
   * Sets the border box size of an element. This is potentially expensive in IE
   * if the document is CSS1Compat mode
   * @param element The element to set the size on.
   * @param size The new size.
   */
  function setBorderBoxSize (element : GlobalElement | null , size : ಠ_ಠ.clutz.goog.math.Size | null ) : void ;
  /**
   * Sets the content box size of an element. This is potentially expensive in IE
   * if the document is BackCompat mode.
   * @param element The element to set the size on.
   * @param size The new size.
   */
  function setContentBoxSize (element : GlobalElement | null , size : ಠ_ಠ.clutz.goog.math.Size | null ) : void ;
  /**
   * Shows or hides an element from the page. Hiding the element is done by
   * setting the display property to "none", removing the element from the
   * rendering hierarchy so it takes up no space. To show the element, the default
   * inherited display property is restored (defined either in stylesheets or by
   * the browser's default style rules).
   *
   * Caveat 1: if the inherited display property for the element is set to "none"
   * by the stylesheets, that is the property that will be restored by a call to
   * setElementShown(), effectively toggling the display between "none" and
   * "none".
   *
   * Caveat 2: if the element display style is set inline (by setting either
   * element.style.display or a style attribute in the HTML), a call to
   * setElementShown will clear that setting and defer to the inherited style in
   * the stylesheet.
   * @param el Element to show or hide.
   * @param isShown True to render the element in its default style, false to disable rendering the element.
   */
  function setElementShown (el : GlobalElement | null , isShown : any ) : void ;
  /**
   * Sets CSS float property on an element.
   * @param el The element to set float property on.
   * @param value The value of float CSS property to set on this element.
   */
  function setFloat (el : GlobalElement | null , value : string ) : void ;
  /**
   * Set the height of an element.  Sets the element's style property.
   * @param element Element to set the height of.
   * @param height The height value to set.  If a number, 'px' will be appended, otherwise the value will be applied directly.
   */
  function setHeight (element : GlobalElement | null , height : string | number ) : void ;
  /**
   * Sets 'display: inline-block' for an element (cross-browser).
   * @param el Element to which the inline-block display style is to be applied.
   */
  function setInlineBlock (el : GlobalElement | null ) : void ;
  /**
   * Sets the opacity of a node (x-browser).
   * @param el Elements whose opacity has to be set.
   * @param alpha Opacity between 0 and 1 or an empty string {@code ''} to clear the opacity.
   */
  function setOpacity (el : GlobalElement | null , alpha : number | string ) : void ;
  /**
   * Moves an element to the given coordinates relative to the client viewport.
   * @param el Absolutely positioned element to set page offset for. It must be in the document.
   * @param x Left position of the element's margin box or a coordinate object.
   * @param opt_y Top position of the element's margin box.
   */
  function setPageOffset (el : GlobalElement | null , x : number | ಠ_ಠ.clutz.goog.math.Coordinate | null , opt_y ? : number ) : void ;
  /**
   * Sets the top/left values of an element.  If no unit is specified in the
   * argument then it will add px. The second argument is required if the first
   * argument is a string or number and is ignored if the first argument
   * is a coordinate.
   * @param el Element to move.
   * @param arg1 Left position or coordinate.
   * @param opt_arg2 Top position.
   */
  function setPosition (el : GlobalElement | null , arg1 : string | number | ಠ_ಠ.clutz.goog.math.Coordinate | null , opt_arg2 ? : string | number ) : void ;
  /**
   * Sets 'white-space: pre-wrap' for a node (x-browser).
   *
   * There are as many ways of specifying pre-wrap as there are browsers.
   *
   * CSS3/IE8: white-space: pre-wrap;
   * Mozilla:  white-space: -moz-pre-wrap;
   * Opera:    white-space: -o-pre-wrap;
   * IE6/7:    white-space: pre; word-wrap: break-word;
   * @param el Element to enable pre-wrap for.
   */
  function setPreWrap (el : GlobalElement | null ) : void ;
  /**
   * Sets the content of a style element.  The style element can be any valid
   * style element.  This element will have its content completely replaced by
   * the safeStyleSheet.
   * @param element A stylesheet element as returned by installSafeStyleSheet.
   * @param safeStyleSheet The new content of the stylesheet.
   */
  function setSafeStyleSheet (element : GlobalElement | StyleSheet , safeStyleSheet : ಠ_ಠ.clutz.goog.html.SafeStyleSheet ) : void ;
  /**
   * Sets the width/height values of an element.  If an argument is numeric,
   * or a goog.math.Size is passed, it is assumed to be pixels and will add
   * 'px' after converting it to an integer in string form. (This just sets the
   * CSS width and height properties so it might set content-box or border-box
   * size depending on the box model the browser is using.)
   * @param element Element to set the size of.
   * @param w Width of the element, or a size object.
   * @param opt_h Height of the element. Required if w is not a size object.
   */
  function setSize (element : GlobalElement | null , w : string | number | ಠ_ಠ.clutz.goog.math.Size | null , opt_h ? : string | number ) : void ;
  /**
   * Sets a style value on an element.
   *
   * This function is not indended to patch issues in the browser's style
   * handling, but to allow easy programmatic access to setting dash-separated
   * style properties.  An example is setting a batch of properties from a data
   * object without overwriting old styles.  When possible, use native APIs:
   * elem.style.propertyKey = 'value' or (if obliterating old styles is fine)
   * elem.style.cssText = 'property1: value1; property2: value2'.
   * @param element The element to change.
   * @param style If a string, a style name. If an object, a hash of style names to style values.
   * @param opt_value If style was a string, then this should be the value.
   */
  function setStyle (element : GlobalElement | null , style : string | GlobalObject | null , opt_value ? : string | number | boolean ) : void ;
  /**
   * Sets the background of an element to a transparent image in a browser-
   * independent manner.
   *
   * This function does not support repeating backgrounds or alternate background
   * positions to match the behavior of Internet Explorer. It also does not
   * support sizingMethods other than crop since they cannot be replicated in
   * browsers other than Internet Explorer.
   * @param el The element to set background on.
   * @param src The image source URL.
   */
  function setTransparentBackgroundImage (el : GlobalElement | null , src : string ) : void ;
  /**
   * Makes the element and its descendants selectable or unselectable.  Note
   * that on some platforms (e.g. Mozilla), even if an element isn't set to
   * be unselectable, it will behave as such if any of its ancestors is
   * unselectable.
   * @param el The element to alter.
   * @param unselectable Whether the element and its descendants should be made unselectable.
   * @param opt_noRecurse Whether to only alter the element's own selectable state, and leave its descendants alone; defaults to false.
   */
  function setUnselectable (el : GlobalElement | null , unselectable : boolean , opt_noRecurse ? : boolean ) : void ;
  /**
   * Set the width of an element.  Sets the element's style property.
   * @param element Element to set the width of.
   * @param width The width value to set.  If a number, 'px' will be appended, otherwise the value will be applied directly.
   */
  function setWidth (element : GlobalElement | null , width : string | number ) : void ;
  /**
   * Shows or hides an element from the page. Hiding the element is done by
   * setting the display property to "none", removing the element from the
   * rendering hierarchy so it takes up no space. To show the element, the default
   * inherited display property is restored (defined either in stylesheets or by
   * the browser's default style rules.)
   *
   * Caveat 1: if the inherited display property for the element is set to "none"
   * by the stylesheets, that is the property that will be restored by a call to
   * showElement(), effectively toggling the display between "none" and "none".
   *
   * Caveat 2: if the element display style is set inline (by setting either
   * element.style.display or a style attribute in the HTML), a call to
   * showElement will clear that setting and defer to the inherited style in the
   * stylesheet.
   * @param el Element to show or hide.
   * @param display True to render the element in its default style, false to disable rendering the element.
   * @deprecated Use goog.style.setElementShown instead.
   */
  function showElement (el : GlobalElement | null , display : any ) : void ;
  /**
   * Converts a CSS selector in the form style-property to styleProperty.
   * @param selector CSS Selector.
   * @deprecated Use goog.string.toCamelCase instead.
   */
  function toCamelCase (selector : any ) : string ;
  /**
   * Converts a CSS selector in the form styleProperty to style-property.
   * @param selector Camel case selector.
   * @deprecated Use goog.string.toSelectorCase instead.
   */
  function toSelectorCase (selector : string ) : string ;
  /**
   * Reverse of parseStyleAttribute; that is, takes a style object and returns the
   * corresponding attribute value.  Converts camel case property names to proper
   * CSS selector names.
   * @param obj Map of CSS properties to values.
   */
  function toStyleAttribute (obj : GlobalObject | null ) : string ;
  /**
   * Translates the specified rect relative to origBase page, for newBase page.
   * If origBase and newBase are the same, this function does nothing.
   * @param rect The source rectangle relative to origBase page, and it will have the translated result.
   * @param origBase The DomHelper for the input rectangle.
   * @param newBase The DomHelper for the resultant coordinate.  This must be a DOM for an ancestor frame of origBase or the same as origBase.
   */
  function translateRectForAnotherFrame (rect : ಠ_ಠ.clutz.goog.math.Rect | null , origBase : ಠ_ಠ.clutz.goog.dom.DomHelper | null , newBase : ಠ_ಠ.clutz.goog.dom.DomHelper | null ) : void ;
  /**
   * Removes the styles added by {@link #installSafeStyleSheet}.
   * @param styleSheet The value returned by {@link #installSafeStyleSheet}.
   */
  function uninstallStyles (styleSheet : GlobalElement | null | StyleSheet ) : void ;
}
// Generated from third_party/closure/goog/style/style.js
declare module 'goog:goog.style' {
  import style = ಠ_ಠ.clutz.goog.style;
  export = style;
  const __clutz_actual_path: 'google3/third_party/closure/goog/style/style';
}
declare module 'google3/third_party/closure/goog/style/style' {
  import style = ಠ_ಠ.clutz.goog.style;
  export = style;
  const __clutz_actual_namespace: 'goog.style';
}
