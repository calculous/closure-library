//!! generated by clutz.
// Generated from third_party/closure/goog/fs/blob.js
declare namespace ಠ_ಠ.clutz.goog.fs.blob {
  /**
   * Concatenates one or more values together and converts them to a Blob.
   * @param var_args The values that will make up the resulting blob.
   */
  function getBlob ( ...var_args : ( string | Blob | ArrayBuffer ) [] ) : Blob ;
  /**
   * Creates a blob with the given properties.
   * See https://developer.mozilla.org/en-US/docs/Web/API/Blob for more details.
   * @param parts The values that will make up the resulting blob (subset supported by both BlobBuilder.append() and Blob constructor).
   * @param opt_type The MIME type of the Blob.
   * @param opt_endings Specifies how strings containing newlines are to be written out.
   */
  function getBlobWithProperties (parts : ( string | Blob | ArrayBuffer ) [] , opt_type ? : string , opt_endings ? : string ) : Blob ;
}
// Generated from third_party/closure/goog/fs/blob.js
declare module 'goog:goog.fs.blob' {
  import blob = ಠ_ಠ.clutz.goog.fs.blob;
  export = blob;
  const __clutz_actual_path: 'google3/third_party/closure/goog/fs/blob';
}
declare module 'google3/third_party/closure/goog/fs/blob' {
  import blob = ಠ_ಠ.clutz.goog.fs.blob;
  export = blob;
  const __clutz_actual_namespace: 'goog.fs.blob';
}
