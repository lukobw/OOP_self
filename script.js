function Button(text) {
    'use strict';
    this.text = text || 'Hello';
}

Button.prototype = {
    create: function () {
        'use strict';
        var self = this;
        this.$element = $('<button>');
        this.$element.text(this.text);
        this.$element.click(function () {
            alert(self.text);
        });
        this.$element.appendTo($('body'));
    }
};

var btn1 = new Button('Hello');

btn1.create();