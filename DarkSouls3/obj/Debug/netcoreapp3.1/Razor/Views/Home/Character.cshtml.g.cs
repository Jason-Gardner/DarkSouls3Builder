#pragma checksum "C:\Users\Jason Gardner\source\repos\DarkSouls3\DarkSouls3\Views\Home\Character.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "586327091441a595783306e8fbd4e4ab0c2502d6"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Home_Character), @"mvc.1.0.view", @"/Views/Home/Character.cshtml")]
namespace AspNetCore
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
#nullable restore
#line 1 "C:\Users\Jason Gardner\source\repos\DarkSouls3\DarkSouls3\Views\_ViewImports.cshtml"
using DarkSouls3;

#line default
#line hidden
#nullable disable
#nullable restore
#line 2 "C:\Users\Jason Gardner\source\repos\DarkSouls3\DarkSouls3\Views\_ViewImports.cshtml"
using DarkSouls3.Models;

#line default
#line hidden
#nullable disable
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"586327091441a595783306e8fbd4e4ab0c2502d6", @"/Views/Home/Character.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"be32cf7a42817b5687f1ea1a3115d69b8c2790ec", @"/Views/_ViewImports.cshtml")]
    public class Views_Home_Character : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<Build>
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
#nullable restore
#line 1 "C:\Users\Jason Gardner\source\repos\DarkSouls3\DarkSouls3\Views\Home\Character.cshtml"
  
    ViewData["Title"] = "Character";

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n");
            WriteLiteral("\r\n<h1>Character</h1>\r\n\r\n<p>");
#nullable restore
#line 9 "C:\Users\Jason Gardner\source\repos\DarkSouls3\DarkSouls3\Views\Home\Character.cshtml"
Write(Model.start);

#line default
#line hidden
#nullable disable
            WriteLiteral("</p>\r\n\r\n");
        }
        #pragma warning restore 1998
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<Build> Html { get; private set; }
    }
}
#pragma warning restore 1591
