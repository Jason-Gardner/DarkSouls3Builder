using Microsoft.JSInterop;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DarkSouls3.Models
{
    public class Build
    {
        public string start { get; set; }
        public int level { get; set; }
        public int strength { get; set; }
        public int dexterity { get; set; }
        public int faith { get; set; }
        public int intelligence { get; set; }
        public int luck { get; set; }
        public int vitality { get; set; }
        public int endurance { get; set; }
        public int vigor { get; set; }
        public int attunement { get; set; }

        public Build()
        {

        }
    }
}