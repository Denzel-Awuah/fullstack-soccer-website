(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Code\springboot-angular-soccersite\springboot-angular-soccersite\springboot-angular-soccersite\src\frontend\src\main.ts */"zUnb");


/***/ }),

/***/ "1His":
/*!****************************************************!*\
  !*** ./src/app/service/players-service.service.js ***!
  \****************************************************/
/*! exports provided: PlayersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayersService", function() { return PlayersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../config.js */ "obyI");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class PlayersService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getAllPlayers() {
        return this.httpClient.get(_config_js__WEBPACK_IMPORTED_MODULE_1__["postgresUrl"] + "/players");
    }
    addNewPlayer(data) {
        return this.httpClient.post(_config_js__WEBPACK_IMPORTED_MODULE_1__["postgresUrl"] + "/players", {
            body: data
        });
    }
    deletePlayer(data) {
        return this.httpClient.delete(_config_js__WEBPACK_IMPORTED_MODULE_1__["postgresUrl"] + "/players/" + data);
    }
}
PlayersService.ɵfac = function PlayersService_Factory(t) { return new (t || PlayersService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
PlayersService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PlayersService, factory: PlayersService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlayersService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();
//# sourceMappingURL=players-service.service.js.map

/***/ }),

/***/ "9FfI":
/*!******************************************************************!*\
  !*** ./src/app/previous-fixtures/previous-fixtures.component.ts ***!
  \******************************************************************/
