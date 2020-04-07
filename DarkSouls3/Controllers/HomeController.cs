﻿using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using DarkSouls3.Models;
using System.Net.Http;
using System.Text.Json;

namespace DarkSouls3.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }

        public async Task<IActionResult> Character(string myClass)
        {
            string character = myClass;
            Build myChar = await NewBuild(myClass);

            return View(myChar);
        }
        public IActionResult Privacy()
        {
            return View();
        }

        public async Task<Build> NewBuild(string myClass)
        {
            switch (myClass)
            {
                case ("knight"):
                    Build Knight = new Build()
                    {
                        level = 1,
                        strength = 1,
                        intelligence = 1,
                        attunement = 1,
                        dexterity = 1,
                        endurance = 1,
                        faith = 1,
                        luck = 1,
                        vitality = 1,
                        vigor = 1,
                        start = myClass
                    };
                    return Knight;
                default:
                    Build Player = new Build()
                    {

                    };
                    return Player;
            }



            //using (var httpClient = new HttpClient())
            //{
            //    using (var response = await httpClient.GetAsync("https://mugenmonkey.com/api/v0/ds3_armors"))
            //    {
            //        var summary = await response.Content.ReadAsStringAsync();
            //        JsonDocument jDoc = JsonDocument.Parse(summary);
            //        myObject = jDoc.RootElement.GetProperty("ds3_armor").ToString(); ;
            //    }
            //}

            //return myObject;
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
