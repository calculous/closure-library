//!! generated by clutz.
// Generated from third_party/closure/goog/disposable/idisposable.js
declare namespace ಠ_ಠ.clutz.goog.disposable {
  /**
   * Interface for a disposable object.  If a instance requires cleanup, it should
   * implement this interface (it may subclass goog.Disposable).
   *
   * Examples of cleanup that can be done in `dispose` method:
   * 1. Remove event listeners.
   * 2. Cancel timers (setTimeout, setInterval, goog.Timer).
   * 3. Call `dispose` on other disposable objects hold by current object.
   * 4. Close connections (e.g. WebSockets).
   *
   * Note that it's not required to delete properties (e.g. DOM nodes) or set them
   * to null as garbage collector will collect them assuming that references to
   * current object will be lost after it is disposed.
   *
   * See also http://go/mdn/JavaScript/Memory_Management.
   */
  interface IDisposable {
    /**
     * Disposes of the object and its resources.
     */
    dispose ( ) : void ;
    isDisposed ( ) : boolean ;
  }
}
// Generated from third_party/closure/goog/disposable/idisposable.js
declare module 'goog:goog.disposable.IDisposable' {
  import IDisposable = ಠ_ಠ.clutz.goog.disposable.IDisposable;
  export default IDisposable;
  const __clutz_actual_path: 'google3/third_party/closure/goog/disposable/idisposable';
}
declare module 'google3/third_party/closure/goog/disposable/idisposable' {
  import IDisposable = ಠ_ಠ.clutz.goog.disposable.IDisposable;
  export { IDisposable };
  const __clutz_strip_property: 'IDisposable';
  const __clutz_actual_namespace: 'goog.disposable.IDisposable';
}