/*! exports provided: PreviousFixturesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviousFixturesComponent", function() { return PreviousFixturesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../config.js */ "obyI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function PreviousFixturesComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PreviousFixturesComponent_div_3_Template_h2_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const matchGame_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.onTeamSelection(matchGame_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h2", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PreviousFixturesComponent_div_3_Template_h2_click_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const matchGame_r1 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.onTeamSelectionAway(matchGame_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const matchGame_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", matchGame_r1.homeTeam.logo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](matchGame_r1.homeTeam.team_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](matchGame_r1.event_date);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](matchGame_r1.goalsHomeTeam);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](matchGame_r1.goalsAwayTeam);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Referee:\u00A0", matchGame_r1.referee, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", matchGame_r1.awayTeam.logo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](matchGame_r1.awayTeam.team_name);
} }
class PreviousFixturesComponent {
    constructor(router) {
        this.router = router;
    }
    //Navigatate to Home team page 
    onTeamSelection(matchGame) {
        this.router.navigate(['/team', matchGame.homeTeam.team_id]);
    }
    //Navigate to the away team page
    onTeamSelectionAway(matchGame) {
        this.router.navigate(['/team', matchGame.awayTeam.team_id]);
    }
    getData() {
        //Get the Previous Fixtures from API
        fetch("https://api-football-v1.p.rapidapi.com/v2/fixtures/league/524/last/5", _config_js__WEBPACK_IMPORTED_MODULE_1__["secrets"])
            .then(response => response.json())
            .then(data => {
            this.PreviousFixtures = data.api.fixtures;
            this.PreviousFixtures.forEach(function (value) {
                //Edits to the data and referee
                value.event_date = value.event_date.slice(0, 10);
                value.referee = value.referee.slice(0, -9);
            });
        })
            .catch(err => {
            console.log(err);
        });
    }
    ngOnInit() {
        this.getData();
    }
}
PreviousFixturesComponent.ɵfac = function PreviousFixturesComponent_Factory(t) { return new (t || PreviousFixturesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
PreviousFixturesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PreviousFixturesComponent, selectors: [["app-previous-fixtures"]], decls: 4, vars: 1, consts: [[1, "animate__animated", "animate__fadeInRight"], [1, "headings", "theHeading"], ["class", "match-content", 4, "ngFor", "ngForOf"], [1, "match-content"], [1, "column"], [1, "team", "team--home"], [1, "team-logo"], [3, "src"], [1, "team-name", 3, "click"], [1, "match-details"], [1, "match-date", "justify-content-center"], [1, "match-score"], [1, "match-score-number", "match-score-number--leading"], [1, "match-score-divider"], [1, "match-score-number"], [1, "match-referee", "justify-content-center"], [1, "team", "team--away"]], template: function PreviousFixturesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Previous Fixtures");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PreviousFixturesComponent_div_3_Template, 28, 8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.PreviousFixtures);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: ["*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]:after, *[_ngcontent-%COMP%]:before {\r\n\tbox-sizing: border-box;\r\n}\r\n\r\n[_ngcontent-%COMP%]:root {\r\n\t--color-text-primary: #1c2a38;\r\n\t--color-text-secondary: #8A8F98;\r\n\t--color-text-alert: #d72641;\r\n\t--color-text-icon: #dbdade;\r\n\t--color-bg-primary: #fff;\r\n\t--color-bg-secondary: #f3f5f9;\r\n\t--color-bg-alert: #fdeaec;\r\n\t--color-theme-primary: #623ce6;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%], input[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\r\n\tfont: inherit;\r\n}\r\n\r\n.theHeading[_ngcontent-%COMP%]{\r\n\tfont-weight: 700;\r\n\tpadding-top: 30px;\r\n\tpadding-bottom: 30px;\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n\tdisplay: block;\r\n}\r\n\r\nstrong[_ngcontent-%COMP%] {\r\n\tfont-weight: 600;\r\n}\r\n\r\nbody[_ngcontent-%COMP%] {\r\n\tfont-family: \"Inter\", sans-serif;\r\n\tline-height: 1.5;\r\n\tcolor: var(--color-text-primary);\r\n\tbackground-color: var(--color-bg-secondary);\r\n}\r\n\r\n.pdt[_ngcontent-%COMP%]{\r\n    padding-top: 50px;\r\n\tpadding-bottom: 30px;\r\n}\r\n\r\n.match[_ngcontent-%COMP%] {\r\n\tbackground-color: var(--color-bg-primary);\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tmin-width: 600px;\r\n\tborder-radius: 10px;\r\n\tbox-shadow: 0 0 2px 0 rgba(#303030, 0.1), 0 4px 4px 0 rgba(#303030, 0.1);\r\n}\r\n\r\n.match-header[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\tborder-bottom: 2px solid rgba(#303030, 0.1);\r\n\tpadding: 16px;\r\n}\r\n\r\n.getbtn[_ngcontent-%COMP%]{\r\n\tdisplay: block;\r\n\ttext-align: center;\r\n\tmargin: 0 auto;\r\n}\r\n\r\n.getbtn[_ngcontent-%COMP%]:hover{\r\n\tbackground-color:black;\r\n\tcolor:yellow;\r\n}\r\n\r\n.match-status[_ngcontent-%COMP%] {\r\n\tbackground-color: var(--color-bg-alert);\r\n\tcolor: var(--color-text-alert);\r\n\tpadding: 8px 12px;\r\n\tborder-radius: 6px;\r\n\tfont-weight: 600;\r\n\tfont-size: 14px;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tline-height: 1;\r\n\tmargin-right: auto;\r\n\r\n}\r\n\r\n.match-tournament[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n\tfont-weight: 700;\r\n\tfont-size: 24px;\r\n\tcursor: pointer;\r\n\t\r\n}\r\n\r\n.match-tournament[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n\t\twidth: 85px;\r\n        align-items: center;\r\n        justify-content: center;\r\n\t}\r\n\r\n.match-actions[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\tmargin-left: auto;\r\n}\r\n\r\n.btn-icon[_ngcontent-%COMP%] {\r\n\tborder: 0;\r\n\tbackground-color: transparent;\r\n\tcolor: var(--color-text-icon);\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n}\r\n\r\n.match-content[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\tposition: relative;\r\n}\r\n\r\n.column[_ngcontent-%COMP%] {\r\n\tpadding: 1px;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\twidth: calc(100% / 3);\r\n}\r\n\r\n.team[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n\tmargin-bottom: 2em;\r\n}\r\n\r\n.team-logo[_ngcontent-%COMP%] {\r\n\twidth: 80px;\r\n\theight: 80px;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tmargin-bottom: 3px;\r\n\tjustify-content: center;\r\n\tborder-radius: 50%;\r\n\tbackground-color: var(--color-bg-primary);\r\n\tbox-shadow: 0 4px 4px 0 rgba(#303030, 0.15),\r\n\t\t0 0 0 15px var(--color-bg-secondary);\r\n\t\r\n}\r\n\r\np[_ngcontent-%COMP%]{\r\n\tmargin-bottom: 0px;;\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n\t\twidth: 80px;\r\n\t\theight: 80px;\r\n\t\t\r\n    }\r\n\r\n.team-name[_ngcontent-%COMP%] {\r\n\ttext-align: center;\r\n\tmargin-top: 1px;\r\n\tfont-size: 20px;\r\n\tfont-weight: 480;\r\n\tcursor: pointer;\r\n}\r\n\r\n.team-name[_ngcontent-%COMP%]:hover{\r\n\tcolor: blue;\r\n\tfont-weight: 800;\r\n}\r\n\r\n.match-details[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n\twidth: 100%;\r\n}\r\n\r\n.match-date[_ngcontent-%COMP%], .match-referee[_ngcontent-%COMP%] {\r\n    display: block;\r\n    font-size: 19px;\r\n    width: 170px;\r\n\tcolor: var(--color-text-secondary);\r\n\ttext-align: center;\r\n}\r\n\r\n.match-score[_ngcontent-%COMP%] {\r\n\tmargin-top: 12px;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n}\r\n\r\n.match-score-number[_ngcontent-%COMP%] {\r\n\tfont-size: 28px;\r\n\tfont-weight: 600;\r\n\tline-height: 1;\r\n\t\r\n}\r\n\r\n.match-score-divider[_ngcontent-%COMP%] {\r\n\tfont-size: 22px;\r\n\tfont-weight: 700;\r\n\tline-height: 1;\r\n\tcolor: var(--color-text-icon);\r\n\tmargin-left: 10px;\r\n\tmargin-right: 10px;\r\n}\r\n\r\n.match-referee[_ngcontent-%COMP%] {\r\n    margin-top: 12px;\r\n\tmargin-bottom: 30px;\r\n\twidth: 250px;\r\n\ttext-align: center;\r\n}\r\n\r\n.headings[_ngcontent-%COMP%]{\r\n    margin-top: 20px;\r\n    text-align: center;\r\n}\r\n\r\ntd[_ngcontent-%COMP%]:nth-child(1) {\r\n    padding-left: 10px;\r\n  }\r\n\r\n.scorersHeader[_ngcontent-%COMP%]{\r\n    background-color: rgb(70, 5, 131);\r\n    color: white;\r\n}\r\n\r\n.leagueTable[_ngcontent-%COMP%]{\r\n\twidth: 80%;\r\n\tmargin-left: auto;\r\n\tmargin-right: auto;\r\n\theight: 100%;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\ttext-align: center;\r\n\tborder: 3px groove rgb(70, 5, 131);\r\n  }\r\n\r\n.leagueTable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{\r\n\t\r\n  }\r\n\r\n.tableArea[_ngcontent-%COMP%]{\r\n\tmargin: 140px;\r\n  }\r\n\r\n.leagueHeading[_ngcontent-%COMP%]{\r\n\t  text-align: center;\r\n\t  font-weight: 700;\r\n  }\r\n\r\n.appScorers[_ngcontent-%COMP%]{\r\n\t  width: 100%;\r\n\t  height: 100%;\r\n  }\r\n\r\n.teamName[_ngcontent-%COMP%]{\r\n\tcursor: pointer;\r\n    width: 20%;\r\n    margin: 0 auto;\r\n    align-items: center;\r\n}\r\n\r\n.teamName[_ngcontent-%COMP%]:hover{\r\n    color: blue;\r\n    font-weight: 500;\r\n}\r\n\r\n.tableStar[_ngcontent-%COMP%]{\r\n\tfont-size: 15px;\r\n\ttransition: 0.5s;\r\n\tcursor: pointer;\r\n}\r\n\r\n.tableStar[_ngcontent-%COMP%]:hover{\r\n\tfont-size: 30px;\r\n\ttransition: 0.3s;\r\n}\r\n\r\n.teamName[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\ndisplay: inline-block;\r\npadding-left: 30px;\r\n}\r\n\r\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n    padding: .75rem;\r\n    vertical-align: middle;\r\n    border-top: 1px solid #dee2e6;\r\n}\r\n\r\n.tableImg[_ngcontent-%COMP%]{\r\n\tmargin: 0 auto;\r\n\tdisplay: inline-block;\r\n}\r\n\r\n\r\n\r\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{\r\n\tdisplay: table;\r\n\ttable-layout: fixed;\r\n\twidth: 100%;\r\n\ttext-align: center;\r\n\t\r\n}\r\n\r\nnav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n\tlist-style: none;\r\n\tdisplay: table-cell;\r\n\tvertical-align: middle;\r\n\tbackground: rgb(70, 5, 131);\r\n\t\r\n  }\r\n\r\n.pb[_ngcontent-%COMP%]{\r\n\t  padding-bottom: 100px;\r\n  }\r\n\r\nnav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-last-child(n+6), nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-last-child(n+6)    ~ *[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n \r\n}\r\n\r\nnav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-last-child(n+6)   a[_ngcontent-%COMP%], nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-last-child(n+6)    ~ *[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n\r\n}\r\n\r\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n\t\r\n\toverflow: hidden;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n\ttext-decoration: none;\r\n\tcolor: #fff;\r\n\tdisplay: block;\r\n\tpadding: 0.75em 1em;\r\n\tfont-size: 1.25em;\r\n  }\r\n\r\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus {\r\n\tcolor: #462997;\r\n\tbackground-color: #2f971d;\r\n\tfont-weight: 550;\r\n  }\r\n\r\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n\tcolor: #cbce1f;\r\n   }\r\n\r\n#firstone[_ngcontent-%COMP%]{\r\n\tborder-top-left-radius:15px;\r\n\tborder-bottom-left-radius:15px;\r\n   }\r\n\r\n#lastone[_ngcontent-%COMP%]{\r\n\tborder-top-right-radius:15px;\r\n\tborder-bottom-right-radius:15px;\r\n   }\n/*# sourceMappingURL=data:application/json;base64,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QW1CO0NBQ25CLGlCQUFpQjtFQUNoQjs7QUFFRjtDQUNDLGNBQWM7Q0FDZCx5QkFBeUI7Q0FDekIsZ0JBQWdCO0VBQ2Y7O0FBQ0M7Q0FDRixjQUFjO0dBQ1o7O0FBR0E7Q0FDRiwyQkFBMkI7Q0FDM0IsOEJBQThCO0dBQzVCOztBQUVBO0NBQ0YsNEJBQTRCO0NBQzVCLCtCQUErQjtHQUM3QiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4qLFxyXG4qOmFmdGVyLFxyXG4qOmJlZm9yZSB7XHJcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuOnJvb3Qge1xyXG5cdC0tY29sb3ItdGV4dC1wcmltYXJ5OiAjMWMyYTM4O1xyXG5cdC0tY29sb3ItdGV4dC1zZWNvbmRhcnk6ICM4QThGOTg7XHJcblx0LS1jb2xvci10ZXh0LWFsZXJ0OiAjZDcyNjQxO1xyXG5cdC0tY29sb3ItdGV4dC1pY29uOiAjZGJkYWRlO1xyXG5cdC0tY29sb3ItYmctcHJpbWFyeTogI2ZmZjtcclxuXHQtLWNvbG9yLWJnLXNlY29uZGFyeTogI2YzZjVmOTtcclxuXHQtLWNvbG9yLWJnLWFsZXJ0OiAjZmRlYWVjO1xyXG5cdC0tY29sb3ItdGhlbWUtcHJpbWFyeTogIzYyM2NlNjtcclxufVxyXG5cclxuYnV0dG9uLFxyXG5pbnB1dCxcclxuc2VsZWN0LFxyXG50ZXh0YXJlYSB7XHJcblx0Zm9udDogaW5oZXJpdDtcclxufVxyXG5cclxuLnRoZUhlYWRpbmd7XHJcblx0Zm9udC13ZWlnaHQ6IDcwMDtcclxuXHRwYWRkaW5nLXRvcDogMzBweDtcclxuXHRwYWRkaW5nLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuaW1nIHtcclxuXHRkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuc3Ryb25nIHtcclxuXHRmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG5cclxuYm9keSB7XHJcblx0Zm9udC1mYW1pbHk6IFwiSW50ZXJcIiwgc2Fucy1zZXJpZjtcclxuXHRsaW5lLWhlaWdodDogMS41O1xyXG5cdGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LXByaW1hcnkpO1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJnLXNlY29uZGFyeSk7XHJcbn1cclxuXHJcbi5wZHR7XHJcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcclxuXHRwYWRkaW5nLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuLm1hdGNoIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1iZy1wcmltYXJ5KTtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0bWluLXdpZHRoOiA2MDBweDtcclxuXHRib3JkZXItcmFkaXVzOiAxMHB4O1xyXG5cdGJveC1zaGFkb3c6IDAgMCAycHggMCByZ2JhKCMzMDMwMzAsIDAuMSksIDAgNHB4IDRweCAwIHJnYmEoIzMwMzAzMCwgMC4xKTtcclxufVxyXG5cclxuLm1hdGNoLWhlYWRlciB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiYSgjMzAzMDMwLCAwLjEpO1xyXG5cdHBhZGRpbmc6IDE2cHg7XHJcbn1cclxuXHJcbi5nZXRidG57XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4uZ2V0YnRuOmhvdmVye1xyXG5cdGJhY2tncm91bmQtY29sb3I6YmxhY2s7XHJcblx0Y29sb3I6eWVsbG93O1xyXG59XHJcblxyXG4ubWF0Y2gtc3RhdHVzIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1iZy1hbGVydCk7XHJcblx0Y29sb3I6IHZhcigtLWNvbG9yLXRleHQtYWxlcnQpO1xyXG5cdHBhZGRpbmc6IDhweCAxMnB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDZweDtcclxuXHRmb250LXdlaWdodDogNjAwO1xyXG5cdGZvbnQtc2l6ZTogMTRweDtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0bGluZS1oZWlnaHQ6IDE7XHJcblx0bWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG5cclxufVxyXG5cclxuLm1hdGNoLXRvdXJuYW1lbnQge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0Zm9udC13ZWlnaHQ6IDcwMDtcclxuXHRmb250LXNpemU6IDI0cHg7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdFxyXG59XHJcbi5tYXRjaC10b3VybmFtZW50IGltZyB7XHJcblx0XHR3aWR0aDogODVweDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdH1cclxuXHJcblxyXG4ubWF0Y2gtYWN0aW9ucyB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRtYXJnaW4tbGVmdDogYXV0bztcclxufVxyXG5cclxuLmJ0bi1pY29uIHtcclxuXHRib3JkZXI6IDA7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcblx0Y29sb3I6IHZhcigtLWNvbG9yLXRleHQtaWNvbik7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4ubWF0Y2gtY29udGVudCB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5jb2x1bW4ge1xyXG5cdHBhZGRpbmc6IDFweDtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0d2lkdGg6IGNhbGMoMTAwJSAvIDMpO1xyXG59XHJcblxyXG4udGVhbSB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0bWFyZ2luLWJvdHRvbTogMmVtO1xyXG59XHJcblxyXG4udGVhbS1sb2dvIHtcclxuXHR3aWR0aDogODBweDtcclxuXHRoZWlnaHQ6IDgwcHg7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdG1hcmdpbi1ib3R0b206IDNweDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYmctcHJpbWFyeSk7XHJcblx0Ym94LXNoYWRvdzogMCA0cHggNHB4IDAgcmdiYSgjMzAzMDMwLCAwLjE1KSxcclxuXHRcdDAgMCAwIDE1cHggdmFyKC0tY29sb3ItYmctc2Vjb25kYXJ5KTtcclxuXHRcclxufVxyXG5cclxucHtcclxuXHRtYXJnaW4tYm90dG9tOiAwcHg7O1xyXG59XHJcblxyXG5cclxuXHJcbmltZyB7XHJcblx0XHR3aWR0aDogODBweDtcclxuXHRcdGhlaWdodDogODBweDtcclxuXHRcdFxyXG4gICAgfVxyXG4gICAgXHJcblxyXG4udGVhbS1uYW1lIHtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0bWFyZ2luLXRvcDogMXB4O1xyXG5cdGZvbnQtc2l6ZTogMjBweDtcclxuXHRmb250LXdlaWdodDogNDgwO1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnRlYW0tbmFtZTpob3ZlcntcclxuXHRjb2xvcjogYmx1ZTtcclxuXHRmb250LXdlaWdodDogODAwO1xyXG59XHJcblxyXG4ubWF0Y2gtZGV0YWlscyB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0d2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5tYXRjaC1kYXRlLCAubWF0Y2gtcmVmZXJlZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgIHdpZHRoOiAxNzBweDtcclxuXHRjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1zZWNvbmRhcnkpO1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuICAgIFxyXG5cclxuLm1hdGNoLXNjb3JlIHtcclxuXHRtYXJnaW4tdG9wOiAxMnB4O1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLm1hdGNoLXNjb3JlLW51bWJlciB7XHJcblx0Zm9udC1zaXplOiAyOHB4O1xyXG5cdGZvbnQtd2VpZ2h0OiA2MDA7XHJcblx0bGluZS1oZWlnaHQ6IDE7XHJcblx0XHJcbn1cclxuXHJcbi5tYXRjaC1zY29yZS1kaXZpZGVyIHtcclxuXHRmb250LXNpemU6IDIycHg7XHJcblx0Zm9udC13ZWlnaHQ6IDcwMDtcclxuXHRsaW5lLWhlaWdodDogMTtcclxuXHRjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1pY29uKTtcclxuXHRtYXJnaW4tbGVmdDogMTBweDtcclxuXHRtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcblxyXG4ubWF0Y2gtcmVmZXJlZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xyXG5cdG1hcmdpbi1ib3R0b206IDMwcHg7XHJcblx0d2lkdGg6IDI1MHB4O1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmhlYWRpbmdze1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuXHJcbnRkOm50aC1jaGlsZCgxKSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIC5zY29yZXJzSGVhZGVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDcwLCA1LCAxMzEpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ubGVhZ3VlVGFibGV7XHJcblx0d2lkdGg6IDgwJTtcclxuXHRtYXJnaW4tbGVmdDogYXV0bztcclxuXHRtYXJnaW4tcmlnaHQ6IGF1dG87XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdGJvcmRlcjogM3B4IGdyb292ZSByZ2IoNzAsIDUsIDEzMSk7XHJcbiAgfVxyXG5cclxuICAubGVhZ3VlVGFibGUgdHJ7XHJcblx0XHJcbiAgfVxyXG5cclxuXHJcbiAgLnRhYmxlQXJlYXtcclxuXHRtYXJnaW46IDE0MHB4O1xyXG4gIH1cclxuXHJcbiAgLmxlYWd1ZUhlYWRpbmd7XHJcblx0ICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0ICBmb250LXdlaWdodDogNzAwO1xyXG4gIH1cclxuXHJcbiAgLmFwcFNjb3JlcnN7XHJcblx0ICB3aWR0aDogMTAwJTtcclxuXHQgIGhlaWdodDogMTAwJTtcclxuICB9XHJcblxyXG4gIC50ZWFtTmFtZXtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4udGVhbU5hbWU6aG92ZXJ7XHJcbiAgICBjb2xvcjogYmx1ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi50YWJsZVN0YXJ7XHJcblx0Zm9udC1zaXplOiAxNXB4O1xyXG5cdHRyYW5zaXRpb246IDAuNXM7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4udGFibGVTdGFyOmhvdmVye1xyXG5cdGZvbnQtc2l6ZTogMzBweDtcclxuXHR0cmFuc2l0aW9uOiAwLjNzO1xyXG59XHJcblxyXG4udGVhbU5hbWUgcHtcclxuZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5wYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbn1cclxuXHJcbi50YWJsZSB0ZCwgLnRhYmxlIHRoIHtcclxuICAgIHBhZGRpbmc6IC43NXJlbTtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2RlZTJlNjtcclxufVxyXG5cclxuLnRhYmxlSW1ne1xyXG5cdG1hcmdpbjogMCBhdXRvO1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLyogLS0tLS0gTmF2IEJhciAtLS0tICovXHJcblxyXG5cclxubmF2IHVse1xyXG5cdGRpc3BsYXk6IHRhYmxlO1xyXG5cdHRhYmxlLWxheW91dDogZml4ZWQ7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFxyXG59XHJcblxyXG5uYXYgbGkge1xyXG5cdGxpc3Qtc3R5bGU6IG5vbmU7XHJcblx0ZGlzcGxheTogdGFibGUtY2VsbDtcclxuXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG5cdGJhY2tncm91bmQ6IHJnYig3MCwgNSwgMTMxKTtcclxuXHRcclxuICB9XHJcblxyXG4gIC5wYntcclxuXHQgIHBhZGRpbmctYm90dG9tOiAxMDBweDtcclxuICB9XHJcblxyXG4gIG5hdiBsaTpudGgtbGFzdC1jaGlsZChuKzYpLCBcclxubmF2IGxpOm50aC1sYXN0LWNoaWxkKG4rNikgfiAqIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiBcclxufVxyXG5cclxubmF2IGxpOm50aC1sYXN0LWNoaWxkKG4rNikgYSwgXHJcbm5hdiBsaTpudGgtbGFzdC1jaGlsZChuKzYpIH4gKiBhIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblxyXG59XHJcblxyXG51bCBsaXtcclxuXHRcclxuXHRvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4gIG5hdiBhIHtcclxuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblx0Y29sb3I6ICNmZmY7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0cGFkZGluZzogMC43NWVtIDFlbTtcclxuXHRmb250LXNpemU6IDEuMjVlbTtcclxuICB9XHJcblxyXG5uYXYgYTpmb2N1cyB7XHJcblx0Y29sb3I6ICM0NjI5OTc7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzJmOTcxZDtcclxuXHRmb250LXdlaWdodDogNTUwO1xyXG4gIH0gXHJcbiAgIG5hdiBhOmhvdmVye1xyXG5cdGNvbG9yOiAjY2JjZTFmO1xyXG4gICB9XHJcblxyXG5cclxuICAgI2ZpcnN0b25le1xyXG5cdGJvcmRlci10b3AtbGVmdC1yYWRpdXM6MTVweDtcclxuXHRib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOjE1cHg7XHJcbiAgIH1cclxuXHJcbiAgICNsYXN0b25le1xyXG5cdGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOjE1cHg7XHJcblx0Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6MTVweDtcclxuICAgfVxyXG5cclxuICAgIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PreviousFixturesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-previous-fixtures',
                templateUrl: './previous-fixtures.component.html',
                styleUrls: ['./../app.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "9sIj":
/*!************************************************************!*\
  !*** ./src/app/player-profile/player-profile.component.ts ***!
  \************************************************************/
/*! exports provided: PlayerProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerProfileComponent", function() { return PlayerProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../config.js */ "obyI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function PlayerProfileComponent_div_0_td_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const thePlayer_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Height:\u00A0 ", thePlayer_r1.player.height, "");
} }
function PlayerProfileComponent_div_0_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Height: \u00A0 N/A");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function PlayerProfileComponent_div_0_td_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const thePlayer_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Weight:\u00A0 ", thePlayer_r1.player.weight, "");
} }
function PlayerProfileComponent_div_0_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Weight: N/A ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function PlayerProfileComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "h2", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h1", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "table", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, PlayerProfileComponent_div_0_td_12_Template, 2, 1, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, PlayerProfileComponent_div_0_ng_template_13_Template, 2, 0, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, PlayerProfileComponent_div_0_td_16_Template, 2, 1, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, PlayerProfileComponent_div_0_ng_template_17_Template, 2, 0, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const thePlayer_r1 = ctx.$implicit;
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](14);
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", thePlayer_r1.player.photo, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", thePlayer_r1.player.firstname, "\u00A0", thePlayer_r1.player.lastname, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](thePlayer_r1.player.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("DOB:\u00A0", thePlayer_r1.player.birth.date, ",\u00A0", thePlayer_r1.player.birth.country, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", thePlayer_r1.player.height != null)("ngIfElse", _r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", thePlayer_r1.player.weight != null)("ngIfElse", _r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Nationality:\u00A0", thePlayer_r1.player.nationality, "");
} }
class PlayerProfileComponent {
    constructor(route) {
        this.route = route;
    }
    getData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let id = this.route.snapshot.paramMap.get('id');
            //V3 - Players information(id)
            const response = yield fetch("https://api-football-v1.p.rapidapi.com/v3/players?id=" + id + "&season=2020", _config_js__WEBPACK_IMPORTED_MODULE_2__["secrets"]);
            const playerData = yield response.json();
            this.playerInfo = playerData.response;
            console.log("Player info");
            console.log(this.playerInfo);
        });
    }
    ngOnInit() {
        this.getData();
    }
}
PlayerProfileComponent.ɵfac = function PlayerProfileComponent_Factory(t) { return new (t || PlayerProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
PlayerProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PlayerProfileComponent, selectors: [["app-player-profile"]], decls: 2, vars: 1, consts: [["class", "card", 4, "ngFor", "ngForOf"], [1, "pb"], [1, "card"], [2, "text-align", "center"], ["alt", "John", 1, "text-center", 2, "width", "100%", 3, "src"], [1, "teamName"], [1, "title"], [1, "playerInfoTable"], [4, "ngIf", "ngIfElse"], ["showNull", ""], ["showNullWeight", ""]], template: function PlayerProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, PlayerProfileComponent_div_0_Template, 22, 11, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.playerInfo);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: [".card[_ngcontent-%COMP%] {\r\n    box-shadow: 8px 7px 13px 15px rgb(0 0 0 / 37%);\r\n    max-width: 600px;\r\n    margin: 0 auto;\r\n    font-family: arial;\r\n    border-radius: 10px;\r\n    margin-top: 70px;\r\n  }\r\n  \r\n.teamName[_ngcontent-%COMP%]{\r\n    margin-top: 7px;\r\n     text-align: center;\r\n}\r\n  \r\n.title[_ngcontent-%COMP%] {\r\n    color: grey;\r\n    font-size: 18px;\r\n    text-align: center;\r\n  }\r\n  \r\n.player-img[_ngcontent-%COMP%]{\r\n  width: 300px;\r\n  height: 300px;\r\n}\r\n  \r\n.player-img-box[_ngcontent-%COMP%]{\r\n  text-align: center;\r\n    width: 500px;\r\n}\r\n  \r\n.noStar[_ngcontent-%COMP%]{\r\n  font-size: 30px;\r\n}\r\n  \r\n.mt-120[_ngcontent-%COMP%]{\r\n  margin-top: 120px;\r\n}\r\n  \r\n.fs-35[_ngcontent-%COMP%]{\r\n  font-size: 30px;\r\n}\r\n  \r\n.tableStar[_ngcontent-%COMP%]{\r\n\tfont-size: 40px;\r\n\ttransition: 0.5s;\r\n}\r\n  \r\n.tableStar[_ngcontent-%COMP%]:hover{\r\n\tfont-size: 50px;\r\n\ttransition: 0.3s;\r\n}\r\n  \r\n.pdt[_ngcontent-%COMP%]{\r\n  padding-top: 75px;\r\n}\r\n  \r\n.pdt-120[_ngcontent-%COMP%]{\r\n  padding-top: 120px;\r\n}\r\n  \r\n.mt[_ngcontent-%COMP%]{\r\n  margin-top: 75px;\r\n}\r\n  \r\na[_ngcontent-%COMP%] {\r\n    text-decoration: none;\r\n    font-size: 22px;\r\n    color: black;\r\n  }\r\n  \r\ntable[_ngcontent-%COMP%]{\r\n      float: left;\r\n      \r\n  }\r\n  \r\n.playerInfoTable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{\r\n    padding-left: 5px;\r\n    text-align: center;\r\n  }\r\n  \r\ntr[_ngcontent-%COMP%]:nth-child(even){\r\n      margin-bottom: 12px;\r\n      background-color: rgba(122, 218, 218, 0.418);\r\n  }\r\n  \r\n.pb[_ngcontent-%COMP%]{\r\n    padding-bottom: 100px;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGxheWVyLXByb2ZpbGUvcGxheWVyLXByb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDhDQUE4QztJQUM5QyxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0VBQ2xCOztBQUVGO0lBQ0ksZUFBZTtLQUNkLGtCQUFrQjtBQUN2Qjs7QUFFRTtJQUNFLFdBQVc7SUFDWCxlQUFlO0lBQ2Ysa0JBQWtCO0VBQ3BCOztBQUdGO0VBQ0UsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFDQTtFQUNFLGtCQUFrQjtJQUNoQixZQUFZO0FBQ2hCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBR0E7Q0FDQyxlQUFlO0NBQ2YsZ0JBQWdCO0FBQ2pCOztBQUdBO0NBQ0MsZUFBZTtDQUNmLGdCQUFnQjtBQUNqQjs7QUFHQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFHQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFRTtJQUNFLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsWUFBWTtFQUNkOztBQUVBO01BQ0ksV0FBVzs7RUFFZjs7QUFFQTtJQUNFLGlCQUFpQjtJQUNqQixrQkFBa0I7RUFDcEI7O0FBRUE7TUFDSSxtQkFBbUI7TUFDbkIsNENBQTRDO0VBQ2hEOztBQUdBO0lBQ0UscUJBQXFCO0VBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvcGxheWVyLXByb2ZpbGUvcGxheWVyLXByb2ZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcclxuICAgIGJveC1zaGFkb3c6IDhweCA3cHggMTNweCAxNXB4IHJnYigwIDAgMCAvIDM3JSk7XHJcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBmb250LWZhbWlseTogYXJpYWw7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogNzBweDtcclxuICB9XHJcbiAgXHJcbi50ZWFtTmFtZXtcclxuICAgIG1hcmdpbi10b3A6IDdweDtcclxuICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbiAgLnRpdGxlIHtcclxuICAgIGNvbG9yOiBncmV5O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICBcclxuLnBsYXllci1pbWd7XHJcbiAgd2lkdGg6IDMwMHB4O1xyXG4gIGhlaWdodDogMzAwcHg7XHJcbn1cclxuLnBsYXllci1pbWctYm94e1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiA1MDBweDtcclxufVxyXG5cclxuLm5vU3RhcntcclxuICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuXHJcbi5tdC0xMjB7XHJcbiAgbWFyZ2luLXRvcDogMTIwcHg7XHJcbn1cclxuXHJcbi5mcy0zNXtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuXHJcblxyXG4udGFibGVTdGFye1xyXG5cdGZvbnQtc2l6ZTogNDBweDtcclxuXHR0cmFuc2l0aW9uOiAwLjVzO1xyXG59XHJcblxyXG5cclxuLnRhYmxlU3Rhcjpob3ZlcntcclxuXHRmb250LXNpemU6IDUwcHg7XHJcblx0dHJhbnNpdGlvbjogMC4zcztcclxufVxyXG5cclxuXHJcbi5wZHR7XHJcbiAgcGFkZGluZy10b3A6IDc1cHg7XHJcbn1cclxuXHJcbi5wZHQtMTIwe1xyXG4gIHBhZGRpbmctdG9wOiAxMjBweDtcclxufVxyXG5cclxuXHJcbi5tdHtcclxuICBtYXJnaW4tdG9wOiA3NXB4O1xyXG59XHJcblxyXG4gIGEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gIH1cclxuICBcclxuICB0YWJsZXtcclxuICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgIFxyXG4gIH1cclxuXHJcbiAgLnBsYXllckluZm9UYWJsZSB0ZHtcclxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgdHI6bnRoLWNoaWxkKGV2ZW4pe1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyMiwgMjE4LCAyMTgsIDAuNDE4KTtcclxuICB9XHJcblxyXG5cclxuICAucGJ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XHJcbiAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PlayerProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-player-profile',
                templateUrl: './player-profile.component.html',
                styleUrls: ['./player-profile.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "F1my":
/*!**************************************************!*\
  !*** ./src/app/home-page/home-page.component.ts ***!
  \**************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class HomePageComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomePageComponent.ɵfac = function HomePageComponent_Factory(t) { return new (t || HomePageComponent)(); };
HomePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomePageComponent, selectors: [["app-home-page"]], decls: 5, vars: 0, consts: [[1, "animate__animated", "animate__fadeInRight"], ["src", "./../../assets/prem1.jpg"], [1, "pb"]], template: function HomePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Welcome to the Denzel's Premier League Stats Site");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 2);
    } }, styles: ["h1[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    padding-top: 15px;\r\n    font-weight: 700;\r\n    font-size: 50px;\r\n}\r\n\r\nimg[_ngcontent-%COMP%]{\r\n    display: block;\r\n    margin: 0 auto;\r\n    width: 900px;\r\n    height: 500px;\r\n    margin-top: 30px;\r\n    border-radius: 20px;\r\n}\r\n\r\n.pb[_ngcontent-%COMP%]{\r\n    padding-bottom: 100px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS1wYWdlL2hvbWUtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxjQUFjO0lBQ2QsWUFBWTtJQUNaLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS1wYWdlL2hvbWUtcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDF7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBmb250LXNpemU6IDUwcHg7XHJcbn1cclxuXHJcbmltZ3tcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB3aWR0aDogOTAwcHg7XHJcbiAgICBoZWlnaHQ6IDUwMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuXHJcbi5wYntcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMDBweDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomePageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home-page',
                templateUrl: './home-page.component.html',
                styleUrls: ['./home-page.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "FqAN":
/*!**************************************************************!*\
  !*** ./src/app/starred-players/starred-players.component.ts ***!
  \**************************************************************/
/*! exports provided: StarredPlayersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarredPlayersComponent", function() { return StarredPlayersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../config.js */ "obyI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _service_players_service_service_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/players-service.service.js */ "1His");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function StarredPlayersComponent_tr_17_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h5", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function StarredPlayersComponent_tr_17_Template_h5_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const player_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r2.onPlayerSelection(player_r1.playerId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h5", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function StarredPlayersComponent_tr_17_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const player_r1 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.onDeletePlayer(player_r1.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const player_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", player_r1.playerPic, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", player_r1.firstName, "\u00A0", player_r1.lastName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](player_r1.age);
} }
class StarredPlayersComponent {
    constructor(router, playersService) {
        this.router = router;
        this.playersService = playersService;
        //Stores players data in db
        this.playersData = [];
    }
    onPlayerSelection(playerId) {
        this.router.navigate(['/player/', playerId]);
    }
    //Function for btn 
    //Gets data from the db
    getData() {
        //Getting Teams Data from the db 
        fetch(_config_js__WEBPACK_IMPORTED_MODULE_2__["postgresUrl"] + "/players")
            .then(response => response.json())
            .then(data => {
            console.log(data);
            this.playersData = data;
        })
            .catch(err => {
            console.log(err);
        });
    }
    //Get fav players from db
    getFavPlayers() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //Getting Fav Teams Data from the db 
            const response = yield fetch(_config_js__WEBPACK_IMPORTED_MODULE_2__["postgresUrl"] + "/players");
            const data = yield response.json();
            console.log("Fav Players from db");
            console.log(data);
            this.playersData = data;
        });
    }
    onDeletePlayer(playerId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var found = false;
            var idToDelete = playerId;
            for (var i = 0; i < this.playersData.length; i++) {
                console.log("the players id");
                console.log(idToDelete);
                console.log("The id in the db");
                console.log(this.playersData[i].id);
                if (idToDelete === this.playersData[i].id) {
                    found = true;
                    console.log("found a match");
                    idToDelete = this.playersData[i].id;
                    break;
                }
            }
            //Error checking for if the player id is not found in the db
            if (!found) {
                alert("This player is not in your Favourite Players list");
                return;
            }
            const deleteResponse = yield fetch(_config_js__WEBPACK_IMPORTED_MODULE_2__["postgresUrl"] + "/players/" + idToDelete, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(idToDelete)
            });
            //const responseData = await deleteResponse.json();
            console.log(_config_js__WEBPACK_IMPORTED_MODULE_2__["postgresUrl"] + "/players/" + idToDelete);
            //console.log(responseData);
            console.log("Successfully removed player");
            this.getFavPlayers();
            this.getData();
        });
    }
    ngOnInit() {
        //Get fav players from db 
        this.getFavPlayers();
    }
}
StarredPlayersComponent.ɵfac = function StarredPlayersComponent_Factory(t) { return new (t || StarredPlayersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_players_service_service_js__WEBPACK_IMPORTED_MODULE_4__["PlayersService"])); };
StarredPlayersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: StarredPlayersComponent, selectors: [["app-starred-players"]], decls: 18, vars: 1, consts: [[1, "animate__animated", "animate__fadeInRight"], [1, "headings", "playersHeading"], [1, "playerstable", "table"], [1, "playersHeader"], [4, "ngFor", "ngForOf"], [3, "src"], [1, "playernames", 3, "click"], [1, "playerInfo"], ["type", "button", 1, "btn", "btn-danger", 3, "click"]], template: function StarredPlayersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "List of Your \u2B50 Players");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "tr", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Player");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Age");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Remove");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, StarredPlayersComponent_tr_17_Template, 12, 4, "tr", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.playersData);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], styles: [".headings[_ngcontent-%COMP%]{\r\n    margin-top: 3em;\r\n    text-align: center;\r\n}\r\n\r\n.playersHeading[_ngcontent-%COMP%]{\r\n    font-weight: 700;\r\n    padding-bottom: 30px;\r\n}\r\n\r\n.playerstable[_ngcontent-%COMP%]{\r\n    width: 50%;\r\n    height: 100%;\r\n    border: 3px groove rgb(70, 5, 131);\r\n    margin-bottom: 40px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    text-align: center;\r\n}\r\n\r\n.getbtn[_ngcontent-%COMP%]{\r\n\tdisplay: block;\r\n\ttext-align: center;\r\n\tmargin: 0 auto;\r\n}\r\n\r\n.getbtn[_ngcontent-%COMP%]:hover{\r\n\tbackground-color:black;\r\n\tcolor:yellow;\r\n}\r\n\r\n.playersHeader[_ngcontent-%COMP%]{\r\n    background-color: rgb(70, 5, 131);\r\n    color: white;\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n    width: 80px;\r\n    height: 80px;\r\n    margin: 10px;\r\n}\r\n\r\na[_ngcontent-%COMP%]{\r\n    font-size: 23px;\r\n}\r\n\r\ntable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], th[_ngcontent-%COMP%] {\r\n    vertical-align: middle;\r\n}\r\n\r\n.playernames[_ngcontent-%COMP%]{\r\n    font-size: 30px;\r\n    font-weight: 700;\r\n}\r\n\r\n.playerInfo[_ngcontent-%COMP%]{\r\n    font-size: 30px;\r\n    font-weight: 700;\r\n}\r\n\r\n.playernames[_ngcontent-%COMP%]:hover{\r\n    color: darkblue;\r\n    cursor:pointer;\r\n}\r\n\r\n.tableStar[_ngcontent-%COMP%]{\r\n\tfont-size: 25px;\r\n\ttransition: 0.5s;\r\n}\r\n\r\n.tableStar[_ngcontent-%COMP%]:hover{\r\n\tfont-size: 50px;\r\n\ttransition: 0.3s;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RhcnJlZC1wbGF5ZXJzL3N0YXJyZWQtcGxheWVycy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsb0JBQW9CO0FBQ3hCOztBQUdBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWixrQ0FBa0M7SUFDbEMsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCOztBQUdBO0NBQ0MsY0FBYztDQUNkLGtCQUFrQjtDQUNsQixjQUFjO0FBQ2Y7O0FBRUE7Q0FDQyxzQkFBc0I7Q0FDdEIsWUFBWTtBQUNiOztBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztBQUNsQjs7QUFFQTtDQUNDLGVBQWU7Q0FDZixnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyxlQUFlO0NBQ2YsZ0JBQWdCO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvc3RhcnJlZC1wbGF5ZXJzL3N0YXJyZWQtcGxheWVycy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5oZWFkaW5nc3tcclxuICAgIG1hcmdpbi10b3A6IDNlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnBsYXllcnNIZWFkaW5ne1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xyXG59XHJcblxyXG5cclxuLnBsYXllcnN0YWJsZXtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBib3JkZXI6IDNweCBncm9vdmUgcmdiKDcwLCA1LCAxMzEpO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5cclxuLmdldGJ0bntcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0bWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi5nZXRidG46aG92ZXJ7XHJcblx0YmFja2dyb3VuZC1jb2xvcjpibGFjaztcclxuXHRjb2xvcjp5ZWxsb3c7XHJcbn1cclxuXHJcbi5wbGF5ZXJzSGVhZGVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDcwLCA1LCAxMzEpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5pbWcge1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbn1cclxuXHJcbmF7XHJcbiAgICBmb250LXNpemU6IDIzcHg7XHJcbn1cclxuXHJcbnRhYmxlIHRkLCB0aCB7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59ICAgXHJcblxyXG4ucGxheWVybmFtZXN7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4ucGxheWVySW5mb3tcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbi5wbGF5ZXJuYW1lczpob3ZlcntcclxuICAgIGNvbG9yOiBkYXJrYmx1ZTtcclxuICAgIGN1cnNvcjpwb2ludGVyO1xyXG59XHJcblxyXG4udGFibGVTdGFye1xyXG5cdGZvbnQtc2l6ZTogMjVweDtcclxuXHR0cmFuc2l0aW9uOiAwLjVzO1xyXG59XHJcblxyXG4udGFibGVTdGFyOmhvdmVye1xyXG5cdGZvbnQtc2l6ZTogNTBweDtcclxuXHR0cmFuc2l0aW9uOiAwLjNzO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](StarredPlayersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-starred-players',
                templateUrl: './starred-players.component.html',
                styleUrls: ['./starred-players.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _service_players_service_service_js__WEBPACK_IMPORTED_MODULE_4__["PlayersService"] }]; }, null); })();


/***/ }),

