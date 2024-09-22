import './polyfills.server.mjs';
import{$ as w,A as s,B as a,C as de,D as ce,E as h,F as B,G as xe,H as Oe,I as l,J as he,K as fe,L as pe,M as me,N as U,O as g,P as ge,Q as Te,S as ke,W as Pe,Y as Re,_ as Ge,a as Me,aa as C,b as Ee,ba as je,c as Fe,ca as _e,d as we,e as P,ea as Be,f as R,fa as Ue,g as re,ga as He,h as b,ha as H,i as p,ia as Le,j as oe,ja as We,k as v,ka as $e,l as Ie,m as G,n as j,na as qe,o as Se,p as m,q as se,r as Ne,ra as ze,s as d,t as u,u as ae,ua as Ze,v as F,va as Je,w as V,x as le,y,z as ue}from"./chunk-R6YSR6YJ.mjs";import{a as c,b as f}from"./chunk-5XUXGTUW.mjs";var L=class i{title="todo-list";constructor(){}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=p({type:i,selectors:[["app-root"]],standalone:!0,features:[g],decls:15,vars:0,consts:[[1,"navbar","navbar-expand-lg","bg-body-tertiary"],[1,"container-fluid"],["routerLink","/",1,"navbar-brand"],["type","button","data-bs-toggle","collapse","data-bs-target","#navbarSupportedContent","aria-controls","navbarSupportedContent","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler"],[1,"navbar-toggler-icon"],["id","navbarSupportedContent",1,"collapse","navbar-collapse"],[1,"navbar-nav","me-auto","mb-2","mb-lg-0"],[1,"nav-item"],["aria-current","page","routerLink","/",1,"nav-link","active"],["routerLink","/about",1,"nav-link"]],template:function(t,n){t&1&&(s(0,"nav",0)(1,"div",1)(2,"a",2),l(3,"TODO List"),a(),s(4,"button",3),de(5,"span",4),a(),s(6,"div",5)(7,"ul",6)(8,"li",7)(9,"a",8),l(10,"Home"),a()(),s(11,"li",7)(12,"a",9),l(13,"About"),a()()()()()(),de(14,"router-outlet"))},dependencies:[ze,Ze]})};var Ye=i=>({strike:i}),$=class i{ngOnInit(){console.log(this.todo)}todo;i;todoDelete=new m;todoCheckbox=new m;onClick(e){this.todoDelete.emit(e),console.log("onclick triggered..")}onCheckboxClick(e){this.todoCheckbox.emit(e)}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=p({type:i,selectors:[["app-todo-item"]],inputs:{todo:"todo",i:"i"},outputs:{todoDelete:"todoDelete",todoCheckbox:"todoCheckbox"},standalone:!0,features:[g],decls:11,vars:11,consts:[[1,"my-3"],[3,"ngClass"],[1,"mb-3","form-check"],["type","checkbox","id","exampleCheck1",1,"form-check-input",3,"click","checked"],[1,"form-check-label",3,"for"],[1,"btn","btn-sm","btn-danger",3,"click"]],template:function(t,n){t&1&&(s(0,"div",0)(1,"h5",1),l(2),a(),s(3,"p",1),l(4),a(),s(5,"div",2)(6,"input",3),h("click",function(){return n.onCheckboxClick(n.todo)}),a(),s(7,"label",4),l(8,"Done"),a()(),s(9,"button",5),h("click",function(){return n.onClick(n.todo)}),l(10,"Delete"),a()()),t&2&&(d(),y("ngClass",ge(7,Ye,!n.todo.active)),d(),he(n.todo.title),d(),y("ngClass",ge(9,Ye,!n.todo.active)),d(),he(n.todo.desc),d(2),y("checked",!n.todo.active),d(),xe("for","exampleCheck1",n.i,""))},dependencies:[H,Be],styles:[".strike[_ngcontent-%COMP%]{text-decoration:line-through}"]})};var rt=(()=>{class i{constructor(t,n){this._renderer=t,this._elementRef=n,this.onChange=r=>{},this.onTouched=()=>{}}setProperty(t,n){this._renderer.setProperty(this._elementRef.nativeElement,t,n)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}static{this.\u0275fac=function(n){return new(n||i)(u(ae),u(se))}}static{this.\u0275dir=v({type:i})}}return i})(),Ft=(()=>{class i extends rt{static{this.\u0275fac=(()=>{let t;return function(r){return(t||(t=Se(i)))(r||i)}})()}static{this.\u0275dir=v({type:i,features:[V]})}}return i})(),ot=new b("");var wt={provide:ot,useExisting:R(()=>Q),multi:!0};function It(){let i=_e()?_e().getUserAgent():"";return/android (\d+)/.test(i.toLowerCase())}var St=new b(""),Q=(()=>{class i extends rt{constructor(t,n,r){super(t,n),this._compositionMode=r,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!It())}writeValue(t){let n=t??"";this.setProperty("value",n)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}static{this.\u0275fac=function(n){return new(n||i)(u(ae),u(se),u(St,8))}}static{this.\u0275dir=v({type:i,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(n,r){n&1&&h("input",function(_){return r._handleInput(_.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(_){return r._compositionEnd(_.target.value)})},features:[U([wt]),V]})}}return i})();var st=new b(""),at=new b("");function lt(i){return i!=null}function ut(i){return ke(i)?Ee(i):i}function dt(i){let e={};return i.forEach(t=>{e=t!=null?c(c({},e),t):e}),Object.keys(e).length===0?null:e}function ct(i,e){return e.map(t=>t(i))}function Nt(i){return!i.validate}function ht(i){return i.map(e=>Nt(e)?e:t=>e.validate(t))}function xt(i){if(!i)return null;let e=i.filter(lt);return e.length==0?null:function(t){return dt(ct(t,e))}}function ye(i){return i!=null?xt(ht(i)):null}function Ot(i){if(!i)return null;let e=i.filter(lt);return e.length==0?null:function(t){let n=ct(t,e).map(ut);return we(n).pipe(Fe(dt))}}function Ce(i){return i!=null?Ot(ht(i)):null}function Xe(i,e){return i===null?[e]:Array.isArray(i)?[...i,e]:[i,e]}function Tt(i){return i._rawValidators}function kt(i){return i._rawAsyncValidators}function ve(i){return i?Array.isArray(i)?i:[i]:[]}function z(i,e){return Array.isArray(i)?i.includes(e):i===e}function Ke(i,e){let t=ve(e);return ve(i).forEach(r=>{z(t,r)||t.push(r)}),t}function Qe(i,e){return ve(e).filter(t=>!z(i,t))}var Z=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=ye(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=Ce(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,t){return this.control?this.control.hasError(e,t):!1}getError(e,t){return this.control?this.control.getError(e,t):null}},M=class extends Z{get formDirective(){return null}get path(){return null}},k=class extends Z{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},J=class{constructor(e){this._cd=e}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}},Pt={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},Pi=f(c({},Pt),{"[class.ng-submitted]":"isSubmitted"}),ft=(()=>{class i extends J{constructor(t){super(t)}static{this.\u0275fac=function(n){return new(n||i)(u(k,2))}}static{this.\u0275dir=v({type:i,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(n,r){n&2&&ue("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},features:[V]})}}return i})(),pt=(()=>{class i extends J{constructor(t){super(t)}static{this.\u0275fac=function(n){return new(n||i)(u(M,10))}}static{this.\u0275dir=v({type:i,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(n,r){n&2&&ue("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)("ng-submitted",r.isSubmitted)},features:[V]})}}return i})();var S="VALID",q="INVALID",D="PENDING",N="DISABLED",E=class{},Y=class extends E{constructor(e,t){super(),this.value=e,this.source=t}},O=class extends E{constructor(e,t){super(),this.pristine=e,this.source=t}},T=class extends E{constructor(e,t){super(),this.touched=e,this.source=t}},A=class extends E{constructor(e,t){super(),this.status=e,this.source=t}};function mt(i){return(ee(i)?i.validators:i)||null}function Rt(i){return Array.isArray(i)?ye(i):i||null}function gt(i,e){return(ee(e)?e.asyncValidators:i)||null}function Gt(i){return Array.isArray(i)?Ce(i):i||null}function ee(i){return i!=null&&!Array.isArray(i)&&typeof i=="object"}function jt(i,e,t){let n=i.controls;if(!(e?Object.keys(n):n).length)throw new P(1e3,"");if(!n[t])throw new P(1001,"")}function Bt(i,e,t){i._forEachChild((n,r)=>{if(t[r]===void 0)throw new P(1002,"")})}var X=class{constructor(e,t){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=null,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this._status=w(()=>this.statusReactive()),this.statusReactive=F(void 0),this._pristine=w(()=>this.pristineReactive()),this.pristineReactive=F(!0),this._touched=w(()=>this.touchedReactive()),this.touchedReactive=F(!1),this._events=new Me,this.events=this._events.asObservable(),this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get status(){return C(this.statusReactive)}set status(e){C(()=>this.statusReactive.set(e))}get valid(){return this.status===S}get invalid(){return this.status===q}get pending(){return this.status==D}get disabled(){return this.status===N}get enabled(){return this.status!==N}get pristine(){return C(this.pristineReactive)}set pristine(e){C(()=>this.pristineReactive.set(e))}get dirty(){return!this.pristine}get touched(){return C(this.touchedReactive)}set touched(e){C(()=>this.touchedReactive.set(e))}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(Ke(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(Ke(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(Qe(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(Qe(e,this._rawAsyncValidators))}hasValidator(e){return z(this._rawValidators,e)}hasAsyncValidator(e){return z(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){let t=this.touched===!1;this.touched=!0;let n=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsTouched(f(c({},e),{sourceControl:n})),t&&e.emitEvent!==!1&&this._events.next(new T(!0,n))}markAllAsTouched(e={}){this.markAsTouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsTouched(e))}markAsUntouched(e={}){let t=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let n=e.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:n})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,n),t&&e.emitEvent!==!1&&this._events.next(new T(!1,n))}markAsDirty(e={}){let t=this.pristine===!0;this.pristine=!1;let n=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsDirty(f(c({},e),{sourceControl:n})),t&&e.emitEvent!==!1&&this._events.next(new O(!1,n))}markAsPristine(e={}){let t=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let n=e.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:e.emitEvent})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e,n),t&&e.emitEvent!==!1&&this._events.next(new O(!0,n))}markAsPending(e={}){this.status=D;let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new A(this.status,t)),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.markAsPending(f(c({},e),{sourceControl:t}))}disable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=N,this.errors=null,this._forEachChild(r=>{r.disable(f(c({},e),{onlySelf:!0}))}),this._updateValue();let n=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new Y(this.value,n)),this._events.next(new A(this.status,n)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(f(c({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=S,this._forEachChild(n=>{n.enable(f(c({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(f(c({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(e,t){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine({},t),this._parent._updateTouched({},t))}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let n=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===S||this.status===D)&&this._runAsyncValidator(n,e.emitEvent)}let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new Y(this.value,t)),this._events.next(new A(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(f(c({},e),{sourceControl:t}))}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?N:S}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e,t){if(this.asyncValidator){this.status=D,this._hasOwnPendingAsyncValidator={emitEvent:t!==!1};let n=ut(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:t,shouldHaveEmitted:e})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let e=this._hasOwnPendingAsyncValidator?.emitEvent??!1;return this._hasOwnPendingAsyncValidator=null,e}return!1}setErrors(e,t={}){this.errors=e,this._updateControlsErrors(t.emitEvent!==!1,this,t.shouldHaveEmitted)}get(e){let t=e;return t==null||(Array.isArray(t)||(t=t.split(".")),t.length===0)?null:t.reduce((n,r)=>n&&n._find(r),this)}getError(e,t){let n=t?this.get(t):this;return n&&n.errors?n.errors[e]:null}hasError(e,t){return!!this.getError(e,t)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e,t,n){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),(e||n)&&this._events.next(new A(this.status,t)),this._parent&&this._parent._updateControlsErrors(e,t,n)}_initObservables(){this.valueChanges=new m,this.statusChanges=new m}_calculateStatus(){return this._allControlsDisabled()?N:this.errors?q:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(D)?D:this._anyControlsHaveStatus(q)?q:S}_anyControlsHaveStatus(e){return this._anyControls(t=>t.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e,t){let n=!this._anyControlsDirty(),r=this.pristine!==n;this.pristine=n,this._parent&&!e.onlySelf&&this._parent._updatePristine(e,t),r&&this._events.next(new O(this.pristine,t))}_updateTouched(e={},t){this.touched=this._anyControlsTouched(),this._events.next(new T(this.touched,t)),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,t)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){ee(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let t=this._parent&&this._parent.dirty;return!e&&!!t&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=Rt(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=Gt(this._rawAsyncValidators)}},K=class extends X{constructor(e,t,n){super(mt(t),gt(n,t)),this.controls=e,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(e,t){return this.controls[e]?this.controls[e]:(this.controls[e]=t,t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange),t)}addControl(e,t,n={}){this.registerControl(e,t),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}removeControl(e,t={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}setControl(e,t,n={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],t&&this.registerControl(e,t),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,t={}){Bt(this,!0,e),Object.keys(e).forEach(n=>{jt(this,!0,n),this.controls[n].setValue(e[n],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)}patchValue(e,t={}){e!=null&&(Object.keys(e).forEach(n=>{let r=this.controls[n];r&&r.patchValue(e[n],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(e={},t={}){this._forEachChild((n,r)=>{n.reset(e?e[r]:null,{onlySelf:!0,emitEvent:t.emitEvent})}),this._updatePristine(t,this),this._updateTouched(t,this),this.updateValueAndValidity(t)}getRawValue(){return this._reduceChildren({},(e,t,n)=>(e[n]=t.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(t,n)=>n._syncPendingControls()?!0:t);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(t=>{let n=this.controls[t];n&&e(n,t)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(let[t,n]of Object.entries(this.controls))if(this.contains(t)&&e(n))return!0;return!1}_reduceValue(){let e={};return this._reduceChildren(e,(t,n,r)=>((n.enabled||this.disabled)&&(t[r]=n.value),t))}_reduceChildren(e,t){let n=e;return this._forEachChild((r,o)=>{n=t(n,r,o)}),n}_allControlsDisabled(){for(let e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return this.controls.hasOwnProperty(e)?this.controls[e]:null}};var Ve=new b("CallSetDisabledState",{providedIn:"root",factory:()=>be}),be="always";function Ut(i,e){return[...e.path,i]}function _t(i,e,t=be){vt(i,e),e.valueAccessor.writeValue(i.value),(i.disabled||t==="always")&&e.valueAccessor.setDisabledState?.(i.disabled),Lt(i,e),$t(i,e),Wt(i,e),Ht(i,e)}function et(i,e){i.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(e)})}function Ht(i,e){if(e.valueAccessor.setDisabledState){let t=n=>{e.valueAccessor.setDisabledState(n)};i.registerOnDisabledChange(t),e._registerOnDestroy(()=>{i._unregisterOnDisabledChange(t)})}}function vt(i,e){let t=Tt(i);e.validator!==null?i.setValidators(Xe(t,e.validator)):typeof t=="function"&&i.setValidators([t]);let n=kt(i);e.asyncValidator!==null?i.setAsyncValidators(Xe(n,e.asyncValidator)):typeof n=="function"&&i.setAsyncValidators([n]);let r=()=>i.updateValueAndValidity();et(e._rawValidators,r),et(e._rawAsyncValidators,r)}function Lt(i,e){e.valueAccessor.registerOnChange(t=>{i._pendingValue=t,i._pendingChange=!0,i._pendingDirty=!0,i.updateOn==="change"&&yt(i,e)})}function Wt(i,e){e.valueAccessor.registerOnTouched(()=>{i._pendingTouched=!0,i.updateOn==="blur"&&i._pendingChange&&yt(i,e),i.updateOn!=="submit"&&i.markAsTouched()})}function yt(i,e){i._pendingDirty&&i.markAsDirty(),i.setValue(i._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(i._pendingValue),i._pendingChange=!1}function $t(i,e){let t=(n,r)=>{e.valueAccessor.writeValue(n),r&&e.viewToModelUpdate(n)};i.registerOnChange(t),e._registerOnDestroy(()=>{i._unregisterOnChange(t)})}function qt(i,e){i==null,vt(i,e)}function zt(i,e){if(!i.hasOwnProperty("model"))return!1;let t=i.model;return t.isFirstChange()?!0:!Object.is(e,t.currentValue)}function Zt(i){return Object.getPrototypeOf(i.constructor)===Ft}function Jt(i,e){i._syncPendingControls(),e.forEach(t=>{let n=t.control;n.updateOn==="submit"&&n._pendingChange&&(t.viewToModelUpdate(n._pendingValue),n._pendingChange=!1)})}function Yt(i,e){if(!e)return null;Array.isArray(e);let t,n,r;return e.forEach(o=>{o.constructor===Q?t=o:Zt(o)?n=o:r=o}),r||n||t||null}var Xt={provide:M,useExisting:R(()=>De)},x=Promise.resolve(),De=(()=>{class i extends M{get submitted(){return C(this.submittedReactive)}constructor(t,n,r){super(),this.callSetDisabledState=r,this._submitted=w(()=>this.submittedReactive()),this.submittedReactive=F(!1),this._directives=new Set,this.ngSubmit=new m,this.form=new K({},ye(t),Ce(n))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(t){x.then(()=>{let n=this._findContainer(t.path);t.control=n.registerControl(t.name,t.control),_t(t.control,t,this.callSetDisabledState),t.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(t)})}getControl(t){return this.form.get(t.path)}removeControl(t){x.then(()=>{let n=this._findContainer(t.path);n&&n.removeControl(t.name),this._directives.delete(t)})}addFormGroup(t){x.then(()=>{let n=this._findContainer(t.path),r=new K({});qt(r,t),n.registerControl(t.name,r),r.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(t){x.then(()=>{let n=this._findContainer(t.path);n&&n.removeControl(t.name)})}getFormGroup(t){return this.form.get(t.path)}updateModel(t,n){x.then(()=>{this.form.get(t.path).setValue(n)})}setValue(t){this.control.setValue(t)}onSubmit(t){return this.submittedReactive.set(!0),Jt(this.form,this._directives),this.ngSubmit.emit(t),t?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(t=void 0){this.form.reset(t),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(t){return t.pop(),t.length?this.form.get(t):this.form}static{this.\u0275fac=function(n){return new(n||i)(u(st,10),u(at,10),u(Ve,8))}}static{this.\u0275dir=v({type:i,selectors:[["form",3,"ngNoForm","",3,"formGroup",""],["ng-form"],["","ngForm",""]],hostBindings:function(n,r){n&1&&h("submit",function(_){return r.onSubmit(_)})("reset",function(){return r.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[U([Xt]),V]})}}return i})();function tt(i,e){let t=i.indexOf(e);t>-1&&i.splice(t,1)}function it(i){return typeof i=="object"&&i!==null&&Object.keys(i).length===2&&"value"in i&&"disabled"in i}var Kt=class extends X{constructor(e=null,t,n){super(mt(t),gt(n,t)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),ee(t)&&(t.nonNullable||t.initialValueIsDefault)&&(it(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,t={}){this.value=this._pendingValue=e,this._onChange.length&&t.emitModelToViewChange!==!1&&this._onChange.forEach(n=>n(this.value,t.emitViewToModelChange!==!1)),this.updateValueAndValidity(t)}patchValue(e,t={}){this.setValue(e,t)}reset(e=this.defaultValue,t={}){this._applyFormState(e),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){tt(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){tt(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){it(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var Qt={provide:k,useExisting:R(()=>Ae)},nt=Promise.resolve(),Ae=(()=>{class i extends k{constructor(t,n,r,o,_,Mt){super(),this._changeDetectorRef=_,this.callSetDisabledState=Mt,this.control=new Kt,this._registered=!1,this.name="",this.update=new m,this._parent=t,this._setValidators(n),this._setAsyncValidators(r),this.valueAccessor=Yt(this,o)}ngOnChanges(t){if(this._checkForErrors(),!this._registered||"name"in t){if(this._registered&&(this._checkName(),this.formDirective)){let n=t.name.previousValue;this.formDirective.removeControl({name:n,path:this._getPath(n)})}this._setUpControl()}"isDisabled"in t&&this._updateDisabled(t),zt(t,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){_t(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(t){nt.then(()=>{this.control.setValue(t,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(t){let n=t.isDisabled.currentValue,r=n!==0&&Ge(n);nt.then(()=>{r&&!this.control.disabled?this.control.disable():!r&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(t){return this._parent?Ut(t,this._parent):[t]}static{this.\u0275fac=function(n){return new(n||i)(u(M,9),u(st,10),u(at,10),u(ot,10),u(Re,8),u(Ve,8))}}static{this.\u0275dir=v({type:i,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[U([Qt]),V,Ie]})}}return i})(),Ct=(()=>{class i{static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275dir=v({type:i,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]})}}return i})();var ei=(()=>{class i{static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275mod=oe({type:i})}static{this.\u0275inj=re({})}}return i})();var Vt=(()=>{class i{static withConfig(t){return{ngModule:i,providers:[{provide:Ve,useValue:t.callSetDisabledState??be}]}}static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275mod=oe({type:i})}static{this.\u0275inj=re({imports:[ei]})}}return i})();var te=class i{title;desc;todoAdd=new m;onSubmit(){let e={sno:5,title:this.title,desc:this.desc,active:!0};this.todoAdd.emit(e)}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=p({type:i,selectors:[["app-add-todo"]],outputs:{todoAdd:"todoAdd"},standalone:!0,features:[g],decls:14,vars:2,consts:[[1,"my-3"],[3,"ngSubmit"],[1,"mb-3"],["for","title",1,"form-label"],["type","text","name","title","id","title","aria-describedby","emailHelp",1,"form-control",3,"ngModelChange","ngModel"],["for","desc",1,"form-label"],["type","text","name","desc","id","desc",1,"form-control",3,"ngModelChange","ngModel"],["type","submit",1,"btn","btn-sm","btn-primary"]],template:function(t,n){t&1&&(s(0,"div",0)(1,"h4"),l(2,"Add a todo"),a(),s(3,"form",1),h("ngSubmit",function(){return n.onSubmit()}),s(4,"div",2)(5,"label",3),l(6,"Todo Title"),a(),s(7,"input",4),me("ngModelChange",function(o){return pe(n.title,o)||(n.title=o),o}),a()(),s(8,"div",2)(9,"label",5),l(10,"todo description"),a(),s(11,"input",6),me("ngModelChange",function(o){return pe(n.desc,o)||(n.desc=o),o}),a()(),s(12,"button",7),l(13,"Add todo"),a()()()),t&2&&(d(7),fe("ngModel",n.title),d(4),fe("ngModel",n.desc))},dependencies:[Vt,Ct,Q,ft,pt,Ae,De]})};function ii(i,e){i&1&&(s(0,"div"),l(1,"No Todos to display"),a())}function ni(i,e){if(i&1){let t=ce();s(0,"div")(1,"app-todo-item",6),h("todoDelete",function(r){G(t);let o=B(2);return j(o.deleteTodo(r))})("todoCheckbox",function(r){G(t);let o=B(2);return j(o.toggleTodo(r))}),a()()}if(i&2){let t=e.$implicit,n=e.index;d(),y("todo",t)("i",n)}}function ri(i,e){if(i&1&&le(0,ni,2,2,"div",5),i&2){let t=B();y("ngForOf",t.todos)}}var ie=class i{constructor(e){this.platformId=e}todos;safeLocalStorage=null;localItem=null;ngOnInit(){console.log("TodosComponent Initialized"),Le(this.platformId)?(this.safeLocalStorage=localStorage,this.localItem=localStorage.getItem("todos"),this.localItem!=null?this.todos=JSON.parse(this.localItem):this.todos=[]):(this.todos=[],this.safeLocalStorage={length:0,getItem:()=>null,setItem:()=>{},removeItem:()=>{},clear:()=>{},key:t=>null});let e=this.safeLocalStorage?.getItem("todos");this.todos=e?JSON.parse(e):[]}deleteTodo(e){console.log(e);let t=this.todos.indexOf(e);this.todos.splice(t,1),this.safeLocalStorage&&this.safeLocalStorage.setItem("todos",JSON.stringify(this.todos))}addTodo(e){console.log(e),this.todos.push(e),this.safeLocalStorage&&this.safeLocalStorage.setItem("todos",JSON.stringify(this.todos))}toggleTodo(e){let t=this.todos.indexOf(e);this.todos[t].active=!this.todos[t].active,this.safeLocalStorage&&this.safeLocalStorage.setItem("todos",JSON.stringify(this.todos))}static \u0275fac=function(t){return new(t||i)(u(Ne))};static \u0275cmp=p({type:i,selectors:[["app-todos"]],standalone:!0,features:[g],decls:9,vars:2,consts:[["elseBlock",""],[1,"container"],[1,"text-center","mb-3"],[3,"todoAdd"],[4,"ngIf","ngIfElse"],[4,"ngFor","ngForOf"],[3,"todoDelete","todoCheckbox","todo","i"]],template:function(t,n){if(t&1){let r=ce();s(0,"div",1)(1,"h1",2),l(2,"TODO List"),a(),s(3,"app-add-todo",3),h("todoAdd",function(_){return G(r),j(n.addTodo(_))}),a(),s(4,"h4"),l(5,"Your todos"),a(),le(6,ii,2,0,"div",4)(7,ri,1,1,"ng-template",null,0,Te),a()}if(t&2){let r=Oe(8);d(6),y("ngIf",n.todos.length===0)("ngIfElse",r)}},dependencies:[H,Ue,He,$,te]})};var ne=class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=p({type:i,selectors:[["app-about"]],standalone:!0,features:[g],decls:2,vars:0,template:function(t,n){t&1&&(s(0,"p"),l(1,"about works!"),a())}})};var bt=[{path:"",component:ie},{path:"about",component:ne}];var Dt={providers:[Pe({eventCoalescing:!0}),Je(bt),$e()]};var oi={providers:[qe()]},At=je(Dt,oi);var si=()=>We(L,At),vn=si;export{vn as a};