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
          var data = $this.data('.' + NAME);

          if (!data) {
            $this.data('.' + NAME, data = new Alert(this));
          }
          // $('closeBtn').alert('close')
          if (typeof config == 'close') {
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

  // class Dialog {
  //   constructor(el) {
  //     $(el).on('click', SELECTOR_NAME, this.toggle)
  //     var $target = $($(el).attr('data-target'))
  //     this.$target = $target;
  //     $target.on('click', DISMISS, (e) => {
  //       $(el).trigger('click')
  //     })

  //   }

  //   toggle() {
  //     var $this = $(this)
  //     var $target = this.$target || $($this.attr('data-target'))
  //     // console.log('target', this.$target)
  //     var data = $target.data(`.${NAME}`)

  //     if (!data) {
  //       $target.data(`.${NAME}`, (data = new Dialog(this)))
  //     }

  //     if ($target.hasClass('in')) {
  //       $target.removeClass('in');
  //     } else {
  //       $target.addClass('in');
  //     }
  //   }


  //   static _jQueryInterface(config) {
  //     return this.each(function() {
  //       var $this = $(this)
  //       var data = $this.data(`.${NAME}`)

  //       if (!data) {
  //         $this.data(`.${NAME}`, (data = new Dialog(this)))
  //       }
  //       if (typeof config == 'string') {
  //         data[config].call($this)
  //       }
  //     })
  //   }
  // }

  // $(document).on(
  //   `click.${NAME}`,
  //   SELECTOR_NAME,
  //   Dialog.prototype.toggle
  // )
  // $.fn[NAME] = Dialog._jQueryInterface
  // $.fn[NAME].Constructor = Dialog

  var Dialog = function () {
    function Dialog(options) {
      var _this = this;

      classCallCheck(this, Dialog);

      var defaults$$1 = {};
      var params;
      if (typeof options === 'string') {
        params = $.extend({}, defaults$$1, { el: options });
      } else {
        params = $.extend({}, defaults$$1, options);
      }
      this.el = params.el;
      this.$el = $(this.el);
      this.$el.find('[data-dismiss="dialog"]').on('click', function (e) {
        _this.close();
      });
      return this;
    }

    createClass(Dialog, [{
      key: 'open',
      value: function open(e) {
        this.$el.addClass('in');
        $('body').css('overflow', 'hidden');
      }
    }, {
      key: 'close',
      value: function close(e) {
        this.$el.removeClass('in');
        $('body').css('overflow', 'inherit');
      }
    }]);
    return Dialog;
  }();

  $.dialog = function (options) {
    return new Dialog(options);
  };

})));