/***/ "GDRK":
/*!****************************************************!*\
  !*** ./src/app/topscorers/topscorers.component.ts ***!
  \****************************************************/
/*! exports provided: TopscorersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopscorersComponent", function() { return TopscorersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../config.js */ "obyI");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function TopscorersComponent_tr_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const player_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r2 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", player_r1.firstname, "\u00A0", player_r1.lastname, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](player_r1.goals.total);
} }
class TopscorersComponent {
    constructor(http) {
        this.http = http;
    }
    getData() {
        fetch("https://api-football-v1.p.rapidapi.com/v2/topscorers/524", _config_js__WEBPACK_IMPORTED_MODULE_1__["secrets"])
            .then(response => response.json())
            .then(data => {
            console.log(data);
            this.scorersdata = data.api.topscorers;
        })
            .catch(err => {
            console.log(err);
        });
    }
    ngOnInit() {
        this.getData();
    } //end init
} //end class
TopscorersComponent.ɵfac = function TopscorersComponent_Factory(t) { return new (t || TopscorersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
TopscorersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TopscorersComponent, selectors: [["app-topscorers"]], inputs: { scorersdata: "scorersdata" }, decls: 13, vars: 1, consts: [[1, "animate__animated", "animate__fadeInRight"], [1, "headings", "tsHeading"], [1, "topscorerstable", "table", "table-hover"], [1, "scorersHeader"], [4, "ngFor", "ngForOf"], [1, "pb"], [1, "scorers"]], template: function TopscorersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Top Scorers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tr", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Rank");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Player");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Goals");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, TopscorersComponent_tr_11_Template, 7, 4, "tr", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 5);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.scorersdata);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: [".tsHeading[_ngcontent-%COMP%]{\r\n    font-weight: 700;\r\n    padding-top: 30px;\r\n    padding-bottom: 30px;\r\n}\r\n\r\n.headings[_ngcontent-%COMP%]{\r\n    margin-top: 20px;\r\n    text-align: center;\r\n}\r\n\r\n.topscorerstable[_ngcontent-%COMP%]{\r\n    width: 80%;\r\n    height: 100%;\r\n    margin: 0 auto;\r\n    border: 3px groove rgb(70, 5, 131);\r\n    margin-bottom: 40px;\r\n}\r\n\r\n.scorersHeader[_ngcontent-%COMP%]{\r\n    background-color: rgb(70, 5, 131);\r\n    color: white;\r\n}\r\n\r\n.scorers[_ngcontent-%COMP%]{\r\n    cursor: pointer;\r\n}\r\n\r\n.pb[_ngcontent-%COMP%]{\r\n    padding-bottom: 100px;\r\n}\r\n\r\n.scorers[_ngcontent-%COMP%]:hover{\r\n    color: blue;\r\n    font-weight: 500;\r\n}\r\n\r\ntd[_ngcontent-%COMP%]:nth-child(1) {\r\n    padding-left: 10px;\r\n  }\r\n\r\n.tableArea[_ngcontent-%COMP%]{\r\n\tmargin: 140px;\r\n  }\r\n\r\n.getbtn[_ngcontent-%COMP%]{\r\n\tdisplay: block;\r\n\ttext-align: center;\r\n\tmargin: 0 auto;\r\n}\r\n\r\n.getbtn[_ngcontent-%COMP%]:hover{\r\n\tbackground-color:black;\r\n\tcolor:yellow;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9wc2NvcmVycy90b3BzY29yZXJzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUdBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWixjQUFjO0lBQ2Qsa0NBQWtDO0lBQ2xDLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7RUFDcEI7O0FBRUE7Q0FDRCxhQUFhO0VBQ1o7O0FBR0Y7Q0FDQyxjQUFjO0NBQ2Qsa0JBQWtCO0NBQ2xCLGNBQWM7QUFDZjs7QUFFQTtDQUNDLHNCQUFzQjtDQUN0QixZQUFZO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC90b3BzY29yZXJzL3RvcHNjb3JlcnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4udHNIZWFkaW5ne1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbi5oZWFkaW5nc3tcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG4udG9wc2NvcmVyc3RhYmxle1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgYm9yZGVyOiAzcHggZ3Jvb3ZlIHJnYig3MCwgNSwgMTMxKTtcclxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbn1cclxuXHJcbi5zY29yZXJzSGVhZGVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDcwLCA1LCAxMzEpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uc2NvcmVyc3tcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnBie1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xyXG59XHJcblxyXG4uc2NvcmVyczpob3ZlcntcclxuICAgIGNvbG9yOiBibHVlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxudGQ6bnRoLWNoaWxkKDEpIHtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICB9XHJcblxyXG4gIC50YWJsZUFyZWF7XHJcblx0bWFyZ2luOiAxNDBweDtcclxuICB9XHJcblxyXG4gIFxyXG4uZ2V0YnRue1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLmdldGJ0bjpob3ZlcntcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOmJsYWNrO1xyXG5cdGNvbG9yOnllbGxvdztcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TopscorersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-topscorers',
                templateUrl: './topscorers.component.html',
                styleUrls: ['./topscorers.component.css'],
                inputs: ['scorersdata']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    getAnimationData(outlet) {
        return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
    }
    ngOnInit() {
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 29, vars: 0, consts: [[1, "container-fluid"], [1, "match-header"], ["routerLink", "/", "routerLinkActive", "active", 1, "match-tournament"], ["src", "https://assets.codepen.io/285131/pl-logo.svg", 1, "premlogo"], [1, "thenav"], ["id", "firstone"], ["routerLink", "/", "routerLinkActive", "active"], ["routerLink", "/matches", "routerLinkActive", "active"], ["routerLink", "/upcominggames", "routerLinkActive", "active"], ["routerLink", "/topscorer", "routerLinkActive", "active"], ["routerLink", "/leaguetable", "routerLinkActive", "active"], ["routerLink", "/starred-players", "routerLinkActive", "active"], ["id", "lastone"], ["routerLink", "/starred-teams", "routerLinkActive", "active"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " English Premier League ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Previous Fixtures");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Upcoming Fixtures");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Top Scorers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "League Table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\u2B50 Players");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\u2B50 Teams");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]:after, *[_ngcontent-%COMP%]:before {\r\n\tbox-sizing: border-box;\r\n}\r\n\r\n[_ngcontent-%COMP%]:root {\r\n\t--color-text-primary: #1c2a38;\r\n\t--color-text-secondary: #8A8F98;\r\n\t--color-text-alert: #d72641;\r\n\t--color-text-icon: #dbdade;\r\n\t--color-bg-primary: #fff;\r\n\t--color-bg-secondary: #f3f5f9;\r\n\t--color-bg-alert: #fdeaec;\r\n\t--color-theme-primary: #623ce6;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%], input[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\r\n\tfont: inherit;\r\n}\r\n\r\n.theHeading[_ngcontent-%COMP%]{\r\n\tfont-weight: 700;\r\n\tpadding-top: 30px;\r\n\tpadding-bottom: 30px;\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n\tdisplay: block;\r\n}\r\n\r\nstrong[_ngcontent-%COMP%] {\r\n\tfont-weight: 600;\r\n}\r\n\r\nbody[_ngcontent-%COMP%] {\r\n\tfont-family: \"Inter\", sans-serif;\r\n\tline-height: 1.5;\r\n\tcolor: var(--color-text-primary);\r\n\tbackground-color: var(--color-bg-secondary);\r\n}\r\n\r\n.pdt[_ngcontent-%COMP%]{\r\n    padding-top: 50px;\r\n\tpadding-bottom: 30px;\r\n}\r\n\r\n.match[_ngcontent-%COMP%] {\r\n\tbackground-color: var(--color-bg-primary);\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tmin-width: 600px;\r\n\tborder-radius: 10px;\r\n\tbox-shadow: 0 0 2px 0 rgba(#303030, 0.1), 0 4px 4px 0 rgba(#303030, 0.1);\r\n}\r\n\r\n.match-header[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\tborder-bottom: 2px solid rgba(#303030, 0.1);\r\n\tpadding: 16px;\r\n}\r\n\r\n.getbtn[_ngcontent-%COMP%]{\r\n\tdisplay: block;\r\n\ttext-align: center;\r\n\tmargin: 0 auto;\r\n}\r\n\r\n.getbtn[_ngcontent-%COMP%]:hover{\r\n\tbackground-color:black;\r\n\tcolor:yellow;\r\n}\r\n\r\n.match-status[_ngcontent-%COMP%] {\r\n\tbackground-color: var(--color-bg-alert);\r\n\tcolor: var(--color-text-alert);\r\n\tpadding: 8px 12px;\r\n\tborder-radius: 6px;\r\n\tfont-weight: 600;\r\n\tfont-size: 14px;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tline-height: 1;\r\n\tmargin-right: auto;\r\n\r\n}\r\n\r\n.match-tournament[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n\tfont-weight: 700;\r\n\tfont-size: 24px;\r\n\tcursor: pointer;\r\n\t\r\n}\r\n\r\n.match-tournament[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n\t\twidth: 85px;\r\n        align-items: center;\r\n        justify-content: center;\r\n\t}\r\n\r\n.match-actions[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\tmargin-left: auto;\r\n}\r\n\r\n.btn-icon[_ngcontent-%COMP%] {\r\n\tborder: 0;\r\n\tbackground-color: transparent;\r\n\tcolor: var(--color-text-icon);\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n}\r\n\r\n.match-content[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\tposition: relative;\r\n}\r\n\r\n.column[_ngcontent-%COMP%] {\r\n\tpadding: 1px;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\twidth: calc(100% / 3);\r\n}\r\n\r\n.team[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n\tmargin-bottom: 2em;\r\n}\r\n\r\n.team-logo[_ngcontent-%COMP%] {\r\n\twidth: 80px;\r\n\theight: 80px;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tmargin-bottom: 3px;\r\n\tjustify-content: center;\r\n\tborder-radius: 50%;\r\n\tbackground-color: var(--color-bg-primary);\r\n\tbox-shadow: 0 4px 4px 0 rgba(#303030, 0.15),\r\n\t\t0 0 0 15px var(--color-bg-secondary);\r\n\t\r\n}\r\n\r\np[_ngcontent-%COMP%]{\r\n\tmargin-bottom: 0px;;\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n\t\twidth: 80px;\r\n\t\theight: 80px;\r\n\t\t\r\n    }\r\n\r\n.team-name[_ngcontent-%COMP%] {\r\n\ttext-align: center;\r\n\tmargin-top: 1px;\r\n\tfont-size: 20px;\r\n\tfont-weight: 480;\r\n\tcursor: pointer;\r\n}\r\n\r\n.team-name[_ngcontent-%COMP%]:hover{\r\n\tcolor: blue;\r\n\tfont-weight: 800;\r\n}\r\n\r\n.match-details[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n\twidth: 100%;\r\n}\r\n\r\n.match-date[_ngcontent-%COMP%], .match-referee[_ngcontent-%COMP%] {\r\n    display: block;\r\n    font-size: 19px;\r\n    width: 170px;\r\n\tcolor: var(--color-text-secondary);\r\n\ttext-align: center;\r\n}\r\n\r\n.match-score[_ngcontent-%COMP%] {\r\n\tmargin-top: 12px;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n}\r\n\r\n.match-score-number[_ngcontent-%COMP%] {\r\n\tfont-size: 28px;\r\n\tfont-weight: 600;\r\n\tline-height: 1;\r\n\t\r\n}\r\n\r\n.match-score-divider[_ngcontent-%COMP%] {\r\n\tfont-size: 22px;\r\n\tfont-weight: 700;\r\n\tline-height: 1;\r\n\tcolor: var(--color-text-icon);\r\n\tmargin-left: 10px;\r\n\tmargin-right: 10px;\r\n}\r\n\r\n.match-referee[_ngcontent-%COMP%] {\r\n    margin-top: 12px;\r\n\tmargin-bottom: 30px;\r\n\twidth: 250px;\r\n\ttext-align: center;\r\n}\r\n\r\n.headings[_ngcontent-%COMP%]{\r\n    margin-top: 20px;\r\n    text-align: center;\r\n}\r\n\r\ntd[_ngcontent-%COMP%]:nth-child(1) {\r\n    padding-left: 10px;\r\n  }\r\n\r\n.scorersHeader[_ngcontent-%COMP%]{\r\n    background-color: rgb(70, 5, 131);\r\n    color: white;\r\n}\r\n\r\n.leagueTable[_ngcontent-%COMP%]{\r\n\twidth: 80%;\r\n\tmargin-left: auto;\r\n\tmargin-right: auto;\r\n\theight: 100%;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\ttext-align: center;\r\n\tborder: 3px groove rgb(70, 5, 131);\r\n  }\r\n\r\n.leagueTable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{\r\n\t\r\n  }\r\n\r\n.tableArea[_ngcontent-%COMP%]{\r\n\tmargin: 140px;\r\n  }\r\n\r\n.leagueHeading[_ngcontent-%COMP%]{\r\n\t  text-align: center;\r\n\t  font-weight: 700;\r\n  }\r\n\r\n.appScorers[_ngcontent-%COMP%]{\r\n\t  width: 100%;\r\n\t  height: 100%;\r\n  }\r\n\r\n.teamName[_ngcontent-%COMP%]{\r\n\tcursor: pointer;\r\n    width: 20%;\r\n    margin: 0 auto;\r\n    align-items: center;\r\n}\r\n\r\n.teamName[_ngcontent-%COMP%]:hover{\r\n    color: blue;\r\n    font-weight: 500;\r\n}\r\n\r\n.tableStar[_ngcontent-%COMP%]{\r\n\tfont-size: 15px;\r\n\ttransition: 0.5s;\r\n\tcursor: pointer;\r\n}\r\n\r\n.tableStar[_ngcontent-%COMP%]:hover{\r\n\tfont-size: 30px;\r\n\ttransition: 0.3s;\r\n}\r\n\r\n.teamName[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\ndisplay: inline-block;\r\npadding-left: 30px;\r\n}\r\n\r\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n    padding: .75rem;\r\n    vertical-align: middle;\r\n    border-top: 1px solid #dee2e6;\r\n}\r\n\r\n.tableImg[_ngcontent-%COMP%]{\r\n\tmargin: 0 auto;\r\n\tdisplay: inline-block;\r\n}\r\n\r\n\r\n\r\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{\r\n\tdisplay: table;\r\n\ttable-layout: fixed;\r\n\twidth: 100%;\r\n\ttext-align: center;\r\n\t\r\n}\r\n\r\nnav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n\tlist-style: none;\r\n\tdisplay: table-cell;\r\n\tvertical-align: middle;\r\n\tbackground: rgb(70, 5, 131);\r\n\t\r\n  }\r\n\r\n.pb[_ngcontent-%COMP%]{\r\n\t  padding-bottom: 100px;\r\n  }\r\n\r\nnav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-last-child(n+6), nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-last-child(n+6)    ~ *[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n \r\n}\r\n\r\nnav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-last-child(n+6)   a[_ngcontent-%COMP%], nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-last-child(n+6)    ~ *[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n\r\n}\r\n\r\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n\t\r\n\toverflow: hidden;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n\ttext-decoration: none;\r\n\tcolor: #fff;\r\n\tdisplay: block;\r\n\tpadding: 0.75em 1em;\r\n\tfont-size: 1.25em;\r\n  }\r\n\r\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus {\r\n\tcolor: #462997;\r\n\tbackground-color: #2f971d;\r\n\tfont-weight: 550;\r\n  }\r\n\r\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n\tcolor: #cbce1f;\r\n   }\r\n\r\n#firstone[_ngcontent-%COMP%]{\r\n\tborder-top-left-radius:15px;\r\n\tborder-bottom-left-radius:15px;\r\n   }\r\n\r\n#lastone[_ngcontent-%COMP%]{\r\n\tborder-top-right-radius:15px;\r\n\tborder-bottom-right-radius:15px;\r\n   }\n/*# sourceMappingURL=data:application/json;base64,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QW1CO0NBQ25CLGlCQUFpQjtFQUNoQjs7QUFFRjtDQUNDLGNBQWM7Q0FDZCx5QkFBeUI7Q0FDekIsZ0JBQWdCO0VBQ2Y7O0FBQ0M7Q0FDRixjQUFjO0dBQ1o7O0FBR0E7Q0FDRiwyQkFBMkI7Q0FDM0IsOEJBQThCO0dBQzVCOztBQUVBO0NBQ0YsNEJBQTRCO0NBQzVCLCtCQUErQjtHQUM3QiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4qLFxyXG4qOmFmdGVyLFxyXG4qOmJlZm9yZSB7XHJcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuOnJvb3Qge1xyXG5cdC0tY29sb3ItdGV4dC1wcmltYXJ5OiAjMWMyYTM4O1xyXG5cdC0tY29sb3ItdGV4dC1zZWNvbmRhcnk6ICM4QThGOTg7XHJcblx0LS1jb2xvci10ZXh0LWFsZXJ0OiAjZDcyNjQxO1xyXG5cdC0tY29sb3ItdGV4dC1pY29uOiAjZGJkYWRlO1xyXG5cdC0tY29sb3ItYmctcHJpbWFyeTogI2ZmZjtcclxuXHQtLWNvbG9yLWJnLXNlY29uZGFyeTogI2YzZjVmOTtcclxuXHQtLWNvbG9yLWJnLWFsZXJ0OiAjZmRlYWVjO1xyXG5cdC0tY29sb3ItdGhlbWUtcHJpbWFyeTogIzYyM2NlNjtcclxufVxyXG5cclxuYnV0dG9uLFxyXG5pbnB1dCxcclxuc2VsZWN0LFxyXG50ZXh0YXJlYSB7XHJcblx0Zm9udDogaW5oZXJpdDtcclxufVxyXG5cclxuLnRoZUhlYWRpbmd7XHJcblx0Zm9udC13ZWlnaHQ6IDcwMDtcclxuXHRwYWRkaW5nLXRvcDogMzBweDtcclxuXHRwYWRkaW5nLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuaW1nIHtcclxuXHRkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuc3Ryb25nIHtcclxuXHRmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG5cclxuYm9keSB7XHJcblx0Zm9udC1mYW1pbHk6IFwiSW50ZXJcIiwgc2Fucy1zZXJpZjtcclxuXHRsaW5lLWhlaWdodDogMS41O1xyXG5cdGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LXByaW1hcnkpO1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJnLXNlY29uZGFyeSk7XHJcbn1cclxuXHJcbi5wZHR7XHJcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcclxuXHRwYWRkaW5nLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuLm1hdGNoIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1iZy1wcmltYXJ5KTtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0bWluLXdpZHRoOiA2MDBweDtcclxuXHRib3JkZXItcmFkaXVzOiAxMHB4O1xyXG5cdGJveC1zaGFkb3c6IDAgMCAycHggMCByZ2JhKCMzMDMwMzAsIDAuMSksIDAgNHB4IDRweCAwIHJnYmEoIzMwMzAzMCwgMC4xKTtcclxufVxyXG5cclxuLm1hdGNoLWhlYWRlciB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiYSgjMzAzMDMwLCAwLjEpO1xyXG5cdHBhZGRpbmc6IDE2cHg7XHJcbn1cclxuXHJcbi5nZXRidG57XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4uZ2V0YnRuOmhvdmVye1xyXG5cdGJhY2tncm91bmQtY29sb3I6YmxhY2s7XHJcblx0Y29sb3I6eWVsbG93O1xyXG59XHJcblxyXG4ubWF0Y2gtc3RhdHVzIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1iZy1hbGVydCk7XHJcblx0Y29sb3I6IHZhcigtLWNvbG9yLXRleHQtYWxlcnQpO1xyXG5cdHBhZGRpbmc6IDhweCAxMnB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDZweDtcclxuXHRmb250LXdlaWdodDogNjAwO1xyXG5cdGZvbnQtc2l6ZTogMTRweDtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0bGluZS1oZWlnaHQ6IDE7XHJcblx0bWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG5cclxufVxyXG5cclxuLm1hdGNoLXRvdXJuYW1lbnQge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0Zm9udC13ZWlnaHQ6IDcwMDtcclxuXHRmb250LXNpemU6IDI0cHg7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdFxyXG59XHJcbi5tYXRjaC10b3VybmFtZW50IGltZyB7XHJcblx0XHR3aWR0aDogODVweDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdH1cclxuXHJcblxyXG4ubWF0Y2gtYWN0aW9ucyB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRtYXJnaW4tbGVmdDogYXV0bztcclxufVxyXG5cclxuLmJ0bi1pY29uIHtcclxuXHRib3JkZXI6IDA7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcblx0Y29sb3I6IHZhcigtLWNvbG9yLXRleHQtaWNvbik7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4ubWF0Y2gtY29udGVudCB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5jb2x1bW4ge1xyXG5cdHBhZGRpbmc6IDFweDtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0d2lkdGg6IGNhbGMoMTAwJSAvIDMpO1xyXG59XHJcblxyXG4udGVhbSB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0bWFyZ2luLWJvdHRvbTogMmVtO1xyXG59XHJcblxyXG4udGVhbS1sb2dvIHtcclxuXHR3aWR0aDogODBweDtcclxuXHRoZWlnaHQ6IDgwcHg7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdG1hcmdpbi1ib3R0b206IDNweDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYmctcHJpbWFyeSk7XHJcblx0Ym94LXNoYWRvdzogMCA0cHggNHB4IDAgcmdiYSgjMzAzMDMwLCAwLjE1KSxcclxuXHRcdDAgMCAwIDE1cHggdmFyKC0tY29sb3ItYmctc2Vjb25kYXJ5KTtcclxuXHRcclxufVxyXG5cclxucHtcclxuXHRtYXJnaW4tYm90dG9tOiAwcHg7O1xyXG59XHJcblxyXG5cclxuXHJcbmltZyB7XHJcblx0XHR3aWR0aDogODBweDtcclxuXHRcdGhlaWdodDogODBweDtcclxuXHRcdFxyXG4gICAgfVxyXG4gICAgXHJcblxyXG4udGVhbS1uYW1lIHtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0bWFyZ2luLXRvcDogMXB4O1xyXG5cdGZvbnQtc2l6ZTogMjBweDtcclxuXHRmb250LXdlaWdodDogNDgwO1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnRlYW0tbmFtZTpob3ZlcntcclxuXHRjb2xvcjogYmx1ZTtcclxuXHRmb250LXdlaWdodDogODAwO1xyXG59XHJcblxyXG4ubWF0Y2gtZGV0YWlscyB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0d2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5tYXRjaC1kYXRlLCAubWF0Y2gtcmVmZXJlZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgIHdpZHRoOiAxNzBweDtcclxuXHRjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1zZWNvbmRhcnkpO1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuICAgIFxyXG5cclxuLm1hdGNoLXNjb3JlIHtcclxuXHRtYXJnaW4tdG9wOiAxMnB4O1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLm1hdGNoLXNjb3JlLW51bWJlciB7XHJcblx0Zm9udC1zaXplOiAyOHB4O1xyXG5cdGZvbnQtd2VpZ2h0OiA2MDA7XHJcblx0bGluZS1oZWlnaHQ6IDE7XHJcblx0XHJcbn1cclxuXHJcbi5tYXRjaC1zY29yZS1kaXZpZGVyIHtcclxuXHRmb250LXNpemU6IDIycHg7XHJcblx0Zm9udC13ZWlnaHQ6IDcwMDtcclxuXHRsaW5lLWhlaWdodDogMTtcclxuXHRjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1pY29uKTtcclxuXHRtYXJnaW4tbGVmdDogMTBweDtcclxuXHRtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcblxyXG4ubWF0Y2gtcmVmZXJlZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xyXG5cdG1hcmdpbi1ib3R0b206IDMwcHg7XHJcblx0d2lkdGg6IDI1MHB4O1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmhlYWRpbmdze1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuXHJcbnRkOm50aC1jaGlsZCgxKSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIC5zY29yZXJzSGVhZGVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDcwLCA1LCAxMzEpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ubGVhZ3VlVGFibGV7XHJcblx0d2lkdGg6IDgwJTtcclxuXHRtYXJnaW4tbGVmdDogYXV0bztcclxuXHRtYXJnaW4tcmlnaHQ6IGF1dG87XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdGJvcmRlcjogM3B4IGdyb292ZSByZ2IoNzAsIDUsIDEzMSk7XHJcbiAgfVxyXG5cclxuICAubGVhZ3VlVGFibGUgdHJ7XHJcblx0XHJcbiAgfVxyXG5cclxuXHJcbiAgLnRhYmxlQXJlYXtcclxuXHRtYXJnaW46IDE0MHB4O1xyXG4gIH1cclxuXHJcbiAgLmxlYWd1ZUhlYWRpbmd7XHJcblx0ICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0ICBmb250LXdlaWdodDogNzAwO1xyXG4gIH1cclxuXHJcbiAgLmFwcFNjb3JlcnN7XHJcblx0ICB3aWR0aDogMTAwJTtcclxuXHQgIGhlaWdodDogMTAwJTtcclxuICB9XHJcblxyXG4gIC50ZWFtTmFtZXtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4udGVhbU5hbWU6aG92ZXJ7XHJcbiAgICBjb2xvcjogYmx1ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi50YWJsZVN0YXJ7XHJcblx0Zm9udC1zaXplOiAxNXB4O1xyXG5cdHRyYW5zaXRpb246IDAuNXM7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4udGFibGVTdGFyOmhvdmVye1xyXG5cdGZvbnQtc2l6ZTogMzBweDtcclxuXHR0cmFuc2l0aW9uOiAwLjNzO1xyXG59XHJcblxyXG4udGVhbU5hbWUgcHtcclxuZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5wYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbn1cclxuXHJcbi50YWJsZSB0ZCwgLnRhYmxlIHRoIHtcclxuICAgIHBhZGRpbmc6IC43NXJlbTtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2RlZTJlNjtcclxufVxyXG5cclxuLnRhYmxlSW1ne1xyXG5cdG1hcmdpbjogMCBhdXRvO1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLyogLS0tLS0gTmF2IEJhciAtLS0tICovXHJcblxyXG5cclxubmF2IHVse1xyXG5cdGRpc3BsYXk6IHRhYmxlO1xyXG5cdHRhYmxlLWxheW91dDogZml4ZWQ7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFxyXG59XHJcblxyXG5uYXYgbGkge1xyXG5cdGxpc3Qtc3R5bGU6IG5vbmU7XHJcblx0ZGlzcGxheTogdGFibGUtY2VsbDtcclxuXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG5cdGJhY2tncm91bmQ6IHJnYig3MCwgNSwgMTMxKTtcclxuXHRcclxuICB9XHJcblxyXG4gIC5wYntcclxuXHQgIHBhZGRpbmctYm90dG9tOiAxMDBweDtcclxuICB9XHJcblxyXG4gIG5hdiBsaTpudGgtbGFzdC1jaGlsZChuKzYpLCBcclxubmF2IGxpOm50aC1sYXN0LWNoaWxkKG4rNikgfiAqIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiBcclxufVxyXG5cclxubmF2IGxpOm50aC1sYXN0LWNoaWxkKG4rNikgYSwgXHJcbm5hdiBsaTpudGgtbGFzdC1jaGlsZChuKzYpIH4gKiBhIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblxyXG59XHJcblxyXG51bCBsaXtcclxuXHRcclxuXHRvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4gIG5hdiBhIHtcclxuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblx0Y29sb3I6ICNmZmY7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0cGFkZGluZzogMC43NWVtIDFlbTtcclxuXHRmb250LXNpemU6IDEuMjVlbTtcclxuICB9XHJcblxyXG5uYXYgYTpmb2N1cyB7XHJcblx0Y29sb3I6ICM0NjI5OTc7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzJmOTcxZDtcclxuXHRmb250LXdlaWdodDogNTUwO1xyXG4gIH0gXHJcbiAgIG5hdiBhOmhvdmVye1xyXG5cdGNvbG9yOiAjY2JjZTFmO1xyXG4gICB9XHJcblxyXG5cclxuICAgI2ZpcnN0b25le1xyXG5cdGJvcmRlci10b3AtbGVmdC1yYWRpdXM6MTVweDtcclxuXHRib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOjE1cHg7XHJcbiAgIH1cclxuXHJcbiAgICNsYXN0b25le1xyXG5cdGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOjE1cHg7XHJcblx0Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6MTVweDtcclxuICAgfVxyXG5cclxuICAgIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "YqjJ":
/*!**********************************************************!*\
  !*** ./src/app/starred-teams/starred-teams.component.ts ***!
  \**********************************************************/
/*! exports provided: StarredTeamsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarredTeamsComponent", function() { return StarredTeamsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../config.js */ "obyI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function StarredTeamsComponent_tr_14_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StarredTeamsComponent_tr_14_Template_h5_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const team_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.onTeamSelection(team_r1.teamId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StarredTeamsComponent_tr_14_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const team_r1 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.onDeleteTeam(team_r1.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const team_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", team_r1.photoLink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](team_r1.teamName);
} }
class StarredTeamsComponent {
    constructor(router) {
        this.router = router;
    }
    //Navigate to team profile page
    onTeamSelection(teamid) {
        this.router.navigate(['/team/', teamid]);
    }
    //Getting data
    getData() {
        //Getting Teams Data from the db 
        fetch(_config_js__WEBPACK_IMPORTED_MODULE_1__["postgresUrl"] + "/teams")
            .then(response => response.json())
            .then(data => {
            console.log(data);
            this.teamsData = data;
        })
            .catch(err => {
            console.log(err);
        });
    }
    //Handles deleting team from db
    onDeleteTeam(teamId) {
        fetch(_config_js__WEBPACK_IMPORTED_MODULE_1__["postgresUrl"] + "/teams/" + teamId, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(teamId)
        })
            .then(response => {
            console.log(response);
            this.getData();
        });
    }
    ngOnInit() {
        this.getData();
    }
}
StarredTeamsComponent.ɵfac = function StarredTeamsComponent_Factory(t) { return new (t || StarredTeamsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
StarredTeamsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StarredTeamsComponent, selectors: [["app-starred-teams"]], decls: 15, vars: 1, consts: [[1, "animate__animated", "animate__fadeInRight"], [1, "headings", "teamHeading"], [1, "teamstable", "table"], [1, "teamsHeader"], [4, "ngFor", "ngForOf"], [3, "src"], [1, "teamnames", 3, "click"], ["type", "button", 1, "btn", "btn-danger", 3, "click"]], template: function StarredTeamsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "List of Your \u2B50 Teams");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tr", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Team");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Remove");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, StarredTeamsComponent_tr_14_Template, 9, 2, "tr", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.teamsData);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: [".headings[_ngcontent-%COMP%]{\r\n    margin-top: 3em;\r\n    text-align: center;\r\n}\r\n\r\n.teamHeading[_ngcontent-%COMP%]{\r\n    font-weight: 700;\r\n    padding-bottom: 30px;\r\n}\r\n\r\n.teamstable[_ngcontent-%COMP%]{\r\n    width: 50%;\r\n    height: 100%;\r\n    border: 3px groove rgb(70, 5, 131);\r\n    margin-bottom: 40px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    text-align: center;\r\n    border-radius:  10px !important;\r\n}\r\n\r\ntable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], th[_ngcontent-%COMP%] {\r\n    vertical-align: middle;\r\n}\r\n\r\n.getbtn[_ngcontent-%COMP%]{\r\n\tdisplay: block;\r\n\ttext-align: center;\r\n\tmargin: 0 auto;\r\n}\r\n\r\n.getbtn[_ngcontent-%COMP%]:hover{\r\n\tbackground-color:black;\r\n\tcolor:yellow;\r\n}\r\n\r\n.teamsHeader[_ngcontent-%COMP%]{\r\n    background-color: rgb(70, 5, 131);\r\n    color: white;\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n    width: 80px;\r\n    height: 80px;\r\n    margin: 10px;\r\n}\r\n\r\na[_ngcontent-%COMP%]{\r\n    font-size: 23px;\r\n}\r\n\r\n.teamnames[_ngcontent-%COMP%]{\r\n    font-size: 30px;\r\n    font-weight: 700;\r\n}\r\n\r\n.teamnames[_ngcontent-%COMP%]:hover{\r\n    color: darkblue;\r\n    cursor:pointer;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RhcnJlZC10ZWFtcy9zdGFycmVkLXRlYW1zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixvQkFBb0I7QUFDeEI7O0FBR0E7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLGtDQUFrQztJQUNsQyxtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUdBO0NBQ0MsY0FBYztDQUNkLGtCQUFrQjtDQUNsQixjQUFjO0FBQ2Y7O0FBRUE7Q0FDQyxzQkFBc0I7Q0FDdEIsWUFBWTtBQUNiOztBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixjQUFjO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvc3RhcnJlZC10ZWFtcy9zdGFycmVkLXRlYW1zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmhlYWRpbmdze1xyXG4gICAgbWFyZ2luLXRvcDogM2VtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4udGVhbUhlYWRpbmd7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcblxyXG4udGVhbXN0YWJsZXtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBib3JkZXI6IDNweCBncm9vdmUgcmdiKDcwLCA1LCAxMzEpO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogIDEwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxudGFibGUgdGQsIHRoIHtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcblxyXG4uZ2V0YnRue1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLmdldGJ0bjpob3ZlcntcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOmJsYWNrO1xyXG5cdGNvbG9yOnllbGxvdztcclxufVxyXG5cclxuLnRlYW1zSGVhZGVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDcwLCA1LCAxMzEpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5pbWcge1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbn1cclxuXHJcbmF7XHJcbiAgICBmb250LXNpemU6IDIzcHg7XHJcbn1cclxuXHJcbi50ZWFtbmFtZXN7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4udGVhbW5hbWVzOmhvdmVye1xyXG4gICAgY29sb3I6IGRhcmtibHVlO1xyXG4gICAgY3Vyc29yOnBvaW50ZXI7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StarredTeamsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-starred-teams',
                templateUrl: './starred-teams.component.html',
                styleUrls: ['./starred-teams.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _topscorers_topscorers_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./topscorers/topscorers.component */ "GDRK");
/* harmony import */ var _previous_fixtures_previous_fixtures_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./previous-fixtures/previous-fixtures.component */ "9FfI");
/* harmony import */ var _upcoming_fixtures_upcoming_fixtures_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./upcoming-fixtures/upcoming-fixtures.component */ "v05n");
/* harmony import */ var _league_table_league_table_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./league-table/league-table.component */ "zbyg");
/* harmony import */ var _starred_teams_starred_teams_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./starred-teams/starred-teams.component */ "YqjJ");
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home-page/home-page.component */ "F1my");
/* harmony import */ var _team_info_team_info_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./team-info/team-info.component */ "cdf7");
/* harmony import */ var _starred_players_starred_players_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./starred-players/starred-players.component */ "FqAN");
/* harmony import */ var _player_profile_player_profile_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./player-profile/player-profile.component */ "9sIj");
/* harmony import */ var _service_teams_service_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./service/teams-service.service */ "vClg");
/* harmony import */ var _service_players_service_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./service/players-service.service */ "iuL0");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ "tyNb");




 //routing module














