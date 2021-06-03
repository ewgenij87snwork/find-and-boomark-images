(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~containers-bookmarks-bookmarks-module~containers-search-search-module"],{

/***/ "6/yj":
/*!***********************************************!*\
  !*** ./src/app/components/elements.module.ts ***!
  \***********************************************/
/*! exports provided: ElementsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementsModule", function() { return ElementsModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _images_list_images_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images-list/images-list.component */ "T+D3");
/* harmony import */ var _image_card_image_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./image-card/image-card.component */ "m04v");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");








class ElementsModule {
}
ElementsModule.ɵfac = function ElementsModule_Factory(t) { return new (t || ElementsModule)(); };
ElementsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: ElementsModule });
ElementsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_4__["MatChipsModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["FlexLayoutModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](ElementsModule, { declarations: [_image_card_image_card_component__WEBPACK_IMPORTED_MODULE_6__["ImageCardComponent"],
        _images_list_images_list_component__WEBPACK_IMPORTED_MODULE_5__["ImagesListComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_4__["MatChipsModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["FlexLayoutModule"]], exports: [_image_card_image_card_component__WEBPACK_IMPORTED_MODULE_6__["ImageCardComponent"],
        _images_list_images_list_component__WEBPACK_IMPORTED_MODULE_5__["ImagesListComponent"]] }); })();


/***/ }),

/***/ "T+D3":
/*!*****************************************************************!*\
  !*** ./src/app/components/images-list/images-list.component.ts ***!
  \*****************************************************************/
/*! exports provided: ImagesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagesListComponent", function() { return ImagesListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _image_card_image_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../image-card/image-card.component */ "m04v");




function ImagesListComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-image-card", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const image_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("image", image_r1)("bookmarkIt", !!ctx_r0.bookmarkIt);
} }
class ImagesListComponent {
}
ImagesListComponent.ɵfac = function ImagesListComponent_Factory(t) { return new (t || ImagesListComponent)(); };
ImagesListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ImagesListComponent, selectors: [["app-images-list"]], inputs: { images: "images", bookmarkIt: "bookmarkIt" }, decls: 2, vars: 1, consts: [["fxLayout", "row wrap", "fxLayoutGap", "grid", "fxLayoutAlign", "space-evenly start", 1, "image-list"], ["fxFlex.xl", "25%", "fxFlex.lg", "33%", "fxFlex.md", "50%", "fxFlex.xs", "100%", 4, "ngFor", "ngForOf"], ["fxFlex.xl", "25%", "fxFlex.lg", "33%", "fxFlex.md", "50%", "fxFlex.xs", "100%"], [3, "image", "bookmarkIt"]], template: function ImagesListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ImagesListComponent_div_1_Template, 2, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.images);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultFlexDirective"], _image_card_image_card_component__WEBPACK_IMPORTED_MODULE_3__["ImageCardComponent"]], styles: [".image-list[_ngcontent-%COMP%] {\n  padding-left: 20px;\n}\n\n@media (max-width: 900px) {\n  .image-list[_ngcontent-%COMP%] {\n    padding-left: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2ltYWdlcy1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsZUFBQTtFQUNGO0FBQ0YiLCJmaWxlIjoiaW1hZ2VzLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1hZ2UtbGlzdCB7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDkwMHB4KSB7XG4gIC5pbWFnZS1saXN0IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ "iBRs":
/*!****************************************!*\
  !*** ./src/app/rest/images.service.ts ***!
  \****************************************/
/*! exports provided: ImagesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagesService", function() { return ImagesService; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-webstorage */ "e4Ts");





class ImagesService {
    constructor(http, storageService) {
        this.http = http;
        this.storageService = storageService;
        this.apiKey = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiKey;
        this.bookmarksArray = [];
        this.bookmarks = 'bookmarks';
    }
    saveBookmark(image) {
        this.storageService.store(this.bookmarks, this.bookmarksArray);
        this.retrieveBookmarks();
        if (this.bookmarksArray !== null && !this.bookmarksArray.find(existImage => existImage === image)) {
            this.bookmarksArray.push(image);
            this.storageService.store(this.bookmarks, this.bookmarksArray);
        }
    }
    removeBookmark(image) {
        this.retrieveBookmarks();
        this.storageService.store(this.bookmarks, this.bookmarksArray.filter(bookmark => bookmark !== image));
    }
    retrieveBookmarks() {
        return this.bookmarksArray = this.storageService.retrieve(this.bookmarks);
    }
    searchImages(searchTerm, page = 1, perpage = 20) {
        return this.http
            .get('https://www.flickr.com/services/rest/', {
            params: {
                tags: searchTerm,
                method: 'flickr.photos.search',
                format: 'json',
                nojsoncallback: '1',
                media: 'photos',
                per_page: perpage.toString(),
                page: page.toString(),
                extras: 'tags, url_w',
                api_key: this.apiKey,
            },
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(response => response.photos));
    }
}
ImagesService.ɵfac = function ImagesService_Factory(t) { return new (t || ImagesService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](ngx_webstorage__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"])); };
ImagesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ImagesService, factory: ImagesService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "m04v":
/*!***************************************************************!*\
  !*** ./src/app/components/image-card/image-card.component.ts ***!
  \***************************************************************/
/*! exports provided: ImageCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageCardComponent", function() { return ImageCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _rest_images_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../rest/images.service */ "iBRs");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");






function ImageCardComponent_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImageCardComponent_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.onAddBookmark(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Bookmark it! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ImageCardComponent_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImageCardComponent_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.onRemoveBookmark(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Remove Bookmark ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ImageCardComponent_mat_chip_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-chip", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tag_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", tag_r7, " ");
} }
class ImageCardComponent {
    constructor(imagesService) {
        this.imagesService = imagesService;
    }
    ngOnInit() {
        this.tags = this.image.tags
            .split(' ')
            .filter(tag => tag.length < 7)
            .splice(0, 4);
    }
    onAddBookmark() {
        this.imagesService.saveBookmark(this.image);
    }
    onRemoveBookmark() {
        this.imagesService.removeBookmark(this.image);
    }
}
ImageCardComponent.ɵfac = function ImageCardComponent_Factory(t) { return new (t || ImageCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_rest_images_service__WEBPACK_IMPORTED_MODULE_1__["ImagesService"])); };
ImageCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ImageCardComponent, selectors: [["app-image-card"]], inputs: { image: "image", bookmarkIt: "bookmarkIt" }, decls: 8, vars: 5, consts: [[1, "image", 3, "src", "alt"], ["mat-raised-button", "", 3, "click", 4, "ngIf"], ["aria-label", "Tags"], ["class", "tag", "disabled", "", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", 3, "click"], ["disabled", "", 1, "tag"]], template: function ImageCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ImageCardComponent_button_3_Template, 2, 0, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ImageCardComponent_button_4_Template, 2, 0, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-chip-list", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ImageCardComponent_mat_chip_7_Template, 2, 1, "mat-chip", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.image.url_w, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx.image.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.bookmarkIt);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.bookmarkIt);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tags);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardActions"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardContent"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_4__["MatChipList"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_4__["MatChip"]], styles: ["mat-card[_ngcontent-%COMP%] {\n  margin: 10px;\n}\nmat-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  object-fit: cover;\n  width: 100%;\n  height: 400px;\n}\nmat-card[_ngcontent-%COMP%]   mat-chip.tag[_ngcontent-%COMP%] {\n  color: #fff;\n  opacity: 1;\n  background: rgba(37, 89, 134, 0.5);\n}\nmat-card[_ngcontent-%COMP%]   mat-card-actions[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2ltYWdlLWNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FBQ0Y7QUFDRTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUFDSjtBQUVFO0VBQ0UsV0FBQTtFQUNBLFVBQUE7RUFDQSxrQ0FBQTtBQUFKO0FBR0U7RUFDRSxhQUFBO0FBREoiLCJmaWxlIjoiaW1hZ2UtY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1jYXJkIHtcbiAgbWFyZ2luOiAxMHB4O1xuXG4gIGltZyB7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA0MDBweDtcbiAgfVxuXG4gIG1hdC1jaGlwLnRhZyB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgb3BhY2l0eTogMTtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDM3LCA4OSwgMTM0LCAwLjUpO1xuICB9XG5cbiAgbWF0LWNhcmQtYWN0aW9ucyB7XG4gICAgcGFkZGluZzogMTBweFxuICB9XG59XG4iXX0= */"] });


/***/ })

}]);
//# sourceMappingURL=default~containers-bookmarks-bookmarks-module~containers-search-search-module.js.map