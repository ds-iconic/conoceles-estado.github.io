"use strict";(self.webpackChunkcandidatos=self.webpackChunkcandidatos||[]).push([[460],{9460:(Y,m,r)=>{r.r(m),r.d(m,{AsignacionModule:()=>G});var c=r(6814),u=r(9317),h=r(5476),a=r(95),v=r(760),e=r(4769),A=r(6223),f=r(553),Z=r(8645),g=r(6306),l=r(9397),U=r(9862),C=r(772);let _=(()=>{class o{constructor(t,i){this.http=t,this.handleErrorService=i,this.route=`${f.N.apiUrl}/gestor`,this._refreshLisUsers$=new Z.x}get refreshLisUsers(){return this._refreshLisUsers$}getCandidatos(){return this.http.get(`${this.route}/candidatos`).pipe((0,g.K)(this.handleErrorService.handleError))}postGestor(t){return this.http.post(`${this.route}/asignar-candidatos`,t).pipe((0,l.b)(()=>{this._refreshLisUsers$.next(null)}),(0,g.K)(this.handleErrorService.handleError))}deleteUsuario(t){return this.http.delete(`${this.route}/eliminar_usuario/${t}`).pipe((0,l.b)(()=>{}),(0,g.K)(this.handleErrorService.handleError))}putUsuario(t){return this.http.put(`${this.route}/editar_usuario`,t).pipe((0,l.b)(()=>{this._refreshLisUsers$.next(null)}),(0,g.K)(this.handleErrorService.handleError))}}return o.\u0275fac=function(t){return new(t||o)(e.LFG(U.eN),e.LFG(C.t))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var x=r(8245),T=r(6207),p=r(6472);const S=["closebutton"];function P(o,n){1&o&&(e.TgZ(0,"div",50),e._UZ(1,"div",51),e.qZA())}function F(o,n){if(1&o&&(e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td")(6,"div",52)(7,"button",53),e._UZ(8,"i",54),e.qZA(),e.TgZ(9,"button",55),e._UZ(10,"i",56),e.qZA()()()()),2&o){const t=n.$implicit;e.xp6(2),e.Oqu(t.usuarioId),e.xp6(2),e.Oqu(t.candidatoId)}}function q(o,n){if(1&o&&(e.TgZ(0,"option",57),e._uU(1),e.qZA()),2&o){const t=n.$implicit;e.Q6J("value",t),e.xp6(1),e.hij(" ",t," ")}}const b=function(o,n){return{itemsPerPage:o,currentPage:n}};function J(o,n){if(1&o){const t=e.EpF();e.TgZ(0,"div")(1,"div",18)(2,"table",19)(3,"thead")(4,"tr")(5,"th"),e._uU(6,"Gestor"),e.qZA(),e.TgZ(7,"th"),e._uU(8,"Candidato(a)"),e.qZA(),e.TgZ(9,"th",20),e._uU(10,"Acciones"),e.qZA()()(),e.TgZ(11,"tbody",21),e.YNc(12,F,11,2,"tr",22),e.ALo(13,"paginate"),e.qZA()()(),e.TgZ(14,"div",23)(15,"div",24)(16,"label",25),e._uU(17,"Elementos por p\xe1gina:"),e.qZA(),e.TgZ(18,"select",26),e.NdJ("ngModelChange",function(s){e.CHM(t);const d=e.oxw();return e.KtG(d.itemsPerPage=s)}),e.YNc(19,q,2,2,"option",27),e.qZA()(),e.TgZ(20,"div",28)(21,"pagination-controls",29),e.NdJ("pageChange",function(s){e.CHM(t);const d=e.oxw();return e.KtG(d.currentPage=s)}),e.qZA()()()()}if(2&o){const t=e.oxw();e.xp6(12),e.Q6J("ngForOf",e.xi3(13,3,t.gestor,e.WLB(6,b,t.itemsPerPage,t.currentPage))),e.xp6(6),e.Q6J("ngModel",t.itemsPerPage),e.xp6(1),e.Q6J("ngForOf",t.itemsPerPageOptions)}}function y(o,n){1&o&&e._UZ(0,"app-no-results")}function M(o,n){if(1&o&&(e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td")(6,"div",52)(7,"button",53),e._UZ(8,"i",54),e.qZA(),e.TgZ(9,"button",55),e._UZ(10,"i",56),e.qZA()()()()),2&o){const t=n.$implicit;e.xp6(2),e.Oqu(t.usuarioNombre),e.xp6(2),e.Oqu(t.candidatoNombre)}}function E(o,n){if(1&o&&(e.TgZ(0,"option",57),e._uU(1),e.qZA()),2&o){const t=n.$implicit;e.Q6J("value",t),e.xp6(1),e.Oqu(t)}}function j(o,n){if(1&o&&(e.TgZ(0,"option",58),e._uU(1),e.qZA()),2&o){const t=n.$implicit;e.Q6J("ngValue",t.idUsuario),e.xp6(1),e.Oqu(t.nombre)}}function N(o,n){if(1&o&&(e._UZ(0,"input",59),e._uU(1)),2&o){const t=n.item;e.MGl("id","candidato-",n.index,""),e.xp6(1),e.hij(" ",t.nombre," ")}}const L=[{path:"",component:(()=>{class o{constructor(t,i,s,d){this.fb=t,this.usuarioService=i,this.gestorService=s,this.mensajeService=d,this.isLoadingUsers=v.v.neutro,this.usuarios=[],this.gestores=[],this.candidatos=[],this.isModalAdd=!1,this.itemsPerPage=5,this.currentPage=1,this.itemsPerPageOptions=[5,10,15],this.gestor=[],this.candidatoss=[],this.gestoresss=[],this.userForm=this.fb.group({usuarioId:[null,a.kI.required],candidatoId:[[],a.kI.required]})}resetForm(){this.closebutton.nativeElement.click(),this.userForm.reset()}ngOnInit(){this.usuarioService.getUsuarios().subscribe(t=>{this.usuarios=t,this.obtenerCandidatos(),this.gestores=this.obtenerUsuariosPorRol("gestor"),this.candidatos=this.obtenerUsuariosPorRol("candidato")})}obtenerUsuariosPorRol(t){return this.usuarios.filter(i=>i.rol.toLowerCase()===t.toLowerCase())}agregarUsuario(){this.gestorService.postGestor(this.gestoress).subscribe({next:()=>{this.mensajeService.mensajeExito("Asignacion agregada con \xe9xito"),this.resetForm()},error:t=>{this.mensajeService.mensajeError("Error al agregar la asignacion"),console.error(t)}})}obtenerCandidatos(){this.gestorService.getCandidatos().subscribe(t=>{this.gestor=t,this.mapUsuariosCandidatos()},t=>{console.error("Error al obtener candidatos:",t)})}mapUsuariosCandidatos(){this.candidatoss=this.gestor.map(t=>{const i=this.usuarios.find(d=>d.idUsuario===t.usuarioId),s=this.usuarios.find(d=>d.idUsuario===t.candidatoId);return{usuarioNombre:i?`${i.nombre} `:"Desconocido",candidatoNombre:s?`${s.nombre} `:"Desconocido"}}),console.log("Candidatos mapeados:",this.candidatoss)}actualizarUsuario(){this.gestorService.putUsuario(this.gestoress).subscribe({next:()=>{this.mensajeService.mensajeExito("Asignacion actualizada con \xe9xito"),this.resetForm()},error:t=>{this.mensajeService.mensajeError("Error al actualizar la asignacion"),console.error(t)}})}submitUsuario(){this.gestoress=this.userForm.value,this.isModalAdd?this.agregarUsuario():this.actualizarUsuario()}borrarUsuario(t){this.mensajeService.mensajeAdvertencia("\xbfEst\xe1s seguro de eliminar la asignacion?",()=>{this.usuarioService.deleteUsuario(t).subscribe({next:()=>{this.mensajeService.mensajeExito("Asignacion borrada correctamente")},error:i=>this.mensajeService.mensajeError(i)})})}handleChangeAdd(){this.userForm.reset(),this.isModalAdd=!0}setDataModalUpdate(t){this.isModalAdd=!1,this.userForm.patchValue({usuarioId:t.usuarioId,candidatosIds:t.candidatoId}),console.log(this.userForm.value)}obtenerNombreUsuario(t){const i=this.usuarios.find(s=>s.idUsuario===t);return i?`${i.nombre}`:"Desconocido"}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(a.qu),e.Y36(A.i),e.Y36(_),e.Y36(x.V))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-asignacion"]],viewQuery:function(t,i){if(1&t&&e.Gf(S,5),2&t){let s;e.iGM(s=e.CRH())&&(i.closebutton=s.first)}},decls:74,vars:22,consts:[[1,"row","row-cards"],[1,"col-12"],[1,"card"],[1,"card-header"],[1,"card-title"],[1,"card-body","border-bottom","py-3"],[1,"d-flex"],["data-bs-toggle","modal","data-bs-target","#modal-report",1,"btn","btn-primary",3,"click"],[1,"ti","ti-plus","me-1"],[3,"ngSwitch"],["class","progress",4,"ngSwitchCase"],[4,"ngSwitchCase"],[1,"ms-auto","text-muted"],[1,"input-icon"],["type","text","placeholder","Buscar",1,"form-control","form-control-rounded"],["busquedaInput",""],[1,"input-icon-addon"],[1,"ti","ti-search"],[1,"table-responsive"],[1,"table","card-table","table-vcenter","text-nowrap","datatable"],[1,"text-center",2,"width","7%"],[1,"table-tbody"],[4,"ngFor","ngForOf"],[1,"pagination-and-items-per-page",2,"margin-bottom","0px"],[1,"items-per-page"],["for","itemsPerPage"],["id","itemsPerPage",2,"margin-left","5px",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],[1,"pagination-container"],[3,"pageChange"],["id","modal-report","tabindex","-1","role","dialog","aria-hidden","true",1,"modal","modal-blur","fade"],["role","document",1,"modal-dialog","modal-lg","modal-dialog-centered"],[1,"modal-content"],[1,"modal-header"],[1,"modal-title"],["type","button","data-bs-dismiss","modal","aria-label","Close",1,"btn-close"],["closebutton",""],[3,"formGroup","ngSubmit"],[1,"modal-body"],[1,"col-lg-12"],["for","gestorId"],[1,"form-group"],["formControlName","gestorId","id","gestorId","name","gestorId",2,"width","1170px","height","38px"],["value",""],[3,"ngValue",4,"ngFor","ngForOf"],["for","candidatoId"],["formControlName","candidatoId",3,"items","multiple","bindValue","bindLabel"],["ng-option-tmp",""],[1,"modal-footer"],["type","submit",1,"btn","btn-primary",3,"disabled"],[1,"progress"],[1,"progress-bar","progress-bar-indeterminate","bg-green"],[1,"d-flex","justify-content-between"],["data-bs-toggle","modal","data-bs-target","#modal-report",1,"btn","btn-warning","btn-icon","btn-sm"],[1,"ti","ti-edit"],[1,"btn","btn-danger","btn-icon","btn-sm"],[1,"ti","ti-eraser"],[3,"value"],[3,"ngValue"],["type","checkbox",3,"id"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h3",4),e._uU(5,"Asignaciones"),e.qZA()(),e.TgZ(6,"div",5)(7,"div",6)(8,"button",7),e.NdJ("click",function(){return i.handleChangeAdd()}),e._UZ(9,"i",8),e._uU(10,"Agregar asignaci\xf3n "),e.qZA()()(),e.ynx(11,9),e.YNc(12,P,2,0,"div",10),e.YNc(13,J,22,9,"div",11),e.YNc(14,y,1,0,"app-no-results",11),e.BQk(),e.qZA(),e.TgZ(15,"div",5)(16,"div",6)(17,"button",7),e.NdJ("click",function(){return i.handleChangeAdd()}),e._UZ(18,"i",8),e._uU(19,"Agregar asignacion "),e.qZA(),e.TgZ(20,"div",12)(21,"div",13),e._UZ(22,"input",14,15),e.TgZ(24,"span",16),e._UZ(25,"i",17),e.qZA()()()()(),e.TgZ(26,"div",18)(27,"table",19)(28,"thead")(29,"tr")(30,"th"),e._uU(31,"Gestor"),e.qZA(),e.TgZ(32,"th"),e._uU(33,"Candidato(a)"),e.qZA(),e.TgZ(34,"th",20),e._uU(35,"Acciones"),e.qZA()()(),e.TgZ(36,"tbody",21),e.YNc(37,M,11,2,"tr",22),e.ALo(38,"paginate"),e.qZA()()(),e.TgZ(39,"div",23)(40,"div",24)(41,"label",25),e._uU(42,"Elementos por p\xe1gina:"),e.qZA(),e.TgZ(43,"select",26),e.NdJ("ngModelChange",function(d){return i.itemsPerPage=d}),e.YNc(44,E,2,2,"option",27),e.qZA()(),e.TgZ(45,"div",28)(46,"pagination-controls",29),e.NdJ("pageChange",function(d){return i.currentPage=d}),e.qZA()()()()(),e.TgZ(47,"div",30)(48,"div",31)(49,"div",32)(50,"div",33)(51,"h5",34),e._uU(52),e.qZA(),e._UZ(53,"button",35,36),e.qZA(),e.TgZ(55,"form",37),e.NdJ("ngSubmit",function(){return i.submitUsuario()}),e.TgZ(56,"div",38)(57,"div",39)(58,"label",40),e._uU(59,"Seleccione el gestor:"),e.qZA(),e.TgZ(60,"div",41)(61,"select",42)(62,"option",43),e._uU(63,"Seleccione un gestor"),e.qZA(),e.YNc(64,j,2,2,"option",44),e.qZA()()(),e.TgZ(65,"div",39)(66,"label",45),e._uU(67,"Seleccione los candidatos:"),e.qZA(),e.TgZ(68,"ng-select",46),e.YNc(69,N,2,2,"ng-template",47),e.qZA()(),e._UZ(70,"br"),e.qZA(),e.TgZ(71,"div",48)(72,"button",49),e._uU(73),e.qZA()()()()()()),2&t&&(e.xp6(11),e.Q6J("ngSwitch",i.isLoadingUsers),e.xp6(1),e.Q6J("ngSwitchCase",2),e.xp6(1),e.Q6J("ngSwitchCase",3),e.xp6(1),e.Q6J("ngSwitchCase",4),e.xp6(23),e.Q6J("ngForOf",e.xi3(38,16,i.candidatoss,e.WLB(19,b,i.itemsPerPage,i.currentPage))),e.xp6(6),e.Q6J("ngModel",i.itemsPerPage),e.xp6(1),e.Q6J("ngForOf",i.itemsPerPageOptions),e.xp6(8),e.hij(" ",i.isModalAdd?"Agregar":"Actualizar"," Asignaci\xf3n de Formulario "),e.xp6(3),e.Q6J("formGroup",i.userForm),e.xp6(9),e.Q6J("ngForOf",i.gestores),e.xp6(4),e.Q6J("items",i.candidatos)("multiple",!0)("bindValue","usuarioId")("bindLabel","nombre"),e.xp6(4),e.Q6J("disabled",!i.userForm.valid),e.xp6(1),e.hij(" ",i.isModalAdd?"Agregar":"Actualizar"," "))},dependencies:[c.sg,c.RF,c.n9,T.S,a._Y,a.YN,a.Kr,a.EJ,a.JJ,a.JL,a.sg,a.u,a.On,u.w9,u.ir,p.LS,p._s],styles:[".pagination-container[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;margin-top:20px;margin-bottom:5px}.pagination-and-items-per-page[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin-bottom:20px;padding:10px;background-color:#f0f0f0;border-radius:5px;box-shadow:0 2px 4px #0000001a}.items-per-page[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{font-size:14px;padding:5px;border:1px solid #ccc;border-radius:3px}"]}),o})(),canActivate:[r(2087).a],data:{claimType:"CanAccessAsignacion"}}];let Q=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[h.Bz.forChild(L),h.Bz]}),o})();var $=r(6208);let G=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[c.ez,Q,$.m,a.UX,a.u5,u.A0,p.JX]}),o})()}}]);