class AppModule {
    constructor(router) {
        // Use a custom replacer to display function names in the route configs
        // const replacer = (key, value) => (typeof value === 'function') ? value.name : value;
        // console.log('Routes: ', JSON.stringify(router.config, replacer, 2));
    }
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_17__["Router"])); }, providers: [_service_teams_service_service__WEBPACK_IMPORTED_MODULE_15__["TeamsService"], _service_players_service_service__WEBPACK_IMPORTED_MODULE_16__["PlayersService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["appRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _topscorers_topscorers_component__WEBPACK_IMPORTED_MODULE_6__["TopscorersComponent"],
        _previous_fixtures_previous_fixtures_component__WEBPACK_IMPORTED_MODULE_7__["PreviousFixturesComponent"],
        _upcoming_fixtures_upcoming_fixtures_component__WEBPACK_IMPORTED_MODULE_8__["UpcomingFixturesComponent"],
        _league_table_league_table_component__WEBPACK_IMPORTED_MODULE_9__["LeagueTableComponent"],
        _starred_teams_starred_teams_component__WEBPACK_IMPORTED_MODULE_10__["StarredTeamsComponent"],
        _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_11__["HomePageComponent"],
        _team_info_team_info_component__WEBPACK_IMPORTED_MODULE_12__["TeamInfoComponent"],
        _starred_players_starred_players_component__WEBPACK_IMPORTED_MODULE_13__["StarredPlayersComponent"],
        _player_profile_player_profile_component__WEBPACK_IMPORTED_MODULE_14__["PlayerProfileComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["appRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                    _topscorers_topscorers_component__WEBPACK_IMPORTED_MODULE_6__["TopscorersComponent"],
                    _previous_fixtures_previous_fixtures_component__WEBPACK_IMPORTED_MODULE_7__["PreviousFixturesComponent"],
                    _upcoming_fixtures_upcoming_fixtures_component__WEBPACK_IMPORTED_MODULE_8__["UpcomingFixturesComponent"],
                    _league_table_league_table_component__WEBPACK_IMPORTED_MODULE_9__["LeagueTableComponent"],
                    _starred_teams_starred_teams_component__WEBPACK_IMPORTED_MODULE_10__["StarredTeamsComponent"],
                    _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_11__["HomePageComponent"],
                    _team_info_team_info_component__WEBPACK_IMPORTED_MODULE_12__["TeamInfoComponent"],
                    _starred_players_starred_players_component__WEBPACK_IMPORTED_MODULE_13__["StarredPlayersComponent"],
                    _player_profile_player_profile_component__WEBPACK_IMPORTED_MODULE_14__["PlayerProfileComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["appRoutingModule"]
                ],
                providers: [_service_teams_service_service__WEBPACK_IMPORTED_MODULE_15__["TeamsService"], _service_players_service_service__WEBPACK_IMPORTED_MODULE_16__["PlayersService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_17__["Router"] }]; }, null); })();


/***/ }),

/***/ "cdf7":
/*!**************************************************!*\
  !*** ./src/app/team-info/team-info.component.ts ***!
  \**************************************************/
/*! exports provided: TeamInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamInfoComponent", function() { return TeamInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../config.js */ "obyI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function TeamInfoComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "h2", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h1", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "table", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const theTeam_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", theTeam_r2.logo, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](theTeam_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", theTeam_r2.venue_city, ",\u00A0 ", theTeam_r2.country, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Abbreviation:\u00A0", theTeam_r2.code, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Venue Name:\u00A0", theTeam_r2.venue_name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Surface:\u00A0", theTeam_r2.venue_surface, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Venue Address:\u00A0", theTeam_r2.venue_address, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Capacity:\u00A0", theTeam_r2.venue_capacity, "");
} }
function TeamInfoComponent_tr_21_h3_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u2B50");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TeamInfoComponent_tr_21_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TeamInfoComponent_tr_21_button_23_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TeamInfoComponent_tr_21_button_23_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const player_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r10.onDeletePlayerFromFavs(player_r3.player.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u2716");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TeamInfoComponent_tr_21_ng_template_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "p");
} }
function TeamInfoComponent_tr_21_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TeamInfoComponent_tr_21_Template_img_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const player_r3 = ctx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r13.onPlayerSelection(player_r3.player.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h3", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h3", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TeamInfoComponent_tr_21_Template_td_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const player_r3 = ctx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r15.addToFavPlayers(player_r3.player); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, TeamInfoComponent_tr_21_h3_10_Template, 2, 0, "h3", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, TeamInfoComponent_tr_21_ng_template_11_Template, 2, 0, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "h3", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "h3", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "h3", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, TeamInfoComponent_tr_21_button_23_Template, 2, 0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, TeamInfoComponent_tr_21_ng_template_24_Template, 1, 0, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const player_r3 = ctx.$implicit;
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](12);
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](25);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", player_r3.player.photo, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](player_r3.player.firstname);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](player_r3.player.lastname);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.checkIfPlayerStar(player_r3.starred))("ngIfElse", _r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](player_r3.player.age);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](player_r3.player.height);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](player_r3.player.nationality);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.checkIfPlayerStar(player_r3.starred))("ngIfElse", _r8);
} }
// import "owl-carousel/owl-carousel"
class TeamInfoComponent {
    constructor(router, route) {
        this.router = router;
        this.route = route;
        //Stores the team info data
        this.teamInfo = [];
        //Stores players data from db
        this.favPlayers = [];
        //Stores team roster
        this.teamRoster = [];
        //Stores final roster
        this.finalTeamRoster = [];
        this.addToFavPlayers = (player) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //Creating data model before storing in db 
            var newEntry = {
                firstName: player.firstname,
                lastName: player.lastname,
                age: player.age,
                height: player.height,
                nationality: player.nationality,
                playerId: player.id,
                playerPic: player.photo
            };
            //Storing data in db 
            const postResponse = yield fetch(_config_js__WEBPACK_IMPORTED_MODULE_2__["postgresUrl"] + "/players", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newEntry),
            })
                .then(response => {
                alert('Successfully added to db');
                //this.leagueData = [];
                this.getFavPlayers();
                this.getData();
            })
                .catch((error) => {
                console.error('Error:', error);
            });
        });
        //Checks if the team is in the Fav Teams table
        this.checkIsFav = (entry) => {
            var res = false;
            //if the player is in the fav players table, return true 
            for (var i = 0; i < this.favPlayers.length; i++) {
                // console.log("the entry (team id)")
                // console.log(entry)
                // console.log("the db id")
                // console.log(this.favTeams[i].teamId);
                if (entry == this.favPlayers[i].playerId) {
                    res = true;
                    break;
                }
            }
            return res;
        };
    }
    onPlayerSelection(playerId) {
        this.router.navigate(['/player/', playerId]);
    }
    getData() {
        this.teamRoster = [];
        this.finalTeamRoster = [];
        //this.getTeamData();
        this.getTeamRoster();
    }
    getTeamData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let id = this.route.snapshot.paramMap.get('id');
            //V2 - Teams informations(id)
            //Premeir League id - 39 
            const response = yield fetch("https://api-football-v1.p.rapidapi.com/v2/teams/team/" + id, _config_js__WEBPACK_IMPORTED_MODULE_2__["secrets"]);
            const teamData = yield response.json();
            console.log("Team info");
            console.log(teamData.api.teams);
            this.teamInfo = teamData.api.teams;
        });
    }
    getTeamRoster() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let id = this.route.snapshot.paramMap.get('id');
            //V3 - Players statistics by player id (teamId)
            const teamRosterResponse = yield fetch("https://api-football-v1.p.rapidapi.com/v3/players?team=" + id + "&season=2020", _config_js__WEBPACK_IMPORTED_MODULE_2__["secrets"]);
            const data = yield teamRosterResponse.json();
            this.teamRoster = data.response;
            console.log("Roster info");
            console.log(this.teamRoster);
            this.checkIfStarred();
        });
    }
    //While rendering players table, 
    //Check if the player is starred (in db)
    checkIfPlayerStar(starred) {
        if (starred) {
            return true;
        }
        else
            return false;
    }
    //Get fav players from db
    getFavPlayers() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //Getting Fav Teams Data from the db 
            const response = yield fetch(_config_js__WEBPACK_IMPORTED_MODULE_2__["postgresUrl"] + "/players");
            const data = yield response.json();
            console.log("Fav Players from db");
            console.log(data);
            this.favPlayers = data;
        });
    }
    checkIfStarred() {
        for (var i = 0; i < this.teamRoster.length; i++) {
            var playerRowData = this.teamRoster[i];
            this.playerId = playerRowData.player.id;
            // console.log("the teams id - testing")
            // console.log(this.teamId);
            var isFav = this.checkIsFav(this.playerId);
            //If the team was found in the db
            if (isFav) {
                var newEntry = Object.assign(Object.assign({}, playerRowData), { starred: true });
                this.finalTeamRoster.push(newEntry);
            }
            else {
                var newEntry = Object.assign(Object.assign({}, playerRowData), { starred: false });
                this.finalTeamRoster.push(newEntry);
            }
        }
        ;
        console.log("the final players table data");
        console.log(this.finalTeamRoster);
    }
    onDeletePlayerFromFavs(playerId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var found = false;
            var idToDelete = playerId;
            for (var i = 0; i < this.favPlayers.length; i++) {
                console.log("the players id");
                console.log(idToDelete);
                console.log("The id in the db");
                console.log(this.favPlayers[i].playerId);
                if (idToDelete === this.favPlayers[i].playerId) {
                    found = true;
                    console.log("found a match");
                    idToDelete = this.favPlayers[i].id;
                    break;
                }
            }
            //Error checking for if the player id is not found in the db
            if (!found) {
                alert("This team is not in your Favourite Teams list");
                return;
            }
            const deleteResponse = yield fetch(_config_js__WEBPACK_IMPORTED_MODULE_2__["postgresUrl"] + "/players/" + idToDelete, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(idToDelete)
            });
            //const responseData = await deleteResponse.json();
            console.log(_config_js__WEBPACK_IMPORTED_MODULE_2__["postgresUrl"] + "/players/" + idToDelete);
            //console.log(responseData);
            console.log("Successfully removed player");
            this.getFavPlayers();
            this.getData();
        });
    }
    ngOnInit() {
        this.getData();
        this.getTeamData();
        this.getFavPlayers();
    }
}
TeamInfoComponent.ɵfac = function TeamInfoComponent_Factory(t) { return new (t || TeamInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
TeamInfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TeamInfoComponent, selectors: [["app-team-info"]], inputs: { teamid: "teamid" }, decls: 22, vars: 2, consts: [["class", "card", 4, "ngFor", "ngForOf"], [1, "table", "mt"], [1, "thead-dark"], ["scope", "col"], [4, "ngFor", "ngForOf"], [1, "card"], [2, "text-align", "center"], ["alt", "John", 1, "text-center", "teamPic", 3, "src"], [1, "teamName"], [1, "title"], [1, "teamInfoTable"], ["scope", "row", 1, "player-img-box"], ["alt", "John", 1, "player-img", 3, "src", "click"], [1, "pdt-120"], [3, "click"], ["class", "pdt-120 tableStar", 4, "ngIf", "ngIfElse"], ["showNotStarred", ""], ["class", "btn btn-danger mt-120 noStar", "type", "button", 3, "click", 4, "ngIf", "ngIfElse"], ["showDelete", ""], [1, "pdt-120", "tableStar"], ["type", "button", 1, "mt-120", "fs-35", "btn", "btn-primary"], ["type", "button", 1, "btn", "btn-danger", "mt-120", "noStar", 3, "click"]], template: function TeamInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, TeamInfoComponent_div_0_Template, 23, 9, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "thead", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "First");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Last");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "\u2B50");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Age");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Height");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Nationality");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Remove");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, TeamInfoComponent_tr_21_Template, 26, 10, "tr", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.teamInfo);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.finalTeamRoster);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: [".card[_ngcontent-%COMP%] {\r\n    box-shadow: 8px 7px 13px 15px rgb(0 0 0 / 37%);\r\n    max-width: 600px;\r\n    margin: 0 auto;\r\n    font-family: arial;\r\n    border-radius: 10px;\r\n  }\r\n  \r\n.teamName[_ngcontent-%COMP%]{\r\n    margin-top: 7px;\r\n     text-align: center;\r\n}\r\n  \r\n.title[_ngcontent-%COMP%] {\r\n    color: grey;\r\n    font-size: 18px;\r\n    text-align: center;\r\n  }\r\n  \r\n.player-img[_ngcontent-%COMP%]{\r\n  width: 300px;\r\n  height: 300px;\r\n  cursor: pointer;\r\n}\r\n  \r\n.player-img-box[_ngcontent-%COMP%]{\r\n  text-align: center;\r\n    width: 500px;\r\n}\r\n  \r\n.noStar[_ngcontent-%COMP%]{\r\n  font-size: 30px;\r\n}\r\n  \r\n.mt-120[_ngcontent-%COMP%]{\r\n  margin-top: 120px;\r\n}\r\n  \r\n.fs-35[_ngcontent-%COMP%]{\r\n  font-size: 30px;\r\n}\r\n  \r\n.tableStar[_ngcontent-%COMP%]{\r\n\tfont-size: 40px;\r\n\ttransition: 0.5s;\r\n}\r\n  \r\n.tableStar[_ngcontent-%COMP%]:hover{\r\n\tfont-size: 50px;\r\n\ttransition: 0.3s;\r\n}\r\n  \r\n.pdt[_ngcontent-%COMP%]{\r\n  padding-top: 75px;\r\n}\r\n  \r\n.pdt-120[_ngcontent-%COMP%]{\r\n  padding-top: 120px;\r\n}\r\n  \r\n.mt[_ngcontent-%COMP%]{\r\n  margin-top: 75px;\r\n}\r\n  \r\na[_ngcontent-%COMP%] {\r\n    text-decoration: none;\r\n    font-size: 22px;\r\n    color: black;\r\n  }\r\n  \r\ntable[_ngcontent-%COMP%]{\r\n      float: left;\r\n      \r\n  }\r\n  \r\n.teamInfoTable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n  }\r\n  \r\n.teamPic[_ngcontent-%COMP%]{\r\n    width: 380px;\r\n    height: 380px;\r\n    margin: 0 auto;\r\n    padding-top: 20px;\r\n    padding-bottom: 20px;\r\n  }\r\n  \r\ntr[_ngcontent-%COMP%]:nth-child(even){\r\n      margin-bottom: 15px;\r\n      background-color: rgba(122, 218, 218, 0.418);\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVhbS1pbmZvL3RlYW0taW5mby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksOENBQThDO0lBQzlDLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLG1CQUFtQjtFQUNyQjs7QUFFRjtJQUNJLGVBQWU7S0FDZCxrQkFBa0I7QUFDdkI7O0FBRUU7SUFDRSxXQUFXO0lBQ1gsZUFBZTtJQUNmLGtCQUFrQjtFQUNwQjs7QUFHRjtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLGtCQUFrQjtJQUNoQixZQUFZO0FBQ2hCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBR0E7Q0FDQyxlQUFlO0NBQ2YsZ0JBQWdCO0FBQ2pCOztBQUdBO0NBQ0MsZUFBZTtDQUNmLGdCQUFnQjtBQUNqQjs7QUFHQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFHQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFRTtJQUNFLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsWUFBWTtFQUNkOztBQUVBO01BQ0ksV0FBVzs7RUFFZjs7QUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7QUFFQTtJQUNFLFlBQVk7SUFDWixhQUFhO0lBQ2IsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixvQkFBb0I7RUFDdEI7O0FBRUE7TUFDSSxtQkFBbUI7TUFDbkIsNENBQTRDO0VBQ2hEIiwiZmlsZSI6InNyYy9hcHAvdGVhbS1pbmZvL3RlYW0taW5mby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xyXG4gICAgYm94LXNoYWRvdzogOHB4IDdweCAxM3B4IDE1cHggcmdiKDAgMCAwIC8gMzclKTtcclxuICAgIG1heC13aWR0aDogNjAwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGZvbnQtZmFtaWx5OiBhcmlhbDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4udGVhbU5hbWV7XHJcbiAgICBtYXJnaW4tdG9wOiA3cHg7XHJcbiAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4gIC50aXRsZSB7XHJcbiAgICBjb2xvcjogZ3JleTtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgXHJcbi5wbGF5ZXItaW1ne1xyXG4gIHdpZHRoOiAzMDBweDtcclxuICBoZWlnaHQ6IDMwMHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4ucGxheWVyLWltZy1ib3h7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDUwMHB4O1xyXG59XHJcblxyXG4ubm9TdGFye1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG5cclxuLm10LTEyMHtcclxuICBtYXJnaW4tdG9wOiAxMjBweDtcclxufVxyXG5cclxuLmZzLTM1e1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG5cclxuXHJcbi50YWJsZVN0YXJ7XHJcblx0Zm9udC1zaXplOiA0MHB4O1xyXG5cdHRyYW5zaXRpb246IDAuNXM7XHJcbn1cclxuXHJcblxyXG4udGFibGVTdGFyOmhvdmVye1xyXG5cdGZvbnQtc2l6ZTogNTBweDtcclxuXHR0cmFuc2l0aW9uOiAwLjNzO1xyXG59XHJcblxyXG5cclxuLnBkdHtcclxuICBwYWRkaW5nLXRvcDogNzVweDtcclxufVxyXG5cclxuLnBkdC0xMjB7XHJcbiAgcGFkZGluZy10b3A6IDEyMHB4O1xyXG59XHJcblxyXG5cclxuLm10e1xyXG4gIG1hcmdpbi10b3A6IDc1cHg7XHJcbn1cclxuXHJcbiAgYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgfVxyXG4gIFxyXG4gIHRhYmxle1xyXG4gICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgXHJcbiAgfVxyXG5cclxuICAudGVhbUluZm9UYWJsZSB0ZHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC50ZWFtUGlje1xyXG4gICAgd2lkdGg6IDM4MHB4O1xyXG4gICAgaGVpZ2h0OiAzODBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICB9XHJcblxyXG4gIHRyOm50aC1jaGlsZChldmVuKXtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjIsIDIxOCwgMjE4LCAwLjQxOCk7XHJcbiAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TeamInfoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-team-info',
                templateUrl: './team-info.component.html',
                styleUrls: ['./team-info.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, { teamid: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();


/***/ }),

