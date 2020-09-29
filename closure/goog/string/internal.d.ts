//!! generated by clutz.
// Generated from third_party/closure/goog/string/internal.js
declare namespace ಠ_ಠ.clutz.goog.string.internal {
  /**
   * A string comparator that ignores case.
   * -1 = str1 less than str2
   * 0 = str1 equals str2
   * 1 = str1 greater than str2
   * @param str1 The string to compare.
   * @param str2 The string to compare `str1` to.
   */
  function caseInsensitiveCompare (str1 : string , str2 : string ) : number ;
  /**
   * Determines whether a string contains a substring, ignoring case.
   * @param str The string to search.
   * @param subString The substring to search for.
   */
  function caseInsensitiveContains (str : string , subString : string ) : boolean ;
  /**
   * Case-insensitive suffix-checker.
   * @param str The string to check.
   * @param suffix A string to look for at the end of `str`.
   */
  function caseInsensitiveEndsWith (str : string , suffix : string ) : boolean ;
  /**
   * Case-insensitive equality checker.
   * @param str1 First string to check.
   * @param str2 Second string to check.
   */
  function caseInsensitiveEquals (str1 : string , str2 : string ) : boolean ;
  /**
   * Case-insensitive prefix-checker.
   * @param str The string to check.
   * @param prefix A string to look for at the end of `str`.
   */
  function caseInsensitiveStartsWith (str : string , prefix : string ) : boolean ;
  /**
   * Compares two version numbers.
   * @param version1 Version of first item.
   * @param version2 Version of second item.
   */
  function compareVersions (version1 : string | number , version2 : string | number ) : number ;
  /**
   * Determines whether a string contains a substring.
   * @param str The string to search.
   * @param subString The substring to search for.
   */
  function contains (str : string , subString : string ) : boolean ;
  /**
   * Fast suffix-checker.
   * @param str The string to check.
   * @param suffix A string to look for at the end of `str`.
   */
  function endsWith (str : string , suffix : string ) : boolean ;
  /**
   * Escapes double quote '"' and single quote '\'' characters in addition to
   * '&', '<', and '>' so that a string can be included in an HTML tag attribute
   * value within double or single quotes.
   * @param str string to be escaped.
   */
  function htmlEscape (str : string , opt_isLikelyToContainHtmlChars ? : boolean ) : string ;
  /**
   * Checks if a string is empty or contains only whitespaces.
   * @param str The string to check.
   */
  function isEmptyOrWhitespace (str : string ) : boolean ;
  /**
   * Converts \n to <br>s or <br />s.
   * @param str The string in which to convert newlines.
   * @param opt_xml Whether to use XML compatible tags.
   */
  function newLineToBr (str : string , opt_xml ? : boolean ) : string ;
  /**
   * Fast prefix-checker.
   * @param str The string to check.
   * @param prefix A string to look for at the start of `str`.
   */
  function startsWith (str : string , prefix : string ) : boolean ;
  /**
   * Trims white spaces to the left and right of a string.
   * @param str The string to trim.
   */
  function trim (a : string ) : string ;
  /**
   * Do escaping of whitespace to preserve spatial formatting. We use character
   * entity #160 to make it safer for xml.
   * @param str The string in which to escape whitespace.
   * @param opt_xml Whether to use XML compatible tags.
   */
  function whitespaceEscape (str : string , opt_xml ? : boolean ) : string ;
}
// Generated from third_party/closure/goog/string/internal.js
declare module 'goog:goog.string.internal' {
  import internal = ಠ_ಠ.clutz.goog.string.internal;
  export = internal;
  const __clutz_actual_path: 'google3/third_party/closure/goog/string/internal';
}
declare module 'google3/third_party/closure/goog/string/internal' {
  import internal = ಠ_ಠ.clutz.goog.string.internal;
  export = internal;
  const __clutz_actual_namespace: 'goog.string.internal';
}
