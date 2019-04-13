(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{174:function(e,t,n){"use strict";n.r(t),n.d(t,"SettingsPage",function(){return k}),n.d(t,"SettingInputComponent",function(){return B});var a=n(1),i=n(5),l=n(2),o=n(3),c=n(6),s=n(4),r=n(8),d=n(45),m=n(18),b=n(15),g=n(52),u=n(41),p=n(14),h=n(16),y=n(13),E=n(0);let k=class extends E.Component{constructor(){super(...arguments),this.triggerUpdate=0,this.inputEl=null,this.loading=!1}get canEdit(){return l.C.currentUser.canEditSettings}componentWillMount(){setTimeout(()=>o.ib.updateDropboxBackups(),c.t)}render(){return E.createElement("div",{className:"settings-component p-15 p-l-10 p-r-10"},E.createElement(i.n,{title:Object(l.B)("General Setting")},E.createElement(B,{element:E.createElement(d.a,{label:Object(l.B)("Language"),options:[{key:"en",text:"English"},{key:"ar",text:"العربية"}],defaultSelectedKey:o.ib.getSetting("lang"),onChange:(e,t)=>{o.ib.setSetting("lang",t.key.toString())},disabled:!this.canEdit}),info:Object(l.B)("Choose the main language of display menus and items")}),E.createElement(B,{element:E.createElement(d.a,{label:Object(l.B)("Date format"),options:[{key:"dd/mm/yyyy",text:"dd/mm/yyyy"},{key:"mm/dd/yyyy",text:"mm/dd/yyyy"},{key:"dd MM 'YY",text:"dd MM 'YY"}],defaultSelectedKey:o.ib.getSetting("date_format"),onChange:(e,t)=>{o.ib.setSetting("date_format",t.key.toString())},disabled:!this.canEdit}),info:Object(l.B)("Set the date format to be used across this application")}),E.createElement(B,{element:E.createElement(d.a,{label:Object(l.B)("Week ends on"),options:c.c.days(!0).map((e,t)=>({key:t.toString(),text:Object(l.B)(e)})),defaultSelectedKey:o.ib.getSetting("weekend_num"),onChange:(e,t)=>{o.ib.setSetting("weekend_num",t.key.toString())},disabled:!this.canEdit}),info:Object(l.B)("On which day the week ends")}),E.createElement(B,{element:E.createElement(m.a,{value:o.ib.getSetting("dropbox_accessToken"),label:Object(l.B)("Dropbox access token"),onChange:(e,t)=>{o.ib.setSetting("dropbox_accessToken",t),setTimeout(()=>l.A.validateDropBoxToken(),c.t/2)},disabled:!this.canEdit}),info:Object(l.B)("This access token is used to store files across the application, like backups and images")})),E.createElement(i.n,{title:Object(l.B)("Financial Settings")},o.ib.getSetting("time_tracking")?E.createElement(B,{element:E.createElement(m.a,{label:Object(l.B)("Time expenses (per hour)"),type:"number",value:o.ib.getSetting("hourlyRate"),onChange:(e,t)=>{o.ib.setSetting("hourlyRate",t.toString())},disabled:!this.canEdit}),info:Object(l.B)("When time tracking enabled, this is used to calculate profits and expenses, as time is also added to the expenses So here you can put the electricity, rent, and other time dependent expenses")}):"",E.createElement(B,{element:E.createElement(m.a,{label:Object(l.B)("Currency symbol"),value:o.ib.getSetting("currencySymbol"),onChange:(e,t)=>{o.ib.setSetting("currencySymbol",t.toString())},disabled:!this.canEdit}),info:Object(l.B)("This symbol you enter here will be used across your application")})),E.createElement(i.n,{title:Object(l.B)("Optional Modules and Features")},E.createElement(b.a,{onText:Object(l.B)("Prescriptions module enabled"),offText:Object(l.B)("Prescriptions module disabled"),defaultChecked:!!o.ib.getSetting("module_prescriptions"),onChange:(e,t)=>{o.ib.setSetting("module_prescriptions",t?"enable":"")},disabled:!this.canEdit}),E.createElement(b.a,{onText:Object(l.B)("Orthodontic module enabled"),offText:Object(l.B)("Orthodontic module disabled"),defaultChecked:!!o.ib.getSetting("module_orthodontics"),onChange:(e,t)=>{o.ib.setSetting("module_orthodontics",t?"enable":"")},disabled:!this.canEdit}),E.createElement(b.a,{onText:Object(l.B)("Statistics module enabled"),offText:Object(l.B)("Statistics module disabled"),defaultChecked:!!o.ib.getSetting("module_statistics"),onChange:(e,t)=>{o.ib.setSetting("module_statistics",t?"enable":"")},disabled:!this.canEdit}),E.createElement(b.a,{onText:Object(l.B)("Time tracking enabled"),offText:Object(l.B)("Time tracking disabled"),defaultChecked:!!o.ib.getSetting("time_tracking"),onChange:(e,t)=>{o.ib.setSetting("time_tracking",t?"enable":"")},disabled:!this.canEdit})),E.createElement(i.n,{title:Object(l.B)("Backup and Restore")},l.A.online?E.createElement("div",null,E.createElement(g.a,{onClick:()=>{l.i.compact()},iconProps:{iconName:"ZipFolder"},className:"m-l-5 m-t-5",text:Object(l.B)("Run compaction")}),E.createElement(g.a,{onClick:()=>{Object(l.m)()},className:"m-l-5 m-t-5",iconProps:{iconName:"Database"},text:Object(l.B)("Download a backup")}),E.createElement(g.a,{onClick:()=>this.inputEl?this.inputEl.click():"",className:"m-l-5 m-t-5",iconProps:{iconName:"DatabaseSync"},text:Object(l.B)("Restore from file")}),E.createElement("input",{ref:e=>this.inputEl=e,hidden:!0,type:"file",multiple:!1,onChange:e=>a.b(this,void 0,void 0,function*(){e.target.files&&e.target.files.length>0&&(yield l.w.fromFile(e.target.files[0]))})})):E.createElement(u.a,{messageBarType:p.a.warning},Object(l.B)("Backup and restore functionality are not available while you're offline"))),E.createElement(i.n,{title:Object(l.B)("Automated Backup and Restore")},l.A.online?l.A.dropboxActive?E.createElement("div",null,E.createElement(d.a,{label:Object(l.B)("Backup frequency"),options:[{key:"d",text:Object(l.B)("Daily")},{key:"w",text:Object(l.B)("Weekly")},{key:"m",text:Object(l.B)("Monthly")},{key:"n",text:Object(l.B)("Never")}],defaultSelectedKey:o.ib.getSetting("backup_freq"),onChange:(e,t)=>{o.ib.setSetting("backup_freq",t.key.toString())},disabled:!this.canEdit}),E.createElement(m.a,{value:o.ib.getSetting("backup_retain"),label:Object(l.B)("How many backups to retain"),onChange:(e,t)=>{o.ib.setSetting("backup_retain",t)},disabled:!this.canEdit,type:"number"}),o.ib.dropboxBackups.length?E.createElement("table",{className:"ms-table"},E.createElement("thead",null,E.createElement("tr",null,E.createElement("th",null,Object(l.B)("Backup")),E.createElement("th",null,Object(l.B)("Actions")))),E.createElement("tbody",null,o.ib.dropboxBackups.map(e=>{const t=new Date(e.client_modified);return E.createElement("tr",{key:e.id},E.createElement("td",null,E.createElement(i.l,{onRenderInitials:()=>E.createElement("div",{style:{textAlign:"center",fontSize:10}},`${t.getDate()}/${t.getMonth()+1}`),text:Object(c.j)(t,o.ib.getSetting("date_format")),subText:`${Math.round(e.size/1e3)} KB`})),E.createElement("td",null,E.createElement(h.a,{content:Object(l.B)("Delete")},E.createElement(y.a,{style:{marginRight:6},iconProps:{iconName:this.loading?"sync":"delete"},className:this.loading?"rotate":"",disabled:!this.canEdit,onClick:()=>{this.loading=!0,l.h.deleteOld(e.path_lower).then(()=>{this.loading=!1,o.ib.updateDropboxBackups()}).catch(()=>{this.loading=!1,o.ib.updateDropboxBackups()})}})),E.createElement(h.a,{content:Object(l.B)("Restore")},E.createElement(y.a,{style:{marginRight:6},iconProps:{iconName:this.loading?"sync":"DatabaseSync"},className:this.loading?"rotate":"",disabled:!this.canEdit,onClick:()=>{this.loading=!0,l.w.fromDropbox(e.path_lower).then(()=>this.loading=!1).catch(()=>this.loading=!1)}}))))}))):""):E.createElement(u.a,{messageBarType:p.a.warning},"A valid DropBox access token is required for this section"):E.createElement(u.a,{messageBarType:p.a.warning},Object(l.B)("Backup and restore functionality are not available while you're offline"))))}};a.c([s.k],k.prototype,"triggerUpdate",void 0),a.c([s.k],k.prototype,"inputEl",void 0),a.c([s.d],k.prototype,"canEdit",null),a.c([s.k],k.prototype,"loading",void 0),k=a.c([r.a],k);let B=class extends E.Component{render(){return E.createElement(i.m,{gutter:12,style:{marginBottom:20}},E.createElement(i.c,{style:{marginBottom:-15},md:12},this.props.element),E.createElement(i.c,{md:12},E.createElement(u.a,{style:{marginTop:22},messageBarType:p.a.info},this.props.info)))}};B=a.c([r.a],B)}}]);