/***/ "iuL0":
/*!****************************************************!*\
  !*** ./src/app/service/players-service.service.ts ***!
  \****************************************************/
/*! exports provided: PlayersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayersService", function() { return PlayersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../config.js */ "obyI");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class PlayersService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getAllPlayers() {
        return this.httpClient.get(_config_js__WEBPACK_IMPORTED_MODULE_1__["postgresUrl"] + "/players");
    }
    addNewPlayer(data) {
        return this.httpClient.post(_config_js__WEBPACK_IMPORTED_MODULE_1__["postgresUrl"] + "/players", {
            body: data
        });
    }
    deletePlayer(data) {
        return this.httpClient.delete(_config_js__WEBPACK_IMPORTED_MODULE_1__["postgresUrl"] + "/players/" + data);
    }
}
PlayersService.ɵfac = function PlayersService_Factory(t) { return new (t || PlayersService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
PlayersService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PlayersService, factory: PlayersService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlayersService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "obyI":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/*! exports provided: secrets, postgresUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "secrets", function() { return secrets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postgresUrl", function() { return postgresUrl; });
var secrets = {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
      "x-rapidapi-key": "01217d9c47msha27496e5b78af28p1bca54jsnb9d860de87bc"
    }
  }

  var postgresUrl = "http://localhost:8080";

/***/ }),

