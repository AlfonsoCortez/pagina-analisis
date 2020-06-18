function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layout-layout-module"], {
  /***/
  "./src/app/layout/components/banner/banner.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/layout/components/banner/banner.component.ts ***!
    \**************************************************************/

  /*! exports provided: BannerComponent */

  /***/
  function srcAppLayoutComponentsBannerBannerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BannerComponent", function () {
      return BannerComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var BannerComponent =
    /*#__PURE__*/
    function () {
      function BannerComponent() {
        _classCallCheck(this, BannerComponent);

        this.slideIndex = 0;
        this.index = true;
        this.i = 0;
      }

      _createClass(BannerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.controlador(this.i);
          this.play();
        }
      }, {
        key: "play",
        value: function play() {
          var legendController = document.getElementById('reproductor');
          console.log(legendController);

          if (this.index) {
            this.index = false;
            legendController.innerHTML = '⏸'; // console.log('%cParar' , 'color: green;');

            this.reloj = setInterval(this.controlador, 10000);
            return;
          }

          if (!this.index) {
            this.index = true; // console.log('%cReproducir' , 'color: green;');

            legendController.innerHTML = '▶';
            clearTimeout(this.reloj);
            return;
          }
        }
      }, {
        key: "controlador",
        value: function controlador() {
          var i = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
          this.i += i;
          var slides = document.querySelectorAll('.mySlides'); // let legends: NodeListOf<any> = document.querySelectorAll('.numbertext');

          for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none"; // legends[i].innerHTML = ``;
          }

          this.slideIndex++; // console.log(`%c${slideIndex}`, 'color: orange;')

          if (this.slideIndex > slides.length) {
            this.slideIndex = 1; // console.log(`%c${this.slideIndex}`, 'color: green;')
          } // legends[this.slideIndex-1].innerHTML = `${this.slideIndex} / ${slides.length}`;


          slides[this.slideIndex - 1] == undefined ? this.slideIndex = +2 : console.log('no undefined');
          slides[this.slideIndex - 1].style.display = "block";
        }
      }]);

      return BannerComponent;
    }();

    BannerComponent.ɵfac = function BannerComponent_Factory(t) {
      return new (t || BannerComponent)();
    };

    BannerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BannerComponent,
      selectors: [["app-banner"]],
      decls: 24,
      vars: 0,
      consts: [[1, "slideshow-container"], [1, "mySlides", "fade"], [1, "numbertext"], ["src", "https://www.xtrafondos.com/wallpapers/muralla-china-4942.jpg", 2, "width", "100%"], [1, "text"], ["src", "https://www.xtrafondos.com/wallpapers/lago-como-un-espejo-2109.jpg", 2, "width", "100%"], ["src", "https://www.xtrafondos.com/wallpapers/lago-columbia-en-canada-1111.jpg", 2, "width", "100%"], ["id", "reproductor", 1, "play", 3, "click"], [1, "prev", 3, "click"], [1, "next", 3, "click"]],
      template: function BannerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "1 / 3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Caption Text");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "2 / 3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Caption Two");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "3 / 3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Caption Three");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BannerComponent_Template_a_click_19_listener() {
            return ctx.play();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BannerComponent_Template_a_click_20_listener() {
            return ctx.controlador(0 - 1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\u276E");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BannerComponent_Template_a_click_22_listener() {
            return ctx.controlador(1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\u276F");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".slideshow-container[_ngcontent-%COMP%] {\r\n  background-color: cyan;\r\n  \r\n  \r\n  width: 100%;\r\n  height: 80vh;\r\n  position: relative;\r\n  margin: auto;\r\n  overflow: hidden;\r\n}\r\n\r\n.mySlides[_ngcontent-%COMP%] {\r\n  display: none;\r\n}\r\n\r\n.mySlides[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  width: 100%;\r\n  background-size: cover;\r\n  top: -50px;\r\n}\r\n\r\n.play[_ngcontent-%COMP%]{\r\n  background-color: rgba(0, 0, 0, 0.5);\r\n  cursor: pointer;\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  width: auto;\r\n  \r\n  padding: 10px;\r\n  color: white;\r\n  font-weight: bold;\r\n  font-size: 17px;\r\n  transition: 0.6s ease;\r\n  \r\n}\r\n\r\n.prev[_ngcontent-%COMP%], .next[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n  position: absolute;\r\n  top: 50%;\r\n  width: auto;\r\n  margin-top: -22px;\r\n  padding: 16px;\r\n  color: white;\r\n  font-weight: bold;\r\n  font-size: 18px;\r\n  transition: 0.6s ease;\r\n  border-radius: 0 3px 3px 0;\r\n}\r\n\r\n.next[_ngcontent-%COMP%] {\r\n  right: 0;\r\n  border-radius: 3px 0 0 3px;\r\n}\r\n\r\n.text[_ngcontent-%COMP%] {\r\n  \r\n\r\n  color: #f2f2f2;\r\n  font-size: 15px;\r\n  padding: 8px 12px;\r\n  position: absolute;\r\n  bottom: 8px;\r\n  width: 100%;\r\n  text-align: center;\r\n}\r\n\r\n.numbertext[_ngcontent-%COMP%] {\r\n  background-color: rgba(0, 0, 0, 0.5);\r\n  color: #f2f2f2;\r\n  font-size: 12px;\r\n  padding: 8px 12px;\r\n  position: absolute;\r\n  top: 0;\r\n}\r\n\r\n.fade[_ngcontent-%COMP%] {\r\n  -webkit-animation-name: fade;\r\n  -webkit-animation-duration: 1.5s;\r\n  animation-name: fade;\r\n  animation-duration: 1.5s;\r\n}\r\n\r\n@-webkit-keyframes fade {\r\n  from {\r\n\r\n    margin-left: -700px;\r\n  }\r\n  to {\r\n    margin-left: 0px;\r\n  }\r\n}\r\n\r\n@keyframes fade {\r\n  from {\r\n    \r\n    margin-left: -700px;\r\n    \r\n  }\r\n  to {\r\n    \r\n    margin-left: 0px;\r\n    \r\n\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2NvbXBvbmVudHMvYmFubmVyL2Jhbm5lci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLFVBQVU7QUFDWjs7QUFDQTtFQUNFLG9DQUFvQztFQUNwQyxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixRQUFRO0VBQ1IsV0FBVztFQUNYLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLGdDQUFnQztBQUNsQzs7QUFDQTs7RUFFRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsMEJBQTBCO0FBQzVCOztBQUNBO0VBQ0UsUUFBUTtFQUNSLDBCQUEwQjtBQUM1Qjs7QUFDQTtFQUNFLDBDQUEwQzs7RUFFMUMsY0FBYztFQUNkLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLGNBQWM7RUFDZCxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixNQUFNO0FBQ1I7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsZ0NBQWdDO0VBQ2hDLG9CQUFvQjtFQUNwQix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRTs7SUFFRSxtQkFBbUI7RUFDckI7RUFDQTtJQUNFLGdCQUFnQjtFQUNsQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixlQUFlOztFQUVqQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2NvbXBvbmVudHMvYmFubmVyL2Jhbm5lci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNsaWRlc2hvdy1jb250YWluZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGN5YW47XHJcbiAgLyogbWF4LXdpZHRoOiAxMDAwcHg7ICovXHJcbiAgLyogbWluLXdpZHRoOiA0MDBweDsgKi9cclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDgwdmg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4ubXlTbGlkZXMge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLm15U2xpZGVzIGltZyB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgdG9wOiAtNTBweDtcclxufVxyXG4ucGxheXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgLyogbWFyZ2luLXRvcDogLTIycHg7ICovXHJcbiAgcGFkZGluZzogMTBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG4gIHRyYW5zaXRpb246IDAuNnMgZWFzZTtcclxuICAvKiBib3JkZXItcmFkaXVzOiAwIDNweCAzcHggMDsgKi9cclxufVxyXG4ucHJldixcclxuLm5leHQge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgbWFyZ2luLXRvcDogLTIycHg7XHJcbiAgcGFkZGluZzogMTZweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIHRyYW5zaXRpb246IDAuNnMgZWFzZTtcclxuICBib3JkZXItcmFkaXVzOiAwIDNweCAzcHggMDtcclxufVxyXG4ubmV4dCB7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4IDAgMCAzcHg7XHJcbn1cclxuLnRleHQge1xyXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTsgKi9cclxuXHJcbiAgY29sb3I6ICNmMmYyZjI7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIHBhZGRpbmc6IDhweCAxMnB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDhweDtcclxuICB3aWR0aDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5udW1iZXJ0ZXh0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgY29sb3I6ICNmMmYyZjI7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIHBhZGRpbmc6IDhweCAxMnB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbn1cclxuXHJcbi5mYWRlIHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAxLjVzO1xyXG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlO1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMS41cztcclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGUge1xyXG4gIGZyb20ge1xyXG5cclxuICAgIG1hcmdpbi1sZWZ0OiAtNzAwcHg7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZhZGUge1xyXG4gIGZyb20ge1xyXG4gICAgLyogb3BhY2l0eTogMC40OyAqL1xyXG4gICAgbWFyZ2luLWxlZnQ6IC03MDBweDtcclxuICAgIC8qIGxlZnQ6IC01MDBweDsgKi9cclxuICB9XHJcbiAgdG8ge1xyXG4gICAgLyogb3BhY2l0eTogMTsgKi9cclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICAvKiBsZWZ0OiAwcHg7ICovXHJcblxyXG4gIH1cclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BannerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-banner',
          templateUrl: './banner.component.html',
          styleUrls: ['./banner.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/layout/components/home/home.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/layout/components/home/home.component.ts ***!
    \**********************************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppLayoutComponentsHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _banner_banner_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../banner/banner.component */
    "./src/app/layout/components/banner/banner.component.ts");
    /* harmony import */


    var _infoprincipal_infoprincipal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../infoprincipal/infoprincipal.component */
    "./src/app/layout/components/infoprincipal/infoprincipal.component.ts");
    /* harmony import */


    var _infosecundaria_infosecundaria_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../infosecundaria/infosecundaria.component */
    "./src/app/layout/components/infosecundaria/infosecundaria.component.ts");
    /* harmony import */


    var _infoterciaria_infoterciaria_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../infoterciaria/infoterciaria.component */
    "./src/app/layout/components/infoterciaria/infoterciaria.component.ts");

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)();
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 4,
      vars: 0,
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-banner");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-infoprincipal");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-infosecundaria");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-infoterciaria");
        }
      },
      directives: [_banner_banner_component__WEBPACK_IMPORTED_MODULE_1__["BannerComponent"], _infoprincipal_infoprincipal_component__WEBPACK_IMPORTED_MODULE_2__["InfoprincipalComponent"], _infosecundaria_infosecundaria_component__WEBPACK_IMPORTED_MODULE_3__["InfosecundariaComponent"], _infoterciaria_infoterciaria_component__WEBPACK_IMPORTED_MODULE_4__["InfoterciariaComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/layout/components/infoprincipal/infoprincipal.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/layout/components/infoprincipal/infoprincipal.component.ts ***!
    \****************************************************************************/

  /*! exports provided: InfoprincipalComponent */

  /***/
  function srcAppLayoutComponentsInfoprincipalInfoprincipalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InfoprincipalComponent", function () {
      return InfoprincipalComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var InfoprincipalComponent =
    /*#__PURE__*/
    function () {
      function InfoprincipalComponent() {
        _classCallCheck(this, InfoprincipalComponent);
      }

      _createClass(InfoprincipalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return InfoprincipalComponent;
    }();

    InfoprincipalComponent.ɵfac = function InfoprincipalComponent_Factory(t) {
      return new (t || InfoprincipalComponent)();
    };

    InfoprincipalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: InfoprincipalComponent,
      selectors: [["app-infoprincipal"]],
      decls: 20,
      vars: 0,
      consts: [[1, "section-main"], [1, "section-main-container"], [1, "section-main-container__content"], ["src", "https://img.icons8.com/dotty/80/000000/security-checked.png"], ["src", "https://img.icons8.com/dotty/80/000000/face-id.png"], ["src", "https://img.icons8.com/dotty/80/000000/fingerprint.png"], ["src", "https://img.icons8.com/dotty/80/000000/cloud-firewall.png"]],
      template: function InfoprincipalComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Investigaci\xF3n y anal\xEDtica en tu industria");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Lorem Ipsun");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Lorem Ipsun");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Lorem Ipsun");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Lorem Ipsun");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".section-main[_ngcontent-%COMP%]{\r\n  \r\n  \r\n  width: 100%;\r\n  min-height: 80px;\r\n}\r\n\r\n.section-main-container[_ngcontent-%COMP%]{\r\n  background-color: #fff;\r\n  position: relative;\r\n  width: 60%;\r\n  height: 250px;\r\n  padding: 15px;\r\n  \r\n\r\n  top: -130px;\r\n  margin: 0 auto;\r\n\r\n  display: grid;\r\n  grid-template-columns: repeat(4, 1fr);\r\n\r\n  \r\n}\r\n\r\n.section-main-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n  grid-column-start: 1;\r\n  grid-column-end: 5;\r\n  margin: 0 auto;\r\n  font-size: 25px;\r\n  font-weight: lighter;\r\n}\r\n\r\n.section-main-container__content[_ngcontent-%COMP%]{\r\n  \r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  border-radius: 15px;\r\n\r\n  transition-property: background;\r\n  transition-duration: .8s;\r\n  transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);\r\n}\r\n\r\n.section-main-container__content[_ngcontent-%COMP%]:hover{\r\n  background-color: #F5F5F5;\r\n\r\n}\r\n\r\n.section-main-container__content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n  width: 110px;\r\n\r\n  margin: 0 auto;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2NvbXBvbmVudHMvaW5mb3ByaW5jaXBhbC9pbmZvcHJpbmNpcGFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Q0FJQzs7QUFFRDtFQUNFLDBDQUEwQztFQUMxQyw0QkFBNEI7RUFDNUIsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjs7QUFHQTtFQUNFLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGFBQWE7RUFDYixhQUFhO0VBQ2IsNEJBQTRCOztFQUU1QixXQUFXO0VBQ1gsY0FBYzs7RUFFZCxhQUFhO0VBQ2IscUNBQXFDOztFQUVyQyw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxlQUFlO0VBQ2Ysb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsNEJBQTRCO0VBQzVCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLG1CQUFtQjs7RUFFbkIsK0JBQStCO0VBQy9CLHdCQUF3QjtFQUN4QiwwREFBMEQ7QUFDNUQ7O0FBRUE7RUFDRSx5QkFBeUI7O0FBRTNCOztBQUNBO0VBQ0UsWUFBWTs7RUFFWixjQUFjO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2NvbXBvbmVudHMvaW5mb3ByaW5jaXBhbC9pbmZvcHJpbmNpcGFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4jYmUyZWRkXHJcblxyXG4jMWRkMWExXHJcbiovXHJcblxyXG4uc2VjdGlvbi1tYWlue1xyXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTYsIDE5NiwgMTk2KTsgKi9cclxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwOyAqL1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1pbi1oZWlnaHQ6IDgwcHg7XHJcbn1cclxuXHJcblxyXG4uc2VjdGlvbi1tYWluLWNvbnRhaW5lcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogNjAlO1xyXG4gIGhlaWdodDogMjUwcHg7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICAvKiBib3JkZXI6IDFweCBzb2xpZCAjMDAwOyAqL1xyXG5cclxuICB0b3A6IC0xMzBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuXHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xyXG5cclxuICAvKiBib3gtc2hhZG93OiAwIDAgNXB4ICMwMDA7ICovXHJcbn1cclxuXHJcbi5zZWN0aW9uLW1haW4tY29udGFpbmVyIGgye1xyXG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xyXG4gIGdyaWQtY29sdW1uLWVuZDogNTtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbn1cclxuXHJcbi5zZWN0aW9uLW1haW4tY29udGFpbmVyX19jb250ZW50e1xyXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7ICovXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuXHJcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYmFja2dyb3VuZDtcclxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAuOHM7XHJcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE5LCAxLCAwLjIyLCAxKTtcclxufVxyXG5cclxuLnNlY3Rpb24tbWFpbi1jb250YWluZXJfX2NvbnRlbnQ6aG92ZXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcclxuXHJcbn1cclxuLnNlY3Rpb24tbWFpbi1jb250YWluZXJfX2NvbnRlbnQgaW1ne1xyXG4gIHdpZHRoOiAxMTBweDtcclxuXHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InfoprincipalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-infoprincipal',
          templateUrl: './infoprincipal.component.html',
          styleUrls: ['./infoprincipal.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/layout/components/infosecundaria/infosecundaria.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/layout/components/infosecundaria/infosecundaria.component.ts ***!
    \******************************************************************************/

  /*! exports provided: InfosecundariaComponent */

  /***/
  function srcAppLayoutComponentsInfosecundariaInfosecundariaComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InfosecundariaComponent", function () {
      return InfosecundariaComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var InfosecundariaComponent =
    /*#__PURE__*/
    function () {
      function InfosecundariaComponent() {
        _classCallCheck(this, InfosecundariaComponent);
      }

      _createClass(InfosecundariaComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return InfosecundariaComponent;
    }();

    InfosecundariaComponent.ɵfac = function InfosecundariaComponent_Factory(t) {
      return new (t || InfosecundariaComponent)();
    };

    InfosecundariaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: InfosecundariaComponent,
      selectors: [["app-infosecundaria"]],
      decls: 2,
      vars: 0,
      consts: [[1, "infosecundaria"]],
      template: function InfosecundariaComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, commodi reprehenderit hic omnis molestias magni adipisci. Molestiae veritatis quisquam saepe quae quam, vel rerum quod necessitatibus, vitae nobis magnam sequi?\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".infosecundaria[_ngcontent-%COMP%]{\r\n  background-color: #fff;\r\n  width: 100%;\r\n  min-height: 250px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2NvbXBvbmVudHMvaW5mb3NlY3VuZGFyaWEvaW5mb3NlY3VuZGFyaWEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2NvbXBvbmVudHMvaW5mb3NlY3VuZGFyaWEvaW5mb3NlY3VuZGFyaWEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbmZvc2VjdW5kYXJpYXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1pbi1oZWlnaHQ6IDI1MHB4O1xyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InfosecundariaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-infosecundaria',
          templateUrl: './infosecundaria.component.html',
          styleUrls: ['./infosecundaria.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/layout/components/infoterciaria/infoterciaria.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/layout/components/infoterciaria/infoterciaria.component.ts ***!
    \****************************************************************************/

  /*! exports provided: InfoterciariaComponent */

  /***/
  function srcAppLayoutComponentsInfoterciariaInfoterciariaComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InfoterciariaComponent", function () {
      return InfoterciariaComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var InfoterciariaComponent =
    /*#__PURE__*/
    function () {
      function InfoterciariaComponent() {
        _classCallCheck(this, InfoterciariaComponent);
      }

      _createClass(InfoterciariaComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return InfoterciariaComponent;
    }();

    InfoterciariaComponent.ɵfac = function InfoterciariaComponent_Factory(t) {
      return new (t || InfoterciariaComponent)();
    };

    InfoterciariaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: InfoterciariaComponent,
      selectors: [["app-infoterciaria"]],
      decls: 2,
      vars: 0,
      consts: [[1, "infoterciaria"]],
      template: function InfoterciariaComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, commodi reprehenderit hic omnis molestias magni adipisci. Molestiae veritatis quisquam saepe quae quam, vel rerum quod necessitatibus, vitae nobis magnam sequi?\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".infoterciaria[_ngcontent-%COMP%]{\r\n  \r\n  width: 100%;\r\n  min-height: 450px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2NvbXBvbmVudHMvaW5mb3RlcmNpYXJpYS9pbmZvdGVyY2lhcmlhLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw0QkFBNEI7RUFDNUIsV0FBVztFQUNYLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9jb21wb25lbnRzL2luZm90ZXJjaWFyaWEvaW5mb3RlcmNpYXJpYS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmluZm90ZXJjaWFyaWF7XHJcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogIzAwMDsgKi9cclxuICB3aWR0aDogMTAwJTtcclxuICBtaW4taGVpZ2h0OiA0NTBweDtcclxufVxyXG5cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InfoterciariaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-infoterciaria',
          templateUrl: './infoterciaria.component.html',
          styleUrls: ['./infoterciaria.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/layout/components/inicio/inicio.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/layout/components/inicio/inicio.component.ts ***!
    \**************************************************************/

  /*! exports provided: InicioComponent */

  /***/
  function srcAppLayoutComponentsInicioInicioComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InicioComponent", function () {
      return InicioComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var InicioComponent =
    /*#__PURE__*/
    function () {
      function InicioComponent() {
        _classCallCheck(this, InicioComponent);
      }

      _createClass(InicioComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return InicioComponent;
    }();

    InicioComponent.ɵfac = function InicioComponent_Factory(t) {
      return new (t || InicioComponent)();
    };

    InicioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: InicioComponent,
      selectors: [["app-inicio"]],
      decls: 2,
      vars: 0,
      template: function InicioComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "inicio works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9jb21wb25lbnRzL2luaWNpby9pbmljaW8uY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InicioComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-inicio',
          templateUrl: './inicio.component.html',
          styleUrls: ['./inicio.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/layout/components/layout/layout.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/layout/components/layout/layout.component.ts ***!
    \**************************************************************/

  /*! exports provided: LayoutComponent */

  /***/
  function srcAppLayoutComponentsLayoutLayoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LayoutComponent", function () {
      return LayoutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../shared/components/header/header.component */
    "./src/app/shared/components/header/header.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../shared/components/footer/footer.component */
    "./src/app/shared/components/footer/footer.component.ts");

    var LayoutComponent =
    /*#__PURE__*/
    function () {
      function LayoutComponent() {
        _classCallCheck(this, LayoutComponent);
      }

      _createClass(LayoutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LayoutComponent;
    }();

    LayoutComponent.ɵfac = function LayoutComponent_Factory(t) {
      return new (t || LayoutComponent)();
    };

    LayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LayoutComponent,
      selectors: [["app-layout"]],
      decls: 3,
      vars: 0,
      template: function LayoutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer");
        }
      },
      directives: [_shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9jb21wb25lbnRzL2xheW91dC9sYXlvdXQuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-layout',
          templateUrl: './layout.component.html',
          styleUrls: ['./layout.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/layout/components/nosotros/nosotros.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/layout/components/nosotros/nosotros.component.ts ***!
    \******************************************************************/

  /*! exports provided: NosotrosComponent */

  /***/
  function srcAppLayoutComponentsNosotrosNosotrosComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NosotrosComponent", function () {
      return NosotrosComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var NosotrosComponent =
    /*#__PURE__*/
    function () {
      function NosotrosComponent() {
        _classCallCheck(this, NosotrosComponent);
      }

      _createClass(NosotrosComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NosotrosComponent;
    }();

    NosotrosComponent.ɵfac = function NosotrosComponent_Factory(t) {
      return new (t || NosotrosComponent)();
    };

    NosotrosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NosotrosComponent,
      selectors: [["app-nosotros"]],
      decls: 2,
      vars: 0,
      template: function NosotrosComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "nosotros works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9jb21wb25lbnRzL25vc290cm9zL25vc290cm9zLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NosotrosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-nosotros',
          templateUrl: './nosotros.component.html',
          styleUrls: ['./nosotros.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/layout/layout-routing.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/layout/layout-routing.module.ts ***!
    \*************************************************/

  /*! exports provided: LayoutRoutingModule */

  /***/
  function srcAppLayoutLayoutRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LayoutRoutingModule", function () {
      return LayoutRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/home/home.component */
    "./src/app/layout/components/home/home.component.ts");
    /* harmony import */


    var _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/layout/layout.component */
    "./src/app/layout/components/layout/layout.component.ts");
    /* harmony import */


    var _components_nosotros_nosotros_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/nosotros/nosotros.component */
    "./src/app/layout/components/nosotros/nosotros.component.ts");

    var routes = [{
      path: '',
      component: _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_3__["LayoutComponent"],
      children: [{
        path: '',
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
      }, {
        path: 'nosotros',
        component: _components_nosotros_nosotros_component__WEBPACK_IMPORTED_MODULE_4__["NosotrosComponent"]
      }]
    }];

    var LayoutRoutingModule = function LayoutRoutingModule() {
      _classCallCheck(this, LayoutRoutingModule);
    };

    LayoutRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: LayoutRoutingModule
    });
    LayoutRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function LayoutRoutingModule_Factory(t) {
        return new (t || LayoutRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LayoutRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/layout/layout.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/layout/layout.module.ts ***!
    \*****************************************/

  /*! exports provided: LayoutModule */

  /***/
  function srcAppLayoutLayoutModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LayoutModule", function () {
      return LayoutModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _layout_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./layout-routing.module */
    "./src/app/layout/layout-routing.module.ts");
    /* harmony import */


    var _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/layout/layout.component */
    "./src/app/layout/components/layout/layout.component.ts");
    /* harmony import */


    var _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/home/home.component */
    "./src/app/layout/components/home/home.component.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _components_banner_banner_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/banner/banner.component */
    "./src/app/layout/components/banner/banner.component.ts");
    /* harmony import */


    var _components_infoprincipal_infoprincipal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/infoprincipal/infoprincipal.component */
    "./src/app/layout/components/infoprincipal/infoprincipal.component.ts");
    /* harmony import */


    var _components_infosecundaria_infosecundaria_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/infosecundaria/infosecundaria.component */
    "./src/app/layout/components/infosecundaria/infosecundaria.component.ts");
    /* harmony import */


    var _components_infoterciaria_infoterciaria_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/infoterciaria/infoterciaria.component */
    "./src/app/layout/components/infoterciaria/infoterciaria.component.ts");
    /* harmony import */


    var _components_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/inicio/inicio.component */
    "./src/app/layout/components/inicio/inicio.component.ts");
    /* harmony import */


    var _components_nosotros_nosotros_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/nosotros/nosotros.component */
    "./src/app/layout/components/nosotros/nosotros.component.ts");

    var LayoutModule = function LayoutModule() {
      _classCallCheck(this, LayoutModule);
    };

    LayoutModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: LayoutModule
    });
    LayoutModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function LayoutModule_Factory(t) {
        return new (t || LayoutModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _layout_routing_module__WEBPACK_IMPORTED_MODULE_2__["LayoutRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LayoutModule, {
        declarations: [_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_3__["LayoutComponent"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], _components_banner_banner_component__WEBPACK_IMPORTED_MODULE_6__["BannerComponent"], _components_infoprincipal_infoprincipal_component__WEBPACK_IMPORTED_MODULE_7__["InfoprincipalComponent"], _components_infosecundaria_infosecundaria_component__WEBPACK_IMPORTED_MODULE_8__["InfosecundariaComponent"], _components_infoterciaria_infoterciaria_component__WEBPACK_IMPORTED_MODULE_9__["InfoterciariaComponent"], _components_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_10__["InicioComponent"], _components_nosotros_nosotros_component__WEBPACK_IMPORTED_MODULE_11__["NosotrosComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _layout_routing_module__WEBPACK_IMPORTED_MODULE_2__["LayoutRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_3__["LayoutComponent"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], _components_banner_banner_component__WEBPACK_IMPORTED_MODULE_6__["BannerComponent"], _components_infoprincipal_infoprincipal_component__WEBPACK_IMPORTED_MODULE_7__["InfoprincipalComponent"], _components_infosecundaria_infosecundaria_component__WEBPACK_IMPORTED_MODULE_8__["InfosecundariaComponent"], _components_infoterciaria_infoterciaria_component__WEBPACK_IMPORTED_MODULE_9__["InfoterciariaComponent"], _components_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_10__["InicioComponent"], _components_nosotros_nosotros_component__WEBPACK_IMPORTED_MODULE_11__["NosotrosComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _layout_routing_module__WEBPACK_IMPORTED_MODULE_2__["LayoutRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=layout-layout-module-es5.js.map