/*!
 * Ext JS Library 3.3.0
 * Copyright(c) 2006-2010 Ext JS, Inc.
 * licensing@extjs.com
 * http://www.extjs.com/license
 */

//
// This is the main layout definition.
//


Ext.onReady(function(){
	//Ext.BLANK_IMAGE_URL = '../ext/resources/images/default/s.gif';
	
    Ext.QuickTips.init(true);

//	Ext.QuickTips.init();
	
	var detailEl;	
	var idUsuario = '1';
	var nombreUsuario = '3';
	var tipoUsuario = 'Administrador';
	
	var contentPanel = new Ext.Panel({
		id: 'content-panel',
		region: 'center', // this is what makes this panel into a region within the containing layout
		layout: 'card',	
		margins:'0 5 5 5',
		cmargins:'0 5 5 5',
		activeItem: 0,
		border: false,
		//xtype:	"panel",
		items:[/*start*/{
			//region    : 'center',
			border    : false,
			//anchor:'right -150',
			contentEl : 'start-div'  // pull existing content from the page
		}, absolute]//<--- dentro de la región central normalmente va el contenido principal, así que poner ahi los cards tiene mucho sentido.
	});	
	
	var menuPanel = new Ext.Panel({
		id: 'menu-panel',
		region: 'north', // this is what makes this panel into a region within the containing layout	
		margins:'35 5 5 5',
		cmargins:'35 5 5 5',
		border: false,
		tbar: [{
            xtype: 'buttongroup',
            title: '<p style="font:normal 17px arial,tahoma, helvetica, sans-serif;">M&oacute;dulos</p>',
            defaults: {
                scale: 'medium'
            },
            items: [{
				text: 'Clientes',
				iconCls: 'icon-menu-contratistas', 
				handler: function(){
					loadData("Cliente");
				}
			},{
				text: 'Proveedores',
				iconCls: 'icon-menu-contratistas', 
				handler: function(){
					loadData("Proveedor");
					//loadData("proveedores");
				}
			},{xtype: 'tbseparator'},{
				text: 'Ventas', 
				iconCls: 'icon-menu-relaciones', 
				handler: function(){
					loadData("Relaciones");
				}
			},{xtype: 'tbseparator'},{
				text: 'Compras', 
				iconCls: 'icon-menu-relaciones', 
				handler: function(){
					loadData("Compras");
				}
			},{xtype: 'tbseparator'},{
				text: 'inventario', 
				iconCls: 'icon-menu-relaciones', 
				handler: function(){
					loadData("inventario");
				}
			},{xtype: 'tbseparator'},{
				text: 'Cuentas por Cobrar', 
				iconCls: 'icon-menu-cobros', 
				handler: function(){
					loadData("Cuentas por Cobrar");
				}
			},{xtype: 'tbseparator'},{
				text: 'Emisi&oacute;n de Pagos', 
				iconCls: 'icon-menu-pagos', 
				handler: function(){
					loadData("Emisión de Pagos");
				}
			}]
        },'->',{
            xtype: 'buttongroup',
            title: '<p style="font:normal 17px arial,tahoma, helvetica, sans-serif;">Opciones</p>',
            defaults: {
                scale: 'medium'
            },
            items: [{
				text: 'Gesti&oacute;n de Usuario', 
				iconCls: 'icon-user', 
				handler: function(){
					loadData("Gestión de Usuario");
				}
			}/*,{xtype: 'tbseparator'},{
				text: 'Ajustes', 
				iconCls: 'icon-menu-ajustes', 
				handler: function(){
					Ext.Msg.alert('Relaciones','Modulo en Construccion');
				}
			}*/,{xtype: 'tbseparator'},{
				text: 'Herramientas', 
				iconCls: 'icon-menu-ayuda',     
	            menu:{ // <--- add a menu to the button  
					items: [  
						/*{
							text:'Manual de Usuario',
							handler: function(){openwin('documentos/Manual de Usuario Andrea Brito.pdf');}
						}, // <--- This is an item for the menu  
						{
							text:'Respaldo de la BD',
							handler: function(){
								
								var maskView = new Ext.LoadMask(document.body);
								maskView.show();	
								
								Ext.Ajax.request({
									url : 'php/database_backup/backup.php' , 
									method: 'POST',
									success: function ( result, request ) { 
																				
										maskView.hide();
										Ext.MessageBox.alert('', result.responseText);
									},
									failure: function ( result, request) { 
										Ext.MessageBox.alert('Failed', result.responseText); 
										maskView.hide();
									} 
								});	
								
							}
						}, // <--- This is an item for the menu  
						{
							text:'Restauraci&oacute;n de la BD',
							handler: function(){
								var maskView = new Ext.LoadMask(document.body);
								maskView.show();			
								
								Ext.Ajax.request({
									url : 'php/database_backup/restore.php' , 
									method: 'POST',
									success: function ( result, request ) { 
										maskView.hide();
										Ext.MessageBox.alert('', result.responseText);
									},
									failure: function ( result, request) { 
										Ext.MessageBox.alert('Failed', result.responseText); 
										maskView.hide();
									} 
								});	
							}
						},*//*{
							xtype : 'menutextitem', 
							text :'Filtro', 
							style: {
								'border':'1px solid #999999', 'margin':'0px 0px 1px 0px', 'display':'block', 'padding':'3px', 'text-align':'center', 'font-size':'12px', 'font-weight':'bold', 'background-color':'#D6E3F2'
							}}*/{
							id:'login',
							xtype : 'textfield',
							fieldLabel:'Login',
							name:'txt-login',
							emptyText:'Login...'
						},{
							id:'clave',
							xtype : 'textfield',
							fieldLabel:'clave',
							name:'txt-clave',
							emptyText:'clave...'
						}
					]  
				},  // assign menu by instance
				handler: function(){
					
				}
			},{xtype: 'tbseparator'},{
				text: 'Acerca de...', 
				iconCls: 'icon-menu-info', 
				handler: function(){
					new Ext.Window({
						id : 'win-acerca',
						title : 'Acerca de PearlAdmin',
						layout : 'border',
						bodyStyle :'padding:5x 5px 5px 5px;',
						width       : 450,
						height      : 300,
						resizable : false,
						modal : true,
						//autoDestroy : true,
						closable : true,
						closeAction : 'close',
						plain : true,
						buttonAlign :'center',
						items:[{
							border: false,
							region: 'center',
							html:	'<div class="acerca-de" style=" background-image:url(images/logo_las_perlas.jpg);">'+
										'<h1>PearlAdmin</h1> <br> '+
										'<p>versi&oacute;n: 1.1.0</p><br><br> '+
									'</div>'
						},{
							border: false,
							region: 'south',
							plain: true,
							height: 100,
							html:	'<div class="acerca-de-desc">'+
										'<p>&copy; Copyright 2011 - Creaciones Las Perlas del Mar I, C.A. Todos los derechos reservados.</p> <br> '+
										'<p>PearlAdmin fue desarrollado gracias a PHP, Extjs y a otros programas </p> '+
										'<p>de c&oacute;digo Abierto.</p><br><br> '+
									'</div>'
						}]
						
					}).show();
				}
			}]
        }],
		items:[]//<--- dentro de la región central normalmente va el contenido principal, así que poner ahi los cards tiene mucho sentido.
	});
	
	// This is the Details panel that contains the description for each example layout.	
	
	Ext.apply(Ext.form.VTypes,{
		numbers: function(value,field){
			return value.replace(/[ \-]/g,'').length <= 11;
		},
		numbersText: 'Este campo debe tener solo digitos',
		numbersMask: /[ \d]/  
	});
	
	var camposCliente=[
		{  
			id:'ct-id',
			xtype:'hidden',//<-- campo oculto (hidden)  
			name:'txt-id', //el nombre con que se envia al servidor  
			value:'developer'//el valor que contendrá  
		},{
			id:'ct-rif',
			xtype : 'textfield',
			fieldLabel:'R.I.F/C.I',
			name:'txt-rif',
			emptyText:'R.I.F/C.I...'
		},{
			id:"ct-nombre",
			xtype : 'textfield',
			fieldLabel:'Nombre', // creamos un campo
			name:'txt-nombre', // a partir de una
			emptyText:'Nombre...'
		},{
			id:"ct-direccion",
			xtype : 'textfield',
			fieldLabel:'Direcci&oacuten', // creamos un campo
			name:'txt-direccion', // a partir de una
			emptyText:'Direccion...',
			allowBlank:true
		},{
			id:"ct-fijo",
			xtype : 'textfield',
			fieldLabel:'Telf. (fijo)', // creamos un campo
			name:'txt-fijo', // a partir de una
			vtype:'numbers',
			mask: '9999 999 9999',
			emptyText: '____ ___ ____',
			plugins: new Ext.ux.plugins.MaskIt()
		},{
			id:"ct-fax",
			xtype : 'textfield',
			fieldLabel:'Fax', // creamos un campo
			name:'txt-fax', // a partir de una
			vtype:'numbers',
			mask: '9999 999 9999',
			emptyText: '____ ___ ____',
			plugins: new Ext.ux.plugins.MaskIt()
		},{
			id:"ct-movil",
			xtype : 'textfield',
			fieldLabel:'Telf. (M&oacutevil)', // creamos un campo
			name:'txt-movil', // a partir de una
			vtype:'numbers',
			mask: '9999 999 9999',
			emptyText: '____ ___ ____',
			plugins: new Ext.ux.plugins.MaskIt()
		},{       
			id:"ct-correo",
			xtype : 'textfield',
			fieldLabel:'Email', // creamos un campo
			name:'txt-correo', // a partir de una
			emptyText:'Usuario@dominio...',
			vtype:'email'
		}
	];
	
	
	function save_clien(){
		if (Ext.getCmp('form-cont').form.isValid()) {
			//Ext.getCmp('form-cont').setValue();
			Ext.getCmp('form-cont').form.submit({
				waitTitle : "Validando",			
				url       : 'php/cliente/savecli.php',
				waitMsg   : "Espere un momento por favor......",
				failure   : function(sender,action){
					Ext.Msg.alert('failure',action.result.msg); 
				},
				success: function(sender,action) {
					Ext.Msg.alert('',action.result.msg);
					Ext.getCmp('win-addCont').close();
				}
			});
		}else{
			/*console.debug('Formulario invalido');*/
		}
	}
	
	function edit_clie(){
		if (Ext.getCmp('form-cont').form.isValid()) {
			//Ext.getCmp('form-cont').setValue();
			Ext.getCmp('form-cont').form.submit({
				waitTitle : "Validando",			
				url       : 'php/cliente/editcli.php',
				waitMsg   : "Espere un momento por favor......",
				failure   : function(sender,action){
					Ext.Msg.alert('failure',action.result.msg); 
				},
				success: function(sender,action) {
					Ext.Msg.alert('',action.result.msg);
					Ext.getCmp('win-editCont').close();
				}
			});
		}else{
			/*console.debug('Formulario invalido');*/
		}
	};
	
	function delete_clie(){
		if (Ext.getCmp('form-cont').form.isValid()) {
			//Ext.getCmp('form-cont').setValue();
			Ext.getCmp('form-cont').enable();
			Ext.getCmp('form-cont').form.submit({
				waitTitle : "Validando",			
				url       : 'php/cliente/deletecli.php',
				waitMsg   : "Espere un momento por favor......",
				failure   : function(sender,action){
					Ext.Msg.alert('failure',action.result.msg); 
					Ext.getCmp('form-cont').disable();
				},
				success: function(sender,action) {
					Ext.Msg.alert('',action.result.msg);
					Ext.getCmp('win-deleteCont').close();
				}
			});
		}else{
			/*console.debug('Formulario invalido');*/
		}
	};
	
	function openwin(url){
		var ventana = window.open(url,'popup','width=600,height=800');
	};
	
	function roundNumber(rnum, rlength) {
	  var newnumber = Math.round(rnum*Math.pow(10,rlength))/Math.pow(10,rlength);
	  return newnumber; 
	};
	
	var moduleCliente = {
					id:'printer',
					title:'Gesti&oacute;n de Cliente',					
					cls:'inner-tab-custom', // custom styles in layout-browser.css
					//layout   : 'border',
					hideMode:Ext.isIE ? 'offsets' : 'display',
					tbar: [{
						text: 'Agregar', 
						iconCls: 'icon-user-add', 
                		scale: 'medium',
						handler: function(){							
							
							var setCliente = new Ext.form.FormPanel({
								id : 'form-cont',
								bodyStyle :'padding: 10px',
								border : false,
								items : [{
									xtype : 'fieldset',
									collapsible : false,
									title : '[ Datos del Cliente ]',
									width : 350,
									defaults   : {
										anchor : '100%',
										//width : 200,
										allowBlank:false
									},
									items : [camposCliente]
								}]
							});
							
							new Ext.Window({
								id : 'win-addCont',
								title : 'Agregar Cliente',
								layout : 'fit',
								bodyStyle :'padding:10px 5px 5px 5px;',
								width : 400,
								height : 350,
								resizable : false,
								modal : true,
								//autoDestroy : true,
								closable : true,
								closeAction : 'close',
								plain : true,
								buttonAlign :'center',
								items:[setCliente],
								buttons: [{
									text:'Aceptar',
									align:'center',
									handler: function (){
										save_clien();
										//Ext.getCmp('add-cvs').enable();
										//Ext.getCmp('add-txt').enable();
									}
								},{
									text:'Cerrar',
									align:'center',
									handler: function (){
										Ext.getCmp('win-addCont').close();
									}
								}]
							}).show();
						}
					},'-',{
						text: 'Editar', 
						iconCls: 'icon-user-edit',
                		scale: 'medium', 
						handler: function(){
							
							var storeContra = new Ext.data.JsonStore({
								url : 'php/Cliente/getListcli.php'
							});
							
							storeContra.on("load",function(Store,records,options,groups){
								//panelView.doLayout();
								Ext.getCmp('ct-rif').reset();
								Ext.getCmp('ct-nombre').reset();
								Ext.getCmp('ct-fijo').reset();
								Ext.getCmp('ct-direccion').reset();
								Ext.getCmp('ct-fax').reset();
								Ext.getCmp('ct-correo').reset();
								Ext.getCmp('ct-movil').reset();
							});
							
							var resultTpl = new Ext.XTemplate(
								'<tpl for="."><div class="search-item" style="width:400;">',
									/*'<h3><span>{placa}<br />by {fecha}</span></h3>',*/
									'<h4 style="padding:5px;">{name} - {cedu}</h4>',
								'</div></tpl>'
							);
						
							var search = new Ext.form.ComboBox({
								store : storeContra,
								//displayField : 'title',
								typeAhead : false,
								loadingText : 'Buscando...',
								minChars : 3,
								emptyText : 'Por Nombre (min 3 caracteres)... ',
								listWidth : 240,
								hideLabel : true,
								pageSize : 10,
								hideTrigger : true,
								tpl : resultTpl,
								itemSelector : 'div.search-item',
								onSelect: function(record){ // override default onSelect to do redirect
									
									var maskView = new Ext.LoadMask(Ext.getCmp('form-cont').getEl());
									maskView.show();	
									
									Ext.Ajax.request({
										url : 'php/Cliente/getcli.php' , 
										params : {id:record.data.id},
										method: 'POST',
										success: function ( result, request ) { 
											Ext.getCmp('ct-id').setValue(result.responseText.split(';')[0].trim());
											Ext.getCmp('ct-rif').setValue(result.responseText.split(';')[1].trim());
											Ext.getCmp('ct-nombre').setValue(result.responseText.split(';')[2].trim());
											Ext.getCmp('ct-fijo').setValue(result.responseText.split(';')[3].trim());
											Ext.getCmp('ct-direccion').setValue(result.responseText.split(';')[4].trim());
											Ext.getCmp('ct-fax').setValue(result.responseText.split(';')[5].trim());
											Ext.getCmp('ct-correo').setValue(result.responseText.split(';')[6].trim());
											Ext.getCmp('ct-movil').setValue(result.responseText.split(';')[7].trim());
											
											maskView.hide();
											Ext.getCmp('form-cont').enable();
											Ext.getCmp('btn-acep').enable();
											console.log();
										},
										failure: function ( result, request) { 
											Ext.MessageBox.alert('Failed', result.responseText); 
											maskView.hide();
										} 
									});	
								}
							});							
							
							var setCliente = new Ext.form.FormPanel({
								id : 'form-cont',
								bodyStyle :'padding: 10px',
								border : true,
							    region : 'center',
								disabled  :true,
								items : [{
									xtype : 'fieldset',
									collapsible : false,
									title : '[ Datos del Cliente ]',
									width : 350,
									defaults   : {
										anchor : '100%',
										//width : 200,
										allowBlank:false
									},
									items : [camposCliente]
								}]
							});
							
							var busCliente = new Ext.form.FormPanel({
								id : 'form-busca',
								bodyStyle :'padding: 10px',
								border : true,
							    region : 'west',
								width : 275,
								items : [{
									xtype : 'fieldset',
									collapsible : false,
									title : '[ Buscar Cliente ]',
									width : 250,
									defaults   : {
										anchor : '100%'
									},
									items : [search]
								}]
							});
								
							new Ext.Window({
								id : 'win-editCont',
								title : 'Editar Cliente',
								layout : 'fit',
								bodyStyle :'padding:10px 5px 5px 5px;',
								width : 675,
								height : 400,
								resizable : false,
								modal : true,
								//autoDestroy : true,
								closable : true,
								closeAction : 'close',
								plain : true,
								buttonAlign :'center',
								items:[{
									layout:'border',
									items:[busCliente,setCliente]
								}],
								buttons: [{
									id:'btn-acep',
									text:'Aceptar',
									align:'center',
									disabled:true,
									handler: function (){
										edit_clie();
									}
								},{
									text:'Cerrar',
									align:'center',
									handler: function (){
										Ext.getCmp('win-editCont').close();
									}
								}]
							}).show();
							
						}
					},'-',{
						text: 'Eliminar', 
						iconCls: 'icon-user-delete',
                		scale: 'medium', 
						handler: function(){
							
							var storeContra = new Ext.data.JsonStore({
								url : 'php/Cliente/getListcli.php'
							});
							
							storeContra.on("load",function(Store,records,options,groups){
								//panelView.doLayout();
								Ext.getCmp('ct-rif').reset();
								Ext.getCmp('ct-nombre').reset();
								Ext.getCmp('ct-fijo').reset();
								Ext.getCmp('ct-direccion').reset();
								Ext.getCmp('ct-fax').reset();
								Ext.getCmp('ct-correo').reset();
								Ext.getCmp('ct-movil').reset();
								Ext.getCmp('form-cont').disable();
							});
							
							var resultTpl = new Ext.XTemplate(
								'<tpl for="."><div class="search-item" style="width:400;">',
									/*'<h3><span>{placa}<br />by {fecha}</span></h3>',*/
									'<h4 style="padding:5px;">{name} - {cedu}</h4>',
								'</div></tpl>'
							);
						
							var search = new Ext.form.ComboBox({
								store : storeContra,
								//displayField : 'title',
								typeAhead : false,
								loadingText : 'Buscando...',
								minChars : 3,
								emptyText : 'Por Nombre (min 3 caracteres)... ',
								listWidth : 240,
								hideLabel : true,
								pageSize : 10,
								hideTrigger : true,
								tpl : resultTpl,
								itemSelector : 'div.search-item',
								onSelect: function(record){ // override default onSelect to do redirect
									
									var maskView = new Ext.LoadMask(Ext.getCmp('form-cont').getEl());
									maskView.show();	
									
									Ext.Ajax.request({
										url : 'php/Cliente/getCli.php' , 
										params : {id:record.data.id},
										method: 'POST',
										success: function ( result, request ) { 
											Ext.getCmp('ct-id').setValue(result.responseText.split(';')[0].trim());
											Ext.getCmp('ct-rif').setValue(result.responseText.split(';')[1].trim());
											Ext.getCmp('ct-nombre').setValue(result.responseText.split(';')[2].trim());
											Ext.getCmp('ct-fijo').setValue(result.responseText.split(';')[3].trim());
											Ext.getCmp('ct-direccion').setValue(result.responseText.split(';')[4].trim());
											Ext.getCmp('ct-fax').setValue(result.responseText.split(';')[5].trim());
											Ext.getCmp('ct-correo').setValue(result.responseText.split(';')[6].trim());
											Ext.getCmp('ct-movil').setValue(result.responseText.split(';')[7].trim());											
											maskView.hide();
											//Ext.getCmp('form-cont').enable();
											Ext.getCmp('btn-acep').enable();
										},
										failure: function ( result, request) { 
											Ext.MessageBox.alert('Failed', result.responseText); 
											maskView.hide();
										} 
									});	
								}
							});
							
							var setCliente = new Ext.form.FormPanel({
								id : 'form-cont',
								bodyStyle :'padding: 10px',
								border : true,
							    region : 'center',
								disabled: true,
								items : [{
									xtype : 'fieldset',
									collapsible : false,
									title : '[ Datos del Cliente ]',
									width : 350,
									defaults   : {
										anchor : '100%',
										//width : 200,
										allowBlank:false
									},
									items : [camposCliente]
								}]
							});
							
							var busCliente = new Ext.form.FormPanel({
								id : 'form-busca',
								bodyStyle :'padding: 10px',
								border : true,
							    region : 'west',
								width : 275,
								items : [{
									xtype : 'fieldset',
									collapsible : false,
									title : '[ Buscar Cliente ]',
									width : 250,
									defaults   : {
										anchor : '100%'
									},
									items : [search]
								}]
							});
								
							new Ext.Window({
								id : 'win-deleteCont',
								title : 'Eliminar Cliente',
								layout : 'fit',
								bodyStyle :'padding:10px 5px 5px 5px;',
								width : 675,
								height : 500,
								resizable : false,
								modal : true,
								//autoDestroy : true,
								closable : true,
								closeAction : 'close',
								plain : true,
								buttonAlign :'center',
								items:[{
									layout:'border',
									items:[busCliente,setCliente]
								}],
								buttons: [{
									id:'btn-acep',
									text:'Aceptar',
									align:'center',
									disabled:true,
									handler: function (){
										delete_clie();
									}
								},{
									text:'Cerrar',
									align:'center',
									handler: function (){
										Ext.getCmp('win-deleteCont').close();
									}
								}]
							}).show();
						}
					},'->',{
						text: 'Reporte - Clientes', 
						iconCls: 'icon-report',
                		scale: 'medium', 
						handler: function(){openwin('php/Cliente/reportcli.php');}
					}],
					html: '<div id="Cliente-div"> <div id="fondoestirado"> <img src="images/background.jpg" alt="" /> </div>  </div> '	
				};	  
	var camposProveedor=[
		{  
			id:'pr-id',
			xtype:'hidden',//<-- campo oculto (hidden)  
			name:'txt-id', //el nombre con que se envia al servidor  
			value:'developer'//el valor que contendrá  
		},{
			id:'pr-rif',
			xtype : 'textfield',
			fieldLabel:'R.I.F/C.I',
			name:'txt-rif',
			emptyText:'R.I.F/C.I...'
		},{
			id:"pr-nombre",
			xtype : 'textfield',
			fieldLabel:'Nombre', // creamos un campo
			name:'txt-nombre', // a partir de una
			emptyText:'Nombre...'
		},{
			id:"pr-direccion",
			xtype : 'textfield',
			fieldLabel:'Direcci&oacuten', // creamos un campo
			name:'txt-direccion', // a partir de una
			emptyText:'Direccion...',
			allowBlank:true
		},{
			id:"pr-fijo",
			xtype : 'textfield',
			fieldLabel:'Telf. (fijo)', // creamos un campo
			name:'txt-fijo', // a partir de una
			vtype:'numbers',
			mask: '9999 999 9999',
			emptyText: '____ ___ ____',
			plugins: new Ext.ux.plugins.MaskIt()
		},{
			id:"pr-fax",
			xtype : 'textfield',
			fieldLabel:'Fax', // creamos un campo
			name:'txt-fax', // a partir de una
			vtype:'numbers',
			mask: '9999 999 9999',
			emptyText: '____ ___ ____',
			plugins: new Ext.ux.plugins.MaskIt()
		},{       
			id:"pr-correo",
			xtype : 'textfield',
			fieldLabel:'Email', // creamos un campo
			name:'txt-correo', // a partir de una
			emptyText:'Usuario@dominio...',
			vtype:'email'
		}
	];
	
	
	function save_prov(){
		if (Ext.getCmp('form-prov').form.isValid()) {
			//Ext.getCmp('form-cont').setValue();
			Ext.getCmp('form-prov').form.submit({
				waitTitle : "Validando",			
				url       : 'php/Proveedor/savepro.php',
				waitMsg   : "Espere un momento por favor......",
				failure   : function(sender,action){
					Ext.Msg.alert('failure',action.result.msg); 
				},
				success: function(sender,action) {
					Ext.Msg.alert('',action.result.msg);
					Ext.getCmp('win-addProv').close();
				}
			});
		}else{
			/*console.debug('Formulario invalido');*/
		}
	}
	
	function edit_prov(){
		if (Ext.getCmp('form-prov').form.isValid()) {
			//Ext.getCmp('form-cont').setValue();
			Ext.getCmp('form-prov').form.submit({
				waitTitle : "Validando",			
				url       : 'php/Proveedor/editpro.php',
				waitMsg   : "Espere un momento por favor......",
				failure   : function(sender,action){
					Ext.Msg.alert('failure',action.result.msg); 
				},
				success: function(sender,action) {
					Ext.Msg.alert('',action.result.msg);
					Ext.getCmp('win-editCont').close();
				}
			});
		}else{
			/*console.debug('Formulario invalido');*/
		}
	};
	
	function delete_prov(){
		if (Ext.getCmp('form-prov').form.isValid()) {
			//Ext.getCmp('form-cont').setValue();
			Ext.getCmp('form-prov').enable();
			Ext.getCmp('form-prov').form.submit({
				waitTitle : "Validando",			
				url       : 'php/Proveedor/deletepro.php',
				waitMsg   : "Espere un momento por favor......",
				failure   : function(sender,action){
					Ext.Msg.alert('failure',action.result.msg); 
					Ext.getCmp('form-prov').disable();
				},
				success: function(sender,action) {
					Ext.Msg.alert('',action.result.msg);
					Ext.getCmp('win-deleteCont').close();
				}
			});
		}else{
			/*console.debug('Formulario invalido');*/
		}
	};
	
	function openwin(url){
		var ventana = window.open(url,'popup','width=600,height=800');
	};
	
	function roundNumber(rnum, rlength) {
	  var newnumber = Math.round(rnum*Math.pow(10,rlength))/Math.pow(10,rlength);
	  return newnumber; 
	};
	
	var moduleProveedor = {
					id:'proveedor',
					title:'Gesti&oacute;n de Proveedor',					
					cls:'inner-tab-custom', // custom styles in layout-browser.css
					//layout   : 'border',
					hideMode:Ext.isIE ? 'offsets' : 'display',
					tbar: [{
						text: 'Agregar', 
						iconCls: 'icon-user-add', 
                		scale: 'medium',
						handler: function(){							
							
							var setProveedor = new Ext.form.FormPanel({
								id :'form-prov',
								bodyStyle :'padding: 10px',
								border : false,
								items : [{
									xtype : 'fieldset',
									collapsible : false,
									title : '[ Datos del Proveedor ]',
									width : 350,
									defaults   : {
										anchor : '100%',
										//width : 200,
										allowBlank:false
									},
									items : [camposProveedor]
								}]
							});
							
							new Ext.Window({
								id : 'win-addProv',
								title : 'Agregar Proveedor',
								layout : 'fit',
								bodyStyle :'padding:10px 5px 5px 5px;',
								width : 400,
								height : 350,
								resizable : false,
								modal : true,
								//autoDestroy : true,
								closable : true,
								closeAction : 'close',
								plain : true,
								buttonAlign :'center',
								items:[setProveedor],
								buttons: [{
									text:'Aceptar',
									align:'center',
									handler: function (){
										save_prov();
										//Ext.getCmp('add-cvs').enable();
										//Ext.getCmp('add-txt').enable();
									}
								},{
									text:'Cerrar',
									align:'center',
									handler: function (){
										Ext.getCmp('win-addProv').close();
									}
								}]
							}).show();
						}
					},'-',{
						text: 'Editar', 
						iconCls: 'icon-user-edit',
                		scale: 'medium', 
						handler: function(){
							
							var storeContra = new Ext.data.JsonStore({
								url : 'php/Proveedor/getListpro.php'
							});
							
							storeContra.on("load",function(Store,records,options,groups){
								//panelView.doLayout();
								Ext.getCmp('pr-rif').reset();
								Ext.getCmp('pr-nombre').reset();
								Ext.getCmp('pr-fijo').reset();
								Ext.getCmp('pr-direccion').reset();
								Ext.getCmp('pr-fax').reset();
								Ext.getCmp('pr-correo').reset();
							});
							
							var resultTpl = new Ext.XTemplate(
								'<tpl for="."><div class="search-item" style="width:400;">',
									/*'<h3><span>{placa}<br />by {fecha}</span></h3>',*/
									'<h4 style="padding:5px;">{name} - {cedu}</h4>',
								'</div></tpl>'
							);
						
							var search = new Ext.form.ComboBox({
								store : storeContra,
								//displayField : 'title',
								typeAhead : false,
								loadingText : 'Buscando...',
								minChars : 3,
								emptyText : 'Por Nombre (min 3 caracteres)... ',
								listWidth : 240,
								hideLabel : true,
								pageSize : 10,
								hideTrigger : true,
								tpl : resultTpl,
								itemSelector : 'div.search-item',
								onSelect: function(record){ // override default onSelect to do redirect
									
									var maskView = new Ext.LoadMask(Ext.getCmp('form-prov').getEl());
									maskView.show();	
									
									Ext.Ajax.request({
										url : 'php/Proveedor/getpro.php' , 
										params : {id:record.data.id},
										method: 'POST',
										success: function ( result, request ) { 
											Ext.getCmp('pr-id').setValue(result.responseText.split(';')[0].trim());
											Ext.getCmp('pr-rif').setValue(result.responseText.split(';')[1].trim());
											Ext.getCmp('pr-nombre').setValue(result.responseText.split(';')[2].trim());
											Ext.getCmp('pr-fijo').setValue(result.responseText.split(';')[3].trim());
											Ext.getCmp('pr-direccion').setValue(result.responseText.split(';')[4].trim());
											Ext.getCmp('pr-fax').setValue(result.responseText.split(';')[5].trim());
											Ext.getCmp('pr-correo').setValue(result.responseText.split(';')[6].trim());
											
											maskView.hide();
											Ext.getCmp('form-prov').enable();
											Ext.getCmp('btn-acep').enable();
											//console.log();
										},
										failure: function ( result, request) { 
											Ext.MessageBox.alert('Failed', result.responseText); 
											maskView.hide();
										} 
									});	
								}
							});							
							
							var setProveedor = new Ext.form.FormPanel({
								id : 'form-prov',
								bodyStyle :'padding: 10px',
								border : true,
							    region : 'center',
								disabled  :true,
								items : [{
									xtype : 'fieldset',
									collapsible : false,
									title : '[ Datos del Proveedores ]',
									width : 350,
									defaults   : {
										anchor : '100%',
										//width : 200,
										allowBlank:false
									},
									items : [camposProveedor]
								}]
							});
							
							var busProveedor = new Ext.form.FormPanel({
								id : 'form-busca',
								bodyStyle :'padding: 10px',
								border : true,
							    region : 'west',
								width : 275,
								items : [{
									xtype : 'fieldset',
									collapsible : false,
									title : '[ Buscar Proveedor ]',
									width : 250,
									defaults   : {
										anchor : '100%'
									},
									items : [search]
								}]
							});
								
							new Ext.Window({
								id : 'win-editCont',
								title : 'Editar Proveedor',
								layout : 'fit',
								bodyStyle :'padding:10px 5px 5px 5px;',
								width : 675,
								height : 400,
								resizable : false,
								modal : true,
								//autoDestroy : true,
								closable : true,
								closeAction : 'close',
								plain : true,
								buttonAlign :'center',
								items:[{
									layout:'border',
									items:[busProveedor,setProveedor]
								}],
								buttons: [{
									id:'btn-acep',
									text:'Aceptar',
									align:'center',
									disabled:true,
									handler: function (){
										edit_prov();
									}
								},{
									text:'Cerrar',
									align:'center',
									handler: function (){
										Ext.getCmp('win-editCont').close();
									}
								}]
							}).show();
							
						}
					},'-',{
						text: 'Eliminar', 
						iconCls: 'icon-user-delete',
                		scale: 'medium', 
						handler: function(){
							
							var storeContra = new Ext.data.JsonStore({
								url : 'php/Proveedor/getListpro.php'
							});
							
							storeContra.on("load",function(Store,records,options,groups){
								//panelView.doLayout();
								Ext.getCmp('pr-rif').reset();
								Ext.getCmp('pr-nombre').reset();
								Ext.getCmp('pr-fijo').reset();
								Ext.getCmp('pr-direccion').reset();
								Ext.getCmp('pr-fax').reset();
								Ext.getCmp('pr-correo').reset();
								Ext.getCmp('form-prov').disable();
							});
							
							var resultTpl = new Ext.XTemplate(
								'<tpl for="."><div class="search-item" style="width:400;">',
									/*'<h3><span>{placa}<br />by {fecha}</span></h3>',*/
									'<h4 style="padding:5px;">{name} - {cedu}</h4>',
								'</div></tpl>'
							);
						
							var search = new Ext.form.ComboBox({
								store : storeContra,
								//displayField : 'title',
								typeAhead : false,
								loadingText : 'Buscando...',
								minChars : 3,
								emptyText : 'Por Nombre (min 3 caracteres)... ',
								listWidth : 240,
								hideLabel : true,
								pageSize : 10,
								hideTrigger : true,
								tpl : resultTpl,
								itemSelector : 'div.search-item',
								onSelect: function(record){ // override default onSelect to do redirect
									
									var maskView = new Ext.LoadMask(Ext.getCmp('form-prov').getEl());
									maskView.show();	
									
									Ext.Ajax.request({
										url : 'php/Proveedor/getpro.php' , 
										params : {id:record.data.id},
										method: 'POST',
										success: function ( result, request ) { 
											Ext.getCmp('pr-id').setValue(result.responseText.split(';')[0].trim());
											Ext.getCmp('pr-rif').setValue(result.responseText.split(';')[1].trim());
											Ext.getCmp('pr-nombre').setValue(result.responseText.split(';')[2].trim());
											Ext.getCmp('pr-fijo').setValue(result.responseText.split(';')[3].trim());
											Ext.getCmp('pr-direccion').setValue(result.responseText.split(';')[4].trim());
											Ext.getCmp('pr-fax').setValue(result.responseText.split(';')[5].trim());
											Ext.getCmp('pr-correo').setValue(result.responseText.split(';')[6].trim());											
											maskView.hide();
											//Ext.getCmp('form-cont').enable();
											Ext.getCmp('btn-acep').enable();
										},
										failure: function ( result, request) { 
											Ext.MessageBox.alert('Failed', result.responseText); 
											maskView.hide();
										} 
									});	
								}
							});
							
							var setProveedor = new Ext.form.FormPanel({
								id : 'form-prov',
								bodyStyle :'padding: 10px',
								border : true,
							    region : 'center',
								disabled: true,
								items : [{
									xtype : 'fieldset',
									collapsible : false,
									title : '[ Datos del Proveedor ]',
									width : 350,
									defaults   : {
										anchor : '100%',
										//width : 200,
										allowBlank:false
									},
									items : [camposProveedor]
								}]
							});
							
							var busProveedor = new Ext.form.FormPanel({
								id : 'form-busca',
								bodyStyle :'padding: 10px',
								border : true,
							    region : 'west',
								width : 275,
								items : [{
									xtype : 'fieldset',
									collapsible : false,
									title : '[ Buscar Proveedor ]',
									width : 250,
									defaults   : {
										anchor : '100%'
									},
									items : [search]
								}]
							});
								
							new Ext.Window({
								id : 'win-deleteCont',
								title : 'Eliminar Proveedor',
								layout : 'fit',
								bodyStyle :'padding:10px 5px 5px 5px;',
								width : 675,
								height : 500,
								resizable : false,
								modal : true,
								//autoDestroy : true,
								closable : true,
								closeAction : 'close',
								plain : true,
								buttonAlign :'center',
								items:[{
									layout:'border',
									items:[busProveedor,setProveedor]
								}],
								buttons: [{
									id:'btn-acep',
									text:'Aceptar',
									align:'center',
									disabled:true,
									handler: function (){
										delete_prov();
									}
								},{
									text:'Cerrar',
									align:'center',
									handler: function (){
										Ext.getCmp('win-deleteCont').close();
									}
								}]
							}).show();
						}
					},'->',{
						text: 'Reporte - Proveedor', 
						iconCls: 'icon-report',
                		scale: 'medium', 
						handler: function(){openwin('php/Proveedor/reportpro.php');}
					}],
					html: '<div id="proveedor-div"> <div id="fondoestirado"> <img src="images/background.jpg" alt="" /> </div>  </div> '	
				};	
//aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaqui cinuebza articulo *********

  
	var camposArticulo=[
		{  
			id:'ar-id',
			xtype:'hidden',//<-- campo oculto (hidden)  
			name:'txt-id', //el nombre con que se envia al servidor  
			value:'developer'//el valor que contendrá  
		},{
			id:'ar-codigo',
			xtype : 'textfield',
			fieldLabel:'C&oacute;digo',
			name:'txt-codigo',
			emptyText:'Cod del producto...'
		},{
			id:"ar-nombre",
			xtype : 'textfield',
			fieldLabel:'Nombre', // creamos un campo
			name:'txt-nombre', // a partir de una
			emptyText:'Nombre...'
		},{
			id:"ar-costo",
			xtype : 'textfield',
			fieldLabel:'Costo', // creamos un campo
			name:'txt-costo', // a partir de una
			emptyText:'Costo Bs. ...',
			allowBlank:true
		},{
			id:"ar-utilidad",
			xtype : 'textfield',
			fieldLabel:'Utilidad', // creamos un campo
			name:'txt-utilidad', // a partir de una
			emptyText: 'Ej: 35%',
		},{
			id:"ar-descripcion",
			xtype : 'textfield',
			fieldLabel:'descripcion', // creamos un campo
			name:'txt-descripcion', // a partir de una
			emptyText: 'Descripcion...'
		}
	];
	
	
	function save_art(){
		if (Ext.getCmp('form-art').form.isValid()) {
			//Ext.getCmp('form-cont').setValue();
			Ext.getCmp('form-art').form.submit({
				waitTitle : "Validando",			
				url       : 'php/articulo/saveart.php',
				waitMsg   : "Espere un momento por favor......",
				failure   : function(sender,action){
					Ext.Msg.alert('failure',action.result.msg); 
				},
				success: function(sender,action) {
					Ext.Msg.alert('',action.result.msg);
					Ext.getCmp('win-addart').close();
				}
			});
		}else{
			/*console.debug('Formulario invalido');*/
		}
	}
	
	function edit_art(){
		if (Ext.getCmp('form-art').form.isValid()) {
			//Ext.getCmp('form-cont').setValue();
			Ext.getCmp('form-art').form.submit({
				waitTitle : "Validando",			
				url       : 'php/articulo/editart.php',
				waitMsg   : "Espere un momento por favor......",
				failure   : function(sender,action){
					Ext.Msg.alert('failure',action.result.msg); 
				},
				success: function(sender,action) {
					Ext.Msg.alert('',action.result.msg);
					Ext.getCmp('win-editCont').close();
				}
			});
		}else{
			/*console.debug('Formulario invalido');*/
		}
	};
	
	function delete_art(){
		if (Ext.getCmp('form-art').form.isValid()) {
			//Ext.getCmp('form-cont').setValue();
			Ext.getCmp('form-art').enable();
			Ext.getCmp('form-art').form.submit({
				waitTitle : "Validando",			
				url       : 'php/articulo/deleteart.php',
				waitMsg   : "Espere un momento por favor......",
				failure   : function(sender,action){
					Ext.Msg.alert('failure',action.result.msg); 
					Ext.getCmp('form-art').disable();
				},
				success: function(sender,action) {
					Ext.Msg.alert('',action.result.msg);
					Ext.getCmp('win-deleteCont').close();
				}
			});
		}else{
			/*console.debug('Formulario invalido');*/
		}
	};
	
	function openwin(url){
		var ventana = window.open(url,'popup','width=600,height=800');
	};
	
	function roundNumber(rnum, rlength) {
	  var newnumber = Math.round(rnum*Math.pow(10,rlength))/Math.pow(10,rlength);
	  return newnumber; 
	};
	
	var moduleArticulo = {
					id:'articulo',
					title:'Gesti&oacute;n de Art&iacute;culo',					
					cls:'inner-tab-custom', // custom styles in layout-browser.css
					//layout   : 'border',
					hideMode:Ext.isIE ? 'offsets' : 'display',
					tbar: [{
						text: 'Agregar', 
						iconCls: 'icon-add-relaciones_fab', 
                		scale: 'medium',
						handler: function(){							
							
							var setArticulo = new Ext.form.FormPanel({
								id :'form-art',
								bodyStyle :'padding: 10px',
								border : false,
								items : [{
									xtype : 'fieldset',
									collapsible : false,
									title : '[ Datos del Art&iacute;culo ]',
									width : 350,
									defaults   : {
										anchor : '100%',
										//width : 200,
										allowBlank:false
									},
									items : [camposArticulo]
								}]
							});
							
							new Ext.Window({
								id : 'win-addart',
								title : 'Agregar Art&iacute;culo',
								layout : 'fit',
								bodyStyle :'padding:10px 5px 5px 5px;',
								width : 400,
								height : 350,
								resizable : false,
								modal : true,
								//autoDestroy : true,
								closable : true,
								closeAction : 'close',
								plain : true,
								buttonAlign :'center',
								items:[setArticulo],
								buttons: [{
									text:'Aceptar',
									align:'center',
									handler: function (){
										save_art();
										//Ext.getCmp('add-cvs').enable();
										//Ext.getCmp('add-txt').enable();
									}
								},{
									text:'Cerrar',
									align:'center',
									handler: function (){
										Ext.getCmp('win-addart').close();
									}
								}]
							}).show();
						}
					},'-',{
						text: 'Editar', 
						iconCls: 'icon-menu-relaciones',
                		scale: 'medium', 
						handler: function(){
							
							var storeContra = new Ext.data.JsonStore({
								url : 'php/articulo/getListart.php'
							});
							
							storeContra.on("load",function(Store,records,options,groups){
								//panelView.doLayout();
								Ext.getCmp('ar-codigo').reset();
								Ext.getCmp('ar-nombre').reset();
								Ext.getCmp('ar-costo').reset();
								Ext.getCmp('ar-utilidad').reset();
								Ext.getCmp('ar-descripcion').reset();
							});
							
							var resultTpl = new Ext.XTemplate(
								'<tpl for="."><div class="search-item" style="width:400;">',
									/*'<h3><span>{placa}<br />by {fecha}</span></h3>',*/
									'<h4 style="padding:5px;">{name} - {codi}</h4>',
								'</div></tpl>'
							);
						
							var search = new Ext.form.ComboBox({
								store : storeContra,
								//displayField : 'title',
								typeAhead : false,
								loadingText : 'Buscando...',
								minChars : 3,
								emptyText : 'Por Nombre (min 3 caracteres)... ',
								listWidth : 240,
								hideLabel : true,
								pageSize : 10,
								hideTrigger : true,
								tpl : resultTpl,
								itemSelector : 'div.search-item',
								onSelect: function(record){ // override default onSelect to do redirect
									
									var maskView = new Ext.LoadMask(Ext.getCmp('form-art').getEl());
									maskView.show();	
									
									Ext.Ajax.request({
										url : 'php/articulo/getart.php' , 
										params : {id:record.data.id},
										method: 'POST',
										success: function ( result, request ) { 
											Ext.getCmp('ar-id').setValue(result.responseText.split(';')[0].trim());
											Ext.getCmp('ar-codigo').setValue(result.responseText.split(';')[1].trim());
											Ext.getCmp('ar-nombre').setValue(result.responseText.split(';')[2].trim());
											Ext.getCmp('ar-costo').setValue(result.responseText.split(';')[3].trim());
											Ext.getCmp('ar-utilidad').setValue(result.responseText.split(';')[4].trim());
											Ext.getCmp('ar-descripcion').setValue(result.responseText.split(';')[5].trim());
											
											maskView.hide();
											Ext.getCmp('form-art').enable();
											Ext.getCmp('btn-acep').enable();
											//console.log();
										},
										failure: function ( result, request) { 
											Ext.MessageBox.alert('Failed', result.responseText); 
											maskView.hide();
										} 
									});	
								}
							});							
							
							var setArticulo = new Ext.form.FormPanel({
								id : 'form-art',
								bodyStyle :'padding: 10px',
								border : true,
							    region : 'center',
								disabled  :true,
								items : [{
									xtype : 'fieldset',
									collapsible : false,
									title : '[ Datos del Art&iacute;culo ]',
									width : 350,
									defaults   : {
										anchor : '100%',
										//width : 200,
										allowBlank:false
									},
									items : [camposArticulo]
								}]
							});
							
							var busArticulo = new Ext.form.FormPanel({
								id : 'form-busca',
								bodyStyle :'padding: 10px',
								border : true,
							    region : 'west',
								width : 275,
								items : [{
									xtype : 'fieldset',
									collapsible : false,
									title : '[ Buscar Articulo ]',
									width : 250,
									defaults   : {
										anchor : '100%'
									},
									items : [search]
								}]
							});
								
							new Ext.Window({
								id : 'win-editCont',
								title : 'Editar Articulo',
								layout : 'fit',
								bodyStyle :'padding:10px 5px 5px 5px;',
								width : 675,
								height : 400,
								resizable : false,
								modal : true,
								//autoDestroy : true,
								closable : true,
								closeAction : 'close',
								plain : true,
								buttonAlign :'center',
								items:[{
									layout:'border',
									items:[busArticulo,setArticulo]
								}],
								buttons: [{
									id:'btn-acep',
									text:'Aceptar',
									align:'center',
									disabled:true,
									handler: function (){
										edit_art();
									}
								},{
									text:'Cerrar',
									align:'center',
									handler: function (){
										Ext.getCmp('win-editCont').close();
									}
								}]
							}).show();
							
						}
					},'-',{
						text: 'Eliminar', 
						iconCls: 'icon-user-delete',
                		scale: 'medium', 
						handler: function(){
							
							var storeContra = new Ext.data.JsonStore({
								url : 'php/articulo/getListart.php'
							});
							
							storeContra.on("load",function(Store,records,options,groups){
								//panelView.doLayout();
								Ext.getCmp('ar-codigo').reset();
								Ext.getCmp('ar-nombre').reset();
								Ext.getCmp('ar-costo').reset();
								Ext.getCmp('ar-utilidad').reset();
								Ext.getCmp('ar-descripcion').reset();
								Ext.getCmp('form-art').disable();
							});
							
							var resultTpl = new Ext.XTemplate(
								'<tpl for="."><div class="search-item" style="width:400;">',
									/*'<h3><span>{placa}<br />by {fecha}</span></h3>',*/
									'<h4 style="padding:5px;">{name} - {codi}</h4>',
								'</div></tpl>'
							);
						
							var search = new Ext.form.ComboBox({
								store : storeContra,
								//displayField : 'title',
								typeAhead : false,
								loadingText : 'Buscando...',
								minChars : 3,
								emptyText : 'Por Nombre (min 3 caracteres)... ',
								listWidth : 240,
								hideLabel : true,
								pageSize : 10,
								hideTrigger : true,
								tpl : resultTpl,
								itemSelector : 'div.search-item',
								onSelect: function(record){ // override default onSelect to do redirect
									
									var maskView = new Ext.LoadMask(Ext.getCmp('form-art').getEl());
									maskView.show();	
									
									Ext.Ajax.request({
										url : 'php/articulo/getart.php' , 
										params : {id:record.data.id},
										method: 'POST',
										success: function ( result, request ) { 
											Ext.getCmp('ar-id').setValue(result.responseText.split(';')[0].trim());
											Ext.getCmp('ar-codigo').setValue(result.responseText.split(';')[1].trim());
											Ext.getCmp('ar-nombre').setValue(result.responseText.split(';')[2].trim());
											Ext.getCmp('ar-costo').setValue(result.responseText.split(';')[3].trim());
											Ext.getCmp('ar-utilidad').setValue(result.responseText.split(';')[4].trim());
											Ext.getCmp('ar-descripcion').setValue(result.responseText.split(';')[5].trim());
											maskView.hide();
											//Ext.getCmp('form-cont').enable();
											Ext.getCmp('btn-acep').enable();
										},
										failure: function ( result, request) { 
											Ext.MessageBox.alert('Failed', result.responseText); 
											maskView.hide();
										} 
									});	
								}
							});
							
							var setArticulo = new Ext.form.FormPanel({
								id : 'form-art',
								bodyStyle :'padding: 10px',
								border : true,
							    region : 'center',
								disabled: true,
								items : [{
									xtype : 'fieldset',
									collapsible : false,
									title : '[ Datos del Articulo ]',
									width : 350,
									defaults   : {
										anchor : '100%',
										//width : 200,
										allowBlank:false
									},
									items : [camposArticulo]
								}]
							});
							
							var busArticulo = new Ext.form.FormPanel({
								id : 'form-busca',
								bodyStyle :'padding: 10px',
								border : true,
							    region : 'west',
								width : 275,
								items : [{
									xtype : 'fieldset',
									collapsible : false,
									title : '[ Buscar Art&iacute;culo ]',
									width : 250,
									defaults   : {
										anchor : '100%'
									},
									items : [search]
								}]
							});
								
							new Ext.Window({
								id : 'win-deleteCont',
								title : 'Eliminar Art&iacute;culo',
								layout : 'fit',
								bodyStyle :'padding:10px 5px 5px 5px;',
								width : 675,
								height : 500,
								resizable : false,
								modal : true,
								//autoDestroy : true,
								closable : true,
								closeAction : 'close',
								plain : true,
								buttonAlign :'center',
								items:[{
									layout:'border',
									items:[busArticulo,setArticulo]
								}],
								buttons: [{
									id:'btn-acep',
									text:'Aceptar',
									align:'center',
									disabled:true,
									handler: function (){
										delete_art();
									}
								},{
									text:'Cerrar',
									align:'center',
									handler: function (){
										Ext.getCmp('win-deleteCont').close();
									}
								}]
							}).show();
						}
					},'->',{
						text: 'Reporte - Inventario', 
						iconCls: 'icon-report',
                		scale: 'medium', 
						handler: function(){openwin('php/articulo/reportart.php');}
					}],
					html: '<div id="articulo-div"> <div id="fondoestirado"> <img src="images/background.jpg" alt="" /> </div>  </div> '	
				};	
	var moduleRelaciones = {
					title:'Gesti&oacute;n de Ventas',					
					cls:'inner-tab-custom', // custom styles in layout-browser.css
					//layout   : 'border',
					hideMode:Ext.isIE ? 'offsets' : 'display',
					tbar: [{
						text: 'Venta', 
						iconCls: 'icon-add-relaciones_fab', 
                		scale: 'medium',
						handler: function(){
							
						/******** variables locales ********/
							var idCont = null;
							var nomCont = null;
							index = new Number();
						/***********************************/
							
							var storeListCli = new Ext.data.JsonStore({
								url : 'php/ventas/getListcli.php'
							});
							
							var resultTplCli = new Ext.XTemplate(
								'<tpl for="."><div class="search-item">',
									/*'<h3><span>{placa}<br />by {fecha}</span></h3>',*/
									'<h4 style="padding:5px;">{cedu} - {name}</h4>',
								'</div></tpl>'
							);

							var searchCli = new Ext.form.ComboBox({
								id:'searchCli',
								store : storeListCli,
								//displayField : 'title',
								typeAhead : false,
								loadingText : 'Buscando...',
								minChars : 2,
								emptyText : 'Por Nombre (min 2 caracteres)... ',
								listWidth : 240,
								hideLabel : true,
								pageSize : 10,
								hideTrigger : true,
								allowBlank: false,
								tpl : resultTplCli,
								itemSelector : 'div.search-item',
								onSelect: function(record){ // override default onSelect to do redirect
								
									idCli = record.data.id;
									nomCli = record.data.name;
									
									var maskView = new Ext.LoadMask(Ext.getCmp('getCliente').getEl());	///////
									
									Ext.getCmp('searchCli').collapse();
									
									var storeGetCli = new Ext.data.JsonStore({
										url : 'php/ventas/getCli.php'
									});
									
									storeGetCli.on("load",function(Store,records,options,groups){
										var tplRelCont = new Ext.XTemplate(
											'<div id="reg-detalles">',
												'<p style=" padding:0   5px 0;"><b>Nombre: </b>{name}</p>',
												'<p style=" padding:5px 5px 0;"><b>R.I.F/C.I: </b>{rif}</p>',
												'<p style=" padding:5px 5px 0;"><b>Direcci&oacuten: </b>{direccion}</p>',
												'<p style=" padding:5px 5px 0;"></p>',
											'</div>'
										);			
										tplRelCont.overwrite(Ext.get('cliente-datos'), storeGetCli.data.items[0].data);
										console.debug(storeGetCli.data.items[0].data);
									});
									
									maskView.show();		
									storeGetCli.load({
										params:{id:record.data.id},
										callback: function(){
											maskView.hide();
											Ext.getCmp('getArticulo').enable( );
										}
									});
								}
							});
							
							var busCliente = new Ext.form.FormPanel({
								id : 'getCliente',
								bodyStyle :'padding: 10px',
								border : false,
							    region : 'center',
								width : 275,
								items : [{
									html: "<h1>Datos del Cliente</h1> <br> <p>A continuaci&oacuten por favor ingrese rif/nombre del cliente. ", border: false
								},{
									xtype : 'fieldset',
									collapsible : false,
									title : '[ Buscar Cliente ]',
									width : 250,
									margins:'25 0 25 0',
									defaults   : {
										anchor : '100%'
									},
									items : [searchCli]
								},{
									xtype: 'fieldset',
									title: 'Datos del Cliente',
									height: 150,
									html: '<div id="cliente-datos" style="font-size:14px;"></div>'
								}]
							});
						
							var storeListArt = new Ext.data.JsonStore({
								url : 'php/articulo/getListart.php'
							});
							
							var resultTplArt = new Ext.XTemplate(
								'<tpl for="."><div class="search-item">',
									/*'<h3><span>{placa}<br />by {fecha}</span></h3>',*/
									'<h4 style="padding:5px;">{codigo} - {name}</h4>',
								'</div></tpl>'
							);
							
							var searchArt = new Ext.form.ComboBox({
								id:'searchArt',
								store : storeListArt,
								//displayField : 'title',
								typeAhead : false,
								loadingText : 'Buscando...',
								minChars : 2,
								emptyText : 'Por Nombre (min 2 caracteres)... ',
								listWidth : 240,
								hideLabel : true,
								pageSize : 10,
								hideTrigger : true,
								allowBlank: false,
								tpl : resultTplArt,
								itemSelector : 'div.search-item',
								onSelect: function(record){ // override default onSelect to do redirect
								
									idCont = record.data.id;
									nomCont = record.data.name;
									var maskView = new Ext.LoadMask(Ext.getCmp('getArticulo').getEl());	
									
									Ext.getCmp('searchArt').collapse();
									
									maskView.show();
									
									Ext.Ajax.request({
										url : 'php/articulo/getart.php' , 
										params : {id:record.data.id},
										method: 'POST',
										success: function ( result, request ) { 
										
											var recordStore = new Ext.data.Record({
												codigo: result.responseText.split(';')[1].trim(),
												descripcion: result.responseText.split(';')[2].trim(),
												cantidad: 1,
												precio: result.responseText.split(';')[5].trim(),
												subtotal: result.responseText.split(';')[5].trim()
											});
											// add to the store
											storeGridFab.add(recordStore);
											
											maskView.hide();
											//console.log();
										},
										failure: function ( result, request) { 
											Ext.MessageBox.alert('Failed', result.responseText); 
											maskView.hide();
										} 
									});	
								}
							});
							
							var busArticulo = new Ext.form.FormPanel({
								id : 'getArticulo',
								bodyStyle :'padding: 10px',
								border : false,
							    region : 'south',
								disabled : true,
								height: 235,
								width : 275,
								items : [{
									html: "<h1>Datos del Art&iacute;culo</h1> <br> <p>A continuaci&oacuten por favor ingrese los datos Para la facturaci&oacute;n. ", border: false
								},{
									xtype : 'fieldset',
									collapsible : false,
									title : '[ Buscar Art&iacute;culo ]',
									width : 250,
									margins:'25 0 25 0',
									defaults   : {
										anchor : '100%'
									},
									items : [searchArt]
								}/*,{
									xtype: 'fieldset',
									title: 'Datos del Art&iacute;culo',
									height: 150,
									html: '<div id="cont-datos" style="font-size:14px;"></div>'
								}*/]
							});
							
							var storeGridFab = new Ext.data.JsonStore({
								url: 'php/ventas/getArtfac.php',								
								root: 'data',
								fields: [ new Ext.grid.RowNumberer(),
										 {name:'codigo'},
										 {name:'descripcion'},
										 {name:'cantidad',type:'int'},
										 {name:'precio',type:'float'},
										 {name:'subtotal',type:'float'}]
							});	
							
							function changeTotal(){	 
								sumMonto = 0;
								storeGridFab.each( function(record) { sumMonto = sumMonto + record.data.subtotal; } );
								totalFac = sumMonto;
								tplFacSub.overwrite(Ext.get('sub-total'), { subTotal: formatNumber(roundNumber(totalFac,3),'') });
								Ext.getCmp('facuta-sub').doLayout();
							  	return 0;
							};
							
							storeGridFab.on("load",function(Store,records,options,groups){
								console.debug('Load');
								changeTotal();
							});

							storeGridFab.on("add",function(Store,records,options,groups){
								console.debug('Agregar');
								changeTotal();
							});

							storeGridFab.on("remove",function(Store,records,options,groups){
								console.debug('Quitar');
								changeTotal();
							});						
							
							function changeSub(val, x, Store){	 
								Store.data.subtotal = roundNumber(val * Store.data.precio, 3); 
								changeTotal();
							  	return val;
							};
							
							var numberField = new Ext.form.NumberField({
								decimalPrecision: 0,
								selectOnFocus: true,
								minValue: 0,
								allowBlank: false
							});
							
							var gridFab = new Ext.grid.EditorGridPanel({ 
								id: 'gridFab', 
								store: storeGridFab,
								autoHeight:true,
								/*bodyStyle :'padding: 10 10 10 10', */
								columns: [
									new Ext.grid.RowNumberer(),
									{header:'C&oacute;digo', dataIndex:'codigo',sortable: false, width:70, align: 'left', menuDisabled: true},
									{header:'Descripci&oacute;n', dataIndex:'descripcion',sortable: false, width:200, align: 'left', menuDisabled: true},
									{header:'Cantidad', dataIndex:'cantidad',sortable: false, width:70, align: 'right', editor: numberField, menuDisabled: true, renderer: changeSub},
									{header:'Precio', dataIndex:'precio',sortable: false, width:90, align: 'right', menuDisabled: true/*, editor: numberField*/},
									{header:'Sub total', dataIndex:'subtotal',sortable: false, width:85, align: 'right', menuDisabled: true/*, editor: numberField*/}
								],   
								viewConfig: {
									forceFit : true//, autoFill : true
								},
								stripeRows: true,
								border : false,
								tbar: [{
										text: 'Cliente',
										iconCls: 'icon-user-add',
										handler: function(){							
							
							var setCliente = new Ext.form.FormPanel({
								id : 'form-cont',
								bodyStyle :'padding: 10px',
								border : false,
								items : [{
									xtype : 'fieldset',
									collapsible : false,
									title : '[ Datos del Cliente ]',
									width : 350,
									defaults   : {
										anchor : '100%',
										//width : 200,
										allowBlank:false
									},
									items : [camposCliente]
								}]
							});
							
							new Ext.Window({
								id : 'win-addCont',
								title : 'Agregar Cliente',
								layout : 'fit',
								bodyStyle :'padding:10px 5px 5px 5px;',
								width : 400,
								height : 350,
								resizable : false,
								modal : true,
								//autoDestroy : true,
								closable : true,
								closeAction : 'close',
								plain : true,
								buttonAlign :'center',
								items:[setCliente],
								buttons: [{
									text:'Aceptar',
									align:'center',
									handler: function (){
										save_clien();
										//Ext.getCmp('add-cvs').enable();
										//Ext.getCmp('add-txt').enable();
									}
								},{
									text:'Cerrar',
									align:'center',
									handler: function (){
										Ext.getCmp('win-addCont').close();
									}
								}]
							}).show();
						}
									}, '->', {
										text: 'Borrar Item',
										iconCls: 'icon-delete',
										handler: function (){
											var index = gridFab.getSelectionModel().getSelectedCell();
											if (!index) {
												return false;
											}
											var rec = storeGridFab.getAt(index[0]);
											storeGridFab.remove(rec);
										}
									}
								]
							});			
							
							var tplFacSub = new Ext.XTemplate(
								'<div id="sub-detalles">',/*text-align:right;*/
									'<p style=" padding:0   5px 0; "><b>Total Bs.: </b>{subTotal}</p>',
									'<p style=" padding:5px 5px 0;"></p>',
								'</div>'
							);
							
							//(north, south, east, west or center)
							formFab = new Ext.FormPanel({
								layout: 'border',
								border: false,
								items       : [	{
													xtype : 'panel',
													region : 'west',
													autoWidth: true,
													items : [busCliente, busArticulo]
												},{
													xtype : 'panel',
													region : 'center',
													items : [{
																id: 'grid_panel',      
																region: 'north',
																height: 480, 
																border: false,
																items: [gridFab]
															},{
																id: 'facuta-sub',     
																bodyStyle:'padding: 10px', 
																region: 'center',
																border: false,
																html: '<div id="sub-total" style="font-size:14px; text-align:right;"></div>'
															}]
												}
												]
							});
							
							new Ext.Window({
								id : 'win-relaFab',
								title : '1.- Modulo de Facturaci&oacute;n ('+idUsuario+')' ,
								layout : 'fit',
								bodyStyle :'padding:10px 5px 5px 5px;',
								width       : 900,
								height      : 600,
								resizable : false,
								modal : true,
								//autoDestroy : true,
								closable : true,
								closeAction : 'close',
								plain : true,
								items:[formFab],			
								//fbar: [backBtn,nextBtn,finishBtn]
								buttons: [
									'->',{
									text:'Totalizar',
									handler: function () {
										winTotalizar(roundNumber(storeGridFab.sum('subtotal'),3));
									}
								}]
							}).show();
							
							function winTotalizar(montoTotal){
								
								var camposTotalizar=[
									{
										id:"tf-total",
										xtype:'numberfield',
										fieldLabel:'Monto Total',
										name:'num-total', 
										decimalPrecision: 3,
										selectOnFocus: true,
										value: montoTotal,
										enableKeyEvents: true,
										disabled: true,
										allowBlank: false
									},{
										id:"ft-pago",
										xtype:'numberfield',
										fieldLabel:'Total a Pagar',
										name:'num-pago', // a partir de una
										decimalPrecision: 3,
										selectOnFocus: true,
										maxValue: montoTotal,
										value: montoTotal,
										minValue: 0,
										enableKeyEvents: true,
										allowBlank: false
									},{
										id:"ft-remanente",
										xtype:'numberfield',
										fieldLabel:'Remanente',
										name:'num-remanente', // a partir de una
										decimalPrecision: 3,
										selectOnFocus: true,
										value: 0,
										enableKeyEvents: true,
										disabled: true,
										allowBlank: false
									},{
										id:"tf-fpago",
										xtype:'combo',
										fieldLabel:'Forma de pago',  
										name:'cmb-fpago',  
										forceSelection:true,
										store: ['Efectivo','Cheque','Tarjeta'],
										emptyText:'Seleccione Forma de Pago...',  
										triggerAction:'all',   
										editable:false
									}
								];
								
								var setFacturacion = new Ext.form.FormPanel({
									id : 'form-totalizar',
									bodyStyle :'padding: 10px',
									border : false,
									items : [{
										xtype : 'fieldset',
										collapsible : false,
										title : '[ Detalles de Factura ]',
										width : 300,
										defaults   : {
											anchor : '100%',
											//width : 200,
											allowBlank:false
										},
										items : [camposTotalizar]
									}]
								});
								
								Ext.getCmp('ft-pago').on("change",function(Field,newValue,oldValue){
									Ext.getCmp('ft-remanente').setValue(montoTotal - newValue);
								});
							
								new Ext.Window({
									id : 'win-Totalizar',
									title : 'Totalizar Facturaci&oacute;n' ,
									layout : 'fit',
									bodyStyle :'padding:10px 5px 5px 5px;',
									width       : 350,
									height      : 260,
									resizable : false,
									modal : true,
									//autoDestroy : true,
									closable : true,
									closeAction : 'close',
									plain : true,
									buttonAlign : 'center',
									items:[setFacturacion],			
									buttons: [{
										text:'Procesar',
										handler: function () {}
									}]
								}).show();	
								
							  	return 0;
							};
							
							storeGridFab.load();
						}
					},'-',{
						text: 'Devoluci&oacute;n', 
						iconCls: 'icon-add-relaciones_fab', 
                		scale: 'medium',
						handler: function(){
							
						/******** variables locales ********/
							var idCont = null;
							var nomCont = null;
							index = new Number();
						/***********************************/
							
							var storeListCli = new Ext.data.JsonStore({
								url : 'php/devolucion/getListcli.php'
							});
							
							var resultTplCli = new Ext.XTemplate(
								'<tpl for="."><div class="search-item">',
									/*'<h3><span>{placa}<br />by {fecha}</span></h3>',*/
									'<h4 style="padding:5px;">{cedu} - {name}</h4>',
								'</div></tpl>'
							);

							var searchCli = new Ext.form.ComboBox({
								id:'searchCli',
								store : storeListCli,
								//displayField : 'title',
								typeAhead : false,
								loadingText : 'Buscando...',
								minChars : 2,
								emptyText : 'Por Nombre (min 2 caracteres)... ',
								listWidth : 240,
								hideLabel : true,
								pageSize : 10,
								hideTrigger : true,
								allowBlank: false,
								tpl : resultTplCli,
								itemSelector : 'div.search-item',
								onSelect: function(record){ // override default onSelect to do redirect
								
									idCli = record.data.id;
									nomCli = record.data.name;
									
									var maskView = new Ext.LoadMask(Ext.getCmp('getCliente').getEl());	///////
									
									Ext.getCmp('searchCli').collapse();
									
									var storeGetCli = new Ext.data.JsonStore({
										url : 'php/devolucion/getCli.php'
									});
									
									storeGetCli.on("load",function(Store,records,options,groups){
										var tplRelCont = new Ext.XTemplate(
											'<div id="reg-detalles">',
												'<p style=" padding:0   5px 0;"><b>Nombre: </b>{name}</p>',
												'<p style=" padding:5px 5px 0;"><b>R.I.F/C.I: </b>{rif}</p>',
												'<p style=" padding:5px 5px 0;"><b>Direcci&oacuten: </b>{direccion}</p>',
												'<p style=" padding:5px 5px 0;"></p>',
											'</div>'
										);			
										tplRelCont.overwrite(Ext.get('cliente-datos'), storeGetCli.data.items[0].data);
										console.debug(storeGetCli.data.items[0].data);
									});
									
									maskView.show();		
									storeGetCli.load({
										params:{id:record.data.id},
										callback: function(){
											maskView.hide();
											Ext.getCmp('getArticulo').enable( );
										}
									});
								}
							});
							
							var busCliente = new Ext.form.FormPanel({
								id : 'getCliente',
								bodyStyle :'padding: 10px',
								border : false,
							    region : 'center',
								width : 275,
								items : [{
									html: "<h1>Datos del Cliente</h1> <br> <p>A continuaci&oacuten por favor ingrese  rif/nombre del cliente. ", border: false
								},{
									xtype : 'fieldset',
									collapsible : false,
									title : '[ Buscar Cliente ]',
									width : 250,
									margins:'25 0 25 0',
									defaults   : {
										anchor : '100%'
									},
									items : [searchCli]
								},{
									xtype: 'fieldset',
									title: 'Datos del Cliente',
									height: 150,
									html: '<div id="cliente-datos" style="font-size:14px;"></div>'
								}]
							});
						
							var storeListArt = new Ext.data.JsonStore({
								url : 'php/articulo/getListart.php'
							});
							
							var resultTplArt = new Ext.XTemplate(
								'<tpl for="."><div class="search-item">',
									/*'<h3><span>{placa}<br />by {fecha}</span></h3>',*/
									'<h4 style="padding:5px;">{codigo} - {name}</h4>',
								'</div></tpl>'
							);
							
							var searchArt = new Ext.form.ComboBox({
								id:'searchArt',
								store : storeListArt,
								//displayField : 'title',
								typeAhead : false,
								loadingText : 'Buscando...',
								minChars : 2,
								emptyText : 'Por Nombre (min 2 caracteres)... ',
								listWidth : 240,
								hideLabel : true,
								pageSize : 10,
								hideTrigger : true,
								allowBlank: false,
								tpl : resultTplArt,
								itemSelector : 'div.search-item',
								onSelect: function(record){ // override default onSelect to do redirect
								
									idCont = record.data.id;
									nomCont = record.data.name;
									var maskView = new Ext.LoadMask(Ext.getCmp('getArticulo').getEl());	
									
									Ext.getCmp('searchArt').collapse();
									
									maskView.show();
									
									Ext.Ajax.request({
										url : 'php/articulo/getart.php' , 
										params : {id:record.data.id},
										method: 'POST',
										success: function ( result, request ) { 
										
											var recordStore = new Ext.data.Record({
												codigo: result.responseText.split(';')[1].trim(),
												descripcion: result.responseText.split(';')[2].trim(),
												cantidad: 1,
												precio: result.responseText.split(';')[5].trim(),
												subtotal: result.responseText.split(';')[5].trim()
											});
											// add to the store
											storeGridFab.add(recordStore);
											
											maskView.hide();
											//console.log();
										},
										failure: function ( result, request) { 
											Ext.MessageBox.alert('Failed', result.responseText); 
											maskView.hide();
										} 
									});	
								}
							});
							
							var busArticulo = new Ext.form.FormPanel({
								id : 'getArticulo',
								bodyStyle :'padding: 10px',
								border : false,
							    region : 'south',
								disabled : true,
								height: 235,
								width : 275,
								items : [{
									html: "<h1>Datos del Art&iacute;culo</h1> <br> <p>A continuaci&oacuten por favor ingrese los datos del Art&iacute;culo. ", border: false
								},{
									xtype : 'fieldset',
									collapsible : false,
									title : '[ Buscar Art&iacute;culo ]',
									width : 250,
									margins:'25 0 25 0',
									defaults   : {
										anchor : '100%'
									},
									items : [searchArt]
								}/*,{
									xtype: 'fieldset',
									title: 'Datos del Art&iacute;culo',
									height: 150,
									html: '<div id="cont-datos" style="font-size:14px;"></div>'
								}*/]
							});
							
							var storeGridFab = new Ext.data.JsonStore({
								url: 'php/devolucion/getArtdev.php',								
								root: 'data',
								fields: [ new Ext.grid.RowNumberer(),
										 {name:'codigo'},
										 {name:'descripcion'},
										 {name:'cantidad',type:'int'},
										 {name:'precio',type:'float'},
										 {name:'subtotal',type:'float'}]
							});	
							
							function changeTotal(){	 
								sumMonto = 0;
								storeGridFab.each( function(record) { sumMonto = sumMonto + record.data.subtotal; } );
								totalFac = sumMonto;
								tpldevSub.overwrite(Ext.get('sub-total'), { subTotal: formatNumber(roundNumber(totalFac,3),'') });
								Ext.getCmp('devolucion-sub').doLayout();
							  	return 0;
							};
							
							storeGridFab.on("load",function(Store,records,options,groups){
								console.debug('Load');
								changeTotal();
							});

							storeGridFab.on("add",function(Store,records,options,groups){
								console.debug('Agregar');
								changeTotal();
							});

							storeGridFab.on("remove",function(Store,records,options,groups){
								console.debug('Quitar');
								changeTotal();
							});						
							
							function changeSub(val, x, Store){	 
								Store.data.subtotal = roundNumber(val * Store.data.precio, 3); 
								changeTotal();
							  	return val;
							};
							
							var numberField = new Ext.form.NumberField({
								decimalPrecision: 0,
								selectOnFocus: true,
								minValue: 0,
								allowBlank: false
							});
							
							var gridFab = new Ext.grid.EditorGridPanel({ 
								id: 'gridFab', 
								store: storeGridFab,
								autoHeight:true,
								/*bodyStyle :'padding: 10 10 10 10', */
								columns: [
									new Ext.grid.RowNumberer(),
									{header:'C&oacute;digo', dataIndex:'codigo',sortable: false, width:70, align: 'left', menuDisabled: true},
									{header:'Descripci&oacute;n', dataIndex:'descripcion',sortable: false, width:200, align: 'left', menuDisabled: true},
									{header:'Cantidad', dataIndex:'cantidad',sortable: false, width:70, align: 'right', editor: numberField, menuDisabled: true, renderer: changeSub},
									{header:'Precio', dataIndex:'precio',sortable: false, width:90, align: 'right', menuDisabled: true/*, editor: numberField*/},
									{header:'Sub total', dataIndex:'subtotal',sortable: false, width:85, align: 'right', menuDisabled: true/*, editor: numberField*/}
								],   
								viewConfig: {
									forceFit : true//, autoFill : true
								},
								stripeRows: true,
								border : false,
								tbar: [{
										text: 'Cliente',
										iconCls: 'icon-user-add',
										handler: {}
									}, '->', {
										text: 'Borrar Item',
										iconCls: 'icon-delete',
										handler: function (){
											var index = gridFab.getSelectionModel().getSelectedCell();
											if (!index) {
												return false;
											}
											var rec = storeGridFab.getAt(index[0]);
											storeGridFab.remove(rec);
										}
									}
								]
							});			
							
							var tpldevSub = new Ext.XTemplate(
								'<div id="sub-detalles">',/*text-align:right;*/
									'<p style=" padding:0   5px 0; "><b>Total Bs.: </b>{subTotal}</p>',
									'<p style=" padding:5px 5px 0;"></p>',
								'</div>'
							);
							
							//(north, south, east, west or center)
							formFab = new Ext.FormPanel({
								layout: 'border',
								border: false,
								items       : [	{
													xtype : 'panel',
													region : 'west',
													autoWidth: true,
													items : [busCliente, busArticulo]
												},{
													xtype : 'panel',
													region : 'center',
													items : [{
																id: 'grid_panel',      
																region: 'north',
																height: 480, 
																border: false,
																items: [gridFab]
															},{
																id: 'devolucion-sub',     
																bodyStyle:'padding: 10px', 
																region: 'center',
																border: false,
																html: '<div id="sub-total" style="font-size:14px; text-align:right;"></div>'
															}]
												}
												]
							});
							
							new Ext.Window({
								id : 'win-relaFab',
								title : '1.- M&oacutedulo de devoluci&oacute;n ('+idUsuario+')' ,
								layout : 'fit',
								bodyStyle :'padding:10px 5px 5px 5px;',
								width       : 900,
								height      : 600,
								resizable : false,
								modal : true,
								//autoDestroy : true,
								closable : true,
								closeAction : 'close',
								plain : true,
								items:[formFab],			
								//fbar: [backBtn,nextBtn,finishBtn]
								buttons: [
									'->',{
									text:'Totalizar',
									handler: function () {
										winTotalizar(roundNumber(storeGridFab.sum('subtotal'),3));
									}
								}]
							}).show();
							
							function winTotalizar(montoTotal){
								
								var camposTotalizar=[
									{
										id:"tf-total",
										xtype:'numberfield',
										fieldLabel:'Monto Total',
										name:'num-total', 
										decimalPrecision: 3,
										selectOnFocus: true,
										value: montoTotal,
										enableKeyEvents: true,
										disabled: true,
										allowBlank: false
									},{
										id:"ft-pago",
										xtype:'numberfield',
										fieldLabel:'Total a Pagar',
										name:'num-pago', // a partir de una
										decimalPrecision: 3,
										selectOnFocus: true,
										maxValue: montoTotal,
										value: montoTotal,
										minValue: 0,
										enableKeyEvents: true,
										allowBlank: false
									},{
										id:"ft-remanente",
										xtype:'numberfield',
										fieldLabel:'Remanente',
										name:'num-remanente', // a partir de una
										decimalPrecision: 3,
										selectOnFocus: true,
										value: 0,
										enableKeyEvents: true,
										disabled: true,
										allowBlank: false
									},{
										id:"tf-fpago",
										xtype:'combo',
										fieldLabel:'Forma de pago',  
										name:'cmb-fpago',  
										forceSelection:true,
										store: ['Efectivo','Cheque','Tarjeta'],
										emptyText:'Seleccione Forma de Pago...',  
										triggerAction:'all',   
										editable:false
									}
								];
								
								var setDevolucion = new Ext.form.FormPanel({
									id : 'form-totalizar',
									bodyStyle :'padding: 10px',
									border : false,
									items : [{
										xtype : 'fieldset',
										collapsible : false,
										title : '[ Detalles de Devoluci&oacute;n ]',
										width : 300,
										defaults   : {
											anchor : '100%',
											//width : 200,
											allowBlank:false
										},
										items : [camposTotalizar]
									}]
								});
								
								Ext.getCmp('ft-pago').on("change",function(Field,newValue,oldValue){
									Ext.getCmp('ft-remanente').setValue(montoTotal - newValue);
								});
							
								new Ext.Window({
									id : 'win-Totalizar',
									title : 'Totalizar Devoluci&oacute;n' ,
									layout : 'fit',
									bodyStyle :'padding:10px 5px 5px 5px;',
									width       : 350,
									height      : 260,
									resizable : false,
									modal : true,
									//autoDestroy : true,
									closable : true,
									closeAction : 'close',
									plain : true,
									buttonAlign : 'center',
									items:[setDevolucion],			
									buttons: [{
										text:'Procesar',
										handler: function () {}
									}]
								}).show();	
								
							  	return 0;
							};
							
							storeGridFab.load();
						}
					},'->',{
						text: 'Reporte - Factura/cliente', 
						iconCls: 'icon-report',
                		scale: 'medium', 
						handler: function(){
							
							var storeContra = new Ext.data.JsonStore({
								url : 'php/Cliente/getlistcli.php'
							});
							
							var resultTpl = new Ext.XTemplate(
								'<tpl for="."><div class="search-item" style="width:400;">',
									/*'<h3><span>{placa}<br />by {fecha}</span></h3>',*/
									'<h4 style="padding:5px;">{name} - {cedu}</h4>',
								'</div></tpl>'
							);
						
							var search = new Ext.form.ComboBox({
								id:'searchField',
								store : storeContra,
								//displayField : 'title',
								typeAhead : false,
								loadingText : 'Buscando...',
								minChars : 3,
								emptyText : 'Por Nombre (min 3 caracteres)... ',
								listWidth : 240,
								hideLabel : true,
								pageSize : 10,
								hideTrigger : true,
								allowBlank: false,
								tpl : resultTpl,
								itemSelector : 'div.search-item',
								onSelect: function(record){ // override default onSelect to do redirect	
									var url = Ext.urlEncode({
										idCont:record.data.id,
										nomCont:record.data.name+' '+record.data.apel
									});
									openwin('php/relaciones/reportRelacion.php?'+url);
									Ext.getCmp('searchField').collapse();
									Ext.getCmp('win-reportRela').close();
								}
							});
							
							var busCliente = new Ext.form.FormPanel({
								id : 'getConRel',
								bodyStyle :'padding: 10px',
								border : true,
								width : 275,
								items : [{
									html: "<h1>Datos del Cliente</h1> <br> <p>A continuaci&oacuten por favor seleccione los datos del Cliente.<br><br> ", 
									border: false
								},{
									xtype : 'fieldset',
									collapsible : false,
									title : '[ Buscar Cliente ]',
									width : 250,
									margins:'25 0 25 0',
									defaults   : {
										anchor : '100%'
									},
									items : [search]
								}]
							});	
							
							new Ext.Window({
								id : 'win-reportRela',
								title : 'Reporte de Relaciones por Cliente',
								layout : 'fit',
								bodyStyle :'padding:10px 5px 5px 5px;',
								width : 350,
								height : 250,
								resizable : false,
								modal : true,
								//autoDestroy : true,
								closable : true,
								closeAction : 'close',
								plain : true,
								items:[busCliente]
							}).show();
						}
					}],
					html: '<div id="relacion-div"> <div id="fondoestirado"> <img src="images/background.jpg" alt="" /> </div>  </div> '					
				};
				
	/////////////////////////////
var moduleCompras = {
					title:'Gesti&oacute;n de Compras',					
					cls:'inner-tab-custom', // custom styles in layout-browser.css
					//layout   : 'border',
					hideMode:Ext.isIE ? 'offsets' : 'display',
					tbar: [{
						text: 'Compra', 
						iconCls: 'icon-add-relaciones_fab', 
                		scale: 'medium',
						handler: function(){
							
						/******** variables locales ********/
							var idCont = null;
							var nomCont = null;
							index = new Number();
						/***********************************/
							
							var storeListPro = new Ext.data.JsonStore({
								url : 'php/compras/getListpro.php'
							});
							
							var resultTplPro = new Ext.XTemplate(
								'<tpl for="."><div class="search-item">',
									/*'<h3><span>{placa}<br />by {fecha}</span></h3>',*/
									'<h4 style="padding:5px;">{cedu} - {name}</h4>',
								'</div></tpl>'
							);

							var searchPro = new Ext.form.ComboBox({
								id:'searchPro',
								store : storeListPro,
								//displayField : 'title',
								typeAhead : false,
								loadingText : 'Buscando...',
								minChars : 2,
								emptyText : 'Por Nombre (min 2 caracteres)... ',
								listWidth : 240,
								hideLabel : true,
								pageSize : 10,
								hideTrigger : true,
								allowBlank: false,
								tpl : resultTplPro,
								itemSelector : 'div.search-item',
								onSelect: function(record){ // override default onSelect to do redirect
								
									idCli = record.data.id;
									nomCli = record.data.name;
									
									var maskView = new Ext.LoadMask(Ext.getCmp('getProveedor').getEl());	///////
									
									Ext.getCmp('searchPro').collapse();
									
									var storeGetCli = new Ext.data.JsonStore({
										url : 'php/compras/getpro.php'
									});
									
									storeGetCli.on("load",function(Store,records,options,groups){
										var tplRelCont = new Ext.XTemplate(
											'<div id="reg-detalles">',
												'<p style=" padding:0   5px 0;"><b>Nombre: </b>{name}</p>',
												'<p style=" padding:5px 5px 0;"><b>R.I.F/C.I: </b>{rif}</p>',
												'<p style=" padding:5px 5px 0;"><b>Direcci&oacuten: </b>{direccion}</p>',
												'<p style=" padding:5px 5px 0;"></p>',
											'</div>'
										);			
										tplRelCont.overwrite(Ext.get('cliente-datos'), storeGetCli.data.items[0].data);
										console.debug(storeGetCli.data.items[0].data);
									});
									
									maskView.show();		
									storeGetCli.load({
										params:{id:record.data.id},
										callback: function(){
											maskView.hide();
											Ext.getCmp('getArticulo').enable( );
										}
									});
								}
							});
							
							var busProveedor = new Ext.form.FormPanel({
								id : 'getProveedor',
								bodyStyle :'padding: 10px',
								border : false,
							    region : 'center',
								width : 275,
								items : [{
									html: "<h1>Datos del Proveedor</h1> <br> <p>A continuaci&oacuten por favor ingrese rif/nombre del Proveedor. ", border: false
								},{
									xtype : 'fieldset',
									collapsible : false,
									title : '[ Buscar Proveedor ]',
									width : 250,
									margins:'25 0 25 0',
									defaults   : {
										anchor : '100%'
									},
									items : [searchPro]
								},{
									xtype: 'fieldset',
									title: 'Datos del Proveedor',
									height: 150,
									html: '<div id="cliente-datos" style="font-size:14px;"></div>'
								}]
							});
						
							var storeListArt = new Ext.data.JsonStore({
								url : 'php/articulo/getListart.php'
							});
							
							var resultTplArt = new Ext.XTemplate(
								'<tpl for="."><div class="search-item">',
									/*'<h3><span>{placa}<br />by {fecha}</span></h3>',*/
									'<h4 style="padding:5px;">{codigo} - {name}</h4>',
								'</div></tpl>'
							);
							
							var searchArt = new Ext.form.ComboBox({
								id:'searchArt',
								store : storeListArt,
								//displayField : 'title',
								typeAhead : false,
								loadingText : 'Buscando...',
								minChars : 2,
								emptyText : 'Por Nombre (min 2 caracteres)... ',
								listWidth : 240,
								hideLabel : true,
								pageSize : 10,
								hideTrigger : true,
								allowBlank: false,
								tpl : resultTplArt,
								itemSelector : 'div.search-item',
								onSelect: function(record){ // override default onSelect to do redirect
								
									idCont = record.data.id;
									nomCont = record.data.name;
									var maskView = new Ext.LoadMask(Ext.getCmp('getArticulo').getEl());	
									
									Ext.getCmp('searchArt').collapse();
									
									maskView.show();
									
									Ext.Ajax.request({
										url : 'php/articulo/getart.php' , 
										params : {id:record.data.id},
										method: 'POST',
										success: function ( result, request ) { 
										
											var recordStore = new Ext.data.Record({
												codigo: result.responseText.split(';')[1].trim(),
												descripcion: result.responseText.split(';')[2].trim(),
												cantidad: 1,
												precio: result.responseText.split(';')[5].trim(),
												subtotal: result.responseText.split(';')[5].trim()
											});
											// add to the store
											storeGridFab.add(recordStore);
											
											maskView.hide();
											//console.log();
										},
										failure: function ( result, request) { 
											Ext.MessageBox.alert('Failed', result.responseText); 
											maskView.hide();
										} 
									});	
								}
							});
							
							var busArticulo = new Ext.form.FormPanel({
								id : 'getArticulo',
								bodyStyle :'padding: 10px',
								border : false,
							    region : 'south',
								disabled : true,
								height: 235,
								width : 275,
								items : [{
									html: "<h1>Datos del Art&iacute;culo</h1> <br> <p>A continuaci&oacuten por favor ingrese los datos Para la facturaci&oacute;n. ", border: false
								},{
									xtype : 'fieldset',
									collapsible : false,
									title : '[ Buscar Art&iacute;culo ]',
									width : 250,
									margins:'25 0 25 0',
									defaults   : {
										anchor : '100%'
									},
									items : [searchArt]
								}/*,{
									xtype: 'fieldset',
									title: 'Datos del Art&iacute;culo',
									height: 150,
									html: '<div id="cont-datos" style="font-size:14px;"></div>'
								}*/]
							});
							
							var storeGridFab = new Ext.data.JsonStore({
								url: 'php/compras/getArtCom.php',								
								root: 'data',
								fields: [ new Ext.grid.RowNumberer(),
										 {name:'codigo'},
										 {name:'descripcion'},
										 {name:'cantidad',type:'int'},
										 {name:'precio',type:'float'},
										 {name:'subtotal',type:'float'}]
							});	
							
							function changeTotal(){	 
								sumMonto = 0;
								storeGridFab.each( function(record) { sumMonto = sumMonto + record.data.subtotal; } );
								totalFac = sumMonto;
								tplComSub.overwrite(Ext.get('sub-total'), { subTotal: formatNumber(roundNumber(totalFac,3),'') });
								Ext.getCmp('compra-sub').doLayout();
							  	return 0;
							};
							
							storeGridFab.on("load",function(Store,records,options,groups){
								console.debug('Load');
								changeTotal();
							});

							storeGridFab.on("add",function(Store,records,options,groups){
								console.debug('Agregar');
								changeTotal();
							});

							storeGridFab.on("remove",function(Store,records,options,groups){
								console.debug('Quitar');
								changeTotal();
							});						
							
							function changeSub(val, x, Store){	 
								Store.data.subtotal = roundNumber(val * Store.data.precio, 3); 
								changeTotal();
							  	return val;
							};
							
							var numberField = new Ext.form.NumberField({
								decimalPrecision: 0,
								selectOnFocus: true,
								minValue: 0,
								allowBlank: false
							});
							
							var gridFab = new Ext.grid.EditorGridPanel({ 
								id: 'gridFab', 
								store: storeGridFab,
								autoHeight:true,
								/*bodyStyle :'padding: 10 10 10 10', */
								columns: [
									new Ext.grid.RowNumberer(),
									{header:'C&oacute;digo', dataIndex:'codigo',sortable: false, width:70, align: 'left', menuDisabled: true},
									{header:'Descripci&oacute;n', dataIndex:'descripcion',sortable: false, width:200, align: 'left', menuDisabled: true},
									{header:'Cantidad', dataIndex:'cantidad',sortable: false, width:70, align: 'right', editor: numberField, menuDisabled: true, renderer: changeSub},
									{header:'Precio', dataIndex:'precio',sortable: false, width:90, align: 'right', menuDisabled: true/*, editor: numberField*/},
									{header:'Sub total', dataIndex:'subtotal',sortable: false, width:85, align: 'right', menuDisabled: true/*, editor: numberField*/}
								],   
								viewConfig: {
									forceFit : true//, autoFill : true
								},
								stripeRows: true,
								border : false,
								tbar: [{
										text: 'Proveedor',
										iconCls: 'icon-user-add',
										handler: function(){							
							
							var setProveedor = new Ext.form.FormPanel({
								id :'form-prov',
								bodyStyle :'padding: 10px',
								border : false,
								items : [{
									xtype : 'fieldset',
									collapsible : false,
									title : '[ Datos del Proveedor ]',
									width : 350,
									defaults   : {
										anchor : '100%',
										//width : 200,
										allowBlank:false
									},
									items : [camposProveedor]
								}]
							});
							
							new Ext.Window({
								id : 'win-addProv',
								title : 'Agregar Proveedor',
								layout : 'fit',
								bodyStyle :'padding:10px 5px 5px 5px;',
								width : 400,
								height : 350,
								resizable : false,
								modal : true,
								//autoDestroy : true,
								closable : true,
								closeAction : 'close',
								plain : true,
								buttonAlign :'center',
								items:[setProveedor],
								buttons: [{
									text:'Aceptar',
									align:'center',
									handler: function (){
										save_prov();
										//Ext.getCmp('add-cvs').enable();
										//Ext.getCmp('add-txt').enable();
									}
								},{
									text:'Cerrar',
									align:'center',
									handler: function (){
										Ext.getCmp('win-addProv').close();
									}
								}]
							}).show();
						}
									}, '->', {
										text: 'Borrar Item',
										iconCls: 'icon-delete',
										handler: function (){
											var index = gridFab.getSelectionModel().getSelectedCell();
											if (!index) {
												return false;
											}
											var rec = storeGridFab.getAt(index[0]);
											storeGridFab.remove(rec);
										}
									}
								]
							});			
							
							var tplComSub = new Ext.XTemplate(
								'<div id="sub-detalles">',/*text-align:right;*/
									'<p style=" padding:0   5px 0; "><b>Total Bs.: </b>{subTotal}</p>',
									'<p style=" padding:5px 5px 0;"></p>',
								'</div>'
							);
							
							//(north, south, east, west or center)
							formFab = new Ext.FormPanel({
								layout: 'border',
								border: false,
								items       : [	{
													xtype : 'panel',
													region : 'west',
													autoWidth: true,
													items : [busProveedor, busArticulo]
												},{
													xtype : 'panel',
													region : 'center',
													items : [{
																id: 'grid_panel',      
																region: 'north',
																height: 480, 
																border: false,
																items: [gridFab]
															},{
																id: 'compra-sub',     
																bodyStyle:'padding: 10px', 
																region: 'center',
																border: false,
																html: '<div id="sub-total" style="font-size:14px; text-align:right;"></div>'
															}]
												}
												]
							});
							
							new Ext.Window({
								id : 'win-relaFab',
								title : 'M&oacute;dulo de Compras ('+idUsuario+')' ,
								layout : 'fit',
								bodyStyle :'padding:10px 5px 5px 5px;',
								width       : 900,
								height      : 600,
								resizable : false,
								modal : true,
								//autoDestroy : true,
								closable : true,
								closeAction : 'close',
								plain : true,
								items:[formFab],			
								//fbar: [backBtn,nextBtn,finishBtn]
								buttons: [
									'->',{
									text:'Totalizar',
									handler: function () {
										winTotalizar(roundNumber(storeGridFab.sum('subtotal'),3));
									}
								}]
							}).show();
							
							function winTotalizar(montoTotal){
								
								var camposTotalizar=[
									{
										id:"tf-total",
										xtype:'numberfield',
										fieldLabel:'Monto Total',
										name:'num-total', 
										decimalPrecision: 3,
										selectOnFocus: true,
										value: montoTotal,
										enableKeyEvents: true,
										disabled: true,
										allowBlank: false
									},{
										id:"ft-pago",
										xtype:'numberfield',
										fieldLabel:'Total a Pagar',
										name:'num-pago', // a partir de una
										decimalPrecision: 3,
										selectOnFocus: true,
										maxValue: montoTotal,
										value: montoTotal,
										minValue: 0,
										enableKeyEvents: true,
										allowBlank: false
									},{
										id:"ft-remanente",
										xtype:'numberfield',
										fieldLabel:'Remanente',
										name:'num-remanente', // a partir de una
										decimalPrecision: 3,
										selectOnFocus: true,
										value: 0,
										enableKeyEvents: true,
										disabled: true,
										allowBlank: false
									},{
										id:"tf-fpago",
										xtype:'combo',
										fieldLabel:'Forma de pago',  
										name:'cmb-fpago',  
										forceSelection:true,
										store: ['Efectivo','Cheque','Tarjeta'],
										emptyText:'Seleccione Forma de Pago...',  
										triggerAction:'all',   
										editable:false
									}
								];
								
								var setCompra = new Ext.form.FormPanel({
									id : 'form-totalizar',
									bodyStyle :'padding: 10px',
									border : false,
									items : [{
										xtype : 'fieldset',
										collapsible : false,
										title : '[ Detalles de Compra ]',
										width : 300,
										defaults   : {
											anchor : '100%',
											//width : 200,
											allowBlank:false
										},
										items : [camposTotalizar]
									}]
								});
								
								Ext.getCmp('ft-pago').on("change",function(Field,newValue,oldValue){
									Ext.getCmp('ft-remanente').setValue(montoTotal - newValue);
								});
							
								new Ext.Window({
									id : 'win-Totalizar',
									title : 'Totalizar Compra' ,
									layout : 'fit',
									bodyStyle :'padding:10px 5px 5px 5px;',
									width       : 350,
									height      : 260,
									resizable : false,
									modal : true,
									//autoDestroy : true,
									closable : true,
									closeAction : 'close',
									plain : true,
									buttonAlign : 'center',
									items:[setCompra],			
									buttons: [{
										text:'Procesar',
										handler: function () {}
									}]
								}).show();	
								
							  	return 0;
							};
							
							storeGridFab.load();
						}
					},'-',{
						text: 'Devoluci&oacute;n', 
						iconCls: 'icon-add-relaciones_fab', 
                		scale: 'medium',
						handler: function(){
							
						/******** variables locales ********/
							var idCont = null;
							var nomCont = null;
							index = new Number();
						/***********************************/
							
							var storeListPro = new Ext.data.JsonStore({
								url : 'php/devcompra/getListpro.php'
							});
							
							var resultTplPro = new Ext.XTemplate(
								'<tpl for="."><div class="search-item">',
									/*'<h3><span>{placa}<br />by {fecha}</span></h3>',*/
									'<h4 style="padding:5px;">{cedu} - {name}</h4>',
								'</div></tpl>'
							);

							var searchPro = new Ext.form.ComboBox({
								id:'searchPro',
								store : storeListPro,
								//displayField : 'title',
								typeAhead : false,
								loadingText : 'Buscando...',
								minChars : 2,
								emptyText : 'Por Nombre (min 2 caracteres)... ',
								listWidth : 240,
								hideLabel : true,
								pageSize : 10,
								hideTrigger : true,
								allowBlank: false,
								tpl : resultTplPro,
								itemSelector : 'div.search-item',
								onSelect: function(record){ // override default onSelect to do redirect
								
									idCli = record.data.id;
									nomCli = record.data.name;
									
									var maskView = new Ext.LoadMask(Ext.getCmp('getProveedor').getEl());	///////
									
									Ext.getCmp('searchPro').collapse();
									
									var storeGetCli = new Ext.data.JsonStore({
										url : 'php/devcompra/getpro.php'
									});
									
									storeGetCli.on("load",function(Store,records,options,groups){
										var tplRelCont = new Ext.XTemplate(
											'<div id="reg-detalles">',
												'<p style=" padding:0   5px 0;"><b>Nombre: </b>{name}</p>',
												'<p style=" padding:5px 5px 0;"><b>R.I.F/C.I: </b>{rif}</p>',
												'<p style=" padding:5px 5px 0;"><b>Direcci&oacuten: </b>{direccion}</p>',
												'<p style=" padding:5px 5px 0;"></p>',
											'</div>'
										);			
										tplRelCont.overwrite(Ext.get('cliente-datos'), storeGetCli.data.items[0].data);
										console.debug(storeGetCli.data.items[0].data);
									});
									
									maskView.show();		
									storeGetCli.load({
										params:{id:record.data.id},
										callback: function(){
											maskView.hide();
											Ext.getCmp('getArticulo').enable( );
										}
									});
								}
							});
							
							var busProveedor = new Ext.form.FormPanel({
								id : 'getProveedor',
								bodyStyle :'padding: 10px',
								border : false,
							    region : 'center',
								width : 275,
								items : [{
									html: "<h1>Datos del Proveedor</h1> <br> <p>A continuaci&oacuten por favor ingrese  rif/nombre del Proveedor. ", border: false
								},{
									xtype : 'fieldset',
									collapsible : false,
									title : '[ Buscar Proveedor ]',
									width : 250,
									margins:'25 0 25 0',
									defaults   : {
										anchor : '100%'
									},
									items : [searchPro]
								},{
									xtype: 'fieldset',
									title: 'Datos del Proveedor',
									height: 150,
									html: '<div id="cliente-datos" style="font-size:14px;"></div>'
								}]
							});
						
							var storeListArt = new Ext.data.JsonStore({
								url : 'php/articulo/getListart.php'
							});
							
							var resultTplArt = new Ext.XTemplate(
								'<tpl for="."><div class="search-item">',
									/*'<h3><span>{placa}<br />by {fecha}</span></h3>',*/
									'<h4 style="padding:5px;">{codigo} - {name}</h4>',
								'</div></tpl>'
							);
							
							var searchArt = new Ext.form.ComboBox({
								id:'searchArt',
								store : storeListArt,
								//displayField : 'title',
								typeAhead : false,
								loadingText : 'Buscando...',
								minChars : 2,
								emptyText : 'Por Nombre (min 2 caracteres)... ',
								listWidth : 240,
								hideLabel : true,
								pageSize : 10,
								hideTrigger : true,
								allowBlank: false,
								tpl : resultTplArt,
								itemSelector : 'div.search-item',
								onSelect: function(record){ // override default onSelect to do redirect
								
									idCont = record.data.id;
									nomCont = record.data.name;
									var maskView = new Ext.LoadMask(Ext.getCmp('getArticulo').getEl());	
									
									Ext.getCmp('searchArt').collapse();
									
									maskView.show();
									
									Ext.Ajax.request({
										url : 'php/articulo/getart.php' , 
										params : {id:record.data.id},
										method: 'POST',
										success: function ( result, request ) { 
										
											var recordStore = new Ext.data.Record({
												codigo: result.responseText.split(';')[1].trim(),
												descripcion: result.responseText.split(';')[2].trim(),
												cantidad: 1,
												precio: result.responseText.split(';')[5].trim(),
												subtotal: result.responseText.split(';')[5].trim()
											});
											// add to the store
											storeGridFab.add(recordStore);
											
											maskView.hide();
											//console.log();
										},
										failure: function ( result, request) { 
											Ext.MessageBox.alert('Failed', result.responseText); 
											maskView.hide();
										} 
									});	
								}
							});
							
							var busArticulo = new Ext.form.FormPanel({
								id : 'getArticulo',
								bodyStyle :'padding: 10px',
								border : false,
							    region : 'south',
								disabled : true,
								height: 235,
								width : 275,
								items : [{
									html: "<h1>Datos del Art&iacute;culo</h1> <br> <p>A continuaci&oacuten por favor ingrese los datos del Art&iacute;culo. ", border: false
								},{
									xtype : 'fieldset',
									collapsible : false,
									title : '[ Buscar Art&iacute;culo ]',
									width : 250,
									margins:'25 0 25 0',
									defaults   : {
										anchor : '100%'
									},
									items : [searchArt]
								}/*,{
									xtype: 'fieldset',
									title: 'Datos del Art&iacute;culo',
									height: 150,
									html: '<div id="cont-datos" style="font-size:14px;"></div>'
								}*/]
							});
							
							var storeGridFab = new Ext.data.JsonStore({
								url: 'php/devcompra/getArtdevCom.php',								
								root: 'data',
								fields: [ new Ext.grid.RowNumberer(),
										 {name:'codigo'},
										 {name:'descripcion'},
										 {name:'cantidad',type:'int'},
										 {name:'precio',type:'float'},
										 {name:'subtotal',type:'float'}]
							});	
							
							function changeTotal(){	 
								sumMonto = 0;
								storeGridFab.each( function(record) { sumMonto = sumMonto + record.data.subtotal; } );
								totalFac = sumMonto;
								tpldevSub.overwrite(Ext.get('sub-total'), { subTotal: formatNumber(roundNumber(totalFac,3),'') });
								Ext.getCmp('devolucion-sub').doLayout();
							  	return 0;
							};
							
							storeGridFab.on("load",function(Store,records,options,groups){
								console.debug('Load');
								changeTotal();
							});

							storeGridFab.on("add",function(Store,records,options,groups){
								console.debug('Agregar');
								changeTotal();
							});

							storeGridFab.on("remove",function(Store,records,options,groups){
								console.debug('Quitar');
								changeTotal();
							});						
							
							function changeSub(val, x, Store){	 
								Store.data.subtotal = roundNumber(val * Store.data.precio, 3); 
								changeTotal();
							  	return val;
							};
							
							var numberField = new Ext.form.NumberField({
								decimalPrecision: 0,
								selectOnFocus: true,
								minValue: 0,
								allowBlank: false
							});
							
							var gridFab = new Ext.grid.EditorGridPanel({ 
								id: 'gridFab', 
								store: storeGridFab,
								autoHeight:true,
								/*bodyStyle :'padding: 10 10 10 10', */
								columns: [
									new Ext.grid.RowNumberer(),
									{header:'C&oacute;digo', dataIndex:'codigo',sortable: false, width:70, align: 'left', menuDisabled: true},
									{header:'Descripci&oacute;n', dataIndex:'descripcion',sortable: false, width:200, align: 'left', menuDisabled: true},
									{header:'Cantidad', dataIndex:'cantidad',sortable: false, width:70, align: 'right', editor: numberField, menuDisabled: true, renderer: changeSub},
									{header:'Precio', dataIndex:'precio',sortable: false, width:90, align: 'right', menuDisabled: true/*, editor: numberField*/},
									{header:'Sub total', dataIndex:'subtotal',sortable: false, width:85, align: 'right', menuDisabled: true/*, editor: numberField*/}
								],   
								viewConfig: {
									forceFit : true//, autoFill : true
								},
								stripeRows: true,
								border : false,
								tbar: [{
										text: 'Proveedor',
										iconCls: 'icon-user-add',
										handler: {}
									}, '->', {
										text: 'Borrar Item',
										iconCls: 'icon-delete',
										handler: function (){
											var index = gridFab.getSelectionModel().getSelectedCell();
											if (!index) {
												return false;
											}
											var rec = storeGridFab.getAt(index[0]);
											storeGridFab.remove(rec);
										}
									}
								]
							});			
							
							var tpldevSub = new Ext.XTemplate(
								'<div id="sub-detalles">',/*text-align:right;*/
									'<p style=" padding:0   5px 0; "><b>Total Bs.: </b>{subTotal}</p>',
									'<p style=" padding:5px 5px 0;"></p>',
								'</div>'
							);
							
							//(north, south, east, west or center)
							formFab = new Ext.FormPanel({
								layout: 'border',
								border: false,
								items       : [	{
													xtype : 'panel',
													region : 'west',
													autoWidth: true,
													items : [busProveedor, busArticulo]
												},{
													xtype : 'panel',
													region : 'center',
													items : [{
																id: 'grid_panel',      
																region: 'north',
																height: 480, 
																border: false,
																items: [gridFab]
															},{
																id: 'devolucion-sub',     
																bodyStyle:'padding: 10px', 
																region: 'center',
																border: false,
																html: '<div id="sub-total" style="font-size:14px; text-align:right;"></div>'
															}]
												}
												]
							});
							
							new Ext.Window({
								id : 'win-relaFab',
								title : 'M&oacutedulo de devoluci&oacute;n ('+idUsuario+')' ,
								layout : 'fit',
								bodyStyle :'padding:10px 5px 5px 5px;',
								width       : 900,
								height      : 600,
								resizable : false,
								modal : true,
								//autoDestroy : true,
								closable : true,
								closeAction : 'close',
								plain : true,
								items:[formFab],			
								//fbar: [backBtn,nextBtn,finishBtn]
								buttons: [
									'->',{
									text:'Totalizar',
									handler: function () {
										winTotalizar(roundNumber(storeGridFab.sum('subtotal'),3));
									}
								}]
							}).show();
							
							function winTotalizar(montoTotal){
								
								var camposTotalizar=[
									{
										id:"tf-total",
										xtype:'numberfield',
										fieldLabel:'Monto Total',
										name:'num-total', 
										decimalPrecision: 3,
										selectOnFocus: true,
										value: montoTotal,
										enableKeyEvents: true,
										disabled: true,
										allowBlank: false
									},{
										id:"ft-pago",
										xtype:'numberfield',
										fieldLabel:'Total a Pagar',
										name:'num-pago', // a partir de una
										decimalPrecision: 3,
										selectOnFocus: true,
										maxValue: montoTotal,
										value: montoTotal,
										minValue: 0,
										enableKeyEvents: true,
										allowBlank: false
									},{
										id:"ft-remanente",
										xtype:'numberfield',
										fieldLabel:'Remanente',
										name:'num-remanente', // a partir de una
										decimalPrecision: 3,
										selectOnFocus: true,
										value: 0,
										enableKeyEvents: true,
										disabled: true,
										allowBlank: false
									},{
										id:"tf-fpago",
										xtype:'combo',
										fieldLabel:'Forma de pago',  
										name:'cmb-fpago',  
										forceSelection:true,
										store: ['Efectivo','Cheque','Tarjeta'],
										emptyText:'Seleccione Forma de Pago...',  
										triggerAction:'all',   
										editable:false
									}
								];
								
								var setDevolucion = new Ext.form.FormPanel({
									id : 'form-totalizar',
									bodyStyle :'padding: 10px',
									border : false,
									items : [{
										xtype : 'fieldset',
										collapsible : false,
										title : '[ Detalles de Devoluci&oacute;n ]',
										width : 300,
										defaults   : {
											anchor : '100%',
											//width : 200,
											allowBlank:false
										},
										items : [camposTotalizar]
									}]
								});
								
								Ext.getCmp('ft-pago').on("change",function(Field,newValue,oldValue){
									Ext.getCmp('ft-remanente').setValue(montoTotal - newValue);
								});
							
								new Ext.Window({
									id : 'win-Totalizar',
									title : 'Totalizar Devoluci&oacute;n' ,
									layout : 'fit',
									bodyStyle :'padding:10px 5px 5px 5px;',
									width       : 350,
									height      : 260,
									resizable : false,
									modal : true,
									//autoDestroy : true,
									closable : true,
									closeAction : 'close',
									plain : true,
									buttonAlign : 'center',
									items:[setDevolucion],			
									buttons: [{
										text:'Procesar',
										handler: function () {}
									}]
								}).show();	
								
							  	return 0;
							};
							
							storeGridFab.load();
						}
					},'->',{
						text: 'Reporte - Compra/Proveedor', 
						iconCls: 'icon-report',
                		scale: 'medium', 
						handler: function(){
							
							var storeContra = new Ext.data.JsonStore({
								url : 'php/Proveedor/getlistpro.php'
							});
							
							var resultTpl = new Ext.XTemplate(
								'<tpl for="."><div class="search-item" style="width:400;">',
									/*'<h3><span>{placa}<br />by {fecha}</span></h3>',*/
									'<h4 style="padding:5px;">{name} - {cedu}</h4>',
								'</div></tpl>'
							);
						
							var search = new Ext.form.ComboBox({
								id:'searchField',
								store : storeContra,
								//displayField : 'title',
								typeAhead : false,
								loadingText : 'Buscando...',
								minChars : 3,
								emptyText : 'Por Nombre (min 3 caracteres)... ',
								listWidth : 240,
								hideLabel : true,
								pageSize : 10,
								hideTrigger : true,
								allowBlank: false,
								tpl : resultTpl,
								itemSelector : 'div.search-item',
								onSelect: function(record){ // override default onSelect to do redirect	
									var url = Ext.urlEncode({
										idCont:record.data.id,
										nomCont:record.data.name+' '+record.data.apel
									});
									openwin('php/relaciones/reportRelacion.php?'+url);
									Ext.getCmp('searchField').collapse();
									Ext.getCmp('win-reportRela').close();
								}
							});
							
							var busProveedor = new Ext.form.FormPanel({
								id : 'getProveedor',
								bodyStyle :'padding: 10px',
								border : true,
								width : 275,
								items : [{
									html: "<h1>Datos del Proveedor</h1> <br> <p>A continuaci&oacuten por favor seleccione los datos del Proveedor.<br><br> ", 
									border: false
								},{
									xtype : 'fieldset',
									collapsible : false,
									title : '[ Buscar Proveedor ]',
									width : 250,
									margins:'25 0 25 0',
									defaults   : {
										anchor : '100%'
									},
									items : [search]
								}]
							});	
							
							new Ext.Window({
								id : 'win-reportRela',
								title : 'Reporte de Compras por Proveedor',
								layout : 'fit',
								bodyStyle :'padding:10px 5px 5px 5px;',
								width : 350,
								height : 250,
								resizable : false,
								modal : true,
								//autoDestroy : true,
								closable : true,
								closeAction : 'close',
								plain : true,
								items:[busProveedor]
							}).show();
						}
					}],
					html: '<div id="relacion-div"> <div id="fondoestirado"> <img src="images/background.jpg" alt="" /> </div>  </div> '					
				};
				
		
	
	function save_cxc(idCont,url){
		if (Ext.getCmp('form-cxc').form.isValid()) {
			//Ext.getCmp('form-cont').setValue();
			Ext.getCmp('form-cxc').form.submit({
				waitTitle : "Validando",			
				url       : 'php/cxc/saveCxc.php',
				params: {idCont:idCont},
				waitMsg   : "Espere un momento por favor......",
				failure   : function(sender,action){
					Ext.Msg.alert('failure',action.result.msg); 
				},
				success: function(sender,action) {
					Ext.Msg.alert('',action.result.msg.split('-')[0].trim());
					Ext.getCmp('win-cxc').close();	
					/*console.debug('php/cxc/reciboDeCobro.php?'+url+'&idCxc='+action.result.msg.split('-')[1].trim());*/
					openwin('php/cxc/reciboDeCobro.php?'+url+'&idCxc='+action.result.msg.split('-')[1].trim());
				}
			});
		}else{
			/*console.debug('Formulario invalido .!.');*/
		}
	};
				
	var moduleCxC = {
					id:'moduleCxC',
					title:'Cuentas por Cobrar ',					
					cls:'inner-tab-custom', // custom styles in layout-browser.css
					//layout   : 'border',
					hideMode:Ext.isIE ? 'offsets' : 'display',
					tbar: [{
						id: 'add-cxc',
						text: 'Agregar', 
						iconCls: 'icon-menu-cobros',
                		scale: 'medium', 
						handler: function(){
							
						/******** variables locales ********/
							var idCont = null;
							var ciCont = null;
							var nomCont = null;
							index = new Number();
						/***********************************/
							
							var storeContra = new Ext.data.JsonStore({
								url : 'php/Cliente/getlistcli.php'
							});
							
							var resultTpl = new Ext.XTemplate(
								'<tpl for="."><div class="search-item" style="width:400;">',
									/*'<h3><span>{placa}<br />by {fecha}</span></h3>',*/
									'<h4 style="padding:5px;">{name} - {cedu}</h4>',
								'</div></tpl>'
							);
						
							var search = new Ext.form.ComboBox({
								id:'searchField',
								store : storeContra,
								//displayField : 'title',
								typeAhead : false,
								loadingText : 'Buscando...',
								minChars : 3,
								emptyText : 'Por Nombre (min 3 caracteres)... ',
								listWidth : 240,
								hideLabel : true,
								pageSize : 10,
								hideTrigger : true,
								allowBlank: false,
								tpl : resultTpl,
								itemSelector : 'div.search-item',
								onSelect: function(record){ // override default onSelect to do redirect
								
									idCont = record.data.id;
									ciCont = record.data.cedu;
									nomCont = record.data.name+' '+record.data.apel;
									var maskView = new Ext.LoadMask(Ext.getCmp('getConRel').getEl());	
									
									Ext.getCmp('searchField').collapse();
									
									var storeContra = new Ext.data.JsonStore({
										url : 'php/relaciones/getCli.php'
									});
									
									storeContra.on("load",function(Store,records,options,groups){
										var tplRelCont = new Ext.XTemplate(
											'<div id="reg-detalles">',
												'<p style=" padding:0   5px 0;"><b>Nombre: </b>{nombres}</p>',
												'<p style=" padding:5px 5px 0;"><b>C&eacutedula: </b>{cedula}</p>',
												'<p style=" padding:5px 5px 0;"><b>Telf. m&oacutevil: </b>{tlf_movil}</p>',
												'<p style=" padding:5px 5px 0;"><b>Email: </b>{email}</p>',
												'<p style=" padding:5px 5px 0;"></p>',
											'</div>'
										);			
										tplRelCont.overwrite(Ext.get('cont-datos'), storeContra.data.items[0].data);
										Ext.getCmp('btn-acep').enable();
									});
									
									maskView.show();		
									storeContra.load({
										params:{id:record.data.id},
										callback: function(){
											maskView.hide();
											Ext.getCmp('form-cxc').enable();
										}
									});
								}
							});
							
							var busCliente = new Ext.form.FormPanel({
								id : 'getConRel',
								bodyStyle :'padding: 10px',
								border : true,
							    region : 'west',
								width : 275,
								items : [{
									html: "<h1>Datos del Cliente</h1> <br> <p>A continuaci&oacuten por favor seleccione los datos del Cliente. "+
										  "Y haga clic en siguiente.</p><br><br>", border: false
								},{
									xtype : 'fieldset',
									collapsible : false,
									title : '[ Buscar Cliente ]',
									width : 250,
									margins:'25 0 25 0',
									defaults   : {
										anchor : '100%'
									},
									items : [search]
								},{
									html : "<br><br><br>", border: false
								},{
									xtype: 'fieldset',
									title: 'Datos del Cliente',
									height: 150,
									html: '<div id="cont-datos" style="font-size:14px;"></div>'
								}]
							});		
							
							var camposCliente=[
								{
									id:"co-fecha",
									xtype:'datefield',
									fieldLabel:'Fecha',
									name:'dat-fecha',  
									editable:false,  
									format:'d/m/Y',
									//minValue:new Date(),
									value:new Date(),
									maxValue:new Date() // <-- max date,
								},{
									id:"co-tipoCxC",
									xtype:'combo',
									fieldLabel:'Tipo de CxC',  
									name:'cmb-tipo',  
									forceSelection:true,
									store: ['Vale','Prestamo','Material','Adelanto'],
									emptyText:'Seleccione un Tipo...',  
									triggerAction:'all',   
									editable:false
								},{
									id:"co-monto",
									xtype:'numberfield',
									fieldLabel:'Monto', // creamos un campo
									name:'num-monto', // a partir de una
									emptyText:'Monto',
									decimalPrecision: 3,
									selectOnFocus: true,
									minValue: 5,
									value: 0,
									enableKeyEvents: true,
									allowBlank: false
								}
							];
							
							var setCliente = new Ext.form.FormPanel({
								id : 'form-cxc',
								bodyStyle :'padding: 10px',
								border : true,
							    region : 'center',
								disabled  :true,
								items : [{
									xtype : 'fieldset',
									collapsible : false,
									title : '[ Detalles del Cobro ]',
									width : 350,
									defaults   : {
										anchor : '100%',
										//width : 200,
										allowBlank:false
									},
									items : [camposCliente]
								}]
							});
								
							new Ext.Window({
								id : 'win-cxc',
								title : 'Agregar Cuenta por Cobrar [CxC]',
								layout : 'fit',
								bodyStyle :'padding:10px 5px 5px 5px;',
								width : 675,
								height : 500,
								resizable : false,
								modal : true,
								//autoDestroy : true,
								closable : true,
								closeAction : 'close',
								plain : true,
								buttonAlign :'center',
								items:[{
									layout:'border',
									items:[busCliente,setCliente]
								}],
								buttons: [{
									id:'btn-acep',
									text:'Aceptar',
									align:'center',
									disabled:true,
									handler: function (){
										var url = Ext.urlEncode({
											ciCont:ciCont,
											nomCont:nomCont,
											tipoCxc:Ext.getCmp('co-tipoCxC').getValue(),
											montoCxc:formatNumber(Ext.getCmp('co-monto').getValue(),' BsF.'),
											numLetrasCxc:covertirNumLetras(Ext.getCmp('co-monto').getValue()+'')
										});
										save_cxc(idCont,url);
									}
								},{
									text:'Cerrar',
									align:'center',
									handler: function (){
										Ext.getCmp('win-cxc').close();
									}
								}]
							}).show();
							
						}
					},'->',{
						text: 'Reporte - Cuentas x Cobrar', 
						iconCls: 'icon-report',
                		scale: 'medium', 
						handler: function(){
							
							var storeContra = new Ext.data.JsonStore({
								url : 'php/Cliente/getlistcli.php'
							});
							
							var resultTpl = new Ext.XTemplate(
								'<tpl for="."><div class="search-item" style="width:400;">',
									/*'<h3><span>{placa}<br />by {fecha}</span></h3>',*/
									'<h4 style="padding:5px;">{name} - {cedu}</h4>',
								'</div></tpl>'
							);
						
							var search = new Ext.form.ComboBox({
								id:'searchField',
								store : storeContra,
								//displayField : 'title',
								typeAhead : false,
								loadingText : 'Buscando...',
								minChars : 3,
								emptyText : 'Por Nombre (min 3 caracteres)... ',
								listWidth : 240,
								hideLabel : true,
								pageSize : 10,
								hideTrigger : true,
								allowBlank: false,
								tpl : resultTpl,
								itemSelector : 'div.search-item',
								onSelect: function(record){ // override default onSelect to do redirect	
									var url = Ext.urlEncode({
										idCont:record.data.id,
										nomCont:record.data.name+' '+record.data.apel
									});
									openwin('php/cxc/reportCxc.php?'+url);
									Ext.getCmp('searchField').collapse();
									Ext.getCmp('win-reportCxc').close();
								}
							});
							
							var busCliente = new Ext.form.FormPanel({
								id : 'getConRel',
								bodyStyle :'padding: 10px',
								border : true,
								width : 275,
								items : [{
									html: "<h1>Datos del Cliente</h1> <br> <p>A continuaci&oacuten por favor seleccione los datos del Cliente.<br><br> ", 
									border: false
								},{
									xtype : 'fieldset',
									collapsible : false,
									title : '[ Buscar Cliente ]',
									width : 250,
									margins:'25 0 25 0',
									defaults   : {
										anchor : '100%'
									},
									items : [search]
								}]
							});	
							
							new Ext.Window({
								id : 'win-reportCxc',
								title : 'Reporte de Relaciones por Cliente',
								layout : 'fit',
								bodyStyle :'padding:10px 5px 5px 5px;',
								width : 350,
								height : 250,
								resizable : false,
								modal : true,
								//autoDestroy : true,
								closable : true,
								closeAction : 'close',
								plain : true,
								items:[busCliente]
							}).show();
						}
					}],
					html: '<div id="cxc-div"> <div id="fondoestirado"> <img src="images/background.jpg" alt="" /> </div>  </div> '	
				};
				
	var moduleCxP = {
					title:'Emisi&oacute;n de Pagos',					
					cls:'inner-tab-custom', // custom styles in layout-browser.css
					//layout   : 'border',
					hideMode:Ext.isIE ? 'offsets' : 'display',
					tbar: [{
						id: 'add-cxp',
						text: 'Agregar', 
						iconCls: 'icon-menu-pagos', 
                		scale: 'medium',
						handler: function(){
							
						/******** variables locales ********/
							var idCont = null;
							var ciCont = null;
							var nomCont = null;
							index = new Number();
							totalRel = new Number(0);
							totalCxc = new Number(0);
						/***********************************/
						
							var storeContra = new Ext.data.JsonStore({
								url : 'php/Cliente/getlistcli.php'
							});
							
							var resultTpl = new Ext.XTemplate(
								'<tpl for="."><div class="search-item" style="width:400;">',
									/*'<h3><span>{placa}<br />by {fecha}</span></h3>',*/
									'<h4 style="padding:5px;">{name} - {cedu}</h4>',
								'</div></tpl>'
							);
						
							var search = new Ext.form.ComboBox({
								store : storeContra,
								typeAhead : false,
								loadingText : 'Buscando...',
								minChars : 3,
								emptyText : 'Por Nombre (min 3 caracteres)... ',
								listWidth : 240,
								hideLabel : true,
								pageSize : 10,
								hideTrigger : true,
								allowBlank: false,
								tpl : resultTpl,
								itemSelector : 'div.search-item',
								onSelect: function(record){ // override default onSelect to do redirect
								
									idCont = record.data.id;
									ciCont = record.data.cedu;
									nomCont = record.data.name+' '+record.data.apel;
									
									storeRel.load({
										params:{query:record.data.id},
										callback: function(){}
									});
									
									storeCxc.load({
										params:{query:record.data.id},
										callback: function(){}
									});
									
									nextBtn.enable();
									
									var maskView = new Ext.LoadMask(Ext.getCmp('getConCxP').getEl());	
									
									var storeContra = new Ext.data.JsonStore({
										url : 'php/relaciones/getCli.php'
									});
									
									storeContra.on("load",function(Store,records,options,groups){
										var tplRelCont = new Ext.XTemplate(
											'<div id="reg-detalles">',
												'<p style=" padding:0   5px 0;"><b>Nombre: </b>{nombres}</p>',
												'<p style=" padding:5px 5px 0;"><b>C&eacutedula: </b>{cedula}</p>',
												'<p style=" padding:5px 5px 0;"><b>Telf. m&oacutevil: </b>{tlf_movil}</p>',
												'<p style=" padding:5px 5px 0;"><b>Email: </b>{email}</p>',
												'<p style=" padding:5px 5px 0;"></p>',
											'</div>'
										);			
										tplRelCont.overwrite(Ext.get('cont-datos'), storeContra.data.items[0].data);
									});
									
									maskView.show();		
									storeContra.load({
										params:{id:record.data.id},
										callback: function(){maskView.hide();}
									});
								}
							});
							
							var busCliente = new Ext.form.FormPanel({
								id : 'getConCxP',
								bodyStyle :'padding: 10px',
								border : false,
							    //region : 'west',
								width : 275,
								items : [{
									html: "<h1>Datos del Cliente</h1> <br> <p>A continuaci&oacuten por favor seleccione los datos del Cliente. "+
										  "Y haga clic en siguiente.</p><br><br>", border: false
								},{
									xtype : 'fieldset',
									collapsible : false,
									title : '[ Buscar Cliente ]',
									width : 250,
									margins:'25 0 25 0',
									defaults   : {
										anchor : '100%'
									},
									items : [search]
								},{
									html : "<br><br><br>", border: false
								},{
									xtype: 'fieldset',
									title: 'Datos del Cliente',
									height: 150,
									html: '<div id="cont-datos" style="font-size:14px;"></div>'
								}]
							});
							
							
							var storeRel = new Ext.data.JsonStore({
								url: 'php/cxp/getRelaciones.php'
							});							
							
							var checkBoxSelMod = new Ext.grid.CheckboxSelectionModel( {
								listeners:{
									rowselect : function( selectionModel, rowIndex, record){
										var selectedRows = selectionModel.getSelections();
										if (selectedRows.length > 0) nextBtn.enable();
										sumMonto = new Number(0);
										Ext.each(selectedRows, function(record) { //step 2
											sumMonto = sumMonto + record.data.monto;
											/*//console.debug(record.data.id);*/
										});
										totalRel = sumMonto;	
										tplRelCont.overwrite(Ext.get('sub-total'), { subTotal: formatNumber(roundNumber(totalRel,3),' BsF.') });
										Ext.getCmp('panel-sub').doLayout();									
										tplCxpTotal.overwrite(Ext.get('total'), { Total: formatNumber(roundNumber(totalRel-totalCxc,3),' BsF.'), Rela: formatNumber(roundNumber(totalRel,3),' BsF.'), Cxc: formatNumber(roundNumber(totalCxc,3),' BsF.')});
						
										Ext.getCmp('panel-total').doLayout();
									},
									rowdeselect : function( selectionModel, rowIndex, record){
										var selectedRows = selectionModel.getSelections();
										if (selectedRows.length == 0) nextBtn.disable();
										sumMonto = new Number(0);
										Ext.each(selectedRows, function(record) { //step 2
											sumMonto = sumMonto + record.data.monto;
											/*//console.debug(record.data.id);*/
										});
										totalRel = sumMonto;
										tplRelCont.overwrite(Ext.get('sub-total'), { subTotal: formatNumber(roundNumber(totalRel,3),' BsF.') });
										Ext.getCmp('panel-sub').doLayout();									
										tplCxpTotal.overwrite(Ext.get('total'), { Total:formatNumber(roundNumber(totalRel-totalCxc,3),' BsF.'), Rela: formatNumber(roundNumber(totalRel,3),' BsF.'), Cxc: formatNumber(roundNumber(totalCxc,3),' BsF.')});
										Ext.getCmp('panel-total').doLayout();
									}
								}
							});
							
							var gridRel = new Ext.grid.EditorGridPanel({ 
								id: 'gridRel', 
								selModel: checkBoxSelMod,
								store: storeRel,    
								bodyStyle:'padding: 10px', 
								columns: [
									checkBoxSelMod,
									{header:'Relaci&oacute;n', dataIndex:'tipo',sortable: false/*, width:150*/, menuDisabled: true},
									{header:'Fecha', dataIndex:'fecha',sortable: false, align: 'right', menuDisabled: true},
									{header:'Monto BsF.', dataIndex:'monto',sortable: false, align: 'right', menuDisabled: true}
								],   
								viewConfig: {
									forceFit : true//, autoFill : true
								},
								stripeRows: true,
								region: 'center',	
								border : false
							});
							
							var tplRelCont = new Ext.XTemplate(
								'<div id="sub-detalles">',/*text-align:right;*/
									'<p style=" padding:0   5px 0; "><b>Sub-Total: </b>{subTotal}</p>',
									'<p style=" padding:5px 5px 0;"></p>',
								'</div>'
							);
							
							checkDesc = new Ext.FormPanel({ 
								bodyStyle:'padding: 10px', 
								region: 'north',
								border: false,
								height: 40,
								items:[{  
										xtype: 'checkbox', //definimos el tipo de componente  
										fieldLabel: 'Deducciones',// le asignamos un label  
										name: 'chk-active', //y un "name" para que lo recojamos en el servidor...  
										id: 'id-active',// ...cuando el formulario sea enviado  
										listeners:{
											check : function( Checkbox , checked){
												if(!checked){
													checkBoxSelModCxc.clearSelections();																
													var selectedRows = checkBoxSelMod.getSelections();
													if (selectedRows.length > 0) nextBtn.enable();
												}
											}
										}
									}  
								]  
							}); 
							
							var getRela = {
								layout: 'border',
								border: false,
								items: [checkDesc,gridRel,
								{
									id: 'panel-sub',
									height: 50,      
									bodyStyle:'padding: 10px', 
									region: 'south',
									border: false,
									html: '<div id="sub-total" style="font-size:14px;"></div>'
								}]
							};
							
							var storeCxc = new Ext.data.JsonStore({
								url: 'php/cxp/getCxc.php'
							});						
							
							var checkBoxSelModCxc = new Ext.grid.CheckboxSelectionModel( {
								listeners:{
									rowselect : function( selectionModel, rowIndex, record){
										var selectedRows = selectionModel.getSelections();
										if (selectedRows.length > 0) nextBtn.enable();
										sumMonto = new Number(0);
										Ext.each(selectedRows, function(record) { //step 2
											sumMonto = sumMonto + record.data.monto;
											/*//console.debug(record.data.id);*/
										});
										totalCxc = sumMonto;
										tplCxcCont.overwrite(Ext.get('sub-totalCxc'), { subTotal: formatNumber(roundNumber(totalCxc,3),' BsF.') });
										Ext.getCmp('panel-subCxc').doLayout();																
										tplCxpTotal.overwrite(Ext.get('total'), { Total: formatNumber(roundNumber(totalRel-totalCxc,3),' BsF.'), Rela: formatNumber(roundNumber(totalRel,3),' BsF.'), Cxc: formatNumber(roundNumber(totalCxc,3),' BsF.')});
										Ext.getCmp('panel-total').doLayout();	
									},
									rowdeselect : function( selectionModel, rowIndex, record){
										var selectedRows = selectionModel.getSelections();
										if (selectedRows.length == 0) nextBtn.disable();
										sumMonto = new Number(0);
										Ext.each(selectedRows, function(record) { //step 2
											sumMonto = sumMonto + record.data.monto;
											/*//console.debug(record.data.id);*/
										});
										totalCxc = sumMonto;
										tplCxcCont.overwrite(Ext.get('sub-totalCxc'), { subTotal: formatNumber(roundNumber(totalCxc,3),' BsF.') });
										Ext.getCmp('panel-subCxc').doLayout();																	
										tplCxpTotal.overwrite(Ext.get('total'), { Total: formatNumber(roundNumber(totalRel-totalCxc,3),' BsF.'), Rela: formatNumber(roundNumber(totalRel,3),' BsF.'), Cxc: formatNumber(roundNumber(totalCxc,3),' BsF.')});
										Ext.getCmp('panel-total').doLayout();
									}
								}
							});
							
							var numberField = new Ext.form.NumberField({
								decimalPrecision: 3,
								selectOnFocus: true,
								minValue: 0,
								allowBlank: false
							});
							
							function changeMonto(val, x, store){
								sumMonto = new Number(0);
								var selectedRows = checkBoxSelModCxc.getSelections();
								if (val >= store.data.pendiente){
									store.data.monto = store.data.pendiente;
									Ext.each(selectedRows, function(record) { //step 2
										sumMonto = sumMonto + record.data.monto;
										/*//console.debug(record.data.id);*/
									});
									totalCxc = sumMonto;
									tplCxcCont.overwrite(Ext.get('sub-totalCxc'), { subTotal: formatNumber(roundNumber(totalCxc,3),' BsF.') });
									Ext.getCmp('panel-subCxc').doLayout();																	
									tplCxpTotal.overwrite(Ext.get('total'), { Total: formatNumber(roundNumber(totalRel-totalCxc,3),' BsF.'), Rela: formatNumber(roundNumber(totalRel,3),' BsF.'), Cxc: formatNumber(roundNumber(totalCxc,3),' BsF.')});
									Ext.getCmp('panel-total').doLayout();
									return store.data.pendiente;	
								}else{
									Ext.each(selectedRows, function(record) { //step 2
										sumMonto = sumMonto + record.data.monto;
										/*//console.debug(record.data.id);*/
									});
									totalCxc = sumMonto;
									tplCxcCont.overwrite(Ext.get('sub-totalCxc'), { subTotal: formatNumber(roundNumber(totalCxc,3),' BsF.') });
									Ext.getCmp('panel-subCxc').doLayout();																	
									tplCxpTotal.overwrite(Ext.get('total'), { Total: formatNumber(roundNumber(totalRel-totalCxc,3),' BsF.'), Rela: formatNumber(roundNumber(totalRel,3),' BsF.'), Cxc: formatNumber(roundNumber(totalCxc,3),' BsF.')});
									Ext.getCmp('panel-total').doLayout();
									return val;	
								}
							};
							
							var gridCxc = new Ext.grid.EditorGridPanel({ 
								id: 'gridCxc', 
								selModel: checkBoxSelModCxc,
								store: storeCxc,    
								bodyStyle:'padding: 10px', 
								columns: [
									checkBoxSelModCxc,
									{header:'Tipo', dataIndex:'tipo',sortable: false, menuDisabled: true},
									{header:'Fecha', dataIndex:'fecha',sortable: false, align: 'right', menuDisabled: true},
									{header:'Total BsF.', dataIndex:'total',sortable: false, align: 'right', menuDisabled: true},
									{header:'Pendiente BsF.', dataIndex:'pendiente',sortable: false, align: 'right', menuDisabled: true},
									{header:'Monto BsF.', dataIndex:'monto',sortable: false, align: 'right', menuDisabled: true, editor: numberField, renderer: changeMonto}
								],   
								viewConfig: {
									forceFit : true//, autoFill : true
								},
								stripeRows: true,
								region: 'center',
								border : false
							});
							
							var tplCxcCont = new Ext.XTemplate(
								'<div id="sub-detallesCxc">',
									'<p style=" padding:0   5px 0; "><b>Sub-Total: </b>{subTotal}</p>',
									'<p style=" padding:5px 5px 0;"></p>',
								'</div>'
							);
							
							var getCxc = {
								layout: 'border',
								border: false,
								items: [gridCxc,
								{
									id: 'panel-subCxc',
									height: 50,    
									bodyStyle:'padding: 10px', 
									region: 'south',
									border: false,
									html: '<div id="sub-totalCxc" style="font-size:14px;"></div>'
								}]
							};
							
							var tplCxpTotal = new Ext.XTemplate(
								'<div id="total-detalles">',/*text-align:right;*/
									'<p style=" padding:5px 5px 0;"></p>',
									'<p style=" padding:2; "><b>Total Relaci&oacute;n: </b>{Rela}</p>',
									'<p style=" padding:2; "><b>Total Deducciones: </b>{Cxc}</p>',
									'<p style=" padding:2; "><b>Total General: </b>{Total}</p>',
								'</div>'
							);
							
							var totalRela = new Ext.Panel({
								id: 'total-panel',
								//region: 'east',	
								margins:'35 5 5 5',
								cmargins:'35 5 5 5',
								bodyStyle :'padding: 10px',
								border: false,
								items: [{
									html: "<h1>N&uacutemero de Factura</h1> <br> <p>A continuaci&oacuten por favor coloque el N&uacutemero de factura. "+
										  "Y haga clic en Finalizar.</p><br><br>", border: false
								},{
									xtype : 'fieldset',
									collapsible : false,
									title : '[ Resumen ]',
									margins:'25 0 25 0',
									defaults   : {
										anchor : '100%'
									},
									items : [{
										id:'ct-numFac',
										xtype : 'textfield',
										fieldLabel:'Num. Factura',
										name:'txt-numFac',
										allowBlank: false
									},{
										id: 'panel-total',
										height: 75,
										//region: 'south',
										border: false,
										html: '<div id="total" style="font-size:14px;"></div>'
									}]
								}]
							});
							
							Ext.getCmp('ct-numFac').on("invalid",function(){
								finishBtn.disable();
							});
							
							Ext.getCmp('ct-numFac').on("valid",function(){
								finishBtn.enable();
							});
							
							index = 0;
							
							formFab = new Ext.FormPanel({
								layout      : "card",
								border      : false,
								activeItem  : index,
								items       : [busCliente, getRela, getCxc, totalRela]
							});
							
							function next(){
								nextBtn.disable();
								backBtn.show();
								if(index < formFab.items.length-1){
									index++;
									if(index == 2 && !Ext.getCmp('id-active').getValue()){
										index++;
									}
									var cardlayout = formFab.getLayout();
									cardlayout.setActiveItem(index);
									
									if(index == formFab.items.length-1){ //si esta en el ultima carta
										nextBtn.hide();
										finishBtn.show();
									}
								}
								/*console.debug(index);*/
							};
						
							function back(){
								nextBtn.enable();
								if(index>0){
									index--;
									if(index == 2 && !Ext.getCmp('id-active').getValue()){
										index--;
									}
									var cardlayout = formFab.getLayout();
									cardlayout.setActiveItem(index);
								}
								
								if(index == 0){    //si esta en la primera carta
									backBtn.hide();    
									finishBtn.hide();
									nextBtn.show();
								}else{
									finishBtn.hide();
									nextBtn.show();
								}
							};
						
							function finish(){
								
								var recordsToSendRel = [];
								var selectedRowsRel = checkBoxSelMod.getSelections();
								Ext.each(selectedRowsRel, function(record) { //step 2
									recordsToSendRel.push(Ext.apply(record.data));
								});
								recordsToSendRel = Ext.encode(recordsToSendRel);
								
								var recordsToSendCxc = [];									
								var selectedRowsCxc = checkBoxSelModCxc.getSelections();
								Ext.each(selectedRowsCxc, function(record) { //step 2
									recordsToSendCxc.push(Ext.apply(record.data));
								});
								recordsToSendCxc = Ext.encode(recordsToSendCxc);
								
								var url = Ext.urlEncode({
											ciCont:ciCont,
											nomCont:nomCont,
											totalRel:formatNumber(roundNumber(totalRel,3),' BsF.'),
											totalCxc:formatNumber(roundNumber(totalCxc,3),' BsF.'),
											totalGen:formatNumber(roundNumber(totalRel-totalCxc,3),' BsF.'),
											numFac:Ext.getCmp('ct-numFac').getValue()
								});					
								
								Ext.Ajax.request({
										url : 'php/cxp/saveCxp.php' , 
										params : {
											idCont:idCont,
											totalRel:totalRel,
											totalCxc:totalCxc,
											numFac:Ext.getCmp('ct-numFac').getValue(),
											recordsRel: recordsToSendRel,
											recordsCxc: recordsToSendCxc
										},
										method: 'POST',
										success: function ( result, request ) { 
											Ext.MessageBox.alert('', result.responseText.split('-')[0].trim()); 
											Ext.getCmp('win-Cxp').close();
											openwin('php/cxp/reciboDePago.php?'+url+'&idCxp='+result.responseText.split('-')[1].trim());
										},
										failure: function ( result, request) { 
											Ext.MessageBox.alert('Failed', result.responseText); 
										} 
									});	
							};
							
							backBtn = new Ext.Button({text: "Atras", handler: back, /*scope : this,*/ hidden:true});
							nextBtn = new Ext.Button({text: "Siguiente", handler: next, disabled: true});
							finishBtn = new Ext.Button({text: "Finalizar", handler: finish, disabled: true, hidden: true});
								
							new Ext.Window({
								id : 'win-Cxp',
								title : 'Emisi&oacute;n de Pago',
								layout : 'fit',
								bodyStyle :'padding:10px 5px 5px 5px;',
								width       : 450,
								height      : 450,
								resizable : false,
								modal : true,
								//autoDestroy : true,
								closable : true,
								closeAction : 'close',
								plain : true,
								buttonAlign :'center',
								items:[formFab],			
								fbar: [backBtn,nextBtn,finishBtn]
								/*buttons: [{
									text:'Aceptar',
									align:'center',7
									handler: function (){
									}
								},{
									text:'Cerrar',
									align:'center',
									handler: function (){
										Ext.getCmp('win-editCont').close();
									}
								}]*/
							}).show();
							
							
						}
					},'->',{
						text: 'Reporte - Cuentas x Pagar', 
						iconCls: 'icon-report',
                		scale: 'medium', 
						handler: function(){
							
							var storeContra = new Ext.data.JsonStore({
								url : 'php/Cliente/getlistcli.php'
							});
							
							var resultTpl = new Ext.XTemplate(
								'<tpl for="."><div class="search-item" style="width:400;">',
									/*'<h3><span>{placa}<br />by {fecha}</span></h3>',*/
									'<h4 style="padding:5px;">{name} - {cedu}</h4>',
								'</div></tpl>'
							);
						
							var search = new Ext.form.ComboBox({
								id:'searchField',
								store : storeContra,
								//displayField : 'title',
								typeAhead : false,
								loadingText : 'Buscando...',
								minChars : 3,
								emptyText : 'Por Nombre (min 3 caracteres)... ',
								listWidth : 240,
								hideLabel : true,
								pageSize : 10,
								hideTrigger : true,
								allowBlank: false,
								tpl : resultTpl,
								itemSelector : 'div.search-item',
								onSelect: function(record){ // override default onSelect to do redirect	
									var url = Ext.urlEncode({
										idCont:record.data.id,
										nomCont:record.data.name+' '+record.data.apel
									});
									openwin('php/cxp/reportCxp.php?'+url);
									Ext.getCmp('searchField').collapse();
									Ext.getCmp('win-reportCxp').close();
								}
							});
							
							var busCliente = new Ext.form.FormPanel({
								id : 'getConRel',
								bodyStyle :'padding: 10px',
								border : true,
								width : 275,
								items : [{
									html: "<h1>Datos del Cliente</h1> <br> <p>A continuaci&oacuten por favor seleccione los datos del Cliente.<br><br> ", 
									border: false
								},{
									xtype : 'fieldset',
									collapsible : false,
									title : '[ Buscar Cliente ]',
									width : 250,
									margins:'25 0 25 0',
									defaults   : {
										anchor : '100%'
									},
									items : [search]
								}]
							});	
							
							new Ext.Window({
								id : 'win-reportCxp',
								title : 'Reporte de Relaciones por Cliente',
								layout : 'fit',
								bodyStyle :'padding:10px 5px 5px 5px;',
								width : 350,
								height : 250,
								resizable : false,
								modal : true,
								//autoDestroy : true,
								closable : true,
								closeAction : 'close',
								plain : true,
								items:[busCliente]
							}).show();
						}
					}],
					html: '<div id="cxp-div"> <div id="fondoestirado"> <img src="images/background.jpg" alt="" /> </div>  </div> '						
				};
				
				
	Ext.apply(Ext.form.VTypes,{
		clave: function(value,field){
			return Ext.getCmp('us-clave').getValue() != Ext.getCmp('us-clave2').getValue() ? false : true;
		},
		passText: 'Este campo debe ser igual a Clave'
	});
	
	function save_usu(){
		if (Ext.getCmp('form-usu').form.isValid()) {
			//Ext.getCmp('form-cont').setValue(); Ext.util.MD5(Ext.getCmp('us-clave').getValue())
			Ext.getCmp('form-usu').form.submit({
				waitTitle : "Validando",			
				url       : 'php/usuario/saveUsu.php',
				params: {
					clave: Ext.util.MD5(Ext.getCmp('us-clave').getValue())
				},
				waitMsg   : "Espere un momento por favor......",
				failure   : function(sender,action){
					Ext.Msg.alert('failure',action.result.msg); 
				},
				success: function(sender,action) {
					Ext.Msg.alert('',action.result.msg);
					Ext.getCmp('win-addUsu').close();
				}
			});
		}else{
			console.debug('Formulario invalido');
		}
	}
	
	function edit_usu(){
		if (Ext.getCmp('form-usu').form.isValid()) {
			//Ext.getCmp('form-cont').setValue();
			Ext.getCmp('form-usu').form.submit({
				waitTitle : "Validando",			
				url       : 'php/usuario/editUsu.php',
				waitMsg   : "Espere un momento por favor......",
				failure   : function(sender,action){
					Ext.Msg.alert('failure',action.result.msg); 
				},
				success: function(sender,action) {
					/*if(Ext.getCmp('us-tipo').getValue()=='Usuario'){
						console.debug(tipoUsuario);
						Ext.getCmp('add-usu').disable();
						Ext.getCmp('edit-usu').disable();
					}*/
					Ext.Msg.alert('',action.result.msg);
					Ext.getCmp('win-editUsu').close();
				}
			});
		}else{
			/*console.debug('Formulario invalido');*/
		}
	};
	
	function pass_change(){
		if (Ext.getCmp('form-pass').form.isValid()) {
			//Ext.getCmp('form-cont').setValue();
			Ext.getCmp('form-pass').form.submit({
				waitTitle : "Validando",			
				url       : 'php/usuario/passChange.php',
				params: {
					clave: Ext.util.MD5(Ext.getCmp('us-clave').getValue())
				},
				waitMsg   : "Espere un momento por favor......",
				failure   : function(sender,action){
					Ext.Msg.alert('failure',action.result.msg); 
				},
				success: function(sender,action) {
					Ext.Msg.alert('',action.result.msg);
					Ext.getCmp('win-passChange').close();
				}
			});
		}else{
			/*console.debug('Formulario invalido');*/
		}
	};
	
	var moduleUsuario = {
					id:'moduleUsuario',
					title:'Gesti&oacute;n de Usuario',					
					cls:'inner-tab-custom', // custom styles in layout-browser.css
					//layout   : 'border',
					hideMode:Ext.isIE ? 'offsets' : 'display',
					tbar: [{
						id: 'add-usu',   
						text: 'Agregar', 
						iconCls: 'icon-user-add', 
                		scale: 'medium',
						disabled: true,
						handler: function(){	
									
							var camposUsuario=[
								{  
									id:'us-id',
									xtype:'hidden',//<-- campo oculto (hidden)  
									name:'txt-id', //el nombre con que se envia al servidor  
									value:'developer'//el valor que contendrá  
								},{
									id:'us-cedula',
									xtype : 'textfield',
									fieldLabel:'C&eacute;dula',
									name:'txt-cedula',
									emptyText:'Escriba su C.I...'
								},{
									id:'us-nombre',
									xtype : 'textfield',
									fieldLabel:'Nombre',
									name:'txt-nombre',
									emptyText:'movil...'
								},{
									id:'us-tlf',
									xtype : 'textfield',
									fieldLabel:'Tel&eacute;fono',
									name:'txt-tlf',
									emptyText:'movil...'
								},{
									id:'us-correo',
									xtype : 'textfield',
									fieldLabel:'Correo',
									name:'txt-correo',
									emptyText:'correo...'
								},{
									id:'us-direccion',
									xtype : 'textfield',
									fieldLabel:'Direcci&oacuten',
									name:'txt-direccion',
									emptyText:'Direccion...'
								},{
									id:'us-login',
									xtype : 'textfield',
									fieldLabel:'Login',
									name:'txt-login',
									emptyText:'Login...'
								},{
									id:"us-clave",
									xtype : 'textfield',
									fieldLabel:'Password', // creamos un campo
									name:'txt-clave', // a partir de una
									inputType:'password',
									submitValue:false,
									maxLength:20,
									minLength:5
								},{
									id:"us-clave2",
									xtype : 'textfield',
									fieldLabel:'Confirmar clave', // creamos un campo
									name:'txt-clave2', // a partir de una
									inputType:'password',
									vtype: 'clave',
									submitValue:false,
									maxLength:20,
									minLength:5
								},{
									id:"us-tipo",
									xtype:'combo',
									fieldLabel:'Tipo',  
									name:'cmb-tipo',  
									forceSelection:true,
									store:['Administrador','Vendedor'],  
									//emptyText:'Seleccione edo...',  
									triggerAction:'all',   
									editable:false
								},{
									id:"us-estado",
									xtype:'combo',
									fieldLabel:'Estado',  
									name:'cmb-estado',  
									forceSelection:true,
									store:['Activo','Inactivo'],  
									//emptyText:'Seleccione edo...',  
									triggerAction:'all',   
									editable:false
								}
							];
							
							var setUsuario = new Ext.form.FormPanel({
								id : 'form-usu',
								bodyStyle :'padding: 10px',
								border : false,
								items : [{
									xtype : 'fieldset',
									collapsible : false,
									title : '[ Datos del Usuario ]',
									width : 350,
									defaults   : {
										anchor : '100%',
										//width : 200,
										width : 350,										
										allowBlank:false
									},
									items : [camposUsuario]
								}]
							});
							
							new Ext.Window({
								id : 'win-addUsu',
								title : 'Agregar Usuario',
								layout : 'fit',
								bodyStyle :'padding:10px 5px 5px 5px;',
								width : 400,
								height : 550,
								resizable : false,
								modal : true,
								//autoDestroy : true,
								closable : true,
								closeAction : 'close',
								plain : true,
								buttonAlign :'center',
								items:[setUsuario],
								buttons: [{
									text:'Aceptar',
									align:'center',
									handler: function (){
										save_usu();
										//Ext.getCmp('add-cvs').enable();
										//Ext.getCmp('add-txt').enable();
									}
								},{
									text:'Cerrar',
									align:'center',
									handler: function (){
										Ext.getCmp('win-addUsu').close();
									}
								}]
							}).show();
						}
					},'-',{
						id: 'edit-usu',
						text: 'Editar', 
						iconCls: 'icon-user-edit',
                		scale: 'medium', 
						disabled: true,
						handler: function(){
							
							var camposUsuarioEdit=[
								{  
									id:'us-id',
									xtype:'hidden',//<-- campo oculto (hidden)  
									name:'txt-id', //el nombre con que se envia al servidor  
									value:'developer'//el valor que contendrá  
								},{
									id:'us-cedula',
									xtype : 'textfield',
									fieldLabel:'C&eacute;dula',
									name:'txt-cedula',
									emptyText:'Escriba Su Numero de C.I...'
								},{
									id:'us-nombre',
									xtype : 'textfield',
									fieldLabel:'Nombre',
									name:'txt-nombre',
									emptyText:'Nombre...'
								},{
									id:'us-tlf',
									xtype : 'textfield',
									fieldLabel:'Tel&eacute;fono',
									name:'txt-tlf',
									emptyText:'Numero de telefono...'
								},{
									id:'us-correo',
									xtype : 'textfield',
									fieldLabel:'Correo',
									name:'txt-correo',
									emptyText:'Correo...'
								},{
									id:'us-direccion',
									xtype : 'textfield',
									fieldLabel:'Direcci&oacute;n',
									name:'txt-direccion',
									emptyText:'Direccion...'
								},{
									id:'us-login',
									xtype : 'textfield',
									fieldLabel:'Login',
									name:'txt-login',
									emptyText:'Login...'
								},{
									id:"us-tipo",
									xtype:'combo',
									fieldLabel:'Tipo',  
									name:'cmb-tipo',  
									forceSelection:true,
									store:['Administrador','Vendedor'],  
									//emptyText:'Seleccione edo...',  
									triggerAction:'all',   
									editable:false
								},{
									id:"us-estado",
									xtype:'combo',
									fieldLabel:'Estado',  
									name:'cmb-estado',  
									forceSelection:true,
									store:['Activo','Inactivo'],  
									//emptyText:'Seleccione edo...',  
									triggerAction:'all',   
									editable:false
								}
							];
							
							var storeUsuario = new Ext.data.JsonStore({
								url : 'php/usuario/getListUsu.php'
							});
							
							storeUsuario.on("load",function(Store,records,options,groups){
								//panelView.doLayout();
								Ext.getCmp('us-id').reset();
								Ext.getCmp('us-login').reset();
								Ext.getCmp('us-tipo').reset();
								Ext.getCmp('us-nombre').reset();
								Ext.getCmp('us-tlf').reset();
								Ext.getCmp('us-correo').reset();
								Ext.getCmp('us-direccion').reset();
								Ext.getCmp('us-cedula').reset();
								Ext.getCmp('us-estado').reset();
								console.log(Store);
							});
							
							var resultTpl = new Ext.XTemplate(
								'<tpl for="."><div class="search-item-usu" style="background-image:url({url});">',
									/*'<h3><span>{placa}<br />by {fecha}</span></h3>',*/
									'<h4 style="padding:5px;">{login} - {tipo}</h4>',
								'</div></tpl>'
							);
						
							var search = new Ext.form.ComboBox({
								store : storeUsuario,
								//displayField : 'title',
								typeAhead : false,
								loadingText : 'Buscando...',
								minChars : 3,
								emptyText : 'Por Login (min 3 caracteres)... ',
								listWidth : 240,
								hideLabel : true,
								pageSize : 10,
								hideTrigger : true,
								tpl : resultTpl,
								itemSelector : 'div.search-item-usu',
								onSelect: function(record){ // override default onSelect to do redirect
									console.log(record.data.id);
									var maskView = new Ext.LoadMask(Ext.getCmp('form-usu').getEl());
									maskView.show();	
									
									Ext.Ajax.request({
										url : 'php/usuario/getUsu.php' , 
										params : {id:record.data.id},
										method: 'POST',
										success: function ( result, request ) {
											Ext.getCmp('us-id').setValue(result.responseText.split(';')[0].trim());
											Ext.getCmp('us-login').setValue(result.responseText.split(';')[6].trim());
											Ext.getCmp('us-tipo').setValue(result.responseText.split(';')[7].trim());
											Ext.getCmp('us-nombre').setValue(result.responseText.split(';')[2].trim());
											Ext.getCmp('us-tlf').setValue(result.responseText.split(';')[3].trim());
											Ext.getCmp('us-correo').setValue(result.responseText.split(';')[4].trim());
											Ext.getCmp('us-direccion').setValue(result.responseText.split(';')[5].trim());
											Ext.getCmp('us-cedula').setValue(result.responseText.split(';')[1].trim());
											//Ext.getCmp('us-clave').setValue(result.responseText.split(';')[8].trim());
											Ext.getCmp('us-estado').setValue(result.responseText.split(';')[8].trim());
											
											maskView.hide();
											Ext.getCmp('form-usu').enable();
										},
										failure: function ( result, request) { 
											Ext.MessageBox.alert('Failed', result.responseText); 
											maskView.hide();
										} 
									});
								}
							});							
							
							var setUsuario = new Ext.form.FormPanel({
								id : 'form-usu',
								bodyStyle :'padding: 10px',
								border : true,
							    region : 'center',
								disabled  :true,
								items : [{
									xtype : 'fieldset',
									collapsible : false,
									title : '[ Datos del Usuario ]',
									width : 350,
									defaults   : {
										anchor : '100%',
										//width : 200,
										allowBlank:false
									},
									items : [camposUsuarioEdit]
								}]
							});
							
							var busUsuario = new Ext.form.FormPanel({
								id : 'form-busca',
								bodyStyle :'padding: 10px',
								border : true,
							    region : 'west',
								width : 275,
								items : [{
									xtype : 'fieldset',
									collapsible : false,
									title : '[ Buscar Usuario ]',
									width : 250,
									defaults   : {
										anchor : '100%'
									},
									items : [search]
								}]
							});
								
							new Ext.Window({
								id : 'win-editUsu',
								title : 'Editar Usuario',
								layout : 'fit',
								bodyStyle :'padding:10px 5px 5px 5px;',
								width : 675,
								height : 450,
								resizable : false,
								modal : true,
								//autoDestroy : true,
								closable : true,
								closeAction : 'close',
								plain : true,
								buttonAlign :'center',
								items:[{
									layout:'border',
									items:[busUsuario,setUsuario]
								}],
								buttons: [{
									text:'Aceptar',
									align:'center',
									handler: function (){
										edit_usu();
									}
								},{
									text:'Cerrar',
									align:'center',
									handler: function (){
										Ext.getCmp('win-editUsu').close();
									}
								}]
							}).show();
							
						}
					},'-',{
						text: 'Cambiar clave', 
						iconCls: 'icon-user-delete',
                		scale: 'medium', 
						handler: function(){
							
							var camposUsuPassChange=[
								{  
									id:'us-id',
									xtype:'hidden',//<-- campo oculto (hidden)  
									name:'txt-id', //el nombre con que se envia al servidor  
									value:idUsuario//el valor que contendrá  
								},{
									id:"us-clave",
									xtype : 'textfield',
									fieldLabel:'clave', // creamos un campo
									name:'txt-clave', // a partir de una
									inputType:'password',
									submitValue:false,
									maxLength:20,
									minLength:5
								},{
									id:"us-clave2",
									xtype : 'textfield',
									fieldLabel:'Confirmar Clave', // creamos un campo
									name:'txt-clave2', // a partir de una
									inputType:'password',
									vtype: 'clave',
									submitValue:false,
									maxLength:20,
									minLength:5
								}
							];
							
							var setCliente = new Ext.form.FormPanel({
								id : 'form-pass',
								bodyStyle :'padding: 10px',
								border : true,
								layout : 'fit',
								disabled: false,
								items : [{
									xtype : 'fieldset',
									collapsible : false,
									title : '[ Datos del Usuario ]',
									width : 350,
									defaults   : {
										anchor : '100%',
										//width : 200,
										allowBlank:false
									},
									items : [camposUsuPassChange]
								}]
							});
								
							new Ext.Window({
								id : 'win-passChange',
								title : 'Cambiar Clave',
								layout : 'fit',
								bodyStyle :'padding:10px 5px 5px 5px;',
								width : 375,
								height : 200,
								resizable : false,
								modal : true,
								//autoDestroy : true,
								closable : true,
								closeAction : 'close',
								plain : true,
								buttonAlign :'center',
								items:[setCliente],
								buttons: [{
									text:'Aceptar',
									align:'center',
									handler: function (){
										pass_change();
									}
								},{
									text:'Cerrar',
									align:'center',
									handler: function (){
										Ext.getCmp('win-passChange').close();
									}
								}]
							}).show();
						}
					}],
					html: '<div id="usuario-div"> <div id="fondoestirado"> <img src="images/background.jpg" alt="" /> </div>  </div> '	
				};	
	
	function loadData(modulo){
		
		Ext.getCmp('tab-container').removeAll(true);
		
		switch (modulo) { 
			case 'Cliente':
				Ext.getCmp('tab-container').add(moduleCliente);
				if(tipoUsuario=='Administrador'){
					/*console.debug(tipoUsuario);*/
				}
				break 
			case 'Proveedor':
				Ext.getCmp('tab-container').add(moduleProveedor);
				if(tipoUsuario=='Administrador'){
					/*console.debug(tipoUsuario);*/
				}
				break
			case 'inventario':
				Ext.getCmp('tab-container').add(moduleArticulo);
				if(tipoUsuario=='Administrador'){
					/*console.debug(tipoUsuario);*/
				}
				break
				
			case 'Relaciones':
				Ext.getCmp('tab-container').add(moduleRelaciones);
				break 
				
			case 'Compras':
				Ext.getCmp('tab-container').add(moduleCompras);
				break 
				
			case 'Cuentas por Cobrar':
				Ext.getCmp('tab-container').add(moduleCxC);
				if(tipoUsuario=='Administrador'){
					/*console.debug(tipoUsuario);*/
					Ext.getCmp('add-cxc').enable();
				}				
			break 
				
			case 'Emisión de Pagos':
				Ext.getCmp('tab-container').add(moduleCxP);
				if(tipoUsuario=='Administrador'){
					/*console.debug(tipoUsuario);*/
					Ext.getCmp('add-cxp').enable();
				}
				break 
				
			case 'Gestión de Usuario':
				Ext.getCmp('tab-container').add(moduleUsuario);
				if(tipoUsuario=='Administrador'){
					/*console.debug(tipoUsuario);*/
					Ext.getCmp('add-usu').enable();
					Ext.getCmp('edit-usu').enable();
				}
				break 
				
			/*default: 
				colGrid.push({header:item.header,dataIndex:item.name});*/
		}
		
		
		Ext.getCmp('tab-container').setActiveTab(0);
		
		
		
		Ext.getCmp('content-panel').layout.setActiveItem('tab-container');	
	
	};
       	
	var mainViewport = new Ext.Viewport({					 
		id : 'mainViewport',
		layout: 'border',
		title: 'Ext Layout Browser',
		items: [menuPanel,contentPanel],
        renderTo: Ext.getBody()
    });
	
	/***************** Gestion de Usuario **********************/ 
	
	function Validar(){
		if (loginForm.form.isValid()) {
			//Ext.getCmp('us-clave').setValue();
			loginForm.form.submit({
				waitTitle : "Validando",			
				url       : 'php/usuario/getLogin.php',
				params: {
					clave: Ext.util.MD5(Ext.getCmp('us-clave').getValue())
				},
				waitMsg   : "Espere un momento por favor......",
				failure   : function(sender,action){
					//Ext.utiles.msg('Error!', action.result.msg);
					Ext.Msg.alert('Error!',action.result.msg);
				},
				success: function(sender,action) {
					//Ext.example.msg('Click','You clicked on "Action 1".');
					//actualizarEmpresaConectada();
					//Ext.utiles.msg('Correcto!', action.result.msg);
					Ext.Msg.alert('Correcto!',action.result.msg.split(';')[0].trim());
					idUsuario = action.result.msg.split(';')[1].trim();
					tipoUsuario = action.result.msg.split(';')[2].trim();
					//nombreUsuario = action.result.msg.split(';')[3].trim();
					/*console.debug(tipoUsuario);*/
					/*Ext.getCmp('add-cvs').enable();
					Ext.getCmp('add-txt').enable();*/
					loginForm.getForm().reset();
					Ext.getCmp('win-login').close();
				}
			});
		}
	};
	
	var loginForm = new Ext.form.FormPanel({
		baseCls: 'x-plain',
		labelWidth: 180,
		autoWidth:true,
		autoHeight:true,
		frame:true,
		autoScroll:false,
		bodyStyle:'padding:10px;',
		//url:'localhost',
		items: [{
			xtype:'fieldset',
			title:'Usuario / Clave', 
			autoWidth:true, 
			labelWidth: 90, 
			autoHeight:true, 
			defaultType: 'textfield',
			items:[
				{fieldLabel:'Usuario', name: 'login', allowBlank:false, maxLength:250, anchor:'80%'},
				{fieldLabel:'Clave', inputType:'password', allowBlank:false, maxLength:20, name: 'clave', anchor:'80%', id: 'us-clave', submitValue: false},
			]
		}]
	}); 
	
	var winLogin = new Ext.Window({
		id     : 'win-login',
		title:'Validaci&oacute;n de Usuario',
		layout:'fit',
		bodyStyle:'padding:10px 5px 5px 5px;',
		width:340,
		height:200,
		resizable:false,
		modal:true,
		autoScroll: true,
		maximizable:false,
		closable:false,
		plain: true,
		buttonAlign:'center',
		items:[loginForm],
		buttons: [{
			text:'Aceptar',
			align:'center',
			handler: function (){
				Validar();
				//Ext.getCmp('add-cvs').enable();
				//Ext.getCmp('add-txt').enable();
			}
		},{
			text:'Ayuda',
			align:'center',
			handler: function (){
				Ext.Msg.alert('Administrador!!!','contacte al administrador del sistema');
			}
		}]
	})//.show();
	//***********************************************************/
});