/***/ "v05n":
/*!******************************************************************!*\
  !*** ./src/app/upcoming-fixtures/upcoming-fixtures.component.ts ***!
  \******************************************************************/
/*! exports provided: UpcomingFixturesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpcomingFixturesComponent", function() { return UpcomingFixturesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../config.js */ "obyI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function UpcomingFixturesComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UpcomingFixturesComponent_div_3_Template_h2_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const matchGame_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.onTeamSelection(matchGame_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Referee: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h2", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UpcomingFixturesComponent_div_3_Template_h2_click_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const matchGame_r1 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.onTeamSelectionAway(matchGame_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const matchGame_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", matchGame_r1.homeTeam.logo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](matchGame_r1.homeTeam.team_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", matchGame_r1.awayTeam.logo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](matchGame_r1.awayTeam.team_name);
} }
class UpcomingFixturesComponent {
    constructor(router) {
        this.router = router;
    }
    onTeamSelection(matchGame) {
        this.router.navigate(['/team', matchGame.homeTeam.team_id]);
    }
    onTeamSelectionAway(matchGame) {
        this.router.navigate(['/team', matchGame.awayTeam.team_id]);
    }
    getData() {
        //Get the Upcoming Fixtures from API
        fetch("https://api-football-v1.p.rapidapi.com/v2/fixtures/league/524/Regular_Season_-_3", _config_js__WEBPACK_IMPORTED_MODULE_1__["secrets"])
            .then(response => response.json())
            .then(data => {
            this.UpcomingFixtures = data.api.fixtures;
        })
            .catch(err => {
            console.log(err);
        });
    }
    ngOnInit() {
        this.getData();
    }
}
UpcomingFixturesComponent.ɵfac = function UpcomingFixturesComponent_Factory(t) { return new (t || UpcomingFixturesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
UpcomingFixturesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UpcomingFixturesComponent, selectors: [["app-upcoming-fixtures"]], decls: 5, vars: 5, consts: [[1, "animate__animated", "animate__fadeInRight"], [1, "headings", "theHeading"], ["class", "match-content", 4, "ngFor", "ngForOf"], [1, "match-content"], [1, "column"], [1, "team", "team--home"], [1, "team-logo"], [3, "src"], [1, "team-name", 3, "click"], [1, "match-details"], [1, "match-date", "justify-content-center"], [1, "match-score"], [1, "match-score-number", "match-score-number--leading"], [1, "match-score-divider"], [1, "match-score-number"], [1, "match-referee", "justify-content-center"], [1, "team", "team--away"]], template: function UpcomingFixturesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Upcoming Fixtures");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, UpcomingFixturesComponent_div_3_Template, 28, 4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](4, 1, ctx.UpcomingFixtures, 0, 5));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["SlicePipe"]], styles: ["*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]:after, *[_ngcontent-%COMP%]:before {\r\n\tbox-sizing: border-box;\r\n}\r\n\r\n[_ngcontent-%COMP%]:root {\r\n\t--color-text-primary: #1c2a38;\r\n\t--color-text-secondary: #8A8F98;\r\n\t--color-text-alert: #d72641;\r\n\t--color-text-icon: #dbdade;\r\n\t--color-bg-primary: #fff;\r\n\t--color-bg-secondary: #f3f5f9;\r\n\t--color-bg-alert: #fdeaec;\r\n\t--color-theme-primary: #623ce6;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%], input[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\r\n\tfont: inherit;\r\n}\r\n\r\n.theHeading[_ngcontent-%COMP%]{\r\n\tfont-weight: 700;\r\n\tpadding-top: 30px;\r\n\tpadding-bottom: 30px;\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n\tdisplay: block;\r\n}\r\n\r\nstrong[_ngcontent-%COMP%] {\r\n\tfont-weight: 600;\r\n}\r\n\r\nbody[_ngcontent-%COMP%] {\r\n\tfont-family: \"Inter\", sans-serif;\r\n\tline-height: 1.5;\r\n\tcolor: var(--color-text-primary);\r\n\tbackground-color: var(--color-bg-secondary);\r\n}\r\n\r\n.pdt[_ngcontent-%COMP%]{\r\n    padding-top: 50px;\r\n\tpadding-bottom: 30px;\r\n}\r\n\r\n.match[_ngcontent-%COMP%] {\r\n\tbackground-color: var(--color-bg-primary);\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tmin-width: 600px;\r\n\tborder-radius: 10px;\r\n\tbox-shadow: 0 0 2px 0 rgba(#303030, 0.1), 0 4px 4px 0 rgba(#303030, 0.1);\r\n}\r\n\r\n.match-header[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\tborder-bottom: 2px solid rgba(#303030, 0.1);\r\n\tpadding: 16px;\r\n}\r\n\r\n.getbtn[_ngcontent-%COMP%]{\r\n\tdisplay: block;\r\n\ttext-align: center;\r\n\tmargin: 0 auto;\r\n}\r\n\r\n.getbtn[_ngcontent-%COMP%]:hover{\r\n\tbackground-color:black;\r\n\tcolor:yellow;\r\n}\r\n\r\n.match-status[_ngcontent-%COMP%] {\r\n\tbackground-color: var(--color-bg-alert);\r\n\tcolor: var(--color-text-alert);\r\n\tpadding: 8px 12px;\r\n\tborder-radius: 6px;\r\n\tfont-weight: 600;\r\n\tfont-size: 14px;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tline-height: 1;\r\n\tmargin-right: auto;\r\n\r\n}\r\n\r\n.match-tournament[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n\tfont-weight: 700;\r\n\tfont-size: 24px;\r\n\tcursor: pointer;\r\n\t\r\n}\r\n\r\n.match-tournament[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n\t\twidth: 85px;\r\n        align-items: center;\r\n        justify-content: center;\r\n\t}\r\n\r\n.match-actions[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\tmargin-left: auto;\r\n}\r\n\r\n.btn-icon[_ngcontent-%COMP%] {\r\n\tborder: 0;\r\n\tbackground-color: transparent;\r\n\tcolor: var(--color-text-icon);\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n}\r\n\r\n.match-content[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\tposition: relative;\r\n}\r\n\r\n.column[_ngcontent-%COMP%] {\r\n\tpadding: 1px;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\twidth: calc(100% / 3);\r\n}\r\n\r\n.team[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n\tmargin-bottom: 2em;\r\n}\r\n\r\n.team-logo[_ngcontent-%COMP%] {\r\n\twidth: 80px;\r\n\theight: 80px;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tmargin-bottom: 3px;\r\n\tjustify-content: center;\r\n\tborder-radius: 50%;\r\n\tbackground-color: var(--color-bg-primary);\r\n\tbox-shadow: 0 4px 4px 0 rgba(#303030, 0.15),\r\n\t\t0 0 0 15px var(--color-bg-secondary);\r\n\t\r\n}\r\n\r\np[_ngcontent-%COMP%]{\r\n\tmargin-bottom: 0px;;\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n\t\twidth: 80px;\r\n\t\theight: 80px;\r\n\t\t\r\n    }\r\n\r\n.team-name[_ngcontent-%COMP%] {\r\n\ttext-align: center;\r\n\tmargin-top: 1px;\r\n\tfont-size: 20px;\r\n\tfont-weight: 480;\r\n\tcursor: pointer;\r\n}\r\n\r\n.team-name[_ngcontent-%COMP%]:hover{\r\n\tcolor: blue;\r\n\tfont-weight: 800;\r\n}\r\n\r\n.match-details[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n\twidth: 100%;\r\n}\r\n\r\n.match-date[_ngcontent-%COMP%], .match-referee[_ngcontent-%COMP%] {\r\n    display: block;\r\n    font-size: 19px;\r\n    width: 170px;\r\n\tcolor: var(--color-text-secondary);\r\n\ttext-align: center;\r\n}\r\n\r\n.match-score[_ngcontent-%COMP%] {\r\n\tmargin-top: 12px;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n}\r\n\r\n.match-score-number[_ngcontent-%COMP%] {\r\n\tfont-size: 28px;\r\n\tfont-weight: 600;\r\n\tline-height: 1;\r\n\t\r\n}\r\n\r\n.match-score-divider[_ngcontent-%COMP%] {\r\n\tfont-size: 22px;\r\n\tfont-weight: 700;\r\n\tline-height: 1;\r\n\tcolor: var(--color-text-icon);\r\n\tmargin-left: 10px;\r\n\tmargin-right: 10px;\r\n}\r\n\r\n.match-referee[_ngcontent-%COMP%] {\r\n    margin-top: 12px;\r\n\tmargin-bottom: 30px;\r\n\twidth: 250px;\r\n\ttext-align: center;\r\n}\r\n\r\n.headings[_ngcontent-%COMP%]{\r\n    margin-top: 20px;\r\n    text-align: center;\r\n}\r\n\r\ntd[_ngcontent-%COMP%]:nth-child(1) {\r\n    padding-left: 10px;\r\n  }\r\n\r\n.scorersHeader[_ngcontent-%COMP%]{\r\n    background-color: rgb(70, 5, 131);\r\n    color: white;\r\n}\r\n\r\n.leagueTable[_ngcontent-%COMP%]{\r\n\twidth: 80%;\r\n\tmargin-left: auto;\r\n\tmargin-right: auto;\r\n\theight: 100%;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\ttext-align: center;\r\n\tborder: 3px groove rgb(70, 5, 131);\r\n  }\r\n\r\n.leagueTable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{\r\n\t\r\n  }\r\n\r\n.tableArea[_ngcontent-%COMP%]{\r\n\tmargin: 140px;\r\n  }\r\n\r\n.leagueHeading[_ngcontent-%COMP%]{\r\n\t  text-align: center;\r\n\t  font-weight: 700;\r\n  }\r\n\r\n.appScorers[_ngcontent-%COMP%]{\r\n\t  width: 100%;\r\n\t  height: 100%;\r\n  }\r\n\r\n.teamName[_ngcontent-%COMP%]{\r\n\tcursor: pointer;\r\n    width: 20%;\r\n    margin: 0 auto;\r\n    align-items: center;\r\n}\r\n\r\n.teamName[_ngcontent-%COMP%]:hover{\r\n    color: blue;\r\n    font-weight: 500;\r\n}\r\n\r\n.tableStar[_ngcontent-%COMP%]{\r\n\tfont-size: 15px;\r\n\ttransition: 0.5s;\r\n\tcursor: pointer;\r\n}\r\n\r\n.tableStar[_ngcontent-%COMP%]:hover{\r\n\tfont-size: 30px;\r\n\ttransition: 0.3s;\r\n}\r\n\r\n.teamName[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\ndisplay: inline-block;\r\npadding-left: 30px;\r\n}\r\n\r\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n    padding: .75rem;\r\n    vertical-align: middle;\r\n    border-top: 1px solid #dee2e6;\r\n}\r\n\r\n.tableImg[_ngcontent-%COMP%]{\r\n\tmargin: 0 auto;\r\n\tdisplay: inline-block;\r\n}\r\n\r\n\r\n\r\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{\r\n\tdisplay: table;\r\n\ttable-layout: fixed;\r\n\twidth: 100%;\r\n\ttext-align: center;\r\n\t\r\n}\r\n\r\nnav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n\tlist-style: none;\r\n\tdisplay: table-cell;\r\n\tvertical-align: middle;\r\n\tbackground: rgb(70, 5, 131);\r\n\t\r\n  }\r\n\r\n.pb[_ngcontent-%COMP%]{\r\n\t  padding-bottom: 100px;\r\n  }\r\n\r\nnav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-last-child(n+6), nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-last-child(n+6)    ~ *[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n \r\n}\r\n\r\nnav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-last-child(n+6)   a[_ngcontent-%COMP%], nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-last-child(n+6)    ~ *[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n\r\n}\r\n\r\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n\t\r\n\toverflow: hidden;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n\ttext-decoration: none;\r\n\tcolor: #fff;\r\n\tdisplay: block;\r\n\tpadding: 0.75em 1em;\r\n\tfont-size: 1.25em;\r\n  }\r\n\r\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus {\r\n\tcolor: #462997;\r\n\tbackground-color: #2f971d;\r\n\tfont-weight: 550;\r\n  }\r\n\r\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n\tcolor: #cbce1f;\r\n   }\r\n\r\n#firstone[_ngcontent-%COMP%]{\r\n\tborder-top-left-radius:15px;\r\n\tborder-bottom-left-radius:15px;\r\n   }\r\n\r\n#lastone[_ngcontent-%COMP%]{\r\n\tborder-top-right-radius:15px;\r\n\tborder-bottom-right-radius:15px;\r\n   }\n/*# sourceMappingURL=data:application/json;base64,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QW1CO0NBQ25CLGlCQUFpQjtFQUNoQjs7QUFFRjtDQUNDLGNBQWM7Q0FDZCx5QkFBeUI7Q0FDekIsZ0JBQWdCO0VBQ2Y7O0FBQ0M7Q0FDRixjQUFjO0dBQ1o7O0FBR0E7Q0FDRiwyQkFBMkI7Q0FDM0IsOEJBQThCO0dBQzVCOztBQUVBO0NBQ0YsNEJBQTRCO0NBQzVCLCtCQUErQjtHQUM3QiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4qLFxyXG4qOmFmdGVyLFxyXG4qOmJlZm9yZSB7XHJcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuOnJvb3Qge1xyXG5cdC0tY29sb3ItdGV4dC1wcmltYXJ5OiAjMWMyYTM4O1xyXG5cdC0tY29sb3ItdGV4dC1zZWNvbmRhcnk6ICM4QThGOTg7XHJcblx0LS1jb2xvci10ZXh0LWFsZXJ0OiAjZDcyNjQxO1xyXG5cdC0tY29sb3ItdGV4dC1pY29uOiAjZGJkYWRlO1xyXG5cdC0tY29sb3ItYmctcHJpbWFyeTogI2ZmZjtcclxuXHQtLWNvbG9yLWJnLXNlY29uZGFyeTogI2YzZjVmOTtcclxuXHQtLWNvbG9yLWJnLWFsZXJ0OiAjZmRlYWVjO1xyXG5cdC0tY29sb3ItdGhlbWUtcHJpbWFyeTogIzYyM2NlNjtcclxufVxyXG5cclxuYnV0dG9uLFxyXG5pbnB1dCxcclxuc2VsZWN0LFxyXG50ZXh0YXJlYSB7XHJcblx0Zm9udDogaW5oZXJpdDtcclxufVxyXG5cclxuLnRoZUhlYWRpbmd7XHJcblx0Zm9udC13ZWlnaHQ6IDcwMDtcclxuXHRwYWRkaW5nLXRvcDogMzBweDtcclxuXHRwYWRkaW5nLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuaW1nIHtcclxuXHRkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuc3Ryb25nIHtcclxuXHRmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG5cclxuYm9keSB7XHJcblx0Zm9udC1mYW1pbHk6IFwiSW50ZXJcIiwgc2Fucy1zZXJpZjtcclxuXHRsaW5lLWhlaWdodDogMS41O1xyXG5cdGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LXByaW1hcnkpO1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJnLXNlY29uZGFyeSk7XHJcbn1cclxuXHJcbi5wZHR7XHJcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcclxuXHRwYWRkaW5nLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuLm1hdGNoIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1iZy1wcmltYXJ5KTtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0bWluLXdpZHRoOiA2MDBweDtcclxuXHRib3JkZXItcmFkaXVzOiAxMHB4O1xyXG5cdGJveC1zaGFkb3c6IDAgMCAycHggMCByZ2JhKCMzMDMwMzAsIDAuMSksIDAgNHB4IDRweCAwIHJnYmEoIzMwMzAzMCwgMC4xKTtcclxufVxyXG5cclxuLm1hdGNoLWhlYWRlciB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiYSgjMzAzMDMwLCAwLjEpO1xyXG5cdHBhZGRpbmc6IDE2cHg7XHJcbn1cclxuXHJcbi5nZXRidG57XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4uZ2V0YnRuOmhvdmVye1xyXG5cdGJhY2tncm91bmQtY29sb3I6YmxhY2s7XHJcblx0Y29sb3I6eWVsbG93O1xyXG59XHJcblxyXG4ubWF0Y2gtc3RhdHVzIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1iZy1hbGVydCk7XHJcblx0Y29sb3I6IHZhcigtLWNvbG9yLXRleHQtYWxlcnQpO1xyXG5cdHBhZGRpbmc6IDhweCAxMnB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDZweDtcclxuXHRmb250LXdlaWdodDogNjAwO1xyXG5cdGZvbnQtc2l6ZTogMTRweDtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0bGluZS1oZWlnaHQ6IDE7XHJcblx0bWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG5cclxufVxyXG5cclxuLm1hdGNoLXRvdXJuYW1lbnQge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0Zm9udC13ZWlnaHQ6IDcwMDtcclxuXHRmb250LXNpemU6IDI0cHg7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdFxyXG59XHJcbi5tYXRjaC10b3VybmFtZW50IGltZyB7XHJcblx0XHR3aWR0aDogODVweDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdH1cclxuXHJcblxyXG4ubWF0Y2gtYWN0aW9ucyB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRtYXJnaW4tbGVmdDogYXV0bztcclxufVxyXG5cclxuLmJ0bi1pY29uIHtcclxuXHRib3JkZXI6IDA7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcblx0Y29sb3I6IHZhcigtLWNvbG9yLXRleHQtaWNvbik7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4ubWF0Y2gtY29udGVudCB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5jb2x1bW4ge1xyXG5cdHBhZGRpbmc6IDFweDtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0d2lkdGg6IGNhbGMoMTAwJSAvIDMpO1xyXG59XHJcblxyXG4udGVhbSB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0bWFyZ2luLWJvdHRvbTogMmVtO1xyXG59XHJcblxyXG4udGVhbS1sb2dvIHtcclxuXHR3aWR0aDogODBweDtcclxuXHRoZWlnaHQ6IDgwcHg7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdG1hcmdpbi1ib3R0b206IDNweDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYmctcHJpbWFyeSk7XHJcblx0Ym94LXNoYWRvdzogMCA0cHggNHB4IDAgcmdiYSgjMzAzMDMwLCAwLjE1KSxcclxuXHRcdDAgMCAwIDE1cHggdmFyKC0tY29sb3ItYmctc2Vjb25kYXJ5KTtcclxuXHRcclxufVxyXG5cclxucHtcclxuXHRtYXJnaW4tYm90dG9tOiAwcHg7O1xyXG59XHJcblxyXG5cclxuXHJcbmltZyB7XHJcblx0XHR3aWR0aDogODBweDtcclxuXHRcdGhlaWdodDogODBweDtcclxuXHRcdFxyXG4gICAgfVxyXG4gICAgXHJcblxyXG4udGVhbS1uYW1lIHtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0bWFyZ2luLXRvcDogMXB4O1xyXG5cdGZvbnQtc2l6ZTogMjBweDtcclxuXHRmb250LXdlaWdodDogNDgwO1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnRlYW0tbmFtZTpob3ZlcntcclxuXHRjb2xvcjogYmx1ZTtcclxuXHRmb250LXdlaWdodDogODAwO1xyXG59XHJcblxyXG4ubWF0Y2gtZGV0YWlscyB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0d2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5tYXRjaC1kYXRlLCAubWF0Y2gtcmVmZXJlZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgIHdpZHRoOiAxNzBweDtcclxuXHRjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1zZWNvbmRhcnkpO1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuICAgIFxyXG5cclxuLm1hdGNoLXNjb3JlIHtcclxuXHRtYXJnaW4tdG9wOiAxMnB4O1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLm1hdGNoLXNjb3JlLW51bWJlciB7XHJcblx0Zm9udC1zaXplOiAyOHB4O1xyXG5cdGZvbnQtd2VpZ2h0OiA2MDA7XHJcblx0bGluZS1oZWlnaHQ6IDE7XHJcblx0XHJcbn1cclxuXHJcbi5tYXRjaC1zY29yZS1kaXZpZGVyIHtcclxuXHRmb250LXNpemU6IDIycHg7XHJcblx0Zm9udC13ZWlnaHQ6IDcwMDtcclxuXHRsaW5lLWhlaWdodDogMTtcclxuXHRjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1pY29uKTtcclxuXHRtYXJnaW4tbGVmdDogMTBweDtcclxuXHRtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcblxyXG4ubWF0Y2gtcmVmZXJlZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xyXG5cdG1hcmdpbi1ib3R0b206IDMwcHg7XHJcblx0d2lkdGg6IDI1MHB4O1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmhlYWRpbmdze1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuXHJcbnRkOm50aC1jaGlsZCgxKSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIC5zY29yZXJzSGVhZGVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDcwLCA1LCAxMzEpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ubGVhZ3VlVGFibGV7XHJcblx0d2lkdGg6IDgwJTtcclxuXHRtYXJnaW4tbGVmdDogYXV0bztcclxuXHRtYXJnaW4tcmlnaHQ6IGF1dG87XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdGJvcmRlcjogM3B4IGdyb292ZSByZ2IoNzAsIDUsIDEzMSk7XHJcbiAgfVxyXG5cclxuICAubGVhZ3VlVGFibGUgdHJ7XHJcblx0XHJcbiAgfVxyXG5cclxuXHJcbiAgLnRhYmxlQXJlYXtcclxuXHRtYXJnaW46IDE0MHB4O1xyXG4gIH1cclxuXHJcbiAgLmxlYWd1ZUhlYWRpbmd7XHJcblx0ICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0ICBmb250LXdlaWdodDogNzAwO1xyXG4gIH1cclxuXHJcbiAgLmFwcFNjb3JlcnN7XHJcblx0ICB3aWR0aDogMTAwJTtcclxuXHQgIGhlaWdodDogMTAwJTtcclxuICB9XHJcblxyXG4gIC50ZWFtTmFtZXtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4udGVhbU5hbWU6aG92ZXJ7XHJcbiAgICBjb2xvcjogYmx1ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi50YWJsZVN0YXJ7XHJcblx0Zm9udC1zaXplOiAxNXB4O1xyXG5cdHRyYW5zaXRpb246IDAuNXM7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4udGFibGVTdGFyOmhvdmVye1xyXG5cdGZvbnQtc2l6ZTogMzBweDtcclxuXHR0cmFuc2l0aW9uOiAwLjNzO1xyXG59XHJcblxyXG4udGVhbU5hbWUgcHtcclxuZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5wYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbn1cclxuXHJcbi50YWJsZSB0ZCwgLnRhYmxlIHRoIHtcclxuICAgIHBhZGRpbmc6IC43NXJlbTtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2RlZTJlNjtcclxufVxyXG5cclxuLnRhYmxlSW1ne1xyXG5cdG1hcmdpbjogMCBhdXRvO1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLyogLS0tLS0gTmF2IEJhciAtLS0tICovXHJcblxyXG5cclxubmF2IHVse1xyXG5cdGRpc3BsYXk6IHRhYmxlO1xyXG5cdHRhYmxlLWxheW91dDogZml4ZWQ7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFxyXG59XHJcblxyXG5uYXYgbGkge1xyXG5cdGxpc3Qtc3R5bGU6IG5vbmU7XHJcblx0ZGlzcGxheTogdGFibGUtY2VsbDtcclxuXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG5cdGJhY2tncm91bmQ6IHJnYig3MCwgNSwgMTMxKTtcclxuXHRcclxuICB9XHJcblxyXG4gIC5wYntcclxuXHQgIHBhZGRpbmctYm90dG9tOiAxMDBweDtcclxuICB9XHJcblxyXG4gIG5hdiBsaTpudGgtbGFzdC1jaGlsZChuKzYpLCBcclxubmF2IGxpOm50aC1sYXN0LWNoaWxkKG4rNikgfiAqIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiBcclxufVxyXG5cclxubmF2IGxpOm50aC1sYXN0LWNoaWxkKG4rNikgYSwgXHJcbm5hdiBsaTpudGgtbGFzdC1jaGlsZChuKzYpIH4gKiBhIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblxyXG59XHJcblxyXG51bCBsaXtcclxuXHRcclxuXHRvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4gIG5hdiBhIHtcclxuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblx0Y29sb3I6ICNmZmY7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0cGFkZGluZzogMC43NWVtIDFlbTtcclxuXHRmb250LXNpemU6IDEuMjVlbTtcclxuICB9XHJcblxyXG5uYXYgYTpmb2N1cyB7XHJcblx0Y29sb3I6ICM0NjI5OTc7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzJmOTcxZDtcclxuXHRmb250LXdlaWdodDogNTUwO1xyXG4gIH0gXHJcbiAgIG5hdiBhOmhvdmVye1xyXG5cdGNvbG9yOiAjY2JjZTFmO1xyXG4gICB9XHJcblxyXG5cclxuICAgI2ZpcnN0b25le1xyXG5cdGJvcmRlci10b3AtbGVmdC1yYWRpdXM6MTVweDtcclxuXHRib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOjE1cHg7XHJcbiAgIH1cclxuXHJcbiAgICNsYXN0b25le1xyXG5cdGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOjE1cHg7XHJcblx0Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6MTVweDtcclxuICAgfVxyXG5cclxuICAgIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UpcomingFixturesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-upcoming-fixtures',
                templateUrl: './upcoming-fixtures.component.html',
                styleUrls: ['./../app.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "vClg":
/*!**************************************************!*\
  !*** ./src/app/service/teams-service.service.ts ***!
  \**************************************************/
/*! exports provided: TeamsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamsService", function() { return TeamsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../config.js */ "obyI");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class TeamsService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getAllTeams() {
        return this.httpClient.get(_config_js__WEBPACK_IMPORTED_MODULE_1__["postgresUrl"] + "/teams");
    }
    addNewTeam(data) {
        return this.httpClient.post(_config_js__WEBPACK_IMPORTED_MODULE_1__["postgresUrl"] + "/teams", {
            body: data
        });
    }
    deleteTeam(data) {
        return this.httpClient.delete(_config_js__WEBPACK_IMPORTED_MODULE_1__["postgresUrl"] + "/teams/" + data);
    }
}
TeamsService.ɵfac = function TeamsService_Factory(t) { return new (t || TeamsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
TeamsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TeamsService, factory: TeamsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeamsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: appRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutingModule", function() { return appRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _topscorers_topscorers_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./topscorers/topscorers.component */ "GDRK");
/* harmony import */ var _previous_fixtures_previous_fixtures_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./previous-fixtures/previous-fixtures.component */ "9FfI");
/* harmony import */ var _upcoming_fixtures_upcoming_fixtures_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./upcoming-fixtures/upcoming-fixtures.component */ "v05n");
/* harmony import */ var _league_table_league_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./league-table/league-table.component */ "zbyg");
/* harmony import */ var _starred_teams_starred_teams_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./starred-teams/starred-teams.component */ "YqjJ");
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home-page/home-page.component */ "F1my");
/* harmony import */ var _team_info_team_info_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./team-info/team-info.component */ "cdf7");
/* harmony import */ var _starred_players_starred_players_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./starred-players/starred-players.component */ "FqAN");
/* harmony import */ var _player_profile_player_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./player-profile/player-profile.component */ "9sIj");













