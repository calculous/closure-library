//!! generated by clutz.
// Generated from third_party/closure/goog/debug/error.js
declare namespace ಠ_ಠ.clutz.goog.debug {
  export import Error = ಠ_ಠ.clutz.module$contents$goog$debug$Error_DebugError ;
}
// Generated from third_party/closure/goog/debug/error.js
declare module 'goog:goog.debug.Error' {
  import Error = ಠ_ಠ.clutz.goog.debug.Error;
  export default Error;
  const __clutz_actual_path: 'google3/third_party/closure/goog/debug/error';
}
declare module 'google3/third_party/closure/goog/debug/error' {
  import Error = ಠ_ಠ.clutz.goog.debug.Error;
  export { Error };
  const __clutz_strip_property: 'Error';
  const __clutz_actual_namespace: 'goog.debug.Error';
}
// Generated from third_party/closure/goog/debug/error.js
declare namespace ಠ_ಠ.clutz {
  /**
   * Base class for custom error objects.
   */
  class module$contents$goog$debug$Error_DebugError extends GlobalError {
    private noStructuralTyping_module$contents$goog$debug$Error_DebugError : any;
    /**
     * Base class for custom error objects.
     * @param opt_msg The message associated with the error.
     */
    constructor (opt_msg ? : any ) ;
    message : string ;
    /**
     * Whether to report this error to the server. Setting this to false will
     * cause the error reporter to not report the error back to the server,
     * which can be useful if the client knows that the error has already been
     * logged on the server.
     */
    reportErrorToServer : boolean ;
    stack : any ;
    name : string ;
  }
}
// Generated from third_party/closure/goog/debug/error.js
declare namespace ಠ_ಠ.clutz {
  export import module$exports$goog$debug$Error = ಠ_ಠ.clutz.module$contents$goog$debug$Error_DebugError ;
}
