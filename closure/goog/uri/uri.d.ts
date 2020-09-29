//!! generated by clutz.
// Generated from third_party/closure/goog/uri/uri.js
declare namespace ಠ_ಠ.clutz.goog {
  /**
   * This class contains setters and getters for the parts of the URI.
   * The <code>getXyz</code>/<code>setXyz</code> methods return the decoded part
   * -- so<code>goog.Uri.parse('/foo%20bar').getPath()</code> will return the
   * decoded path, <code>/foo bar</code>.
   *
   * Reserved characters (see RFC 3986 section 2.2) can be present in
   * their percent-encoded form in scheme, domain, and path URI components and
   * will not be auto-decoded. For example:
   * <code>goog.Uri.parse('rel%61tive/path%2fto/resource').getPath()</code> will
   * return <code>relative/path%2fto/resource</code>.
   *
   * The constructor accepts an optional unparsed, raw URI string.  The parser
   * is relaxed, so special characters that aren't escaped but don't cause
   * ambiguities will not cause parse failures.
   *
   * All setters return <code>this</code> and so may be chained, a la
   * <code>goog.Uri.parse('/foo').setFragment('part').toString()</code>.
   */
  class Uri {
    private noStructuralTyping_goog_Uri : any;
    /**
     * This class contains setters and getters for the parts of the URI.
     * The <code>getXyz</code>/<code>setXyz</code> methods return the decoded part
     * -- so<code>goog.Uri.parse('/foo%20bar').getPath()</code> will return the
     * decoded path, <code>/foo bar</code>.
     *
     * Reserved characters (see RFC 3986 section 2.2) can be present in
     * their percent-encoded form in scheme, domain, and path URI components and
     * will not be auto-decoded. For example:
     * <code>goog.Uri.parse('rel%61tive/path%2fto/resource').getPath()</code> will
     * return <code>relative/path%2fto/resource</code>.
     *
     * The constructor accepts an optional unparsed, raw URI string.  The parser
     * is relaxed, so special characters that aren't escaped but don't cause
     * ambiguities will not cause parse failures.
     *
     * All setters return <code>this</code> and so may be chained, a la
     * <code>goog.Uri.parse('/foo').setFragment('part').toString()</code>.
     * @param opt_uri Optional string URI to parse (use goog.Uri.create() to create a URI from parts), or if a goog.Uri is passed, a clone is created.
     * @param opt_ignoreCase If true, #getParameterValue will ignore the case of the parameter name.
     */
    constructor (opt_uri ? : any , opt_ignoreCase ? : boolean ) ;
    /**
     * Clones the URI instance.
     */
    clone ( ) : ಠ_ಠ.clutz.goog.Uri ;
    enforceReadOnly ( ) : void ;
    getDecodedQuery ( ) : string ;
    getDomain ( ) : string ;
    getEncodedQuery ( ) : string ;
    getFragment ( ) : string ;
    getIgnoreCase ( ) : boolean ;
    /**
     * Returns the first value for a given cgi parameter or undefined if the given
     * parameter name does not appear in the query string.
     * @param paramName Unescaped parameter name.
     */
    getParameterValue (paramName : string ) : string | undefined ;
    /**
     * Returns the value<b>s</b> for a given cgi parameter as a list of decoded
     * query parameter values.
     * @param name The parameter to get values for.
     */
    getParameterValues (name : string ) : any [] ;
    getPath ( ) : string ;
    getPort ( ) : number | null ;
    getQuery ( ) : string ;
    /**
     * Returns the query data.
     */
    getQueryData ( ) : ಠ_ಠ.clutz.goog.Uri.QueryData ;
    getScheme ( ) : string ;
    getUserInfo ( ) : string ;
    hasDomain ( ) : boolean ;
    hasFragment ( ) : boolean ;
    hasPath ( ) : boolean ;
    hasPort ( ) : boolean ;
    hasQuery ( ) : boolean ;
    /**
     * Returns true if this has the same domain as that of uri2.
     * @param uri2 The URI object to compare to.
     */
    hasSameDomainAs (uri2 : ಠ_ಠ.clutz.goog.Uri ) : boolean ;
    hasScheme ( ) : boolean ;
    hasUserInfo ( ) : boolean ;
    isReadOnly ( ) : boolean ;
    /**
     * Adds a random parameter to the Uri.
     */
    makeUnique ( ) : ಠ_ಠ.clutz.goog.Uri ;
    /**
     * Removes the named query parameter.
     * @param key The parameter to remove.
     */
    removeParameter (key : string ) : ಠ_ಠ.clutz.goog.Uri ;
    /**
     * Resolves the given relative URI (a goog.Uri object), using the URI
     * represented by this instance as the base URI.
     *
     * There are several kinds of relative URIs:<br>
     * 1. foo - replaces the last part of the path, the whole query and fragment<br>
     * 2. /foo - replaces the path, the query and fragment<br>
     * 3. //foo - replaces everything from the domain on.  foo is a domain name<br>
     * 4. ?foo - replace the query and fragment<br>
     * 5. #foo - replace the fragment only
     *
     * Additionally, if relative URI has a non-empty path, all ".." and "."
     * segments will be resolved, as described in RFC 3986.
     * @param relativeUri The relative URI to resolve.
     */
    resolve (relativeUri : ಠ_ಠ.clutz.goog.Uri ) : ಠ_ಠ.clutz.goog.Uri ;
    /**
     * Sets the domain.
     * @param newDomain New domain value.
     * @param opt_decode Optional param for whether to decode new value.
     */
    setDomain (newDomain : string , opt_decode ? : boolean ) : ಠ_ಠ.clutz.goog.Uri ;
    /**
     * Sets the URI fragment.
     * @param newFragment New fragment value.
     * @param opt_decode Optional param for whether to decode new value.
     */
    setFragment (newFragment : string , opt_decode ? : boolean ) : ಠ_ಠ.clutz.goog.Uri ;
    /**
     * Sets whether to ignore case.
     * NOTE: If there are already key/value pairs in the QueryData, and
     * ignoreCase_ is set to false, the keys will all be lower-cased.
     * @param ignoreCase whether this goog.Uri should ignore case.
     */
    setIgnoreCase (ignoreCase : boolean ) : ಠ_ಠ.clutz.goog.Uri ;
    /**
     * Sets the value of the named query parameters, clearing previous values for
     * that key.
     * @param key The parameter to set.
     * @param value The new value. Value does not need to be encoded.
     */
    setParameterValue (key : string , value : any ) : ಠ_ಠ.clutz.goog.Uri ;
    /**
     * Sets the values of the named query parameters, clearing previous values for
     * that key.  Not new values will currently be moved to the end of the query
     * string.
     *
     * So, <code>goog.Uri.parse('foo?a=b&c=d&e=f').setParameterValues('c', ['new'])
     * </code> yields <tt>foo?a=b&e=f&c=new</tt>.</p>
     * @param key The parameter to set.
     * @param values The new values. If values is a single string then it will be treated as the sole value. Values do not need to be encoded.
     */
    setParameterValues (key : string , values : any ) : ಠ_ಠ.clutz.goog.Uri ;
    /**
     * Sets the path.
     * @param newPath New path value.
     * @param opt_decode Optional param for whether to decode new value.
     */
    setPath (newPath : string , opt_decode ? : boolean ) : ಠ_ಠ.clutz.goog.Uri ;
    /**
     * Sets the port number.
     * @param newPort Port number. Will be explicitly casted to a number.
     */
    setPort (newPort : any ) : ಠ_ಠ.clutz.goog.Uri ;
    /**
     * Sets the URI query.
     * @param newQuery New query value.
     * @param opt_decode Optional param for whether to decode new value.
     */
    setQuery (newQuery : string , opt_decode ? : boolean ) : ಠ_ಠ.clutz.goog.Uri ;
    /**
     * Sets the query data.
     * @param queryData QueryData object.
     * @param opt_decode Optional param for whether to decode new value. Applies only if queryData is a string.
     */
    setQueryData (queryData : ಠ_ಠ.clutz.goog.Uri.QueryData | null | string | undefined , opt_decode ? : boolean ) : ಠ_ಠ.clutz.goog.Uri ;
    /**
     * Sets whether Uri is read only. If this goog.Uri is read-only,
     * enforceReadOnly_ will be called at the start of any function that may modify
     * this Uri.
     * @param isReadOnly whether this goog.Uri should be read only.
     */
    setReadOnly (isReadOnly : boolean ) : ಠ_ಠ.clutz.goog.Uri ;
    /**
     * Sets the scheme/protocol.
     * @param newScheme New scheme value.
     * @param opt_decode Optional param for whether to decode new value.
     */
    setScheme (newScheme : string , opt_decode ? : boolean ) : ಠ_ಠ.clutz.goog.Uri ;
    /**
     * Sets the userInfo.
     * @param newUserInfo New userInfo value.
     * @param opt_decode Optional param for whether to decode new value.
     */
    setUserInfo (newUserInfo : string , opt_decode ? : boolean ) : ಠ_ಠ.clutz.goog.Uri ;
    toString ( ) : string ;
    /**
     * Parameter name added to stop caching.
     */
    static RANDOM_PARAM : string ;
    /**
     * Creates a new goog.Uri object from unencoded parts.
     * @param opt_scheme Scheme/protocol or full URI to parse.
     * @param opt_userInfo username:password.
     * @param opt_domain www.google.com.
     * @param opt_port 9830.
     * @param opt_path /some/path/to/a/file.html.
     * @param opt_query a=1&b=2.
     * @param opt_fragment The fragment without the #.
     * @param opt_ignoreCase Whether to ignore parameter name case in #getParameterValue.
     */
    static create (opt_scheme ? : string | null , opt_userInfo ? : string | null , opt_domain ? : string | null , opt_port ? : number | null , opt_path ? : string | null , opt_query ? : string | ಠ_ಠ.clutz.goog.Uri.QueryData | null , opt_fragment ? : string | null , opt_ignoreCase ? : boolean ) : ಠ_ಠ.clutz.goog.Uri ;
    /**
     * Checks whether two URIs have the same domain.
     * @param uri1String First URI string.
     * @param uri2String Second URI string.
     */
    static haveSameDomain (uri1String : string , uri2String : string ) : boolean ;
    /**
     * Creates a uri from the string form.  Basically an alias of new goog.Uri().
     * If a Uri object is passed to parse then it will return a clone of the object.
     * @param uri Raw URI string or instance of Uri object.
     * @param opt_ignoreCase Whether to ignore the case of parameter names in #getParameterValue.
     */
    static parse (uri : any , opt_ignoreCase ? : boolean ) : ಠ_ಠ.clutz.goog.Uri ;
    /**
     * Removes dot segments in given path component, as described in
     * RFC 3986, section 5.2.4.
     * @param path A non-empty path component.
     */
    static removeDotSegments (path : string ) : string ;
    /**
     * Resolves a relative Uri against a base Uri, accepting both strings and
     * Uri objects.
     * @param base Base Uri.
     * @param rel Relative Uri.
     */
    static resolve (base : any , rel : any ) : ಠ_ಠ.clutz.goog.Uri ;
  }
}
// Generated from third_party/closure/goog/uri/uri.js
declare module 'goog:goog.Uri' {
  import Uri = ಠ_ಠ.clutz.goog.Uri;
  export default Uri;
  const __clutz_actual_path: 'google3/third_party/closure/goog/uri/uri';
}
declare module 'google3/third_party/closure/goog/uri/uri' {
  import Uri = ಠ_ಠ.clutz.goog.Uri;
  export { Uri };
  const __clutz_strip_property: 'Uri';
  const __clutz_actual_namespace: 'goog.Uri';
}
// Generated from third_party/closure/goog/uri/uri.js
declare namespace ಠ_ಠ.clutz.goog.Uri {
  /**
   * Class used to represent URI query parameters.  It is essentially a hash of
   * name-value pairs, though a name can be present more than once.
   *
   * Has the same interface as the collections in goog.structs.
   */
  class QueryData {
    private noStructuralTyping_goog_Uri_QueryData : any;
    /**
     * Class used to represent URI query parameters.  It is essentially a hash of
     * name-value pairs, though a name can be present more than once.
     *
     * Has the same interface as the collections in goog.structs.
     * @param opt_query Optional encoded query string to parse into the object.
     * @param opt_ignoreCase If true, ignore the case of the parameter name in #get.
     */
    constructor (opt_query ? : string | null , opt_ignoreCase ? : boolean ) ;
    /**
     * Adds a key value pair.
     * @param key Name.
     * @param value Value.
     */
    add (key : string , value : any ) : ಠ_ಠ.clutz.goog.Uri.QueryData ;
    clear ( ) : void ;
    /**
     * Clone the query data instance.
     */
    clone ( ) : ಠ_ಠ.clutz.goog.Uri.QueryData ;
    /**
     * Whether there is a parameter with the given name
     * @param key The parameter name to check for.
     */
    containsKey (key : string ) : boolean ;
    /**
     * Whether there is a parameter with the given value.
     * @param value The value to check for.
     */
    containsValue (value : any ) : boolean ;
    /**
     * Extends a query data object with another query data or map like object. This
     * operates 'in-place', it does not create a new QueryData object.
     * @param var_args The object from which key value pairs will be copied. Note: does not accept null.
     */
    extend ( ...var_args : ( null | ಠ_ಠ.clutz.goog.structs.Map < any , any > | GlobalObject ) [] ) : void ;
    /**
     * Removes all keys that are not in the provided list. (Modifies this object.)
     * @param keys The desired keys.
     */
    filterKeys (keys : string [] | null ) : ಠ_ಠ.clutz.goog.Uri.QueryData ;
    /**
     * Runs a callback on every key-value pair in the map, including duplicate keys.
     * This won't maintain original order when duplicate keys are interspersed (like
     * getKeys() / getValues()).
     * @param opt_scope The value of "this" inside f.
     */
    forEach < SCOPE = any > (f : (this : SCOPE , a : any , b : string , c : ಠ_ಠ.clutz.goog.Uri.QueryData ) => any , opt_scope ? : SCOPE ) : void ;
    /**
     * Returns the first value associated with the key. If the query data has no
     * such key this will return undefined or the optional default.
     * @param key The name of the parameter to get the value for.
     * @param opt_default The default value to return if the query data has no such key.
     */
    get (key : string , opt_default ? : any ) : any ;
    getCount ( ) : number | null ;
    /**
     * Returns all the keys of the parameters. If a key is used multiple times
     * it will be included multiple times in the returned array
     */
    getKeys ( ) : string [] ;
    /**
     * Returns all the values of the parameters with the given name. If the query
     * data has no such key this will return an empty array. If no key is given
     * all values wil be returned.
     * @param opt_key The name of the parameter to get the values for.
     */
    getValues (opt_key ? : string ) : any [] ;
    isEmpty ( ) : boolean ;
    /**
     * Removes all the params with the given key.
     * @param key Name.
     */
    remove (key : string ) : boolean ;
    /**
     * Sets a key value pair and removes all other keys with the same value.
     * @param key Name.
     * @param value Value.
     */
    set (key : string , value : any ) : ಠ_ಠ.clutz.goog.Uri.QueryData ;
    /**
     * Ignore case in parameter names.
     * NOTE: If there are already key/value pairs in the QueryData, and
     * ignoreCase_ is set to false, the keys will all be lower-cased.
     * @param ignoreCase whether this goog.Uri should ignore case.
     */
    setIgnoreCase (ignoreCase : boolean ) : void ;
    /**
     * Sets the values for a key. If the key already exists, this will
     * override all of the existing values that correspond to the key.
     * @param key The key to set values for.
     * @param values The values to set.
     */
    setValues (key : string , values : any [] ) : void ;
    toDecodedString ( ) : string ;
    toString ( ) : string ;
    /**
     * Creates a new query data instance from parallel arrays of parameter names
     * and values. Allows for duplicate parameter names. Throws an error if the
     * lengths of the arrays differ.
     * @param keys Parameter names.
     * @param values Parameter values.
     * @param opt_ignoreCase If true, ignore the case of the parameter name in #get.
     */
    static createFromKeysValues (keys : string [] , values : any [] , opt_ignoreCase ? : boolean ) : ಠ_ಠ.clutz.goog.Uri.QueryData ;
    /**
     * Creates a new query data instance from a map of names and values.
     * @param map Map of string parameter names to parameter value. If parameter value is an array, it is treated as if the key maps to each individual value in the array.
     * @param opt_ignoreCase If true, ignore the case of the parameter name in #get.
     */
    static createFromMap (map : ಠ_ಠ.clutz.goog.structs.Map < string , any > | GlobalObject , opt_ignoreCase ? : boolean ) : ಠ_ಠ.clutz.goog.Uri.QueryData ;
  }
}
// Generated from third_party/closure/goog/uri/uri.js
declare module 'goog:goog.Uri.QueryData' {
  import QueryData = ಠ_ಠ.clutz.goog.Uri.QueryData;
  export default QueryData;
}