const routes = [
    { path: 'topscorer', component: _topscorers_topscorers_component__WEBPACK_IMPORTED_MODULE_2__["TopscorersComponent"] },
    { path: 'leaguetable', component: _league_table_league_table_component__WEBPACK_IMPORTED_MODULE_5__["LeagueTableComponent"] },
    { path: 'matches', component: _previous_fixtures_previous_fixtures_component__WEBPACK_IMPORTED_MODULE_3__["PreviousFixturesComponent"] },
    { path: 'upcominggames', component: _upcoming_fixtures_upcoming_fixtures_component__WEBPACK_IMPORTED_MODULE_4__["UpcomingFixturesComponent"] },
    { path: 'starred-teams', component: _starred_teams_starred_teams_component__WEBPACK_IMPORTED_MODULE_6__["StarredTeamsComponent"] },
    { path: 'starred-players', component: _starred_players_starred_players_component__WEBPACK_IMPORTED_MODULE_9__["StarredPlayersComponent"] },
    { path: 'team/:id', component: _team_info_team_info_component__WEBPACK_IMPORTED_MODULE_8__["TeamInfoComponent"] },
    { path: 'player/:id', component: _player_profile_player_profile_component__WEBPACK_IMPORTED_MODULE_10__["PlayerProfileComponent"] },
    { path: '', component: _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_7__["HomePageComponent"] },
    // otherwise redirect to home
    { path: '**', redirectTo: '' },
];
class appRoutingModule {
}
appRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: appRoutingModule });
appRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function appRoutingModule_Factory(t) { return new (t || appRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](appRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](appRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zbyg":
/*!********************************************************!*\
  !*** ./src/app/league-table/league-table.component.ts ***!
  \********************************************************/
/*! exports provided: LeagueTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeagueTableComponent", function() { return LeagueTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../config.js */ "obyI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function LeagueTableComponent_tr_39_p_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u2B50");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LeagueTableComponent_tr_39_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u274C");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LeagueTableComponent_tr_39_button_25_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LeagueTableComponent_tr_39_button_25_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const team_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r9.onDeleteTeamFromFavs(team_r1.team_id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u2716");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LeagueTableComponent_tr_39_ng_template_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "p");
} }
function LeagueTableComponent_tr_39_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LeagueTableComponent_tr_39_Template_td_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const team_r1 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r12.onTeamSelection(team_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LeagueTableComponent_tr_39_Template_td_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const team_r1 = ctx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r14.onTeamSelection(team_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LeagueTableComponent_tr_39_Template_td_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const team_r1 = ctx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r15.addToFavTeams(team_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, LeagueTableComponent_tr_39_p_9_Template, 2, 0, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, LeagueTableComponent_tr_39_ng_template_10_Template, 2, 0, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, LeagueTableComponent_tr_39_button_25_Template, 2, 0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, LeagueTableComponent_tr_39_ng_template_26_Template, 1, 0, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const team_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](11);
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](27);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r2 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", team_r1.logo, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](team_r1.teamName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.checkTeamStar(team_r1.starred))("ngIfElse", _r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](team_r1.all.matchsPlayed);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](team_r1.all.win);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](team_r1.all.draw);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](team_r1.all.lose);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](team_r1.goalsDiff);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](team_r1.points);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.checkTeamStar(team_r1.starred))("ngIfElse", _r7);
} }
class LeagueTableComponent {
    constructor(router, activatedRoute) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        //Stores the league table data
        this.leagueData = [];
        //Stores data from the API
        this.data = [];
        //Stores fav teams from db
        this.favTeams = [];
        //Checks if the team is in the Fav Teams table
        this.checkIsFav = (entry) => {
            var res = false;
            //if the team is in the fav teams table, return true 
            for (var i = 0; i < this.favTeams.length; i++) {
                // console.log("the entry (team id)")
                // console.log(entry)
                // console.log("the db id")
                // console.log(this.favTeams[i].teamId);
                if (entry == this.favTeams[i].teamId) {
                    res = true;
                    break;
                }
            }
            return res;
        };
        this.checkIfStarred = () => {
            for (var i = 0; i < this.data.length; i++) {
                var tableRowData = this.data[i];
                this.teamId = tableRowData.team_id.toString();
                // console.log("the teams id - testing")
                // console.log(this.teamId);
                var isFav = this.checkIsFav(this.teamId);
                //If the team was found in the db
                if (isFav) {
                    var newEntry = Object.assign(Object.assign({}, tableRowData), { starred: true });
                    this.leagueData.push(newEntry);
                }
                else {
                    var newEntry = Object.assign(Object.assign({}, tableRowData), { starred: false });
                    this.leagueData.push(newEntry);
                }
            }
            ;
            console.log("the final leage data");
            console.log(this.leagueData);
        };
        this.addToFavTeams = (team) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //Creating data model before storing in db 
            var newEntry = {
                teamName: team.teamName,
                photoLink: team.logo,
                teamId: team.team_id
            };
            //Storing data in db 
            const postResponse = yield fetch(_config_js__WEBPACK_IMPORTED_MODULE_2__["postgresUrl"] + "/teams", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newEntry),
            })
                .then(response => {
                alert('Successfully added to db');
                //this.leagueData = [];
                this.getFavTeams();
                this.getData();
            })
                .catch((error) => {
                console.error('Error:', error);
            });
        });
    }
    onTeamSelection(theteam) {
        this.router.navigate(['/team', theteam.team_id]);
    }
    refreshComponent() {
        console.log("refreshing component");
    }
    getData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.data = [];
            this.leagueData = [];
            //Get the League Table Data from API
            const response = yield fetch("https://api-football-v1.p.rapidapi.com/v2/leagueTable/524", _config_js__WEBPACK_IMPORTED_MODULE_2__["secrets"]);
            const data = yield response.json();
            this.data = data.api.standings[0];
            this.getFavTeams();
            this.checkIfStarred();
        });
    }
    getFavTeams() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //Getting Fav Teams Data from the db 
            const response = yield fetch(_config_js__WEBPACK_IMPORTED_MODULE_2__["postgresUrl"] + "/teams");
            const data = yield response.json();
            console.log("Fav teams from db");
            console.log(data);
            this.favTeams = data;
        });
    }
    checkTeamStar(starred) {
        if (starred) {
            return true;
        }
        else
            return false;
    }
    onDeleteTeamFromFavs(teamId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var found = false;
            var idToDelete = teamId.toString();
            for (var i = 0; i < this.favTeams.length; i++) {
                console.log("the teams id");
                console.log(idToDelete);
                console.log("The id in the db");
                console.log(this.favTeams[i].teamId);
                if (idToDelete === this.favTeams[i].teamId) {
                    found = true;
                    console.log("found a match");
                    idToDelete = this.favTeams[i].id;
                    break;
                }
            }
            if (!found) {
                alert("This team is not in your Favourite Teams list");
                return;
            }
            const deleteResponse = yield fetch(_config_js__WEBPACK_IMPORTED_MODULE_2__["postgresUrl"] + "/teams/" + idToDelete, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(idToDelete)
            });
            this.getFavTeams();
            this.getData();
        });
    }
    ngOnInit() {
        this.getFavTeams();
        this.getData();
    } //emd init
} //end class
LeagueTableComponent.ɵfac = function LeagueTableComponent_Factory(t) { return new (t || LeagueTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
LeagueTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LeagueTableComponent, selectors: [["app-league-table"]], decls: 42, vars: 1, consts: [[1, "animate__animated", "animate__fadeInRight"], [1, "leagueHeading", "pdt"], [1, "leagueTable", "table"], [1, "scorersHeader"], [4, "ngFor", "ngForOf"], [1, "pb"], [1, "teamName", 3, "click"], ["width", "170", "height", "170", 1, "tableImg", 3, "src"], [1, "tableStar", 3, "click"], [4, "ngIf", "ngIfElse"], ["showNotStarred", ""], ["class", "btn btn-danger", "type", "button", 3, "click", 4, "ngIf", "ngIfElse"], ["showDelete", ""], ["type", "button", 1, "btn", "btn-danger", 3, "click"]], template: function LeagueTableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "League Table");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "tr", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Team");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "\u2B50");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "GP");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "W");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "D");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "L");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "GD");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "PTS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "\u274C");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](39, LeagueTableComponent_tr_39_Template, 28, 13, "tr", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "div", 5);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.leagueData);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: ["*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]:after, *[_ngcontent-%COMP%]:before {\r\n\tbox-sizing: border-box;\r\n}\r\n\r\n[_ngcontent-%COMP%]:root {\r\n\t--color-text-primary: #1c2a38;\r\n\t--color-text-secondary: #8A8F98;\r\n\t--color-text-alert: #d72641;\r\n\t--color-text-icon: #dbdade;\r\n\t--color-bg-primary: #fff;\r\n\t--color-bg-secondary: #f3f5f9;\r\n\t--color-bg-alert: #fdeaec;\r\n\t--color-theme-primary: #623ce6;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%], input[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\r\n\tfont: inherit;\r\n}\r\n\r\n.theHeading[_ngcontent-%COMP%]{\r\n\tfont-weight: 700;\r\n\tpadding-top: 30px;\r\n\tpadding-bottom: 30px;\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n\tdisplay: block;\r\n}\r\n\r\nstrong[_ngcontent-%COMP%] {\r\n\tfont-weight: 600;\r\n}\r\n\r\nbody[_ngcontent-%COMP%] {\r\n\tfont-family: \"Inter\", sans-serif;\r\n\tline-height: 1.5;\r\n\tcolor: var(--color-text-primary);\r\n\tbackground-color: var(--color-bg-secondary);\r\n}\r\n\r\n.pdt[_ngcontent-%COMP%]{\r\n    padding-top: 50px;\r\n\tpadding-bottom: 30px;\r\n}\r\n\r\n.match[_ngcontent-%COMP%] {\r\n\tbackground-color: var(--color-bg-primary);\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tmin-width: 600px;\r\n\tborder-radius: 10px;\r\n\tbox-shadow: 0 0 2px 0 rgba(#303030, 0.1), 0 4px 4px 0 rgba(#303030, 0.1);\r\n}\r\n\r\n.match-header[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\tborder-bottom: 2px solid rgba(#303030, 0.1);\r\n\tpadding: 16px;\r\n}\r\n\r\n.getbtn[_ngcontent-%COMP%]{\r\n\tdisplay: block;\r\n\ttext-align: center;\r\n\tmargin: 0 auto;\r\n}\r\n\r\n.getbtn[_ngcontent-%COMP%]:hover{\r\n\tbackground-color:black;\r\n\tcolor:yellow;\r\n}\r\n\r\n.match-status[_ngcontent-%COMP%] {\r\n\tbackground-color: var(--color-bg-alert);\r\n\tcolor: var(--color-text-alert);\r\n\tpadding: 8px 12px;\r\n\tborder-radius: 6px;\r\n\tfont-weight: 600;\r\n\tfont-size: 14px;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tline-height: 1;\r\n\tmargin-right: auto;\r\n\r\n}\r\n\r\n.match-tournament[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n\tfont-weight: 700;\r\n\tfont-size: 24px;\r\n\tcursor: pointer;\r\n\t\r\n}\r\n\r\n.match-tournament[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n\t\twidth: 85px;\r\n        align-items: center;\r\n        justify-content: center;\r\n\t}\r\n\r\n.match-actions[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\tmargin-left: auto;\r\n}\r\n\r\n.btn-icon[_ngcontent-%COMP%] {\r\n\tborder: 0;\r\n\tbackground-color: transparent;\r\n\tcolor: var(--color-text-icon);\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n}\r\n\r\n.match-content[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\tposition: relative;\r\n}\r\n\r\n.column[_ngcontent-%COMP%] {\r\n\tpadding: 1px;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\twidth: calc(100% / 3);\r\n}\r\n\r\n.team[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n\tmargin-bottom: 2em;\r\n}\r\n\r\n.team-logo[_ngcontent-%COMP%] {\r\n\twidth: 80px;\r\n\theight: 80px;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tmargin-bottom: 3px;\r\n\tjustify-content: center;\r\n\tborder-radius: 50%;\r\n\tbackground-color: var(--color-bg-primary);\r\n\tbox-shadow: 0 4px 4px 0 rgba(#303030, 0.15),\r\n\t\t0 0 0 15px var(--color-bg-secondary);\r\n\t\r\n}\r\n\r\np[_ngcontent-%COMP%]{\r\n\tmargin-bottom: 0px;;\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n\t\twidth: 80px;\r\n\t\theight: 80px;\r\n\t\t\r\n    }\r\n\r\n.team-name[_ngcontent-%COMP%] {\r\n\ttext-align: center;\r\n\tmargin-top: 1px;\r\n\tfont-size: 20px;\r\n\tfont-weight: 480;\r\n\tcursor: pointer;\r\n}\r\n\r\n.team-name[_ngcontent-%COMP%]:hover{\r\n\tcolor: blue;\r\n\tfont-weight: 800;\r\n}\r\n\r\n.match-details[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n\twidth: 100%;\r\n}\r\n\r\n.match-date[_ngcontent-%COMP%], .match-referee[_ngcontent-%COMP%] {\r\n    display: block;\r\n    font-size: 19px;\r\n    width: 170px;\r\n\tcolor: var(--color-text-secondary);\r\n\ttext-align: center;\r\n}\r\n\r\n.match-score[_ngcontent-%COMP%] {\r\n\tmargin-top: 12px;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n}\r\n\r\n.match-score-number[_ngcontent-%COMP%] {\r\n\tfont-size: 28px;\r\n\tfont-weight: 600;\r\n\tline-height: 1;\r\n\t\r\n}\r\n\r\n.match-score-divider[_ngcontent-%COMP%] {\r\n\tfont-size: 22px;\r\n\tfont-weight: 700;\r\n\tline-height: 1;\r\n\tcolor: var(--color-text-icon);\r\n\tmargin-left: 10px;\r\n\tmargin-right: 10px;\r\n}\r\n\r\n.match-referee[_ngcontent-%COMP%] {\r\n    margin-top: 12px;\r\n\tmargin-bottom: 30px;\r\n\twidth: 250px;\r\n\ttext-align: center;\r\n}\r\n\r\n.headings[_ngcontent-%COMP%]{\r\n    margin-top: 20px;\r\n    text-align: center;\r\n}\r\n\r\ntd[_ngcontent-%COMP%]:nth-child(1) {\r\n    padding-left: 10px;\r\n  }\r\n\r\n.scorersHeader[_ngcontent-%COMP%]{\r\n    background-color: rgb(70, 5, 131);\r\n    color: white;\r\n}\r\n\r\n.leagueTable[_ngcontent-%COMP%]{\r\n\twidth: 80%;\r\n\tmargin-left: auto;\r\n\tmargin-right: auto;\r\n\theight: 100%;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\ttext-align: center;\r\n\tborder: 3px groove rgb(70, 5, 131);\r\n  }\r\n\r\n.leagueTable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{\r\n\t\r\n  }\r\n\r\n.tableArea[_ngcontent-%COMP%]{\r\n\tmargin: 140px;\r\n  }\r\n\r\n.leagueHeading[_ngcontent-%COMP%]{\r\n\t  text-align: center;\r\n\t  font-weight: 700;\r\n  }\r\n\r\n.appScorers[_ngcontent-%COMP%]{\r\n\t  width: 100%;\r\n\t  height: 100%;\r\n  }\r\n\r\n.teamName[_ngcontent-%COMP%]{\r\n\tcursor: pointer;\r\n    width: 20%;\r\n    margin: 0 auto;\r\n    align-items: center;\r\n}\r\n\r\n.teamName[_ngcontent-%COMP%]:hover{\r\n    color: blue;\r\n    font-weight: 500;\r\n}\r\n\r\n.tableStar[_ngcontent-%COMP%]{\r\n\tfont-size: 15px;\r\n\ttransition: 0.5s;\r\n\tcursor: pointer;\r\n}\r\n\r\n.tableStar[_ngcontent-%COMP%]:hover{\r\n\tfont-size: 30px;\r\n\ttransition: 0.3s;\r\n}\r\n\r\n.teamName[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\ndisplay: inline-block;\r\npadding-left: 30px;\r\n}\r\n\r\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n    padding: .75rem;\r\n    vertical-align: middle;\r\n    border-top: 1px solid #dee2e6;\r\n}\r\n\r\n.tableImg[_ngcontent-%COMP%]{\r\n\tmargin: 0 auto;\r\n\tdisplay: inline-block;\r\n}\r\n\r\n\r\n\r\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{\r\n\tdisplay: table;\r\n\ttable-layout: fixed;\r\n\twidth: 100%;\r\n\ttext-align: center;\r\n\t\r\n}\r\n\r\nnav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n\tlist-style: none;\r\n\tdisplay: table-cell;\r\n\tvertical-align: middle;\r\n\tbackground: rgb(70, 5, 131);\r\n\t\r\n  }\r\n\r\n.pb[_ngcontent-%COMP%]{\r\n\t  padding-bottom: 100px;\r\n  }\r\n\r\nnav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-last-child(n+6), nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-last-child(n+6)    ~ *[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n \r\n}\r\n\r\nnav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-last-child(n+6)   a[_ngcontent-%COMP%], nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-last-child(n+6)    ~ *[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n\r\n}\r\n\r\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n\t\r\n\toverflow: hidden;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n\ttext-decoration: none;\r\n\tcolor: #fff;\r\n\tdisplay: block;\r\n\tpadding: 0.75em 1em;\r\n\tfont-size: 1.25em;\r\n  }\r\n\r\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus {\r\n\tcolor: #462997;\r\n\tbackground-color: #2f971d;\r\n\tfont-weight: 550;\r\n  }\r\n\r\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n\tcolor: #cbce1f;\r\n   }\r\n\r\n#firstone[_ngcontent-%COMP%]{\r\n\tborder-top-left-radius:15px;\r\n\tborder-bottom-left-radius:15px;\r\n   }\r\n\r\n#lastone[_ngcontent-%COMP%]{\r\n\tborder-top-right-radius:15px;\r\n\tborder-bottom-right-radius:15px;\r\n   }\n/*# sourceMappingURL=data:application/json;base64,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QW1CO0NBQ25CLGlCQUFpQjtFQUNoQjs7QUFFRjtDQUNDLGNBQWM7Q0FDZCx5QkFBeUI7Q0FDekIsZ0JBQWdCO0VBQ2Y7O0FBQ0M7Q0FDRixjQUFjO0dBQ1o7O0FBR0E7Q0FDRiwyQkFBMkI7Q0FDM0IsOEJBQThCO0dBQzVCOztBQUVBO0NBQ0YsNEJBQTRCO0NBQzVCLCtCQUErQjtHQUM3QiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4qLFxyXG4qOmFmdGVyLFxyXG4qOmJlZm9yZSB7XHJcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuOnJvb3Qge1xyXG5cdC0tY29sb3ItdGV4dC1wcmltYXJ5OiAjMWMyYTM4O1xyXG5cdC0tY29sb3ItdGV4dC1zZWNvbmRhcnk6ICM4QThGOTg7XHJcblx0LS1jb2xvci10ZXh0LWFsZXJ0OiAjZDcyNjQxO1xyXG5cdC0tY29sb3ItdGV4dC1pY29uOiAjZGJkYWRlO1xyXG5cdC0tY29sb3ItYmctcHJpbWFyeTogI2ZmZjtcclxuXHQtLWNvbG9yLWJnLXNlY29uZGFyeTogI2YzZjVmOTtcclxuXHQtLWNvbG9yLWJnLWFsZXJ0OiAjZmRlYWVjO1xyXG5cdC0tY29sb3ItdGhlbWUtcHJpbWFyeTogIzYyM2NlNjtcclxufVxyXG5cclxuYnV0dG9uLFxyXG5pbnB1dCxcclxuc2VsZWN0LFxyXG50ZXh0YXJlYSB7XHJcblx0Zm9udDogaW5oZXJpdDtcclxufVxyXG5cclxuLnRoZUhlYWRpbmd7XHJcblx0Zm9udC13ZWlnaHQ6IDcwMDtcclxuXHRwYWRkaW5nLXRvcDogMzBweDtcclxuXHRwYWRkaW5nLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuaW1nIHtcclxuXHRkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuc3Ryb25nIHtcclxuXHRmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG5cclxuYm9keSB7XHJcblx0Zm9udC1mYW1pbHk6IFwiSW50ZXJcIiwgc2Fucy1zZXJpZjtcclxuXHRsaW5lLWhlaWdodDogMS41O1xyXG5cdGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LXByaW1hcnkpO1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJnLXNlY29uZGFyeSk7XHJcbn1cclxuXHJcbi5wZHR7XHJcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcclxuXHRwYWRkaW5nLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuLm1hdGNoIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1iZy1wcmltYXJ5KTtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0bWluLXdpZHRoOiA2MDBweDtcclxuXHRib3JkZXItcmFkaXVzOiAxMHB4O1xyXG5cdGJveC1zaGFkb3c6IDAgMCAycHggMCByZ2JhKCMzMDMwMzAsIDAuMSksIDAgNHB4IDRweCAwIHJnYmEoIzMwMzAzMCwgMC4xKTtcclxufVxyXG5cclxuLm1hdGNoLWhlYWRlciB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiYSgjMzAzMDMwLCAwLjEpO1xyXG5cdHBhZGRpbmc6IDE2cHg7XHJcbn1cclxuXHJcbi5nZXRidG57XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4uZ2V0YnRuOmhvdmVye1xyXG5cdGJhY2tncm91bmQtY29sb3I6YmxhY2s7XHJcblx0Y29sb3I6eWVsbG93O1xyXG59XHJcblxyXG4ubWF0Y2gtc3RhdHVzIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1iZy1hbGVydCk7XHJcblx0Y29sb3I6IHZhcigtLWNvbG9yLXRleHQtYWxlcnQpO1xyXG5cdHBhZGRpbmc6IDhweCAxMnB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDZweDtcclxuXHRmb250LXdlaWdodDogNjAwO1xyXG5cdGZvbnQtc2l6ZTogMTRweDtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0bGluZS1oZWlnaHQ6IDE7XHJcblx0bWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG5cclxufVxyXG5cclxuLm1hdGNoLXRvdXJuYW1lbnQge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0Zm9udC13ZWlnaHQ6IDcwMDtcclxuXHRmb250LXNpemU6IDI0cHg7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdFxyXG59XHJcbi5tYXRjaC10b3VybmFtZW50IGltZyB7XHJcblx0XHR3aWR0aDogODVweDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdH1cclxuXHJcblxyXG4ubWF0Y2gtYWN0aW9ucyB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRtYXJnaW4tbGVmdDogYXV0bztcclxufVxyXG5cclxuLmJ0bi1pY29uIHtcclxuXHRib3JkZXI6IDA7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcblx0Y29sb3I6IHZhcigtLWNvbG9yLXRleHQtaWNvbik7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4ubWF0Y2gtY29udGVudCB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5jb2x1bW4ge1xyXG5cdHBhZGRpbmc6IDFweDtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0d2lkdGg6IGNhbGMoMTAwJSAvIDMpO1xyXG59XHJcblxyXG4udGVhbSB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0bWFyZ2luLWJvdHRvbTogMmVtO1xyXG59XHJcblxyXG4udGVhbS1sb2dvIHtcclxuXHR3aWR0aDogODBweDtcclxuXHRoZWlnaHQ6IDgwcHg7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdG1hcmdpbi1ib3R0b206IDNweDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYmctcHJpbWFyeSk7XHJcblx0Ym94LXNoYWRvdzogMCA0cHggNHB4IDAgcmdiYSgjMzAzMDMwLCAwLjE1KSxcclxuXHRcdDAgMCAwIDE1cHggdmFyKC0tY29sb3ItYmctc2Vjb25kYXJ5KTtcclxuXHRcclxufVxyXG5cclxucHtcclxuXHRtYXJnaW4tYm90dG9tOiAwcHg7O1xyXG59XHJcblxyXG5cclxuXHJcbmltZyB7XHJcblx0XHR3aWR0aDogODBweDtcclxuXHRcdGhlaWdodDogODBweDtcclxuXHRcdFxyXG4gICAgfVxyXG4gICAgXHJcblxyXG4udGVhbS1uYW1lIHtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0bWFyZ2luLXRvcDogMXB4O1xyXG5cdGZvbnQtc2l6ZTogMjBweDtcclxuXHRmb250LXdlaWdodDogNDgwO1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnRlYW0tbmFtZTpob3ZlcntcclxuXHRjb2xvcjogYmx1ZTtcclxuXHRmb250LXdlaWdodDogODAwO1xyXG59XHJcblxyXG4ubWF0Y2gtZGV0YWlscyB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0d2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5tYXRjaC1kYXRlLCAubWF0Y2gtcmVmZXJlZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgIHdpZHRoOiAxNzBweDtcclxuXHRjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1zZWNvbmRhcnkpO1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuICAgIFxyXG5cclxuLm1hdGNoLXNjb3JlIHtcclxuXHRtYXJnaW4tdG9wOiAxMnB4O1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLm1hdGNoLXNjb3JlLW51bWJlciB7XHJcblx0Zm9udC1zaXplOiAyOHB4O1xyXG5cdGZvbnQtd2VpZ2h0OiA2MDA7XHJcblx0bGluZS1oZWlnaHQ6IDE7XHJcblx0XHJcbn1cclxuXHJcbi5tYXRjaC1zY29yZS1kaXZpZGVyIHtcclxuXHRmb250LXNpemU6IDIycHg7XHJcblx0Zm9udC13ZWlnaHQ6IDcwMDtcclxuXHRsaW5lLWhlaWdodDogMTtcclxuXHRjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1pY29uKTtcclxuXHRtYXJnaW4tbGVmdDogMTBweDtcclxuXHRtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcblxyXG4ubWF0Y2gtcmVmZXJlZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xyXG5cdG1hcmdpbi1ib3R0b206IDMwcHg7XHJcblx0d2lkdGg6IDI1MHB4O1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmhlYWRpbmdze1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuXHJcbnRkOm50aC1jaGlsZCgxKSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIC5zY29yZXJzSGVhZGVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDcwLCA1LCAxMzEpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ubGVhZ3VlVGFibGV7XHJcblx0d2lkdGg6IDgwJTtcclxuXHRtYXJnaW4tbGVmdDogYXV0bztcclxuXHRtYXJnaW4tcmlnaHQ6IGF1dG87XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdGJvcmRlcjogM3B4IGdyb292ZSByZ2IoNzAsIDUsIDEzMSk7XHJcbiAgfVxyXG5cclxuICAubGVhZ3VlVGFibGUgdHJ7XHJcblx0XHJcbiAgfVxyXG5cclxuXHJcbiAgLnRhYmxlQXJlYXtcclxuXHRtYXJnaW46IDE0MHB4O1xyXG4gIH1cclxuXHJcbiAgLmxlYWd1ZUhlYWRpbmd7XHJcblx0ICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0ICBmb250LXdlaWdodDogNzAwO1xyXG4gIH1cclxuXHJcbiAgLmFwcFNjb3JlcnN7XHJcblx0ICB3aWR0aDogMTAwJTtcclxuXHQgIGhlaWdodDogMTAwJTtcclxuICB9XHJcblxyXG4gIC50ZWFtTmFtZXtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4udGVhbU5hbWU6aG92ZXJ7XHJcbiAgICBjb2xvcjogYmx1ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi50YWJsZVN0YXJ7XHJcblx0Zm9udC1zaXplOiAxNXB4O1xyXG5cdHRyYW5zaXRpb246IDAuNXM7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4udGFibGVTdGFyOmhvdmVye1xyXG5cdGZvbnQtc2l6ZTogMzBweDtcclxuXHR0cmFuc2l0aW9uOiAwLjNzO1xyXG59XHJcblxyXG4udGVhbU5hbWUgcHtcclxuZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5wYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbn1cclxuXHJcbi50YWJsZSB0ZCwgLnRhYmxlIHRoIHtcclxuICAgIHBhZGRpbmc6IC43NXJlbTtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2RlZTJlNjtcclxufVxyXG5cclxuLnRhYmxlSW1ne1xyXG5cdG1hcmdpbjogMCBhdXRvO1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLyogLS0tLS0gTmF2IEJhciAtLS0tICovXHJcblxyXG5cclxubmF2IHVse1xyXG5cdGRpc3BsYXk6IHRhYmxlO1xyXG5cdHRhYmxlLWxheW91dDogZml4ZWQ7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFxyXG59XHJcblxyXG5uYXYgbGkge1xyXG5cdGxpc3Qtc3R5bGU6IG5vbmU7XHJcblx0ZGlzcGxheTogdGFibGUtY2VsbDtcclxuXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG5cdGJhY2tncm91bmQ6IHJnYig3MCwgNSwgMTMxKTtcclxuXHRcclxuICB9XHJcblxyXG4gIC5wYntcclxuXHQgIHBhZGRpbmctYm90dG9tOiAxMDBweDtcclxuICB9XHJcblxyXG4gIG5hdiBsaTpudGgtbGFzdC1jaGlsZChuKzYpLCBcclxubmF2IGxpOm50aC1sYXN0LWNoaWxkKG4rNikgfiAqIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiBcclxufVxyXG5cclxubmF2IGxpOm50aC1sYXN0LWNoaWxkKG4rNikgYSwgXHJcbm5hdiBsaTpudGgtbGFzdC1jaGlsZChuKzYpIH4gKiBhIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblxyXG59XHJcblxyXG51bCBsaXtcclxuXHRcclxuXHRvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4gIG5hdiBhIHtcclxuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblx0Y29sb3I6ICNmZmY7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0cGFkZGluZzogMC43NWVtIDFlbTtcclxuXHRmb250LXNpemU6IDEuMjVlbTtcclxuICB9XHJcblxyXG5uYXYgYTpmb2N1cyB7XHJcblx0Y29sb3I6ICM0NjI5OTc7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzJmOTcxZDtcclxuXHRmb250LXdlaWdodDogNTUwO1xyXG4gIH0gXHJcbiAgIG5hdiBhOmhvdmVye1xyXG5cdGNvbG9yOiAjY2JjZTFmO1xyXG4gICB9XHJcblxyXG5cclxuICAgI2ZpcnN0b25le1xyXG5cdGJvcmRlci10b3AtbGVmdC1yYWRpdXM6MTVweDtcclxuXHRib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOjE1cHg7XHJcbiAgIH1cclxuXHJcbiAgICNsYXN0b25le1xyXG5cdGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOjE1cHg7XHJcblx0Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6MTVweDtcclxuICAgfVxyXG5cclxuICAgIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LeagueTableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-league-table',
                templateUrl: './league-table.component.html',
                styleUrls: ['./../app.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map