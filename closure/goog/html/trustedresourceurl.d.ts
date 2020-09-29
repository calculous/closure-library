//!! generated by clutz.
// Generated from third_party/closure/goog/html/trustedresourceurl.js
declare namespace ಠ_ಠ.clutz.goog.html {
  /**
   * A URL which is under application control and from which script, CSS, and
   * other resources that represent executable code, can be fetched.
   *
   * Given that the URL can only be constructed from strings under application
   * control and is used to load resources, bugs resulting in a malformed URL
   * should not have a security impact and are likely to be easily detectable
   * during testing. Given the wide number of non-RFC compliant URLs in use,
   * stricter validation could prevent some applications from being able to use
   * this type.
   *
   * Instances of this type must be created via the factory method,
   * (`fromConstant`, `fromConstants`, `format` or `formatWithParams`), and not by
   * invoking its constructor. The constructor intentionally takes an extra
   * parameter that cannot be constructed outside of this file and the type is
   * immutable; hence only a default instance corresponding to the empty string
   * can be obtained via constructor invocation.
   *
   * Creating TrustedResourceUrl objects HAS SIDE-EFFECTS due to calling
   * Trusted Types Web API.
   */
  class TrustedResourceUrl implements ಠ_ಠ.clutz.goog.i18n.bidi.DirectionalString , ಠ_ಠ.clutz.goog.string.TypedString {
    private noStructuralTyping_goog_html_TrustedResourceUrl : any;
    /**
     * A URL which is under application control and from which script, CSS, and
     * other resources that represent executable code, can be fetched.
     *
     * Given that the URL can only be constructed from strings under application
     * control and is used to load resources, bugs resulting in a malformed URL
     * should not have a security impact and are likely to be easily detectable
     * during testing. Given the wide number of non-RFC compliant URLs in use,
     * stricter validation could prevent some applications from being able to use
     * this type.
     *
     * Instances of this type must be created via the factory method,
     * (`fromConstant`, `fromConstants`, `format` or `formatWithParams`), and not by
     * invoking its constructor. The constructor intentionally takes an extra
     * parameter that cannot be constructed outside of this file and the type is
     * immutable; hence only a default instance corresponding to the empty string
     * can be obtained via constructor invocation.
     *
     * Creating TrustedResourceUrl objects HAS SIDE-EFFECTS due to calling
     * Trusted Types Web API.
     */
    constructor (value : TrustedScriptURL | string , token : GlobalObject ) ;
    /**
     * Creates a new TrustedResourceUrl with params added to URL. Both search and
     * hash params can be specified.
     * @param searchParams Search parameters to add to URL. See goog.html.TrustedResourceUrl.stringifyParams_ for exact format definition.
     * @param opt_hashParams Hash parameters to add to URL. See goog.html.TrustedResourceUrl.stringifyParams_ for exact format definition.
     */
    cloneWithParams (searchParams : string | { [ key: string ]: any } | null | undefined , opt_hashParams ? : string | { [ key: string ]: any } | null ) : ಠ_ಠ.clutz.goog.html.TrustedResourceUrl ;
    /**
     * Returns this URLs directionality, which is always `LTR`.
     */
    getDirection ( ) : any ;
    /**
     * Returns this TrustedResourceUrl's value as a string.
     *
     * IMPORTANT: In code where it is security relevant that an object's type is
     * indeed `TrustedResourceUrl`, use
     * `goog.html.TrustedResourceUrl.unwrap` instead of this method. If in
     * doubt, assume that it's security relevant. In particular, note that
     * goog.html functions which return a goog.html type do not guarantee that
     * the returned instance is of the right type. For example:
     *
     * <pre>
     * var fakeSafeHtml = new String('fake');
     * fakeSafeHtml.__proto__ = goog.html.SafeHtml.prototype;
     * var newSafeHtml = goog.html.SafeHtml.htmlEscape(fakeSafeHtml);
     * // newSafeHtml is just an alias for fakeSafeHtml, it's passed through by
     * // goog.html.SafeHtml.htmlEscape() as fakeSafeHtml instanceof
     * // goog.html.SafeHtml.
     * </pre>
     */
    getTypedStringValue ( ) : any ;
    implementsGoogI18nBidiDirectionalString : boolean ;
    implementsGoogStringTypedString : boolean ;
    /**
     * Returns a debug string-representation of this value.
     *
     * To obtain the actual string value wrapped in a TrustedResourceUrl, use
     * `goog.html.TrustedResourceUrl.unwrap`.
     */
    toString ( ) : any ;
    /**
     * Creates a TrustedResourceUrl from a format string and arguments.
     *
     * The arguments for interpolation into the format string map labels to values.
     * Values of type `goog.string.Const` are interpolated without modifcation.
     * Values of other types are cast to string and encoded with
     * encodeURIComponent.
     *
     * `%{<label>}` markers are used in the format string to indicate locations
     * to be interpolated with the valued mapped to the given label. `<label>`
     * must contain only alphanumeric and `_` characters.
     *
     * The format string must match goog.html.TrustedResourceUrl.BASE_URL_.
     *
     * Example usage:
     *
     * var url = goog.html.TrustedResourceUrl.format(goog.string.Const.from(
     * 'https://www.google.com/search?q=%{query}'), {'query': searchTerm});
     *
     * var url = goog.html.TrustedResourceUrl.format(goog.string.Const.from(
     * '//www.youtube.com/v/%{videoId}?hl=en&fs=1%{autoplay}'), {
     * 'videoId': videoId,
     * 'autoplay': opt_autoplay ?
     * goog.string.Const.from('&autoplay=1') : goog.string.Const.EMPTY
     * });
     *
     * While this function can be used to create a TrustedResourceUrl from only
     * constants, fromConstant() and fromConstants() are generally preferable for
     * that purpose.
     * @param format The format string.
     * @param args Mapping of labels to values to be interpolated into the format string. goog.string.Const values are interpolated without encoding.
     */
    static format (format : ಠ_ಠ.clutz.goog.string.Const , args : { [ key: string ]: string | number | ಠ_ಠ.clutz.goog.string.Const } ) : ಠ_ಠ.clutz.goog.html.TrustedResourceUrl ;
    /**
     * Formats the URL same as TrustedResourceUrl.format and then adds extra URL
     * parameters.
     *
     * Example usage:
     *
     * // Creates '//www.youtube.com/v/abc?autoplay=1' for videoId='abc' and
     * // opt_autoplay=1. Creates '//www.youtube.com/v/abc' for videoId='abc'
     * // and opt_autoplay=undefined.
     * var url = goog.html.TrustedResourceUrl.formatWithParams(
     * goog.string.Const.from('//www.youtube.com/v/%{videoId}'),
     * {'videoId': videoId},
     * {'autoplay': opt_autoplay});
     * @param format The format string.
     * @param args Mapping of labels to values to be interpolated into the format string. goog.string.Const values are interpolated without encoding.
     * @param searchParams Parameters to add to URL. See goog.html.TrustedResourceUrl.stringifyParams_ for exact format definition.
     * @param opt_hashParams Hash parameters to add to URL. See goog.html.TrustedResourceUrl.stringifyParams_ for exact format definition.
     */
    static formatWithParams (format : ಠ_ಠ.clutz.goog.string.Const , args : { [ key: string ]: string | number | ಠ_ಠ.clutz.goog.string.Const } , searchParams : string | { [ key: string ]: any } | null | undefined , opt_hashParams ? : string | { [ key: string ]: any } | null ) : ಠ_ಠ.clutz.goog.html.TrustedResourceUrl ;
    /**
     * Creates a TrustedResourceUrl object from a compile-time constant string.
     *
     * Compile-time constant strings are inherently program-controlled and hence
     * trusted.
     * @param url A compile-time-constant string from which to create a TrustedResourceUrl.
     */
    static fromConstant (url : ಠ_ಠ.clutz.goog.string.Const ) : ಠ_ಠ.clutz.goog.html.TrustedResourceUrl ;
    /**
     * Creates a TrustedResourceUrl object from a compile-time constant strings.
     *
     * Compile-time constant strings are inherently program-controlled and hence
     * trusted.
     * @param parts Compile-time-constant strings from which to create a TrustedResourceUrl.
     */
    static fromConstants (parts : ಠ_ಠ.clutz.goog.string.Const [] ) : ಠ_ಠ.clutz.goog.html.TrustedResourceUrl ;
    /**
     * Creates a TrustedResourceUrl object by generating a Blob from a SafeScript
     * object and then calling createObjectURL with that blob.
     *
     * SafeScript objects are trusted to contain executable JavaScript code.
     *
     * Caller must call goog.fs.url.revokeObjectUrl() on the unwrapped url to
     * release the underlying blob.
     *
     * Throws if browser doesn't support blob construction.
     * @param safeScript A script from which to create a TrustedResourceUrl.
     */
    static fromSafeScript (safeScript : ಠ_ಠ.clutz.goog.html.SafeScript ) : ಠ_ಠ.clutz.goog.html.TrustedResourceUrl ;
    /**
     * Performs a runtime check that the provided object is indeed a
     * TrustedResourceUrl object, and returns its value.
     * @param trustedResourceUrl The object to extract from.
     */
    static unwrap (trustedResourceUrl : ಠ_ಠ.clutz.goog.html.TrustedResourceUrl ) : string ;
    /**
     * Unwraps value as TrustedScriptURL if supported or as a string if not.
     */
    static unwrapTrustedScriptURL (trustedResourceUrl : ಠ_ಠ.clutz.goog.html.TrustedResourceUrl ) : TrustedScriptURL | string ;
  }
}
// Generated from third_party/closure/goog/html/trustedresourceurl.js
declare module 'goog:goog.html.TrustedResourceUrl' {
  import TrustedResourceUrl = ಠ_ಠ.clutz.goog.html.TrustedResourceUrl;
  export default TrustedResourceUrl;
  const __clutz_actual_path: 'google3/third_party/closure/goog/html/trustedresourceurl';
}
declare module 'google3/third_party/closure/goog/html/trustedresourceurl' {
  import TrustedResourceUrl = ಠ_ಠ.clutz.goog.html.TrustedResourceUrl;
  export { TrustedResourceUrl };
  const __clutz_strip_property: 'TrustedResourceUrl';
  const __clutz_actual_namespace: 'goog.html.TrustedResourceUrl';
}
