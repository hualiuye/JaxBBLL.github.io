(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (factory());
}(this, (function () { 'use strict';

  var classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var NAME = 'alert';
  var SELECTOR_NAME = '[data-dismiss="' + NAME + '"]';

  var Alert = function () {
    function Alert(el) {
      classCallCheck(this, Alert);

      $(el).on('click', SELECTOR_NAME, this.close);
    }

    createClass(Alert, [{
      key: 'close',
      value: function close(e) {
        var $this = $(this);
        var $parent = $this.parent();
        $parent.remove();
      }
    }], [{
      key: '_jQueryInterface',
      value: function _jQueryInterface(config) {
        return this.each(function () {
          var $this = $(this);
          var data = $this.data('.alert');

          if (!data) {
            $this.data('.alert', data = new Alert(this));
          }
          // $('closeBtn').alert('close')
          if (typeof config == 'string') {
            data[config].call($this);
          }
        });
      }
    }]);
    return Alert;
  }();

  $(document).on('click.' + NAME, SELECTOR_NAME, Alert.prototype.close);
  $.fn[NAME] = Alert._jQueryInterface;
  $.fn[NAME].Constructor = Alert;

})));
