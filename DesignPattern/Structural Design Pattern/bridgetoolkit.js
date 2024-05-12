var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var UIToolkit = /** @class */ (function () {
    function UIToolkit(platform) {
        this.platform = platform;
    }
    return UIToolkit;
}());
var DesktopPlatform = /** @class */ (function () {
    function DesktopPlatform() {
    }
    DesktopPlatform.prototype.drawShape = function (shape) {
        console.log("Drawing ".concat(shape, " on desktop platform"));
    };
    return DesktopPlatform;
}());
var WebPlatform = /** @class */ (function () {
    function WebPlatform() {
    }
    WebPlatform.prototype.drawShape = function (shape) {
        console.log("Drawing ".concat(shape, " on web platform"));
    };
    return WebPlatform;
}());
var MobilePlatform = /** @class */ (function () {
    function MobilePlatform() {
    }
    MobilePlatform.prototype.drawShape = function (shape) {
        console.log("Drawing ".concat(shape, " on mobile platform"));
    };
    return MobilePlatform;
}());
var DesktopUIToolkit = /** @class */ (function (_super) {
    __extends(DesktopUIToolkit, _super);
    function DesktopUIToolkit() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DesktopUIToolkit.prototype.drawButton = function () {
        this.platform.drawShape('Button');
    };
    DesktopUIToolkit.prototype.drawTextBox = function () {
        this.platform.drawShape('TextBox');
    };
    return DesktopUIToolkit;
}(UIToolkit));
var WebUIToolkit = /** @class */ (function (_super) {
    __extends(WebUIToolkit, _super);
    function WebUIToolkit() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WebUIToolkit.prototype.drawButton = function () {
        this.platform.drawShape('Button');
    };
    WebUIToolkit.prototype.drawTextBox = function () {
        this.platform.drawShape('TextBox');
    };
    return WebUIToolkit;
}(UIToolkit));
var MobileUIToolkit = /** @class */ (function (_super) {
    __extends(MobileUIToolkit, _super);
    function MobileUIToolkit() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MobileUIToolkit.prototype.drawButton = function () {
        this.platform.drawShape('Button');
    };
    MobileUIToolkit.prototype.drawTextBox = function () {
        this.platform.drawShape('TextBox');
    };
    return MobileUIToolkit;
}(UIToolkit));
// Usage
var desktopPlatform = new DesktopPlatform();
var desktopUIToolkit = new DesktopUIToolkit(desktopPlatform);
desktopUIToolkit.drawButton();
desktopUIToolkit.drawTextBox();
var webPlatform = new WebPlatform();
var webUIToolkit = new WebUIToolkit(webPlatform);
webUIToolkit.drawButton();
webUIToolkit.drawTextBox();
var mobilePlatform = new MobilePlatform();
var mobileUIToolkit = new MobileUIToolkit(mobilePlatform);
mobileUIToolkit.drawButton();
mobileUIToolkit.drawTextBox();
