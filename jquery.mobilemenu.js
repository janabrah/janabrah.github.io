var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

/*
Template Name: Siopp
Author: <a href="https://web.archive.org/web/20230402113200/https://www.os-templates.com/">OS Templates</a>
Author URI: https://www.os-templates.com/
Copyright: OS-Templates.com
Licence: Free to use under our free template licence terms
Licence URI: https://www.os-templates.com/template-terms
File: Mobile Menu JS

Thanks to:
"Convert a Menu to a Dropdown for Small Screens" from Chris Collier - http://css-tricks.com/convert-menu-to-dropdown/
"Submenu's with a dash" Daryn St. Pierre - http://jsfiddle.net/bloqhead/Kq43X/
*/

$('<form action="#"><select /></form>').appendTo("#mainav");
$("<option />",{selected:"selected",value:"",text:"MENU"}).appendTo("#mainav select");
$("#mainav a").each(function(){var e=$(this);
if($(e).parents("ul ul ul").length>=1)  {$("<option />",{value:e.attr("href"),text:"- - "+e.text()}).appendTo("#mainav select")}
else if($(e).parents("ul ul").length>=1){$("<option />",{value:e.attr("href"),text:"- "+e.text()}).appendTo("#mainav select")}
else if($(e).parents("ul").length>=1)   {$("<option />",{value:e.attr("href"),text:""+e.text()}).appendTo("#mainav select")}
                                    else{$("<option />",{value:e.attr("href"),text:e.text()}).appendTo("#mainav select")}});
$("#mainav select").change(function(){if($(this).find("option:selected").val()!=="#"){window.location=$(this).find("option:selected").val()}})


}
/*
     FILE ARCHIVED ON 11:32:00 Apr 02, 2023 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 21:50:44 Mar 09, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.074
  exclusion.robots.policy: 0.058
  cdx.remote: 0.106
  esindex: 0.009
  LoadShardBlock: 447.656 (6)
  PetaboxLoader3.resolve: 284.934 (3)
  PetaboxLoader3.datanode: 214.899 (8)
  load_resource: 272.004
  loaddict: 42.058
*/